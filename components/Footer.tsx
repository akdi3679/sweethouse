import { brandData, navigation } from '@/data/restaurant';
import FlowerCanvas from './FlowerCanvas';
import { Ghost, Music2 } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#251019] text-cream">
      <FlowerCanvas />
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-5 py-16 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <img
            src="/images/logo.png"
            alt="Sweet House — Brunch & Café"
            className="h-24 w-24 rounded-full object-cover shadow-[0_0_0_3px_rgba(232,139,156,0.35)]"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            {brandData.tagline} {brandData.descriptor}, 8 rue de Paris, Metz.
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Pied de page">
          {navigation.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-cream/80 underline-offset-4 transition-colors hover:text-blush hover:underline">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="text-sm text-cream/70">
          <a href={brandData.phoneHref} className="block font-medium text-cream transition-colors hover:text-blush">
            {brandData.phone}
          </a>
          <div className="mt-4 flex flex-col gap-3">
            <a href={brandData.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-blush">
             <InstagramIcon className="h-4 w-4 shrink-0" /> {brandData.instagram.handle}
            </a>
            <a href={brandData.tiktok.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-blush">
              <Music2 className="h-4 w-4 shrink-0" /> {brandData.tiktok.handle}
            </a>
            <a href="https://www.snapchat.com/add/sweet.house57" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-blush">
              <Ghost className="h-4 w-4 shrink-0" /> {brandData.snapchat.handle}
            </a>
          </div>
        </div>
      </div>

      <p className="relative z-10 pb-3 text-center text-[10px] uppercase tracking-[0.3em] text-cream/40">
        Cliquez pour planter une fleur
      </p>
      <p className="relative z-10 border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Sweet House Metz ·{' '}
        <a href="/mentions-legales" className="hover:text-blush">Mentions légales</a> ·{' '}
        <a href="/confidentialite" className="hover:text-blush">Confidentialité</a>
      </p>
    </footer>
  );
}