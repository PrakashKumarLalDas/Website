import React, { useState, useEffect, useRef } from "react";

// ============================================================================
//  PRAKASH KUMAR LAL DAS — Executive Infrastructure Portfolio
//  Signature device: a "chainage corridor" — the career rendered as highway
//  kilometre markers, because the subject's entire working life is a road.
// ============================================================================

const NAVY = "#0A1A2F";
const INK = "#0F2238";
const STEEL = "#5B6B7E";
const PAPER = "#F7F8FA";
const GOLD = "#C8A24B";

// ---- Data ------------------------------------------------------------------

const CAREER = [
  {
    org: "National Highway InvIT Project Managers Pvt. Ltd.",
    role: "Manager",
    grade: "NHAI HQ · Dwarka, New Delhi",
    period: "Oct 2022 — Present",
    corridor: "National portfolio",
    points: [
      "Monitors daily toll-plaza operations and live-tracks O&M vendor performance across the portfolio.",
      "Drives compliance with NHAI / Independent Engineer correspondence and reporting cadence.",
      "Owns operational risk identification and mitigation strategy alongside site Project Managers.",
    ],
  },
  {
    org: "Mukarba Chowk–Panipat Road Project · Welspun Group",
    role: "SPV Head — Asst. General Manager",
    grade: "Sonipat, Haryana · NH-44",
    period: "Feb 2022 — Sep 2022",
    corridor: "NH-44",
    points: [
      "Headed the SPV for one of India's busiest northern corridors.",
      "Accountable for operations, maintenance and stakeholder coordination end-to-end.",
    ],
  },
  {
    org: "Pune Solapur Road Development Co. Ltd. · IL&FS",
    role: "Project Head — Senior Manager",
    grade: "Solapur, Maharashtra · NH-65",
    period: "Nov 2021 — Feb 2022",
    corridor: "NH-65",
    points: ["Led project operations and maintenance delivery on the NH-65 corridor."],
  },
  {
    org: "Solapur Tollways Pvt. Ltd.",
    role: "Head — Operations & Maintenance",
    grade: "Solapur, Maharashtra · NH-65",
    period: "Sep 2019 — Oct 2021",
    corridor: "NH-65",
    points: [
      "Ran toll operations together with construction of pending corridor length.",
      "Balanced O&M delivery against budget and programme.",
    ],
  },
  {
    org: "Pune Solapur Road Development Co. Ltd.",
    role: "Project Manager — Asst. General Manager (O&M)",
    grade: "Solapur, Maharashtra · NH-65",
    period: "Jun 2018 — Aug 2019",
    corridor: "NH-65",
    points: ["Managed toll operations and major maintenance within budget and schedule."],
  },
  {
    org: "Khalghat–Sendhawa Tollways Pvt. Ltd. · Uniquest Group",
    role: "Project Manager (O&M)",
    grade: "Barwani, Madhya Pradesh · NH-3",
    period: "Dec 2016 — Jun 2018",
    corridor: "NH-3",
    points: ["Delivered toll operations and major maintenance to programme and budget."],
  },
  {
    org: "Jetpur Somnath Tollways Pvt. Ltd. · Uniquest Group",
    role: "Project Manager (O&M)",
    grade: "Junagadh, Gujarat · NH-8D",
    period: "Nov 2015 — Nov 2016",
    corridor: "NH-8D",
    points: ["Oversaw O&M and tolling on the Gujarat coastal corridor."],
  },
  {
    org: "Elsamex Maintenance Service Ltd. & ITNL — Baleshwar–Kharagpur Expressway",
    role: "Toll In-charge",
    grade: "Kharagpur, West Bengal · NH-60",
    period: "Mar 2013 — Oct 2015",
    corridor: "NH-60",
    points: ["Led toll operations on the Baleshwar–Kharagpur expressway."],
  },
  {
    org: "Soma Isolux Varanasi Aurangabad Tollway Pvt. Ltd.",
    role: "Manager — Toll Operation Audit",
    grade: "Varanasi, Uttar Pradesh · NH-2",
    period: "Oct 2011 — Mar 2013",
    corridor: "NH-2",
    points: ["Audited toll operations across the Varanasi–Aurangabad stretch of NH-2."],
  },
  {
    org: "Reliance Infrastructure Ltd. — Pune Satara Project",
    role: "Manager — Toll Operation & Maintenance",
    grade: "Khed Shivapur, Maharashtra · NH-4",
    period: "Aug 2010 — Oct 2011",
    corridor: "NH-4",
    points: ["Managed tolling and maintenance at the Khed Shivapur plaza on NH-4."],
  },
  {
    org: "Technogem Consultants Pvt. Ltd.",
    role: "Toll Manager",
    grade: "New Panvel, Navi Mumbai · NH-4B",
    period: "Jan 2008 — Jul 2010",
    corridor: "NH-4B",
    points: ["Ran toll-plaza management on NH-4B near Navi Mumbai."],
  },
  {
    org: "Jaiprakash Associates Ltd. · Jaypee Group",
    role: "Sr. Assistant — Accounts (1020 MW Hydropower Project)",
    grade: "Bhutan · Construction Division",
    period: "Nov 1999 — May 2006",
    corridor: "Foundations",
    points: ["Seven years in construction-division accounts on a 1020 MW hydropower project."],
  },
];

