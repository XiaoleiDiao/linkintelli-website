export const metadata = { title: "About – LinkIntelli Technology" };

export default function About() {
  return (
    <div className="prose prose-invert max-w-none">

            {/* Company Introduction */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About LinkIntelli Technology</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            LinkIntelli Technology LTD is an innovative company focused on artificial intelligence technology solutions. 
            We concentrate on two core areas: <span className="text-brand font-semibold">AI for Healthcare</span> and <span className="text-brand font-semibold">Embodied AI</span>.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            We believe that the value of AI lies not only in technological breakthroughs, but also in driving industry 
            efficiency improvements, enhancing human capabilities, and truly improving quality of life.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-brand to-cyan-400 bg-clip-text text-transparent tracking-tight mb-6">
            
            <span className="block">Exploring the Future,</span>
            <span className="block pb-1">Starting Today.</span>
          </h2>
          <div className="h-1 w-24 bg-brand mx-auto rounded-full opacity-80"></div>
        </div>
      </section>




    </div>
  );
}
