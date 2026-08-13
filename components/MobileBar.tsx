"use client";
import { useEffect, useState } from 'react';
import { brandData } from '@/data/restaurant';

export default function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 border-t border-cocoa/10 bg-cream/95 backdrop-blur-md transition-transform duration-500 md:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex gap-3 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <a href={brandData.phoneHref} className="btn btn-primary flex-1">Appeler</a>
        <a href={brandData.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost flex-1">Itinéraire</a>
      </div>
    </div>
  );
}