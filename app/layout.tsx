import type { Metadata } from 'next';
import './globals.css';
import { Playfair_Display, Poppins, Great_Vibes } from 'next/font/google';

const playfair = Playfair_Display({ weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--font-playfair', display: 'swap' });
const poppins = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'], variable: '--font-poppins', display: 'swap' });
const vibes = Great_Vibes({ weight: ['400'], subsets: ['latin'], variable: '--font-vibes', display: 'swap' });

export const metadata: Metadata = {
  title: 'Sweet House Metz — Brunch, Coffee & Gourmandises | 8 Rue de Paris',
  description: 'Sweet House, brunch & coffee au cœur de Metz. Ambiance florale, gourmandises halal, ouvert jusqu\'à 2h du matin. 8 rue de Paris, 57000 Metz.',
  openGraph: {
    title: 'Sweet House Metz — Brunch tardif & gourmandises',
    description: 'Une ambiance florale, des brunchs halal, des gourmandises et du café — de 19h à 2h du matin.',
    images: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1600&auto=format&fit=crop'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Sweet House',
  servesCuisine: ['Brunch', 'Coffee', 'Pâtisserie', 'Halal'],
  telephone: '+33 7 66 22 27 70',
  priceRange: '€€',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '5' },
  address: { '@type': 'PostalAddress', streetAddress: '8 rue de Paris', postalCode: '57000', addressLocality: 'Metz', addressCountry: 'FR' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '19:00', closes: '02:00' },
  ],
  sameAs: ['https://www.instagram.com/sweet.house57/', 'https://www.tiktok.com/@sweet.house570'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${poppins.variable} ${vibes.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cocoa focus:px-4 focus:py-2 focus:text-cream" href="#contenu">Aller au contenu</a>
        {children}
      </body>
    </html>
  );
}