import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cJv42bYb9n8Hq0H5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Meet .uranus
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-300">
            A cosmic brand crafting bold digital experiences. We blend art, motion, and code to create interfaces that feel out of this world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#get-started" className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500">
              Get Started
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-full border border-black/10 dark:border-white/20 px-6 py-3 text-sm font-semibold text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">
              Explore Work
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white dark:from-neutral-950/40 dark:via-neutral-950/20 dark:to-neutral-950" />
    </section>
  );
}
