import photo from "@/assets/santosh.png";
import resume from "@/assets/resume.pdf.asset.json";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Github, Linkedin, Mail, Phone, MapPin, ArrowRight, Download, GraduationCap,
  Code2, Server, Database, Wrench, Layout, Brain, Briefcase, Award, Sparkles,
  Puzzle, RefreshCw, Users, MessageCircle, Menu, X, Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "vadapalli santosh — AI & Data Science | Software Developer" },
      { name: "description", content: "Final-year B.Tech AI & Data Science student building web apps and Generative AI projects. Based in Vizianagaram, India." },
      { property: "og:title", content: "Santosh Vadapalli — Developer Portfolio" },
      { property: "og:description", content: "Web development, APIs and multimodal Generative AI projects by Santosh Vadapalli." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: photo },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: photo },
    ],
  }),
  component: Index,
});

const EMAIL = "vadapallisantosh778@gmail.com";
const GITHUB = "https://github.com/vadapallisantosh12-ai";
const LINKEDIN = "https://linkedin.com/in/santosh-vadapalli-89580a380";
const nav = ["Home", "About", "Skills", "Education", "Projects", "Contact"];

const skills = [
  { icon: Layout, title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React.js"] },
  { icon: Server, title: "Backend", items: ["Node.js", "Express.js"] },
  { icon: Brain, title: "Generative AI", items: ["Generative AI", "Multimodal AI"] },
  { icon: Code2, title: "Languages", items: ["Java", "Python"] },
  { icon: Database, title: "Database & Web", items: ["MongoDB", "Responsive Design", "DOM Manipulation"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Postman"] },
];

const education = [
  { title: "High School", place: "Municipal High School (Kaspa), Vizianagaram", year: "2020", score: "85%" },
  { title: "Intermediate — MPC", place: "Government Junior College, Vizianagaram", year: "2022", score: "76.7%" },
  { title: "B.Tech — AI & Data Science", place: "Satya Institute of Technology and Management", year: "Expected 2027", score: "67.9%" },
];

const btnAccent = "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition hover:-translate-y-0.5";
const btnLight = "inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10";
const btnOutline = "inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary";

function Heading({ label, title, sub }: { label: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="inline-flex items-center gap-2 rounded-full bg-soft-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><Sparkles className="h-3 w-3" />{label}</p>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-sm text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Wrap({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return <section id={id} className={`relative scroll-mt-20 overflow-hidden py-16 md:py-20 ${className}`}><div className="reveal mx-auto max-w-6xl px-6">{children}</div></section>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <div id="home" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="dots-bg absolute right-0 top-0 h-64 w-64 opacity-60" />
        <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            {/* NAVBAR LOGO WITH SMALL PROFILE PHOTO */}
            <a href="#home" className="flex items-center gap-2 text-xl font-bold">
              <img src={photo} alt="Santosh Vadapalli" className="h-9 w-9 rounded-full border-2 border-accent object-cover" />
              <span>vadapalli Santosh<span className="text-accent">.</span></span>
            </a>
            <nav className="hidden gap-8 md:flex">
              {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="text-sm opacity-80 transition hover:text-accent hover:opacity-100">{n}</a>)}
            </nav>
            <div className="hidden md:block"><a href={resume.url} download="Santosh-Vadapalli-Resume.pdf" className={btnAccent}><Download className="h-4 w-4" /> Download CV</a></div>
            <div className="flex items-center gap-2 md:hidden">
              <a href={resume.url} download="Santosh-Vadapalli-Resume.pdf" aria-label="Download CV" className="inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-semibold text-accent-foreground"><Download className="h-4 w-4" /> CV</a>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-foreground/30" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
            </div>
          </div>
          {open && (
            <nav className="flex flex-col gap-1 border-t border-primary-foreground/15 px-4 pb-5 pt-2 md:hidden">
              {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium hover:bg-primary-foreground/10">{n}</a>)}
              <a href={resume.url} download="Santosh-Vadapalli-Resume.pdf" className={`${btnAccent} mt-2 justify-center`}><Download className="h-4 w-4" /> Download CV</a>
            </nav>
          )}
        </header>
        <div className="orb absolute -left-24 top-24 h-80 w-80 bg-accent/40" />
        <div className="orb absolute bottom-0 right-1/4 h-96 w-96 bg-primary-foreground/20 [animation-delay:-4s]" />
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-8 md:grid-cols-2 md:pb-24 md:pt-12">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-accent" /><span className="h-2 w-2 rounded-full bg-accent" /></span>
              Open to internships & fresher roles
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Hello, I'm<br /><span className="shimmer-text">Santosh Vadapalli</span></h1>
            <p className="mt-4 h-7 font-mono text-base text-accent md:text-lg">&gt; <Typewriter words={["AI & Data Science Student", "Software Developer", "Generative AI Enthusiast"]} /></p>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-80">Final-year B.Tech student building interactive web applications and practical AI-powered tools — from clean frontends to APIs and multimodal Generative AI.</p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <a href="#projects" className={`${btnAccent} justify-center`}>View My Projects <ArrowRight className="h-4 w-4" /></a>
              <a href="#contact" className={`${btnLight} justify-center`}>Contact Me</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:gap-8">
              {[["Gen AI", "Internship"], ["2", "Certifications"], ["4", "AI input types"]].map(([v, l]) => (
                <div key={l}><p className="text-2xl font-bold">{v}</p><p className="text-xs opacity-70">{l}</p></div>
              ))}
            </div>
          </div>
          {/* HERO PROFILE PHOTO */}
          <div className="relative order-first mx-auto md:order-none">
            <div className="spin-ring absolute -inset-3 md:-inset-6 rounded-full" />
            <div className="relative flex h-60 w-60 items-center justify-center rounded-full bg-accent shadow-glow sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img src={photo} alt="Santosh Vadapalli" className="h-[13rem] w-[13rem] rounded-full object-cover sm:h-60 sm:w-60 md:h-64 md:w-64" />
            </div>
            <div className="float absolute -right-2 top-4 rounded-xl md:-right-4 md:top-8 bg-card px-4 py-2 text-card-foreground shadow-glow">
              <p className="text-xs text-muted-foreground">Graduating</p><p className="font-bold text-primary">2027</p>
            </div>
            <div className="float absolute -left-2 bottom-2 flex md:-left-8 md:bottom-6 items-center gap-2 rounded-xl bg-card px-4 py-2 text-card-foreground shadow-glow [animation-delay:-2s]">
              <Sparkles className="h-4 w-4 text-accent" /><span className="text-xs font-semibold">Gen AI Intern</span>
            </div>
            <div className="float absolute -left-10 top-10 hidden md:flex items-center gap-2 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2 text-xs font-medium backdrop-blur [animation-delay:-1s]">
              <Brain className="h-4 w-4 text-accent" /> Multimodal AI
            </div>
            <div className="float absolute -right-8 bottom-16 hidden md:flex items-center gap-2 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-2 text-xs font-medium backdrop-blur [animation-delay:-3s]">
              <Code2 className="h-4 w-4 text-accent" /> React · Node
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS (services style) */}
      <Wrap id="skills">
        <Heading label="Skills" title="What I Work With" sub="Technologies I use to build web applications and AI-powered tools." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }, i) => {
            const hi = i === 1;
            return (
              <div key={title} className={`glow-card group rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-glow ${hi ? "bg-primary text-primary-foreground shadow-glow" : "bg-secondary hover:bg-primary hover:text-primary-foreground"}`}>
                <Icon className={`mx-auto h-10 w-10 ${hi ? "text-accent" : "text-primary group-hover:text-accent"}`} />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {items.map((s) => <span key={s} className={`rounded-full px-3 py-1 text-xs ${hi ? "bg-primary-foreground/15" : "bg-card text-foreground group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground"}`}>{s}</span>)}
                </div>
              </div>
            );
          })}
        </div>
      </Wrap>

      {/* ABOUT */}
      <Wrap id="about" className="bg-muted">
        <div className="grid items-center gap-14 md:grid-cols-2">
          {/* ABOUT PROFILE PHOTO */}
          <div className="relative mx-auto pb-4">
            <div className="flex h-72 w-72 items-center justify-center rounded-full border-2 border-dashed border-primary p-4">
              <img src={photo} alt="Santosh Vadapalli" className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-glow">
              <GraduationCap className="h-4 w-4" /> B.Tech AI & DS · Final Year
            </div>
            <span className="absolute -left-4 top-4 h-6 w-6 rounded-full border-2 border-primary" />
            <span className="absolute -right-2 bottom-10 h-4 w-4 rounded-full bg-primary" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Me</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Building Solutions With Code & AI</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">I'm a final-year B.Tech Artificial Intelligence & Data Science student with a strong foundation in JavaScript, Python, HTML, CSS, web development, APIs and Generative AI. I enjoy building interactive web applications, solving problems with programming and application logic, and exploring multimodal AI.</p>
            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-xl bg-soft-accent p-5">
                <Briefcase className="h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="font-semibold">Gen AI Intern — Pixel Wind, Visakhapatnam</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Applied Generative AI concepts to develop and refine an AI-based project, explored AI-assisted content generation and worked with multimodal AI use cases.</p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl bg-soft-primary p-5">
                <Award className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Certifications</p>
                  <p className="mt-1 text-xs text-muted-foreground">NPTEL — Cloud Computing · Web Technologies — Full Stack Development</p>
                </div>
              </div>
            </div>
            <a href={resume.url} download="Santosh-Vadapalli-Resume.pdf" className={`${btnAccent} mt-8`}>Download CV <ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </Wrap>

      {/* EDUCATION (process style) */}
      <Wrap id="education">
        <Heading label="Education" title="My Learning Journey" />
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {education.map((e, i) => (
            <div key={e.title} className="relative text-center">
              <div className="pulse-ring relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow">
                <GraduationCap className="h-7 w-7" />
              </div>
              {i < 2 && <ArrowRight className="absolute right-[-12%] top-5 hidden h-6 w-6 text-accent md:block" />}
              <p className="mt-5 text-xs font-semibold text-accent">{e.year}</p>
              <h3 className="mt-1 font-semibold">{e.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{e.place}</p>
              <p className="mt-2 text-sm font-semibold text-primary">Score: {e.score}</p>
            </div>
          ))}
        </div>
      </Wrap>

      {/* SOFT SKILLS (testimonial style) */}
      <Wrap className="bg-muted">
        <Heading label="Soft Skills" title="How I Work With People" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[Puzzle, "Problem Solving"], [RefreshCw, "Adaptability"], [Users, "Teamwork"], [MessageCircle, "Communication"]].map(([Icon, label]) => {
            const I = Icon as typeof Puzzle;
            return (
              <div key={label as string} className="glow-card rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex gap-1 text-accent">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-current" />)}</div>
                <I className="mt-5 h-8 w-8 text-primary" />
                <p className="mt-3 font-semibold">{label as string}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Languages: English · Telugu</p>
      </Wrap>

      {/* PROJECTS */}
      <Wrap id="projects">
        <Heading label="Portfolio" title="Featured Project" />
        <div className="glow-card mt-12 grid items-center gap-10 rounded-3xl bg-secondary p-6 md:grid-cols-2 md:p-12">
          <div className="scan relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-brand">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="relative grid grid-cols-2 gap-3">
              {["Text", "Image", "Audio", "Video"].map((m) => <span key={m} className="rounded-xl bg-primary-foreground/15 float px-5 py-3 text-center text-sm font-semibold text-primary-foreground backdrop-blur">{m}</span>)}
            </div>
          </div>
          <div>
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Generative AI</span>
            <h3 className="mt-4 text-2xl font-bold">Smart Multimodal Assistant</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Multimodal assistant working with text, image, audio and video inputs.</li>
              <li>• Generates intelligent, natural responses from different types of user data.</li>
              <li>• Explores practical applications of Generative AI and multimodal interaction.</li>
            </ul>
            <a href={GITHUB} target="_blank" rel="noreferrer" className={`${btnOutline} mt-6`}><Github className="h-4 w-4" /> View on GitHub</a>
          </div>
        </div>
      </Wrap>

      {/* CTA + CONTACT */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="dots-bg absolute bottom-0 left-0 h-48 w-48 opacity-50" />
        <div className="orb absolute -right-20 top-10 h-80 w-80 bg-accent/30" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            {/* CONTACT PROFILE PHOTO */}
            <img src={photo} alt="Santosh Vadapalli" className="mb-6 h-20 w-20 rounded-full border-2 border-accent object-cover shadow-glow" />
            <h2 className="text-3xl font-bold md:text-4xl">Got A Project?<br />Let's Talk</h2>
            <p className="mt-4 text-sm opacity-80">Open to internships and fresher software-development roles.</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-accent" /> Vizianagaram, Andhra Pradesh, India</li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent"><Mail className="h-5 w-5 text-accent" /> {EMAIL}</a></li>
              <li><a href="tel:+918179969053" className="flex items-center gap-3 hover:text-accent"><Phone className="h-5 w-5 text-accent" /> +91 8179969053</a></li>
            </ul>
            <div className="mt-8 flex gap-3">
              <a href={GITHUB} target="_blank" rel="noreferrer" className={btnLight}><Github className="h-4 w-4" /> GitHub</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className={btnLight}><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </div>
          </div>
          <form onSubmit={submit} className="space-y-4 rounded-2xl bg-card p-7 text-card-foreground shadow-glow">
            <p className="text-lg font-semibold">Send a message</p>
            {(["name", "email"] as const).map((f) => (
              <input key={f} required type={f === "email" ? "email" : "text"} placeholder={f === "name" ? "Your name" : "Your email"}
                value={form[f]} onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            ))}
            <textarea required rows={4} placeholder="Your message" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button type="submit" className={`${btnAccent} w-full justify-center`}>Send Message <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border pb-6 md:flex-row">
          {/* FOOTER LOGO WITH SMALL PROFILE PHOTO */}
          <a href="#home" className="flex items-center gap-2 text-xl font-bold text-primary">
            <img src={photo} alt="Santosh Vadapalli" className="h-8 w-8 rounded-full object-cover" />
            <span>Santosh<span className="text-accent">.</span></span>
          </a>
          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            {nav.map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-primary">{n}</a>)}
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Vadapalli Santosh. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [len, setLen] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i] ?? "";
    const t = setTimeout(() => {
      if (!del && len === w.length) return setDel(true);
      if (del && len === 0) { setDel(false); setI((i + 1) % words.length); return; }
      setLen(len + (del ? -1 : 1));
    }, !del && len === w.length ? 1600 : del ? 35 : 70);
    return () => clearTimeout(t);
  }, [len, del, i, words]);
  return <span>{(words[i] ?? "").slice(0, len)}<span className="animate-pulse">▍</span></span>;
}