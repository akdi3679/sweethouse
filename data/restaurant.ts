export const brandData = {
  name: 'Sweet House',
 
  descriptor: 'Brunch & Coffee',
  tagline: 'Une ambiance florale, jusqu\'au bout de la nuit.',
  address: { line1: '8 rue de Paris', postcode: '57000', city: 'Metz' },
  phone: '07 66 22 27 70',
  phoneHref: 'tel:+33766222770',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=8+Rue+de+Paris+57000+Metz',
  instagram: { handle: '@sweet.house57', url: 'https://www.instagram.com/sweet.house57/' },
    snapchat: { handle: 'Sweet.house57' },
  tiktok: { handle: '@sweet.house570', url: 'https://www.tiktok.com/@sweet.house570' },
  rating: { value: '5.0', count: 5, source: 'Google' },
  sanitary: { label: 'Très satisfaisant', date: 'mai 2026', source: 'Alim\'confiance' },
};

export const navigation = [
  { label: 'L\'adresse', href: '#adresse' },
  { label: 'La carte', href: '#carte' },
  { label: 'Pourquoi venir', href: '#pourquoi' },
  { label: 'Avis', href: '#avis' },
  { label: 'Instagram', href: '#instagram' },
];

export const hours = [
  { day: 'Lundi', hours: '19h – 2h' },
  { day: 'Mardi', hours: 'Fermé' },
  { day: 'Mercredi', hours: '19h – 2h' },
  { day: 'Jeudi', hours: '19h – 2h' },
  { day: 'Vendredi', hours: '19h – 2h' },
  { day: 'Samedi', hours: '19h – 2h' },
  { day: 'Dimanche', hours: '19h – 2h' },
];

export const hookData = {
  headline: 'Le brunch qui ne dort jamais.',
  subheadline: 'Brunch, coffee et gourmandises halal — au cœur de Metz, dans une ambiance florale, jusqu\'à 2h du matin.',
  primaryCTA: { label: 'Voir la carte', href: '#carte' },
  secondaryCTA: { label: 'Nous trouver', href: '#adresse' },
  heroImage: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=2200&auto=format&fit=crop',
};

export const discoveryData = {
  title: 'Un coin de douceur, ouvert tard.',
  paragraphs: [
    'Sweet House, c\'est d\'abord une ambiance : florale, douce, un peu rose. Un endroit où l\'on vient pour un café, on reste pour un brunch, et on finit par une gourmandise quand la nuit tombe.',
    'Tout est halal, tout est fait avec soin — des açaï bowls du matin au trio infernal du soir. Et surtout : on ne ferme pas à 18h. Ici, le brunch commence quand les autres ont fermé.',
  ],
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop',
};

export const signatureData = {
  title: 'Les signatures',
  sub: 'Trois piliers, mille déclinaisons.',
  items: [
    { name: 'Les Brunchs', description: 'Des formules généreuses — le menu à 35€ réunit tout ce qui compte.', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=1200&auto=format&fit=crop', tag: 'À partir de 35€' },
    { name: 'Le Coffee', description: 'Espresso, latte, spécialités — le café qui rythme la soirée.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop', tag: 'Toute la soirée' },
    { name: 'Les Gourmandises', description: 'Pâtisseries, douceurs, trio infernal — la fin parfaite.', image: 'https://images.unsplash.com/photo-1488477181946-6428a0c80063?q=80&w=1200&auto=format&fit=crop', tag: 'Fait maison' },
  ],
};

export const menuData = {
  title: 'La carte',
  note: 'Tout est halal. Prix en euros.',
  categories: [
    { id: 'brunch', title: 'Brunchs', items: [
      { name: 'Sweet Gourmet', detail: 'burger signature, frites, boisson', price: '18 €' },
      { name: 'Menu brunch complet', detail: 'entrée + plat + dessert + boisson', price: '35 €' },
      { name: 'Açaï bowl', detail: 'fruits frais, granola maison', price: '12 €' },
      { name: 'Brunch du dimanche', detail: 'formule généreuse', price: '42 €' },
    ]},
    { id: 'coffee', title: 'Coffee', items: [
      { name: 'Espresso', price: '2,50 €' },
      { name: 'Latte', price: '4,50 €' },
      { name: 'Cappuccino', price: '4 €' },
      { name: 'Chocolat chaud signature', detail: 'chocolat belge, chantilly', price: '5,50 €' },
    ]},
    { id: 'gourmandises', title: 'Gourmandises', items: [
      { name: 'Trio infernal', detail: '3 pâtisseries au choix', price: '14 €' },
      { name: 'Pâtisserie du jour', price: '6 €' },
      { name: 'Douceurs de saison', price: '8 €' },
    ]},
  ],
  cta: { label: 'Réserver une table', href: '#reserver' }, 
};
export const galleryData = [
  'https://images.unsplash.com/photo-1554178286-db40c51686d0?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513104890138-7c749659a78d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=900&auto=format&fit=crop',
];

export const whyData = [
  { title: 'Ouvert jusqu\'à 2h', text: 'Le brunch quand les autres ont fermé. Idéal après le travail, après le cinéma, ou juste parce qu\'il est tard.' },
  { title: '100% halal', text: 'Toute la carte est halal — vérifié, assumé, sans compromis.' },
  { title: 'Ambiance florale', text: 'Un univers rose, doux, végétal. On s\'y sent bien tout de suite.' },
  { title: 'Gourmandise assumée', text: 'Ici, on ne vient pas compter les calories. On vient se faire plaisir.' },
];

export const reviewsData = {
  rating: '5.0',
  count: '5',
  source: 'Google',
  sanitary: { label: 'Très satisfaisant', source: 'Alim\'confiance — mai 2026' },
  // Pas d'exemples inventés — on affiche uniquement les métriques réelles
};

export const faqData = [
  { q: 'Quels sont les horaires ?', a: 'Ouvert du lundi au dimanche de 19h à 2h du matin. Fermé le mardi.' },
  { q: 'La carte est-elle halal ?', a: 'Oui, l\'ensemble de la carte est halal.' },
  { q: 'Faut-il réserver ?', a: 'Pour les soirées du week-end et les grands groupes, mieux vaut appeler. Le reste du temps, passez directement.' },
  { q: 'Jusqu\'à quelle heure peut-on bruncher ?', a: 'Le brunch est servi pendant toute la durée d\'ouverture — 19h à 2h. C\'est ce qui fait la particularité de Sweet House.' },
  { q: 'Où se trouve Sweet House ?', a: 'Au 8 rue de Paris, 57000 Metz — en plein centre-ville.' },
];

export const socialPosts = [
  { image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=900&auto=format&fit=crop', caption: 'Le brunch du soir.' },
  { image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=900&auto=format&fit=crop', caption: 'Le sweet gourmet.' },
  { image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop', caption: 'Coffee time.' },
  { image: 'https://images.unsplash.com/photo-1488477181946-6428a0c80063?q=80&w=900&auto=format&fit=crop', caption: 'Le trio infernal.' },
  { image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=900&auto=format&fit=crop', caption: 'Pink vibes.' },
  { image: 'https://images.unsplash.com/photo-1554178286-db40c51686d0?q=80&w=900&auto=format&fit=crop', caption: 'Ambiance florale.' },
];