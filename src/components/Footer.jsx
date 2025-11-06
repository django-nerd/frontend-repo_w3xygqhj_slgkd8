export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold"><span className="text-indigo-600">.</span>uranus</h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 max-w-sm">We build brands and interfaces that feel like science fiction — and ship like well-engineered rockets.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#features" className="hover:underline">Services</a></li>
              <li><a href="#showcase" className="hover:underline">Work</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Playbook</a></li>
              <li><a href="#" className="hover:underline">Press Kit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">hello@uranus.studio</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} .uranus — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
