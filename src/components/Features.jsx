import { Star, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Cosmic Identity',
    desc: 'Distinctive branding systems with galactic-level clarity and impact.'
  },
  {
    icon: Sparkles,
    title: 'Motion-First UI',
    desc: 'Interfaces that move with purpose and delight using modern web tech.'
  },
  {
    icon: Shield,
    title: 'Reliable Delivery',
    desc: 'Process-driven execution, from strategy to launch, on-time and secure.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we do</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">Design, develop, and launch memorable products for brave brands.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