const EXPERTISE = [
  ["Toll Operations", "End-to-end plaza management, revenue assurance and audit across national corridors."],
  ["Highway Maintenance", "Routine and major O&M programmes delivered to budget and schedule."],
  ["Asset Management", "Custodianship of large-scale highway assets across multiple states."],
  ["Contract Compliance", "Concession-agreement alignment with NHAI and Independent Engineers."],
  ["Team Leadership", "Direction of multidisciplinary site and operations workforces."],
  ["Project Management", "NICMAR-trained delivery of operations and pending-length construction."],
  ["Risk Mitigation", "Early identification and resolution of operational and contractual risk."],
  ["Client Relations", "Sustained rapport with clients, IEs and end users."],
  ["NHAI Coordination", "Day-to-day liaison with the Authority and statutory reporting."],
  ["Traffic Operations", "Smooth-flow management and incident response at plazas and stretches."],
  ["O&M Strategy", "Operating models that lift service quality and efficiency."],
  ["Stakeholder Engagement", "Coordination with local administration and government leadership."],
];

const ACHIEVEMENTS = [
  ["12", "leadership roles", "Progressively senior operations mandates across India's highway network."],
  ["10+", "national corridors", "Operated and maintained across NH-44, 65, 2, 4, 60, 8D, 3 and more."],
  ["7", "states", "Operational footprint spanning Maharashtra, Gujarat, MP, UP, WB, Haryana and the capital."],
  ["6", "blue-chip groups", "Welspun, IL&FS, Reliance Infra, ITNL/Elsamex, Soma Isolux and Jaypee."],
];

const PHILOSOPHY = [
  ["Accountability", "Ownership of the corridor from the first kilometre to the last report."],
  ["Discipline", "Programme and budget honoured; compliance treated as non-negotiable."],
  ["Operational Excellence", "Service quality and efficiency raised at every plaza led."],
  ["Team Development", "Continuous on-the-job training to build operational capability."],
  ["Problem Solving", "Critical issues escalated, strategised and closed with site teams."],
  ["Public Service", "A user-first mindset — every motorist is the reason the road exists."],
];

const CREDENTIALS = [
  ["MBA — Finance", "IGNOU · 2010", "Commercial and financial command of infrastructure operations."],
  ["Construction Project Management", "NICMAR · 2016", "Graduate programme in structured project delivery."],
  ["B.E. Civil Engineering", "Dr. A.P.J. Abdul Kalam University · 2020", "Engineering foundation underpinning asset stewardship."],
  ["IAHE — Operation, Maintenance & Tolling", "MoRTH · Feb 2024", "Highway tolling and O&M, the apex national programme."],
  ["IAHE — Project Management", "MoRTH · Mar 2024", "Advanced delivery practice for highway projects."],
  ["IAHE — Good Construction Practices", "MoRTH · Jul 2025", "Current best practice in highway construction."],
];

// ---- Hooks -----------------------------------------------------------------

