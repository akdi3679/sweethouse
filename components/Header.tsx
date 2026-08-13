"use client";
import { useEffect, useState } from 'react';
import { brandData, navigation } from '@/data/restaurant';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/90 shadow-[0_1px_0_rgba(61,40,23,0.08)] backdrop-blur-md' : ''}`}>
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 md:px-8">
<a href="#" className="flex items-center gap-3" onClick={() => setOpen(false)}>
  <img
    src="/images/logo.png"
    alt="Sweet House"
    className="h-11 w-11 rounded-full object-cover ring-2 ring-raspberry/40"
  />
  <span className="hidden font-display text-lg font-semibold text-raspberry sm:block">Sweet House</span>
</a>
  
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navigation.map((n) => <a key={n.href} href={n.href} className="text-[13px] font-medium text-taupe transition-colors hover:text-blush">{n.label}</a>)}
          <a href={brandData.phoneHref} className="btn btn-primary !px-5 !py-2.5">Appeler</a>
        </nav>
        <button className="label text-cocoa md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Fermer' : 'Menu'}</button>
      </div>
      {open && (
        <div className="border-t border-cocoa/10 bg-cream px-5 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Navigation mobile">
            {navigation.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display text-2xl font-semibold">{n.label}</a>)}
            <a href={brandData.phoneHref} className="btn btn-primary mt-2 w-full">Appeler {brandData.phone}</a>
            <a href={brandData.mapsUrl} className="btn btn-ghost w-full" target="_blank" rel="noopener noreferrer">Itinéraire</a>
          </nav>
        </div>
      )}
    </header>
  );
}