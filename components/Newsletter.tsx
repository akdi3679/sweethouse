"use client";
import { useState } from 'react';
import  Reveal  from '@/components/Reveal';

export default function Newsletter() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="rounded-[2rem] bg-cocoa px-6 py-12 text-center text-cream md:py-16">
        <p className="label text-pink">Newsletter</p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Les nouveautés, en premier.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream/70">Nouveaux brunchs, soirées spéciales, gourmandises de saison — une fois par mois, pas plus.</p>
        {done ? (
          <p className="mt-8 font-medium text-pink">Merci ! Vous êtes sur la liste. 🍭</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input required type="email" placeholder="votre@email.fr" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-full border border-cream/20 bg-cream/10 px-5 py-3 text-cream outline-none placeholder:text-cream/40 focus:border-pink" />
<button type="submit" className="btn bg-pink text-cocoa hover:bg-blush">Je m'inscris</button>
          </form>
        )}
      </Reveal>
    </section>
  );
}