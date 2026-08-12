const PROFILE = {
  name: "Karthikeya Gadadhasu",
  role: "Associate PM · Marketing Strategy · Growth · D2C",
  location: "Hyderabad, India",
  phone: "+91 63036 93144",
  email: "karthikgadadhasu1@gmail.com",
  linkedin: "https://www.linkedin.com/in/karthikeya-gadadhasu",
};

const METRICS = [
  { num: "₹10L+", lbl: "MRR — grown from ₹0" },
  { num: "₹1Cr+", lbl: "online revenue scaled" },
  { num: "4×", lbl: "sales growth per event" },
  { num: "130M+", lbl: "content views delivered" },
  { num: "7+", lbl: "D2C brands, end-to-end" },
  { num: "11", lbl: "consulting brands" },
  { num: "30+", lbl: "team scaled to" },
  { num: "2+ yrs", lbl: "building 0→1 products" },
];

const JOBS = [
  {
    role: "Associate Product Manager & Growth Lead",
    org: "HILO DESIGN · Menswear D2C",
    place: "Hyderabad",
    dates: "Jul 2024 – Present",
    tagline: "Owned product, growth and revenue for a menswear brand — end to end.",
    points: [
      <>Owned the <strong>product roadmap and UX redesign</strong> of the brand's website — improving conversion rates and cutting operational disruptions by <strong>~90%</strong>.</>,
      <>Architected an end-to-end internal ops platform: <strong>Lead → Order → Production → Catalogue → CRM → Fulfilment</strong>.</>,
      <>Built a campaign engine with 5–6 structured sale cycles a year, delivering <strong>4× sales growth (~₹50L per major event)</strong>.</>,
      <>Scaled <strong>online revenue to ₹1Cr+ and offline to ₹3Cr+</strong> — ~50% YoY growth without adding headcount.</>,
      <>Led the <strong>0→1 launch of two sub-brands (SEHIR &amp; RAGHUKULA)</strong> — positioning, 100+ SKUs, pricing strategy and GTM execution.</>,
    ],
  },
  {
    role: "Associate Product Manager & Head of Strategy",
    org: "ORAMAS · Product & Growth Agency",
    place: "Hyderabad",
    dates: "2024 – Present",
    tagline: "Strategy, delivery and growth across an agency's whole client book.",
    points: [
      <>Defined <strong>product strategy, roadmaps and GTM plans</strong> for 7+ D2C brands, 3 healthcare brands, a restaurant chain and multiple salons — owning delivery end-to-end.</>,
      <>Led marketing strategy across all accounts: <strong>Meta Ads, campaign architecture, CRO, content strategy and funnel optimisation</strong>.</>,
      <>Ran <strong>100+ strategy pitches</strong> covering product, pricing, GTM and scaling — directly converting and retaining clients.</>,
      <>Scaled the agency from <strong>1 to 30+ members</strong>, building SOPs, delivery systems and client-reporting infrastructure from scratch.</>,
      <>Grew the agency from <strong>₹0 to ₹10L+ MRR</strong> through structured business development and account retention.</>,
    ],
  },
  {
    role: "Associate Product Manager & Brand Strategist",
    org: "CHIRTALAYAM · Film Marketing & Tech",
    place: "Hyderabad",
    dates: "2024 – Present",
    tagline: "Marketing systems for Tollywood films and high-profile personal brands.",
    points: [
      <>Managed end-to-end marketing for <strong>5 high-profile personal brands including a Tollywood actor — 130M+ views</strong> across platforms.</>,
      <>Executed <strong>full film-marketing campaigns for Tollywood productions</strong> — strategy, multi-platform rollout and performance tracking.</>,
      <>Built Chirtalayam from scratch and led development of its <strong>proprietary end-to-end software platform</strong> — requirements, build oversight and delivery.</>,
      <>Led cross-functional teams, delivery timelines and stakeholder communication across all company functions.</>,
    ],
  },
  {
    role: "Associate Product Manager & Strategy Consultant",
    org: "SMILE GUARD · Dental-Tech Platform",
    place: "Hyderabad",
    dates: "Nov 2025 – Mar 2026",
    tagline: "Repositioning a dental-tech platform around its patients and doctors.",
    points: [
      <>Redefined platform positioning, <strong>restructured the subscription model</strong> and built a prioritised roadmap across Consumer, Doctor and Admin apps.</>,
      <>Mapped the patient journey, identified triage gaps and proposed <strong>AI-assisted oral-scan detection workflows</strong> to improve clinical outcomes.</>,
      <>Aligned product, tech and business stakeholders around a <strong>phased launch timeline</strong>.</>,
    ],
  },
];

