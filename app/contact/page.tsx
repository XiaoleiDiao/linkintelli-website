export const metadata = {
  title: "联系我们 – Your Company",
};

export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card p-6">
        <h1 className="text-2xl font-semibold">联系我们 / Contact Us</h1>
        <p className="mt-2 text-slate-300">我们会在 1-2 个工作日内回复你的询问。</p>
        <form className="mt-6 space-y-4" name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input required name="name" placeholder="姓名 / Name" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none" />
          <input required name="email" type="email" placeholder="邮箱 / Email" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none" />
          <textarea required name="message" placeholder="你的需求 / Your message..." rows={6} className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-brand outline-none"></textarea>
          <button className="px-5 py-3 rounded-xl bg-brand hover:bg-brand-dark transition">发送</button>
        </form>
        <p className="mt-4 text-sm text-slate-400">
          或直接发邮件至 <a className="text-brand" href="mailto:info@example.com">info@example.com</a>
        </p>
      </div>
      <div className="card p-6">
        <h2 className="text-xl font-semibold">公司信息</h2>
        <ul className="mt-4 space-y-2 text-slate-300">
          <li>地址：1 Example Street, London, UK</li>
          <li>电话：+44 20 1234 5678</li>
          <li>营业时间：周一至周五 9:00–18:00</li>
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

// Note: bilingual hints added
