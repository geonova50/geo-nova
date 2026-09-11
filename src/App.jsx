import React, { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight, Award, BookOpen, Check, ChevronRight, Compass, Globe2,
  GraduationCap, Headphones, Layers3, Landmark, Leaf, LifeBuoy, LockKeyhole,
  Mail, MapPin, Menu, MonitorPlay, MoveUpRight, PlayCircle, Radio, Satellite,
  Send, Sparkles, Target, Telescope, Users, Video, X, Zap
} from "lucide-react";

const navItems = [
  ["Home", "home"], ["About", "about"], ["Software Tools", "software"],
  ["Instruments", "instruments"], ["Features", "features"], ["Contact", "contact"]
];

const software = [
  { name: "QGIS", tag: "GIS", level: "Basic → Advanced", desc: "Desktop GIS, cartography, spatial analysis and professional map production.", icon: Layers3 },
  { name: "Google Earth Engine", tag: "Cloud GIS", level: "Basic → Advanced", desc: "Satellite data, raster workflows, change detection and scalable analysis.", icon: Globe2 },
  { name: "SNAP", tag: "Remote Sensing", level: "Basic → Advanced", desc: "Sentinel imagery preprocessing, SAR workflows and Earth observation analysis.", icon: Satellite },
  { name: "Python Automation", tag: "Spatial Python", level: "Basic → Advanced", desc: "Automate GIS tasks, data pipelines and repeatable spatial workflows.", icon: Zap }
];

const instruments = [
  { name: "Total Station", icon: Telescope, desc: "Theory + field workflows for angle, distance, coordinate and setting-out operations.", chips: ["Field setup", "Traversing", "Stakeout"] },
  { name: "DGPS", icon: Compass, desc: "Understand differential positioning, base-rover workflows, coordinate systems and survey practice.", chips: ["RTK basics", "Base & rover", "Coordinate work"] }
];

const features = [
  { title: "Video Library", desc: "Upload and revisit on-demand lessons from anywhere.", icon: Video, size: "large" },
  { title: "Study Notes", desc: "Share structured notes and reference material.", icon: BookOpen },
  { title: "Live Webinars", desc: "Interactive workshops with practical demonstrations.", icon: Radio },
  { title: "Live Classes", desc: "Ask, practice and learn in real time.", icon: MonitorPlay },
  { title: "Membership", desc: "Flexible subscriptions for continuous learning.", icon: LockKeyhole },
  { title: "Doubt Resolution", desc: "Send queries and get focused academic support.", icon: LifeBuoy, size: "large" }
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: .55, delay, ease: [0.22, 1, .36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: .5 });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 70, damping: 18 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => spring.on("change", v => setDisplay(Math.round(v))), [spring]);
  return <span ref={ref}>{display}{suffix}</span>;
}

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-emerald-400 shadow-lg">
        <Globe2 size={22} strokeWidth={1.8} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-4 ring-slate-950" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-slate-950">GEO <span className="text-blue-600">NOVA</span></span>
    </a>
  );
}

function MapVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 shadow-2xl shadow-blue-950/20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 topo opacity-70" />
      <div className="absolute inset-[12%] rounded-full border border-emerald-400/20" />
      <div className="absolute inset-[21%] rounded-full border border-blue-400/20" />
      <div className="absolute inset-[30%] rounded-full border border-emerald-400/20" />
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-600 bg-[radial-gradient(circle_at_35%_30%,rgba(37,99,235,.42),rgba(15,23,42,.95)_65%)] shadow-[0_0_90px_rgba(37,99,235,.25)]" />
      <div className="absolute left-[25%] top-[29%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_6px_rgba(16,185,129,.35)]" />
      <div className="absolute right-[27%] top-[42%] h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(59,130,246,.35)]" />
      <div className="absolute left-[39%] bottom-[27%] h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_6px_rgba(16,185,129,.35)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="absolute inset-[9%] rounded-full border border-dashed border-emerald-400/25"
      />
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur">
        <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400" /> LIVE SPATIAL DATA</span>
        <span className="font-mono text-slate-400">13.0827° N / 80.2707° E</span>
      </div>
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute right-6 top-6 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-300"
      >
        GIS / RS / GNSS
      </motion.div>
    </div>
  );
}

