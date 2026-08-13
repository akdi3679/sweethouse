import { brandData, discoveryData, signatureData, menuData, galleryData, whyData, reviewsData, faqData, socialPosts, hours } from '@/data/restaurant';
import Reveal from './Reveal';

function Head({ index, title, sub }: { index: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="label mb-3 text-blush">{index}</p>
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 max-w-xl leading-relaxed text-taupe">{sub}</p>}
    </Reveal>
  );
}

export function DiscoverySection() {
  return (
    <section id="adresse" className="mx-auto grid w-full max-w-[1280px] scroll-mt-24 items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="card-img aspect-[4/5] overflow-hidden rounded-[2rem]">
          <img src={discoveryData.image} alt="Ambiance florale de Sweet House" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </Reveal>
      <div className="lg:col-span-7">
        <Head index="01 — Découvrir" title={discoveryData.title} />
        <Reveal delay={100}>
          {discoveryData.paragraphs.map((p, i) => <p key={i} className="mb-5 max-w-xl leading-relaxed text-taupe">{p}</p>)}
          <a href="#carte" className="btn btn-ghost mt-6">Voir ce qu\'on sert</a>
        </Reveal>
      </div>
    </section>
  );
}

export function SignatureSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 md:px-8 md:pb-28">
      <Head index="02 — Goûter" title={signatureData.title} sub={signatureData.sub} />
      <div className="grid gap-8 md:grid-cols-3">
        {signatureData.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 100}>
            <article className="group">
              <div className="card-img aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="mt-5">
                <span className="chip mb-2 !py-1 !text-xs">{item.tag}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-taupe">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function MenuSection() {
  return (
    <section id="carte" className="scroll-mt-24 bg-milk py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Head index="03 — Explorer" title={menuData.title} sub={menuData.note} />
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-3">
          {menuData.categories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 120}>
              <h3 className="label mb-6 text-blush">{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item.name} className="flex items-baseline justify-between gap-4 border-b border-cocoa/10 py-3">
  <span>
    <span className="font-display text-lg font-medium">{item.name}</span>
    {item.detail && <span className="ml-2 text-xs italic text-taupe">{item.detail}</span>}
  </span>
  {'price' in item && item.price && <span className="shrink-0 font-semibold text-blush">{item.price}</span>}
</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <a href={menuData.cta.href} className="btn btn-primary">{menuData.cta.label}</a>
        </Reveal>
      </div>
    </section>
  );
}
export function FidelityStrip() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 md:px-8">
      <Reveal className="flex flex-col items-center gap-3 rounded-[2rem] bg-sage/15 px-6 py-8 text-center">
        <span className="font-script text-3xl text-sage">Sweet Club 🍓</span>
        <p className="max-w-md text-sm text-taupe">
          10 brunchs = 1 offert. Demandez votre carte de fidélité en caisse — elle se tamponne à chaque visite.
        </p>
      </Reveal>
    </section>
  );
}
export function GallerySection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
<Head index="04 — Voir" title="L'ambiance Sweet House." sub="Ce qu'on vit quand on pousse la porte." />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {galleryData.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 80}>
            <div className="card-img aspect-square overflow-hidden rounded-2xl">
              <img src={src} alt="Ambiance Sweet House" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section id="pourquoi" className="floral-pattern scroll-mt-24 bg-pink/10 py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Head index="05 — Comprendre" title="Pourquoi venir chez Sweet House." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyData.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-cream p-6 shadow-[0_8px_24px_-12px_rgba(232,139,156,0.4)]">
                <span className="font-script text-4xl text-blush">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="avis" className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Head index="06 — Lire" title="Ce que les clients disent." />
      <Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-cocoa/10 bg-milk p-8 text-center">
            <p className="font-display text-6xl font-bold text-blush">{reviewsData.rating}</p>
            <p className="mt-2 text-sm text-taupe">★ ★ ★ ★ ★</p>
            <p className="mt-2 font-medium">{reviewsData.count} avis · {reviewsData.source}</p>
          </div>
          <div className="rounded-2xl border border-cocoa/10 bg-milk p-8">
            <p className="label text-sage">{reviewsData.sanitary.source}</p>
            <p className="mt-4 font-display text-3xl font-semibold">{reviewsData.sanitary.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-taupe">Résultat du dernier contrôle sanitaire officiel. La cuisine Sweet House est vérifiée régulièrement.</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] items-start gap-12 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-2">
      <Reveal>
        <Head index="07 — Venir" title="8 rue de Paris, Metz." />
        <address className="not-italic">
          <p className="font-display text-2xl font-semibold">{brandData.address.line1}</p>
          <p className="font-display text-2xl">{brandData.address.postcode} {brandData.address.city}</p>
        </address>
        <div className="mt-8">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between border-b border-cocoa/10 py-2.5 text-sm">
              <span className="font-medium">{h.day}</span>
              <span className={h.hours === 'Fermé' ? 'text-taupe' : 'text-blush font-medium'}>{h.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={brandData.phoneHref} className="btn btn-primary">Appeler {brandData.phone}</a>
          <a href={brandData.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Itinéraire</a>
        </div>
      </Reveal>
      <Reveal delay={150}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.8!2d6.1769!3d49.1193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA3JzEwLjAiTiA2wrAxMCczNi44IkU!5e0!3m2!1sfr!2sfr!4v1"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '1.5rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sweet House Metz sur Google Maps"
        />
      </Reveal>
    </section>
  );
}

export function SocialSection() {
  return (
    <section id="instagram" className="scroll-mt-24 bg-milk py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Head index="08 — Suivre" title="Vu sur Instagram." sub="Le quotidien de Sweet House — les gourmandises, l\'ambiance florale, les soirées. Instagram vit, le site prolonge." />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {socialPosts.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="group card-img relative block aspect-square overflow-hidden rounded-2xl">
                <img src={p.image} alt={p.caption} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 flex items-end bg-cocoa/40 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="font-script text-xl text-cream">{p.caption}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Instagram {brandData.instagram.handle}</a>
          <a href={brandData.tiktok.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">TikTok {brandData.tiktok.handle}</a>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
<Head index="09 — Savoir" title="Les questions qu'on nous pose." />
      <Reveal>
        {faqData.map((f) => (
          <details key={f.q} className="faq group border-b border-cocoa/10 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
              <span className="font-display text-xl font-semibold md:text-2xl">{f.q}</span>
              <span className="faq-icon shrink-0 text-2xl text-blush transition-transform duration-300">+</span>
            </summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-taupe">{f.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-cocoa py-24 text-cream md:py-32">
      <Reveal className="relative z-10 mx-auto max-w-[1280px] px-5 text-center md:px-8">
        <p className="font-script text-4xl text-blush">Sweet House</p>
        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
          La prochaine soirée commence ici.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-cream/70">
          Brunch, coffee, gourmandises — de 19h à 2h du matin, 8 rue de Paris, Metz.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={brandData.phoneHref} className="btn bg-blush text-cocoa hover:bg-petal">Appeler pour réserver</a>
          <a href={brandData.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-light">Itinéraire</a>
        </div>
      </Reveal>
    </section>
  );
}