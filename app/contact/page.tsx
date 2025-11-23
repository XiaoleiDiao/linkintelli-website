export const metadata = {
  title: "Contact Us – LinkIntelli Technology",
};

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-slate-300">We&apos;ll reply within 1-2 working days.</p>
        <form className="mt-6 space-y-4" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input required name="name" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none" />
          <input required name="email" type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none" />
          <textarea required name="message" placeholder="Your message..." rows={6} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none"></textarea>
          <button className="px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark transition">Send</button>
        </form>
        <p className="mt-4 text-sm text-slate-400">
          Or email us directly at <a className="text-brand" href="mailto:linkintelli.tech@gmail.com">linkintelli.tech@gmail.com</a>
        </p>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold">Company Info</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>Address: 33 Ross Way, London, UK</li>
          {/* <li>Phone: +44 20 1234 5678</li> */}
          <li>Business Hours: Mon-Fri 10:00–18:00</li>
        </ul>
        <div className="mt-6 rounded-xl overflow-hidden">
          <iframe
            title="Map"
            className="w-full h-64"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12%2C51.50%2C-0.10%2C51.52&layer=mapnik"
          />
        </div>
      </div>
    </div>
  );
}