const CASES = [
  {
    emoji: "👔",
    title: "Turning a menswear brand into a revenue engine",
    org: "HILO DESIGN · D2C",
    tags: ["Product", "Campaign Engine", "CRO", "Ops Platform"],
    blocks: [
      { k: "Problem", text: "A growing menswear D2C brand was running on instinct — no structured sale cycles, a manual ops pipeline, and a website leaking conversions at every step." },
      { k: "Approach", ul: ["Rebuilt the funnel: full UX redesign + CRO across the storefront.", "Architected an internal ops platform covering Lead → Order → Production → Catalogue → CRM → Fulfilment.", "Structured 5–6 campaign cycles a year with disciplined architecture, creative and pricing strategy."] },
    ],
    impact: ["4× sales per event", "₹1Cr+ online revenue", "₹3Cr+ offline", "~90% fewer disruptions", "50% YoY growth"],
  },
  {
    emoji: "🚀",
    title: "Scaling an agency from ₹0 to ₹10L+ MRR",
    org: "ORAMAS · Product & Growth Agency",
    tags: ["Strategy", "Business Development", "Delivery Systems"],
    blocks: [
      { k: "Problem", text: "A tiny agency with raw talent but no repeatable delivery system — every project felt like the first one." },
      { k: "Approach", ul: ["Productized strategy: 100+ pitches across product, pricing, GTM and scaling.", "Led marketing across the client book — Meta Ads, CRO, funnels, content.", "Built SOPs, delivery systems and client reporting infrastructure from scratch."] },
    ],
    impact: ["₹0 → ₹10L+ MRR", "1 → 30+ team", "7+ D2C brands retained", "100+ pitches closed"],
  },
  {
    emoji: "🎬",
    title: "130M+ views for Tollywood brands & films",
    org: "CHIRTALAYAM · Film Marketing & Tech",
    tags: ["Brand Strategy", "Content", "Platform Build"],
    blocks: [
      { k: "Problem", text: "Personal brands and film releases had star power but no marketing system — content was inconsistent and untracked." },
      { k: "Approach", ul: ["Built end-to-end marketing for 5 brands including a Tollywood actor.", "Executed full film campaigns — strategy, multi-platform rollout, performance tracking.", "Built Chirtalayam's proprietary marketing software platform from requirements to delivery."] },
    ],
    impact: ["130M+ views", "5 personal brands", "Full film campaigns", "Own platform built"],
  },
];

const BRAND_GROUPS = [
  { label: "Sub-brands launched 0→1", highlight: true, items: ["SEHIR", "RAGHUKULA"] },
  {
    label: "Consulting portfolio — sole strategic partner",
    items: ["Nilah Collective", "Mylilone", "Myzpecz", "Zoh Aesthetics", "Etinko", "NSalon", "NLashes", "Diteyy", "Descent Perfumes", "Pink Pepper", "Reina"],
  },
  { label: "Companies", items: ["ORAMAS", "HILO DESIGN", "SMILE GUARD", "CHIRTALAYAM"] },
];

