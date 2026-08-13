import { brandData, hookData } from '@/data/restaurant';

export default function Hero() {
  return (
    <section className="floral-pattern relative overflow-hidden pt-28 md:pt-36">
      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 pb-16 md:grid-cols-12 md:px-8 md:pb-24">
        <div className="md:col-span-6">
          <p className="chip mb-6">Brunch & Café · ambiance florale</p>
          <h1 className="font-display text-[10vw] font-semibold leading-[1.05] text-cocoa sm:text-5xl md:text-6xl lg:text-7xl">
            Le brunch qui <span className="font-script text-raspberry">ne dort jamais.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-taupe md:text-lg">{hookData.subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href={hookData.primaryCTA.href} className="btn btn-primary">{hookData.primaryCTA.label}</a>
            <a href={hookData.secondaryCTA.href} className="btn btn-ghost">{hookData.secondaryCTA.label}</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-taupe">
            <span><strong className="text-cocoa">★ {brandData.rating.value}/5</strong> · {brandData.rating.count} avis Google</span>
            <span className="h-4 w-px bg-cocoa/20" />
            <span>19h – 2h · mardi fermé</span>
          </div>
        </div>
        <div className="relative md:col-span-6">
          <div className="ring-dark -right-6 -top-6 h-40 w-40" aria-hidden="true" />
          <div className="card-img group relative aspect-[4/5] max-h-[70vh] w-full overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(194,73,107,0.35)]">
            <img src={hookData.heroImage} alt="Brunch et gourmandises chez Sweet House Metz" fetchPriority="high" className="h-full w-full object-cover" />
          </div>
          <p className="mt-5 text-center font-script text-3xl text-raspberry">Sweet House</p>
        </div>
      </div>
    </section>
  );
}