function Modal({ open, onClose, onLogin}) {
  const [role, setRole] = useState("student");

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-600">
              GEO NOVA
            </p>

            <h3 className="mt-2 font-display text-2xl font-bold text-slate-950">
              Student Login
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Access your courses, notes and learning materials.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-slate-500 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        {/* Login Type */}
        <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1">
          <button
            onClick={() => setRole("student")}
            className={`rounded-xl py-2.5 text-sm font-bold ${
              role === "student"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500"
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`rounded-xl py-2.5 text-sm font-bold ${
              role === "admin"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500"
            }`}
          >
            Admin
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-bold text-slate-700">
              {role === "student" ? "Student Email" : "Admin Email"}
            </label>

            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              placeholder={
                role === "student"
                  ? "student@example.com"
                  : "admin@geonova.com"
              }
              type="email"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-slate-700">
              Password
            </label>

            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              placeholder="Enter your password"
              type="password"
            />
          </div>

          {role === "student" && (
            <div>
              <label className="text-sm font-bold text-slate-700">
                Student ID
              </label>

              <input
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                placeholder="Enter your student ID"
                type="text"
              />
            </div>
          )}

          <button
            onClick={() => onLogin(role)}
            className="w-full rounded-2xl bg-slate-950 py-3.5 font-bold text-white transition hover:bg-blue-700"
          >
            {role === "student" ? "Login as Student" : "Login as Admin"}
          </button>

          {role === "student" && (
            <div className="text-center">
              <button className="text-sm font-semibold text-blue-600 hover:underline">
                Forgot password?
              </button>
            </div>
          )}

          <p className="pt-2 text-center text-xs text-slate-400">
            GEO NOVA Learning Portal
          </p>
        </div>
      </motion.div>
    </div>
  );
}
function Dashboard({ role, onLogout }) {
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold">
        {role === "student" ? "Student Dashboard" : "Admin Dashboard"}
      </h1>

      <p className="mt-3 text-slate-500">
        Welcome to GEO NOVA Learning Portal
      </p>

      <button
        onClick={onLogout}
        className="mt-6 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white"
      >
        Logout
      </button>
    </div>
  );
}
function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };
if (userRole) {
  return (
    <Dashboard
      role={userRole}
      onLogout={() => setUserRole(null)}
    />
  );
}
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">{label}</button>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => setLoginOpen(true)} className="rounded-xl px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100">Login</button>
            <button onClick={() => scrollTo("software")} className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:bg-blue-700">Get Started</button>
          </div>
          <button className="rounded-xl p-2 lg:hidden" onClick={() => setMobileOpen(v => !v)} aria-label="Open menu">
            {mobileOpen ? <X/> : <Menu/>}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="rounded-xl px-3 py-3 text-left font-semibold text-slate-700 hover:bg-slate-50">{label}</button>
              ))}
              <div className="mt-2 flex gap-2">
                <button onClick={() => {setLoginOpen(true); setMobileOpen(false)}} className="flex-1 rounded-xl border border-slate-200 py-3 font-bold">Login</button>
                <button onClick={() => scrollTo("software")} className="flex-1 rounded-xl bg-slate-950 py-3 font-bold text-white">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative isolate pt-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(37,99,235,.10),transparent_28%),radial-gradient(circle_at_85%_25%,rgba(16,185,129,.10),transparent_26%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:pb-28 lg:pt-20">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold uppercase tracking-[.16em] text-emerald-700">
                <Sparkles size={14}/> Learn the planet, one layer at a time
              </div>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-[-.04em] text-slate-950 sm:text-6xl lg:text-[72px]">
                Master <span className="text-blue-600">Geoinformatics</span> & GIS Technologies
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Comprehensive study portal, live sessions, hands-on software training, and surveying instrument guides for students and professionals.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => scrollTo("software")} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-blue-700">
                  Explore Courses <ArrowRight size={18} className="transition group-hover:translate-x-1"/>
                </button>
                <button onClick={() => scrollTo("features")} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
                  <PlayCircle size={18}/> View Webinars
                </button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-slate-200 pt-7">
                <div><p className="font-display text-2xl font-bold"><Counter value={24} />+</p><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Modules</p></div>
                <div><p className="font-display text-2xl font-bold"><Counter value={4} /></p><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Tool tracks</p></div>
                <div><p className="font-display text-2xl font-bold"><Counter value={100} />%</p><p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Practical focus</p></div>
              </div>
            </Reveal>
            <Reveal delay={.12}><MapVisual /></Reveal>
          </div>
        </section>

        <section id="about" className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
              <Reveal>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-400">About GEO NOVA</p>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">From spatial concepts to confident fieldwork.</h2>
                <p className="mt-6 leading-7 text-slate-400">GEO NOVA is an education-first platform for Geoinformatics, GIS and Remote Sensing. Learn core concepts, build software fluency, join live sessions and connect theory with surveying practice.</p>
                <button onClick={() => scrollTo("contact")} className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-400 hover:text-emerald-300">Talk to GEO NOVA <MoveUpRight size={17}/></button>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [GraduationCap, "Structured learning", "Core-to-advanced pathways designed for students and working professionals."],
                  [Radio, "Live learning", "Interactive classes, webinars and workshops that make complex spatial topics easier."],
                  [Target, "Hands-on practice", "Software workflows and instrument modules built around practical outcomes."],
                  [Headphones, "Doubt support", "A focused query system for questions, revision and guided problem solving."]
                ].map(([Icon, title, desc], i) => (
                  <Reveal key={title} delay={i * .06}>
                    <div className="h-full rounded-3xl border border-white/10 bg-white/[.04] p-6 transition hover:border-emerald-400/30 hover:bg-white/[.07]">
                      <Icon className="text-emerald-400" size={25}/>
                      <h3 className="mt-5 text-lg font-bold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="software" className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">Software & tools</p>
                  <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Build a modern spatial toolkit.</h2>
                </div>
                <p className="max-w-md text-slate-600">Basic to advanced learning across the tools used in GIS, Earth observation and spatial automation.</p>
              </div>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {software.map(({name, tag, level, desc, icon: Icon}, i) => (
                <Reveal key={name} delay={i * .06}>
                  <motion.article whileHover={{ y: -5, scale: 1.01 }} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-300 hover:shadow-glow">
                    <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20"/>
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-emerald-400"><Icon size={24}/></div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">{level}</span>
                    </div>
                    <p className="relative mt-6 text-xs font-bold uppercase tracking-[.16em] text-blue-600">{tag}</p>
                    <h3 className="relative mt-2 font-display text-2xl font-bold">{name}</h3>
                    <p className="relative mt-3 max-w-xl leading-7 text-slate-600">{desc}</p>
                    <button onClick={() => scrollTo("contact")} className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900">Enquire about this track <ChevronRight size={16}/></button>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="instruments" className="bg-gradient-to-b from-white to-blue-50/60 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-600">Surveying instruments</p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Take learning into the field.</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {instruments.map(({name, icon: Icon, desc, chips}, i) => (
                <Reveal key={name} delay={i * .08}>
                  <div className="group relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
                    <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-emerald-400/10"/>
                    <div className="relative flex items-start justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-emerald-400"><Icon size={28}/></div>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">Theory + Practical</span>
                    </div>
                    <h3 className="relative mt-9 font-display text-3xl font-bold">{name}</h3>
                    <p className="relative mt-3 max-w-lg leading-7 text-slate-400">{desc}</p>
                    <div className="relative mt-7 flex flex-wrap gap-2">
                      {chips.map(c => <span key={c} className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">{c}</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600">Platform capabilities</p>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Everything needed for a connected learning portal.</h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {features.map(({title, desc, icon: Icon, size}, i) => (
                <Reveal key={title} delay={i * .04} className={size === "large" ? "md:col-span-2" : ""}>
                  <motion.div whileHover={{ scale: 1.015 }} className={`group h-full rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-blue-200 ${size === "large" ? "min-h-[220px]" : "min-h-[220px]"}`}>
                    <div className="flex h-full flex-col justify-between gap-10">
                      <div className="flex items-start justify-between">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-emerald-50 group-hover:text-emerald-600"><Icon size={23}/></div>
                        <ArrowRight className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-500" size={20}/>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{title}</h3>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-600">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
          <div className="absolute inset-0 grid-bg opacity-20"/>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-emerald-400"><Award size={18}/> <span className="text-sm font-bold uppercase tracking-[.16em]">Learning pathway</span></div>
                  <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold sm:text-5xl">Learn the concepts. Practice the tools. Apply it in the field.</h2>
                  <p className="mt-5 max-w-xl leading-7 text-slate-400">A blended approach connecting online classes, recorded sessions, workshops and instrument training.</p>
                </div>
                <button onClick={() => scrollTo("contact")} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-emerald-300">Start your enquiry <ArrowRight size={18}/></button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr]">
              <Reveal>
                <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-600">Contact & location</p>
                <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Let's talk spatial learning.</h2>
                <p className="mt-5 max-w-lg leading-7 text-slate-600">Have a course question, workshop requirement or software-learning goal? Send GEO NOVA a message.</p>
                <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-400 text-slate-950"><MapPin size={22}/></div>
                    <div>
                      <p className="font-bold">Based in Tirunelveli, India</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">GEO NOVA · Tirunelveli, Tamil Nadu, India</p>
                    </div>
                  </div>
                  <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <svg viewBox="0 0 520 220" className="h-52 w-full" role="img" aria-label="Stylized map of Tirunelveli">
                      <defs><pattern id="mgrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#334155" strokeWidth="1"/></pattern></defs>
                      <rect width="520" height="220" fill="url(#mgrid)" opacity=".55"/>
                      <path d="M75 55 C145 28 190 58 238 44 S337 40 390 65 S454 72 475 103 C432 128 396 120 358 145 S281 171 230 151 S132 166 83 136 Z" fill="#0f766e" opacity=".22"/>
                      <path d="M90 115 C150 92 188 116 241 96 S331 81 386 104 S438 113 469 98" fill="none" stroke="#60a5fa" strokeWidth="3" strokeDasharray="8 8"/>
                      <path d="M112 47 C173 82 194 105 245 122 S331 140 404 166" fill="none" stroke="#34d399" strokeWidth="2" opacity=".7"/>
                      <circle cx="286" cy="111" r="8" fill="#34d399"/><circle cx="286" cy="111" r="18" fill="none" stroke="#34d399" opacity=".35"/>
                      <text x="304" y="116" fill="#e2e8f0" fontSize="13" fontWeight="700">Tirunelveli</text>
                      <text x="304" y="136" fill="#64748b" fontSize="10">13.0827° N · 80.2707° E</text>
                    </svg>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={.1}>
                <form
                  className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
                  onSubmit={e => { e.preventDefault(); setSent(true); }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-bold text-slate-700">Name<input required className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Your name"/></label>
                    <label className="text-sm font-bold text-slate-700">Email<input required type="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="you@example.com"/></label>
                    <label className="text-sm font-bold text-slate-700 sm:col-span-2">Interested in
                      <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none focus:border-blue-500">
                        <option>GIS & QGIS</option><option>Google Earth Engine</option><option>SNAP / Remote Sensing</option><option>Python Automation</option><option>Total Station / DGPS</option><option>Webinars & Workshops</option>
                      </select>
                    </label>
                    <label className="text-sm font-bold text-slate-700 sm:col-span-2">Your query<textarea required rows="5" className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Tell us what you want to learn..."/></label>
                  </div>
                  <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-3.5 font-bold text-white transition hover:bg-blue-700">
                    <Send size={18}/> Send inquiry
                  </button>
                  {sent && <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"><Check size={18}/> Thanks — your enquiry has been captured in this demo UI.</div>}
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">Educational platform for Geoinformatics, GIS, Remote Sensing and surveying practice.</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600"><MapPin size={16} className="text-emerald-600"/> Tirunelveli, India</div>
            </div>
            <div>
              <p className="font-bold">Explore</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-500">
                {navItems.slice(1).map(([label, id]) => <button key={id} onClick={() => scrollTo(id)} className="text-left hover:text-blue-600">{label}</button>)}
              </div>
            </div>
            <div>
              <p className="font-bold">Learning tracks</p>
              <div className="mt-4 grid gap-3 text-sm text-slate-500">
                <button onClick={() => scrollTo("software")} className="text-left hover:text-blue-600">QGIS</button>
                <button onClick={() => scrollTo("software")} className="text-left hover:text-blue-600">Google Earth Engine</button>
                <button onClick={() => scrollTo("software")} className="text-left hover:text-blue-600">SNAP</button>
                <button onClick={() => scrollTo("instruments")} className="text-left hover:text-blue-600">Survey Instruments</button>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} GEO NOVA. All rights reserved.</p>
            <p>Tirunelveli, Tamil Nadu, India · Built for spatial learners.</p>
          </div>
        </div>
      </footer>

<Modal
  open={loginOpen}
  onClose={() => setLoginOpen(false)}
  onLogin={(role) => {
    setUserRole(role);
    setLoginOpen(false);
  }}
/>      

export default App;