const SKILLS = [
  { icon: "🧩", title: "Product", tags: ["Roadmaps", "PRDs", "0→1 Builds", "Feature Prioritisation", "Platform Architecture", "UX Collaboration", "Subscription Models"] },
  { icon: "📣", title: "Marketing", tags: ["GTM Strategy", "Meta Ads", "Campaign Management", "CRO", "Funnel Optimisation", "Content Strategy", "Brand Positioning"] },
  { icon: "⚙️", title: "Strategy & Ops", tags: ["Business Development", "Key Account Management", "Team Scaling", "Stakeholder Management", "CRM", "Workflow Automation"] },
  { icon: "📊", title: "Analytics", tags: ["GA4", "Funnel Analysis", "KPI Dashboards", "Revenue Forecasting", "Pricing & Margin Optimisation"] },
  { icon: "🛠️", title: "Tools", tags: ["Notion", "Jira", "Shopify", "Google Analytics (GA4)", "Meta Ads Manager", "Figma"] },
];

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <span className="nav-brand">Karthikeya</span>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#brands">Brands</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="resume.pdf" download>Download Résumé</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">Associate Product Manager · Hyderabad, India</span>
        <h1>
          I build <span className="grad">0→1 products</span> and growth systems that turn revenue into a habit.
        </h1>
        <p className="hero-sub">
          <strong>Product thinking + growth execution in one person.</strong> 2+ years shipping products and
          marketing strategies across D2C, healthcare and entertainment — from Meta Ads funnels to a
          <strong> ₹1Cr+ online revenue</strong> business and <strong>130M+ content views</strong>.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#work">View my work</a>
          <a className="btn btn-ghost" href="resume.pdf" download>Download résumé</a>
        </div>
        <div className="hero-photo">
          <img src="images/hero.jpg" alt="Karthikeya Gadadhasu" width={666} height={1000} />
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="section" style={{ paddingTop: 72, paddingBottom: 96 }}>
      <div className="wrap">
        <div className="metrics">
          {METRICS.map((m) => (
            <div className="metric" key={m.lbl}>
              <span className="num">{m.num}</span>
              <span className="lbl">{m.lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section section-band" id="about">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">About</div>
          <h2>Product manager who runs growth like a founder.</h2>
        </div>
        <div className="about-grid">
          <div className="about-photo">
            <img src="images/about.jpg" alt="Karthikeya at work" width={1400} height={935} />
          </div>
          <div className="about-copy">
            <h3>I sit where product, marketing and P&amp;L meet.</h3>
            <p>
              I'm an <span className="accent">Associate Product Manager</span> who has spent the last two years
              building 0→1 products and growth systems — and I own the numbers, not just the roadmap. From
              architecting an internal ops platform at a menswear D2C brand to scaling an agency's MRR from
              <strong> ₹0 to ₹10L+</strong>, I've built the full loop: strategy, product, marketing and delivery.
            </p>
            <p>
              My work spans <strong>D2C, healthcare and entertainment</strong> — including a Tollywood actor's
              brand that crossed <strong>130M+ views</strong>. I lead cross-functional teams, pitch to founders
              weekly, and turn messy operations into repeatable systems.
            </p>
            <div className="about-facts">
              <div className="about-fact"><b>Based in</b><span>Hyderabad, India</span></div>
              <div className="about-fact"><b>Focus</b><span>0→1 products · Growth · D2C · Platforms</span></div>
              <div className="about-fact"><b>Education</b><span>B.Tech Computer Science, MLRIT · Best Entrepreneurial Idea Award 2023</span></div>
              <div className="about-fact"><b>Currently</b><span>Growth Lead at HILO DESIGN · Head of Strategy at ORAMAS</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Experience</div>
          <h2>Where I've shipped and grown</h2>
          <p>Every role owned end-to-end — product, marketing and the numbers that prove it.</p>
        </div>
        <div className="timeline">
          {JOBS.map((j) => (
            <article className="job" key={j.org + j.dates}>
              <div className="job-head">
                <h3>{j.role}</h3>
                <span className="job-dates">{j.dates}</span>
              </div>
              <div>
                <span className="org">{j.org} · {j.place}</span>
              </div>
              <p className="job-tagline">{j.tagline}</p>
              <ul>{j.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="section section-band" id="case-studies">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Case Studies</div>
          <h2>Proof, not promises</h2>
          <p>Three bets that paid off — the problem, the approach, and the impact in numbers.</p>
        </div>
        <div className="cases">
          {CASES.map((c) => (
            <article className="case" key={c.title}>
              <div className="case-emoji">{c.emoji}</div>
              <div>
                <div className="case-org">{c.org}</div>
                <h3>{c.title}</h3>
              </div>
              <div className="case-tags">{c.tags.map((t) => <span className="case-tag" key={t}>{t}</span>)}</div>
              {c.blocks.map((b, i) => (
                <div className="case-block" key={i}>
                  <span className="k">{b.k}</span>
                  {b.text && <p>{b.text}</p>}
                  {b.ul && <ul>{b.ul.map((li, j) => <li key={j}>{li}</li>)}</ul>}
                </div>
              ))}
              <div className="case-impact">
                {c.impact.map((im) => <span className="impact-chip" key={im}>{im}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section className="section" id="brands">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Brands</div>
          <h2>Brands I've built and grown</h2>
          <p>From sub-brands I launched from zero, to an eleven-brand consulting portfolio where I was the sole strategic partner.</p>
        </div>
        {BRAND_GROUPS.map((g) => (
          <div className="brand-group" key={g.label}>
            <div className="bg-label">{g.label}</div>
            <div className="brand-wall">
              {g.items.map((b) => (
                <span className={`brand-chip${g.highlight ? " highlight" : ""}`} key={b}>{b}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-band" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div className="kicker">Skills & Tools</div>
          <h2>What I bring to the table</h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <h3><span>{s.icon}</span>{s.title}</h3>
              <div className="tags">{s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="contact-cta">
          <h2>Let's build something that compounds.</h2>
          <p>
            Open to Product Management and Growth roles — and to building with founders who want
            more than a roadmap. B.Tech in Computer Science (MLRIT), former VP of the Entrepreneurship
            Cell and winner of the Best Entrepreneurial Idea Award (2023).
          </p>
          <div className="contact-links">
            <a href={`mailto:${PROFILE.email}`}>✉️ {PROFILE.email}</a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>📞 {PROFILE.phone}</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
          </div>
          <div>
            <a className="btn btn-primary" href="resume.pdf" download>Download résumé (PDF)</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} {PROFILE.name} · Product & Growth</span>
        <span>Designed in Hyderabad · Built with Next.js</span>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <About />
        <Experience />
        <CaseStudies />
        <Brands />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