function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {} }) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(22px)",
        transition: `opacity .7s cubic-bezier(.22,.61,.36,1) ${delay}s, transform .7s cubic-bezier(.22,.61,.36,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}

// ---- Component -------------------------------------------------------------

export default function App() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const c = dark
    ? { bg: NAVY, bg2: INK, text: "#EAF0F6", sub: "#9FB0C2", line: "rgba(255,255,255,.12)", card: "rgba(255,255,255,.04)", header: "rgba(10,26,47,.85)" }
    : { bg: PAPER, bg2: "#FFFFFF", text: INK, sub: STEEL, line: "rgba(15,34,56,.12)", card: "#FFFFFF", header: "rgba(247,248,250,.85)" };

  const nav = [
    ["Summary", "summary"], ["Career", "career"], ["Expertise", "expertise"],
    ["Impact", "impact"], ["Leadership", "leadership"], ["Credentials", "credentials"], ["Contact", "contact"],
  ];

  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div style={{ background: c.bg, color: c.text, fontFamily: "'Inter',system-ui,sans-serif", minHeight: "100vh", transition: "background .4s,color .4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${GOLD}; color: ${NAVY}; }
        .serif { font-family: 'Fraunces', Georgia, serif; }
        .mono { font-family: 'IBM Plex Mono', monospace; }
        a { color: inherit; }
        button:focus-visible, a:focus-visible { outline: 2px solid ${GOLD}; outline-offset: 3px; }
        .lift { transition: transform .35s cubic-bezier(.22,.61,.36,1), border-color .35s, box-shadow .35s; }
        .lift:hover { transform: translateY(-4px); border-color: ${GOLD}; }
        .ul { background-image: linear-gradient(${GOLD},${GOLD}); background-size: 0% 1.5px; background-repeat: no-repeat; background-position: 0 100%; transition: background-size .35s; }
        .ul:hover { background-size: 100% 1.5px; }
        @media (prefers-reduced-motion: reduce){ *{ animation:none!important; transition:none!important; } }
      `}</style>

      {/* ---- Header ---- */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: c.header, backdropFilter: "blur(14px)", borderBottom: `1px solid ${c.line}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => go("top")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "baseline", gap: 10, color: c.text }}>
            <span className="serif" style={{ fontSize: 19, fontWeight: 600, letterSpacing: ".3px" }}>Prakash Kumar Lal Das</span>
            <span className="mono" style={{ fontSize: 10.5, color: GOLD, letterSpacing: "1.5px" }}>EST. 1999</span>
          </button>
          <nav style={{ display: "flex", alignItems: "center", gap: 26 }}>
            <div style={{ display: "none", gap: 26 }} className="desknav">
              {nav.map(([l, id]) => (
                <button key={id} onClick={() => go(id)} className="ul" style={{ background: "none", border: "none", cursor: "pointer", color: c.sub, fontSize: 13.5, fontWeight: 500, letterSpacing: ".2px", paddingBottom: 2 }}>{l}</button>
              ))}
            </div>
            <button onClick={() => setDark(!dark)} aria-label="Toggle theme" style={{ background: "none", border: `1px solid ${c.line}`, borderRadius: 999, width: 40, height: 40, cursor: "pointer", color: c.text, fontSize: 15 }}>{dark ? "☀" : "☾"}</button>
            <button onClick={() => setMenu(!menu)} className="burger" aria-label="Menu" style={{ background: "none", border: `1px solid ${c.line}`, borderRadius: 8, width: 40, height: 40, cursor: "pointer", color: c.text, fontSize: 18 }}>≡</button>
          </nav>
        </div>
        {menu && (
          <div style={{ borderTop: `1px solid ${c.line}`, padding: "12px 24px 18px", background: c.header }}>
            {nav.map(([l, id]) => (
              <button key={id} onClick={() => go(id)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "11px 0", cursor: "pointer", color: c.text, fontSize: 15, borderBottom: `1px solid ${c.line}` }}>{l}</button>
            ))}
          </div>
        )}
      </header>

      <style>{`@media(min-width:880px){.desknav{display:flex!important}.burger{display:none!important}}`}</style>

      {/* ---- Hero ---- */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: dark ? `linear-gradient(160deg, ${INK}, ${NAVY})` : `linear-gradient(160deg, ${NAVY}, ${INK})`, color: "#EAF0F6" }}>
        {/* faint chainage ruler down the side */}
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none", backgroundImage: `repeating-linear-gradient(to bottom, transparent 0 78px, ${GOLD}22 78px 79px)` }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div className="herogrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48, alignItems: "center", padding: "88px 0 76px" }}>
            <div>
              <Reveal>
                <div className="mono" style={{ color: GOLD, fontSize: 12, letterSpacing: "3px", marginBottom: 22 }}>HIGHWAY OPERATIONS · TOLL MANAGEMENT · ASSET MAINTENANCE</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="serif" style={{ fontSize: "clamp(34px,5.4vw,60px)", lineHeight: 1.05, fontWeight: 600, letterSpacing: "-.5px" }}>
                  Driving Highway Excellence Through <span style={{ color: GOLD }}>15+ Years</span> of Infrastructure Leadership
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p style={{ marginTop: 24, maxWidth: 560, fontSize: 17, lineHeight: 1.65, color: "#B9C7D6", fontWeight: 300 }}>
                  Senior operations leader steering tolling ecosystems, O&M programmes and large-scale highway assets across India's national corridors — from plaza floor to NHAI boardroom.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 34 }}>
                  <a href="Prakash-Kumar-Lal-Das-CV.pdf" download style={{ background: GOLD, color: NAVY, padding: "14px 26px", borderRadius: 6, fontWeight: 600, fontSize: 14.5, textDecoration: "none", letterSpacing: ".2px" }}>Download Résumé</a>
                  <button onClick={() => go("contact")} style={{ background: "transparent", color: "#EAF0F6", padding: "14px 26px", borderRadius: 6, fontWeight: 600, fontSize: 14.5, border: "1px solid rgba(255,255,255,.3)", cursor: "pointer", letterSpacing: ".2px" }}>Contact</button>
                </div>
              </Reveal>
            </div>

            {/* Portrait — chainage-marker framed */}
            <Reveal delay={0.2}>
              <div className="heroport" style={{ justifySelf: "center", position: "relative" }}>
                <div style={{ position: "relative", width: 280, height: 340, borderRadius: 10, overflow: "hidden", border: `1px solid rgba(255,255,255,.18)`, background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src="/portrait.jpg" alt="Prakash Kumar Lal Das" loading="eager" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                  <div style={{ position: "absolute", inset: 0, boxShadow: `inset 0 0 0 1px ${GOLD}55`, pointerEvents: "none" }} />
                </div>
                {/* km-marker tag */}
                <div className="mono" style={{ position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)", background: GOLD, color: NAVY, fontSize: 11, fontWeight: 600, letterSpacing: "1px", padding: "6px 16px", borderRadius: 4, whiteSpace: "nowrap", zIndex: 2 }}>NHAI HQ · NEW DELHI</div>
              </div>
            </Reveal>
          </div>

          {/* Hero stat strip */}
          <Reveal delay={0.3}>
            <div className="herostats" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 0, borderTop: `1px solid rgba(255,255,255,.14)`, marginTop: 8 }}>
              {[["15+", "Years Experience"], ["10+", "Highway Projects"], ["Multiple", "National Corridors"], ["Pan-India", "Leadership Roles"]].map(([n, l], i) => (
                <div key={i} style={{ padding: "26px 18px", borderRight: i % 2 === 0 ? `1px solid rgba(255,255,255,.14)` : "none", borderBottom: i < 2 ? `1px solid rgba(255,255,255,.14)` : "none" }}>
                  <div className="serif" style={{ fontSize: 30, fontWeight: 600, color: GOLD }}>{n}</div>
                  <div style={{ fontSize: 12.5, color: "#9FB0C2", marginTop: 4, letterSpacing: ".3px" }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <style>{`
          @media(min-width:920px){
            .herogrid{grid-template-columns:1.35fr .9fr!important;padding:104px 0 84px!important}
            .herostats{grid-template-columns:repeat(4,1fr)!important}
            .herostats>div:nth-child(-n+4){border-bottom:none!important}
            .herostats>div{border-right:1px solid rgba(255,255,255,.14)!important}
            .herostats>div:last-child{border-right:none!important}
          }
        `}</style>
      </section>

      {/* ---- Executive Summary ---- */}
      <Section id="summary" c={c} eyebrow="01 · Executive Profile" title="A career measured in corridors, not job titles">
        <div className="sumgrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40 }}>
          <div style={{ fontSize: 17.5, lineHeight: 1.75, color: c.text, fontWeight: 300 }}>
            <p style={{ marginBottom: 20 }}>
              Prakash Kumar Lal Das has spent more than two decades at the operational heart of India's national highways — the level where concession agreements meet asphalt, and where service to the motoring public is delivered or it is not.
            </p>
            <p style={{ marginBottom: 20, color: c.sub }}>
              From toll-plaza management at Reliance Infrastructure and Soma Isolux, through O&M leadership for IL&FS and Welspun SPVs, to his current mandate at NHAI headquarters, his work has consistently joined three disciplines that rarely sit in one person: the <strong style={{ color: c.text, fontWeight: 600 }}>commercial rigour</strong> of an MBA in Finance, the <strong style={{ color: c.text, fontWeight: 600 }}>delivery discipline</strong> of NICMAR project management, and the <strong style={{ color: c.text, fontWeight: 600 }}>engineering judgement</strong> of a civil engineer.
            </p>
            <p style={{ color: c.sub }}>
              The result is a leader equally comfortable reviewing daily plaza revenue, negotiating with an Independent Engineer, or building rapport with local administration to keep a corridor moving. His record spans BOT, HAM and PPP structures across seven states and six blue-chip infrastructure groups.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {[
              ["Tolling ecosystem", "Revenue assurance, audit and end-to-end plaza operations"],
              ["O&M excellence", "Routine and major maintenance to budget and programme"],
              ["Government coordination", "NHAI, Independent Engineers and local administration"],
              ["Asset performance", "Custodianship of multi-state highway portfolios"],
            ].map(([h, t], i) => (
              <Reveal key={i} delay={i * 0.06} className="lift" style={{ border: `1px solid ${c.line}`, borderRadius: 10, padding: "18px 20px", background: c.card, borderLeft: `3px solid ${GOLD}` }}>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{h}</div>
                <div style={{ fontSize: 13.5, color: c.sub, lineHeight: 1.5 }}>{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media(min-width:900px){.sumgrid{grid-template-columns:1.5fr 1fr!important;gap:56px!important}}`}</style>
      </Section>

      {/* ---- Career — the chainage corridor ---- */}
      <Section id="career" c={c} eyebrow="02 · Career Journey" title="The corridor, kilometre by kilometre" tinted dark={dark}>
        <p style={{ color: c.sub, maxWidth: 620, marginBottom: 48, fontSize: 16, lineHeight: 1.65 }}>
          Read top to bottom like a highway's chainage markers — each post a posting, the most recent first.
        </p>
        <div style={{ position: "relative" }}>
          {/* the road line */}
          <div aria-hidden className="roadline" style={{ position: "absolute", left: 19, top: 6, bottom: 6, width: 2, background: `linear-gradient(${GOLD}, ${c.line})` }} />
          <div style={{ display: "grid", gap: 30 }}>
            {CAREER.map((job, i) => (
              <Reveal key={i} delay={Math.min(i * 0.04, 0.3)} className="jobrow" style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: 22, alignItems: "start" }}>
                {/* km marker */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 6, background: i === 0 ? GOLD : c.card, border: `1.5px solid ${i === 0 ? GOLD : c.line}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: i === 0 ? NAVY : GOLD }}>{String(CAREER.length - i).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="lift" style={{ border: `1px solid ${c.line}`, borderRadius: 12, padding: "20px 22px", background: c.card }}>
                  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
                    <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.25 }}>{job.role}</h3>
                    <span className="mono" style={{ fontSize: 11.5, color: GOLD, letterSpacing: ".5px", whiteSpace: "nowrap" }}>{job.corridor}</span>
                  </div>
                  <div style={{ color: c.text, fontSize: 14.5, fontWeight: 500, marginTop: 6 }}>{job.org}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px", marginTop: 6, fontSize: 12.5, color: c.sub }}>
                    <span>{job.grade}</span><span style={{ color: c.line }}>·</span><span className="mono">{job.period}</span>
                  </div>
                  <ul style={{ margin: "14px 0 0", paddingLeft: 0, listStyle: "none", display: "grid", gap: 7 }}>
                    {job.points.map((p, j) => (
                      <li key={j} style={{ fontSize: 13.5, color: c.sub, lineHeight: 1.55, paddingLeft: 18, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, top: 8, width: 6, height: 6, background: GOLD, borderRadius: 1, transform: "rotate(45deg)" }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ---- Expertise ---- */}
      <Section id="expertise" c={c} eyebrow="03 · Core Expertise" title="Twelve disciplines of highway leadership">
        <div className="expgrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {EXPERTISE.map(([t, d], i) => (
            <Reveal key={i} delay={Math.min(i * 0.03, 0.25)} className="lift" style={{ border: `1px solid ${c.line}`, borderRadius: 12, padding: "22px 22px 24px", background: c.card }}>
              <div className="mono" style={{ fontSize: 11, color: GOLD, marginBottom: 12 }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="serif" style={{ fontSize: 17.5, fontWeight: 600, marginBottom: 8 }}>{t}</h3>
              <p style={{ fontSize: 13.5, color: c.sub, lineHeight: 1.55 }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <style>{`@media(min-width:640px){.expgrid{grid-template-columns:1fr 1fr!important}}@media(min-width:960px){.expgrid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </Section>

      {/* ---- Impact / Achievements ---- */}
      <Section id="impact" c={c} eyebrow="04 · Industry Impact" title="The footprint, in figures" tinted dark={dark}>
        <div className="kpigrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: c.line, border: `1px solid ${c.line}`, borderRadius: 14, overflow: "hidden" }}>
          {ACHIEVEMENTS.map(([n, l, d], i) => (
            <Reveal key={i} delay={i * 0.08} style={{ background: c.bg2, padding: "34px 26px" }}>
              <div className="serif" style={{ fontSize: "clamp(40px,6vw,58px)", fontWeight: 600, color: GOLD, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 10, letterSpacing: ".2px" }}>{l}</div>
              <div style={{ fontSize: 13, color: c.sub, marginTop: 6, lineHeight: 1.5 }}>{d}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div style={{ marginTop: 40, display: "grid", gap: 12 }} className="achlist">
            {[
              "Led toll operations on national-highway corridors spanning seven states.",
              "Directed O&M programmes for large-scale BOT, HAM and PPP infrastructure assets.",
              "Coordinated with NHAI, Independent Engineers and local administrations to keep corridors moving.",
              "Managed multidisciplinary operational teams and lifted service quality at the plaza.",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", border: `1px solid ${c.line}`, borderRadius: 10, background: c.card }}>
                <span className="mono" style={{ color: GOLD, fontSize: 13, fontWeight: 600, paddingTop: 1 }}>→</span>
                <span style={{ fontSize: 14.5, color: c.text, lineHeight: 1.55 }}>{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <style>{`@media(min-width:760px){.kpigrid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </Section>

      {/* ---- Leadership Philosophy ---- */}
      <Section id="leadership" c={c} eyebrow="05 · Leadership Philosophy" title="Leadership Beyond Operations">
        <div className="philgrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {PHILOSOPHY.map(([t, d], i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.3)} className="lift" style={{ border: `1px solid ${c.line}`, borderRadius: 12, padding: "26px 24px", background: c.card, position: "relative", overflow: "hidden" }}>
              <div className="serif" aria-hidden style={{ position: "absolute", top: -14, right: 14, fontSize: 80, fontWeight: 700, color: dark ? "rgba(200,162,75,.08)" : "rgba(15,34,56,.05)" }}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className="serif" style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: GOLD }}>{t}</h3>
              <p style={{ fontSize: 14, color: c.sub, lineHeight: 1.6, position: "relative" }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <style>{`@media(min-width:640px){.philgrid{grid-template-columns:1fr 1fr!important}}@media(min-width:980px){.philgrid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </Section>

      {/* ---- Credentials ---- */}
      <Section id="credentials" c={c} eyebrow="06 · Certifications & Development" title="Credentials & professional development" tinted dark={dark}>
        <div className="credgrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
          {CREDENTIALS.map(([t, m, d], i) => (
            <Reveal key={i} delay={Math.min(i * 0.05, 0.3)} className="lift" style={{ border: `1px solid ${c.line}`, borderRadius: 12, padding: "24px 22px", background: c.card, borderTop: `3px solid ${GOLD}` }}>
              <h3 className="serif" style={{ fontSize: 17.5, fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>{t}</h3>
              <div className="mono" style={{ fontSize: 11.5, color: GOLD, letterSpacing: ".5px", marginBottom: 10 }}>{m}</div>
              <p style={{ fontSize: 13.5, color: c.sub, lineHeight: 1.55 }}>{d}</p>
            </Reveal>
          ))}
        </div>
        <style>{`@media(min-width:640px){.credgrid{grid-template-columns:1fr 1fr!important}}@media(min-width:980px){.credgrid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </Section>

      {/* ---- Contact ---- */}
      <section id="contact" style={{ background: dark ? `linear-gradient(160deg, ${INK}, ${NAVY})` : `linear-gradient(160deg, ${NAVY}, ${INK})`, color: "#EAF0F6", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, opacity: .5, backgroundImage: `repeating-linear-gradient(to right, transparent 0 78px, ${GOLD}18 78px 79px)` }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 24px", position: "relative" }}>
          <Reveal>
            <div className="mono" style={{ color: GOLD, fontSize: 12, letterSpacing: "3px", marginBottom: 18 }}>07 · CONTACT</div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="serif" style={{ fontSize: "clamp(28px,4.4vw,48px)", fontWeight: 600, lineHeight: 1.1, maxWidth: 760, letterSpacing: "-.4px" }}>
              Open to leadership opportunities in infrastructure, highway operations and asset management
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p style={{ color: "#B9C7D6", marginTop: 20, maxWidth: 560, fontSize: 16, lineHeight: 1.65, fontWeight: 300 }}>
              Available for General Manager, Vice President, Director and COO-level mandates with private infrastructure and highway operators.
            </p>
          </Reveal>
          <div className="contactgrid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 40, maxWidth: 640 }}>
            {[
              ["Email", "prakash.itnl@gmail.com", "mailto:prakash.itnl@gmail.com"],
              ["Phone", "+91 75730 40077", "tel:+917573040077"],
              ["LinkedIn", "linkedin.com/in/prakashkumarlaldas", "https://www.linkedin.com/in/prakashkumarlaldas/"],
            ].map(([l, v, h], i) => (
              <Reveal key={i} delay={0.2 + i * 0.06}>
                <a href={h} target={l === "LinkedIn" ? "_blank" : undefined} rel={l === "LinkedIn" ? "noopener noreferrer" : undefined} className="lift" style={{ display: "block", textDecoration: "none", border: "1px solid rgba(255,255,255,.16)", borderRadius: 12, padding: "20px 22px", background: "rgba(255,255,255,.04)" }}>
                  <div className="mono" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: GOLD, letterSpacing: "1.5px", marginBottom: 7 }}>
                    {l === "LinkedIn" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    )}
                    {l.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 16.5, color: "#EAF0F6", fontWeight: 500, wordBreak: "break-word" }}>{v}</div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <a href="Prakash-Kumar-Lal-Das-CV.pdf" download style={{ display: "inline-block", marginTop: 36, background: GOLD, color: NAVY, padding: "15px 30px", borderRadius: 6, fontWeight: 600, fontSize: 15, textDecoration: "none", letterSpacing: ".2px" }}>Download Full Résumé</a>
          </Reveal>
        </div>
        <style>{`@media(min-width:640px){.contactgrid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* ---- Footer ---- */}
      <footer style={{ background: c.bg2, borderTop: `1px solid ${c.line}`, padding: "28px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center" }}>
          <span className="serif" style={{ fontSize: 15, fontWeight: 600 }}>Prakash Kumar Lal Das</span>
          <span style={{ fontSize: 12.5, color: c.sub }} className="mono">HIGHWAY OPERATIONS · TOLL · O&M · ASSET MANAGEMENT</span>
          <span style={{ fontSize: 12.5, color: c.sub }}>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

// ---- Section shell ---------------------------------------------------------

function Section({ id, c, eyebrow, title, children, tinted, dark }) {
  return (
    <section id={id} style={{ background: tinted ? (dark ? "#0C1D33" : "#FFFFFF") : c.bg, padding: "82px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <Reveal>
          <div className="mono" style={{ color: GOLD, fontSize: 12, letterSpacing: "2.5px", marginBottom: 14 }}>{eyebrow.toUpperCase()}</div>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="serif" style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 600, lineHeight: 1.12, letterSpacing: "-.4px", marginBottom: 40, maxWidth: 760, color: c.text }}>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
