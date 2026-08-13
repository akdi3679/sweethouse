"use client";
import { useState } from 'react';

export default function ReservationForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', people: '2', date: '', time: '20:00' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Bonjour Sweet House\nJe souhaite réserver :\n• Nom : ${form.name}\n• Personnes : ${form.people}\n• Date : ${form.date}\n• Heure : ${form.time}`
    );
    window.open(`https://wa.me/33766222770?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <section id="reserver" className="mx-auto w-full max-w-[1280px] scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-cocoa/10 bg-milk p-6 sm:p-8 md:p-10">
        <p className="label mb-3 text-blush">Réservation</p>
        <h2 className="font-display text-3xl font-semibold md:text-4xl">Réservez votre table.</h2>
        <p className="mt-3 text-sm text-taupe">Réponse rapide sur WhatsApp. Pour les groupes de 6+, appelez directement.</p>

        {sent ? (
          <p className="mt-8 rounded-xl bg-sage/20 p-4 text-center font-medium text-sage">
            ✅ Votre demande est partie sur WhatsApp. À très vite !
          </p>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-4">
            <input
              required
              placeholder="Votre nom"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full min-w-0 rounded-xl border border-cocoa/20 bg-cream px-4 py-3 outline-none focus:border-blush"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <select
                value={form.people}
                onChange={(e) => setForm({ ...form, people: e.target.value })}
                className="w-full min-w-0 rounded-xl border border-cocoa/20 bg-cream px-3 py-3 outline-none focus:border-blush"
              >
                {['1', '2', '3', '4', '5', '6'].map((n) => <option key={n} value={n}>{n} pers.</option>)}
              </select>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full min-w-0 rounded-xl border border-cocoa/20 bg-cream px-3 py-3 outline-none focus:border-blush"
              />
              <input
                required
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full min-w-0 rounded-xl border border-cocoa/20 bg-cream px-3 py-3 outline-none focus:border-blush"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">Envoyer la demande</button>
          </form>
        )}
      </div>
    </section>
  );
}