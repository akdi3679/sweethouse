"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SLOTS = 14;      // shader capacity (alive + fading)
const MAX_ALIVE = 10;  // flowers kept visible
const FADE = 0.9;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.);
}`;

const fragmentShader = `
uniform float u_ratio;
uniform vec2 u_pos[${SLOTS}];
uniform float u_time[${SLOTS}];
uniform float u_alpha[${SLOTS}];
uniform vec2 u_rand[${SLOTS}];
varying vec2 vUv;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float stemShape(vec2 _p, vec2 _uv, float angle, float t, float topLimit, vec2 rnd) {
  float w = max(.004, .003);
  float x_offset = _p.y * sin(angle);
  x_offset *= pow(3. * _uv.y, 2.);
  _p.x -= x_offset;
  float n = .5 * snoise(2. * _uv * rnd.x);
  n *= pow(dot(_p.y, _p.y), .6);
  n *= pow(dot(_uv.y, _uv.y), .3);
  _p.x += n;
  float left = smoothstep(-w, 0., _p.x);
  float right = 1. - smoothstep(0., w, _p.x);
  float grow = smoothstep(0., .35, t);
  float topY = mix(-0.05, topLimit, grow);
  float ymask = 1. - smoothstep(topY - .03, topY, _uv.y);
  return left * right * ymask;
}

float flowerShape(vec2 _p, float petN, float angle, float outline, float sc, vec2 rnd) {
  angle *= 3.;
  float ca = cos(angle), sa = sin(angle);
  _p = vec2(_p.x*ca - _p.y*sa, _p.x*sa + _p.y*ca);
  float a = atan(_p.y, _p.x);
  float sector = pow(abs(sin(a * petN)), .4) + .25;
  float size = (.03 + rnd.x * .07) * sc;
  float rad = pow(length(_p) / max(size, .0001), 2.);
  rad -= .1 * sin(8. * a);
  rad = max(.1, rad);
  rad += smoothstep(0., .03, -_p.y + .2 * abs(_p.x));
  return 1. - smoothstep(0., sector, outline * rad);
}

void main() {
  vec2 uv = vUv;
  uv.x *= u_ratio;
  vec3 color = vec3(0.145, 0.055, 0.09);

  for (int i = 0; i < ${SLOTS}; i++) {
    float alpha = u_alpha[i];
    if (alpha < 0.004) continue;
    float t = u_time[i];
    if (t < 0.0) continue;

    vec2 cur = u_pos[i];
    cur.x *= u_ratio;
    vec2 p = uv - cur;
    vec2 rnd = u_rand[i];
    float angle = .5 * (rnd.x - .5);

    float stem = stemShape(p, uv, angle, t, cur.y + .03, rnd);
    float sc = smoothstep(.3, .75, t);
    float back = flowerShape(p, 1. + floor(rnd.x * 2.), angle, 1.5, sc, rnd);
    float front = flowerShape(p, 2. + floor(rnd.y * 2.), angle, 1.0, sc, rnd);

    vec3 stemCol = vec3(.1 + rnd.x * .6, .6, .2);
    vec3 flowerCol = vec3(.6 + .5 * rnd.y, .1, .9 - .5 * rnd.y);

    vec3 c = color;
    c = mix(c, c * (1. - stem), alpha);
    c = mix(c, c * (1. - back), alpha);
    c = mix(c, c * (1. - front), alpha);
    c += alpha * stem * stemCol;
    c += alpha * back * (flowerCol + vec3(0., .8 * min(t, 1.), 0.));
    c += alpha * front * flowerCol;
    c.r *= 1. - alpha * (.5 * back * front);
    c.b *= 1. - alpha * (back * front);
    color = c;
  }

  gl_FragColor = vec4(color, 1.);
}`;

type Flower = { x: number; y: number; born: number; dying: boolean; death: number; rx: number; ry: number };

export default function FlowerCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    const footer = wrap.closest('footer') as HTMLElement;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: false, antialias: false, powerPreference: 'low-power' });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);

    const uniforms: any = {
      u_ratio: { value: 1 },
      u_pos: { value: Array.from({ length: SLOTS }, () => new THREE.Vector2(0.5, 0.5)) },
      u_time: { value: new Array(SLOTS).fill(-1) },
      u_alpha: { value: new Array(SLOTS).fill(0) },
      u_rand: { value: Array.from({ length: SLOTS }, () => new THREE.Vector2(Math.random(), Math.random())) },
    };
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    let flowers: Flower[] = [];
    const t0 = performance.now();
    const now = () => (performance.now() - t0) / 1000;

    // yTop = click position from top → converted to shader space (bottom-up)
    const plant = (x: number, yTop: number) => {
      flowers.push({ x, y: 1 - yTop, born: now(), dying: false, death: 0, rx: Math.random(), ry: Math.random() });
      let alive = flowers.filter((f) => !f.dying).length;
      while (alive > MAX_ALIVE) {
        const oldest = flowers.find((f) => !f.dying);
        if (!oldest) break;
        oldest.dying = true;
        oldest.death = now();
        alive--;
      }
      while (flowers.length > SLOTS) flowers.shift();
    };

    // ONE flower when the footer enters the screen
    let planted = false;
    const entryIO = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !planted) {
        planted = true;
        setTimeout(() => plant(0.5, 0.78), 400);
      }
    }, { threshold: 0.15 });
    entryIO.observe(wrap);

    const onClick = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      plant((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    };
    if (footer) footer.addEventListener('click', onClick);

    const size = () => {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (!w || !h) return;
      uniforms.u_ratio.value = w / h;
      renderer.setSize(w, h);
    };
    size();
    const ro = new ResizeObserver(size);
    ro.observe(wrap);

    let running = false, raf = 0;
    const runIO = new IntersectionObserver(([en]) => { running = en.isIntersecting; });
    runIO.observe(wrap);

    const render = () => {
      raf = requestAnimationFrame(render);
      if (!running) return;

      const time = now();
      flowers = flowers.filter((f) => !(f.dying && time - f.death > FADE));

      for (let i = 0; i < SLOTS; i++) {
        const f = flowers[i];
        if (!f) {
          uniforms.u_alpha.value[i] = 0;
          uniforms.u_time.value[i] = -1;
          continue;
        }
        uniforms.u_pos.value[i].set(f.x, f.y);
        uniforms.u_rand.value[i].set(f.rx, f.ry);
        uniforms.u_time.value[i] = time - f.born;
        uniforms.u_alpha.value[i] = f.dying ? Math.max(0, 1 - (time - f.death) / FADE) : 1;
      }

      renderer.render(scene, camera);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      entryIO.disconnect(); runIO.disconnect(); ro.disconnect();
      if (footer) footer.removeEventListener('click', onClick);
      renderer.dispose();
    };
  }, []);

  // pointer-events-none: links/hover/selection work; clicks still reach the footer listener
  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}