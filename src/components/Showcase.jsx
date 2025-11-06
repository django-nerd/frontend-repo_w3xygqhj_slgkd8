import { motion } from 'framer-motion';

const items = [
  { title: 'Nebula Shop', tag: 'eCommerce', color: 'from-indigo-500 to-sky-500' },
  { title: 'Orbit OS', tag: 'Web App', color: 'from-fuchsia-500 to-pink-500' },
  { title: 'Stellar Site', tag: 'Marketing', color: 'from-amber-400 to-orange-500' },
  { title: 'Lunar Labs', tag: 'Branding', color: 'from-emerald-500 to-teal-500' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected work</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A peek at recent explorations across brand and product.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border px-4 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">View all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur"
            >
              <div className={`h-44 bg-gradient-to-br ${it.color}`} />
              <div className="p-5">
                <span className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">{it.tag}</span>
                <h3 className="mt-1 text-lg font-semibold">{it.title}</h3>
                <button className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">Case study →</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
