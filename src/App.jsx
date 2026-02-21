import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Orbit,
  Layers,
  LineChart,
  Shield,
  Sparkles,
  Globe,
  Mail,
  Send,
  Activity,
  Cpu,
  Radar,
} from 'lucide-react';

const copy = {
  zh: {
    nav: ['Capabilities', 'Work', 'About'],
    talk: "Let's Talk",
    locale: '中文',
    heroEyebrow: 'APAC · Product / Strategy / Web3',
    heroTitle1: 'Digital Product Partner',
    heroTitle2: 'for Bold Web3 Teams',
    heroCopy:
      '我帮助团队把复杂叙事转成可执行产品：从 0-1 架构、机制设计到增长落地，在速度和质量之间建立稳定平衡。',
    heroSignals: ['Live Product Ops', 'On-chain Research', 'GTM Execution'],
    statLabels: ['累计用户规模', '生态集成数量', '策略执行效率'],
    viewWork: 'View Selected Work',
    contact: 'Contact',
    trustTitle: 'Trusted across product, protocol and growth motions',
    trustTags: ['Wallet', 'PayFi', 'DeFi', 'Token Ops', 'DevRel'],
    capTitle: 'Capabilities',
    capHead: '设计可持续推进的产品与增长系统',
    workTitle: 'Selected Work',
    workHead: '以产品结果为核心的项目实践',
    researchTitle: 'Past Research Articles',
    researchSub: '文章来源：X @shaunh666 · Google Docs',
    railHint: '向下滚动查看完整叙事',
    experience: 'Experience',
    expHead: '近期职业节点',
    contactKicker: 'Open to Product / Strategy Collaborations',
    contactHead: '如果你正在构建下一代 Web3 产品，我们可以聊聊。',
    metrics: 'Impact',
    linkLabel: 'Open Case',
    trustLineA: 'Systemic Thinking',
    trustLineB: 'Builder Speed',
  },
  en: {
    nav: ['Capabilities', 'Work', 'About'],
    talk: "Let's Talk",
    locale: 'EN',
    heroEyebrow: 'APAC · Product / Strategy / Web3',
    heroTitle1: 'Digital Product Partner',
    heroTitle2: 'for Bold Web3 Teams',
    heroCopy:
      'I help teams turn complex narratives into executable products, balancing speed with rigor from 0-1 architecture to growth execution.',
    heroSignals: ['Live Product Ops', 'On-chain Research', 'GTM Execution'],
    statLabels: ['Cumulative user base', 'Ecosystem integrations', 'Execution efficiency'],
    viewWork: 'View Selected Work',
    contact: 'Contact',
    trustTitle: 'Trusted across product, protocol and growth motions',
    trustTags: ['Wallet', 'PayFi', 'DeFi', 'Token Ops', 'DevRel'],
    capTitle: 'Capabilities',
    capHead: 'Build durable product and growth systems',
    workTitle: 'Selected Work',
    workHead: 'Case studies centered on business outcomes',
    researchTitle: 'Past Research Articles',
    researchSub: 'Source: X @shaunh666 · Google Docs',
    railHint: 'Scroll down to move through the story',
    experience: 'Experience',
    expHead: 'Recent milestones',
    contactKicker: 'Open to Product / Strategy Collaborations',
    contactHead: 'If you are building a next-gen Web3 product, let’s talk.',
    metrics: 'Impact',
    linkLabel: 'Open Case',
    trustLineA: 'Systemic Thinking',
    trustLineB: 'Builder Speed',
  },
};

const capabilityItems = {
  zh: [
    {
      title: 'Product Systems',
      desc: '将复杂业务流程拆成清晰的产品系统，从信息架构、流程设计到数据回路，保持可扩展与可维护。',
      icon: Layers,
    },
    {
      title: 'Web3 Strategy',
      desc: '围绕代币机制、用户增长与生态合作，设计可执行的 GTM 路线，兼顾速度、风控与长期价值。',
      icon: Orbit,
    },
    {
      title: 'Data-led Execution',
      desc: '通过行为数据与链上指标持续优化决策，形成“上线-观测-迭代”的闭环推进方式。',
      icon: LineChart,
    },
  ],
  en: [
    {
      title: 'Product Systems',
      desc: 'Break complex business flows into clear product systems with scalable information architecture and measurable loops.',
      icon: Layers,
    },
    {
      title: 'Web3 Strategy',
      desc: 'Design executable GTM paths across token models, user growth and ecosystem partnerships with practical risk controls.',
      icon: Orbit,
    },
    {
      title: 'Data-led Execution',
      desc: 'Use behavioral and on-chain signals to drive iterative decisions through launch-observe-optimize cycles.',
      icon: LineChart,
    },
  ],
};

const projectItems = {
  zh: [
    {
      label: 'Wallet Platform',
      title: 'BuzzUp Social Wallet',
      text: '主导 0-1 产品架构，覆盖任务系统、后台管理、反作弊和生态接入，形成稳定增长飞轮。',
      metrics: ['300k+ users', '20+ integrations', 'SEA growth loop'],
      tags: ['Product Architecture', 'Growth Engine', 'Risk Control'],
      href: '#',
      accent: 'from-cyan-400/35 to-sky-400/5',
    },
    {
      label: 'Protocol Research',
      title: 'Pendle / RateX Insights',
      text: '聚焦收益拆分与利率市场机制，产出可落地的产品化建议与流动性策略框架。',
      metrics: ['Yield split model', 'AMM hypotheses', 'Token design notes'],
      tags: ['Tokenomics', 'Mechanism Design', 'Research'],
      href: '#',
      accent: 'from-emerald-300/35 to-teal-300/5',
    },
    {
      label: 'Community & DevRel',
      title: 'W3Hub APAC Builder Network',
      text: '持续组织技术活动与生态连接，建立高质量开发者网络，推动协议与团队高效落地。',
      metrics: ['30+ events', '4000+ builders', 'multi-chain programs'],
      tags: ['APAC Community', 'DevRel', 'Ecosystem Ops'],
      href: '#',
      accent: 'from-zinc-200/30 to-zinc-100/5',
    },
  ],
  en: [
    {
      label: 'Wallet Platform',
      title: 'BuzzUp Social Wallet',
      text: 'Led a 0-1 product architecture across task system, admin console, anti-fraud and ecosystem integrations.',
      metrics: ['300k+ users', '20+ integrations', 'SEA growth loop'],
      tags: ['Product Architecture', 'Growth Engine', 'Risk Control'],
      href: '#',
      accent: 'from-cyan-400/35 to-sky-400/5',
    },
    {
      label: 'Protocol Research',
      title: 'Pendle / RateX Insights',
      text: 'Delivered product-ready research around yield-splitting and rate-market mechanisms with liquidity strategy framing.',
      metrics: ['Yield split model', 'AMM hypotheses', 'Token design notes'],
      tags: ['Tokenomics', 'Mechanism Design', 'Research'],
      href: '#',
      accent: 'from-emerald-300/35 to-teal-300/5',
    },
    {
      label: 'Community & DevRel',
      title: 'W3Hub APAC Builder Network',
      text: 'Built a high-signal developer network through recurring technical events and ecosystem-level collaboration programs.',
      metrics: ['30+ events', '4000+ builders', 'multi-chain programs'],
      tags: ['APAC Community', 'DevRel', 'Ecosystem Ops'],
      href: '#',
      accent: 'from-zinc-200/30 to-zinc-100/5',
    },
  ],
};

const timelineItems = {
  zh: [
    {
      time: '2024.12 - Present',
      role: 'Strategy & Product Lead · BuzzUp',
      detail: '负责 Web3 社交钱包的产品系统、生态集成与区域增长策略。',
    },
    {
      time: '2024.01 - 2024.12',
      role: 'Strategic Researcher · Tide Group',
      detail: '主导 DeFi / AI Infra 方向投研与产品化策略。',
    },
    {
      time: '2024.09 - Present',
      role: 'Co-founder · W3Hub',
      detail: '推动 APAC 开发者社区建设与多生态合作落地。',
    },
  ],
  en: [
    {
      time: '2024.12 - Present',
      role: 'Strategy & Product Lead · BuzzUp',
      detail: 'Leading product systems, integrations and regional growth for a social wallet.',
    },
    {
      time: '2024.01 - 2024.12',
      role: 'Strategic Researcher · Tide Group',
      detail: 'Owned DeFi and AI Infra research translated into actionable product strategy.',
    },
    {
      time: '2024.09 - Present',
      role: 'Co-founder · W3Hub',
      detail: 'Driving APAC developer community and multi-ecosystem collaboration.',
    },
  ],
};

const researchPosts = {
  zh: [
    {
      title: '长文研究：利率市场机制与产品化路径（Google Doc）',
      excerpt: '完整版本研究文档，系统梳理收益拆分、利率市场结构与可执行产品框架。',
      tag: 'Google Doc',
      href: 'https://docs.google.com/document/d/1-ePt1jzCeur32UTVgzbxUkBmSIpnWAAZVmpAxHXLOAA/edit?usp=sharing',
    },
    {
      title: 'Pendle 收益拆分机制：PT / YT 如何重塑利率市场',
      excerpt: '从用户收益结构与协议激励机制出发，拆解收益代币化带来的交易机会与风险边界。',
      tag: 'DeFi Research',
      href: 'https://x.com/shaunh666',
    },
    {
      title: 'RateX 与链上利率市场：流动性效率的关键变量',
      excerpt: '围绕 AMM 深度、期限结构与做市行为，分析利率协议在不同市场周期中的表现。',
      tag: 'Protocol Analysis',
      href: 'https://x.com/shaunh666/status/1873297820951998878?s=20',
    },
    {
      title: 'PayFi 产品路径：稳定币结算与跨境支付的可行框架',
      excerpt: '结合 B2B 与 B2C 场景，梳理支付体验、合规约束与资金效率的平衡策略。',
      tag: 'PayFi',
      href: 'https://x.com/shaunh666/status/1857640946235748861?s=20',
    },
  ],
  en: [
    {
      title: 'Long-form Research: Rates Market Mechanics (Google Doc)',
      excerpt: 'Full-length write-up covering yield split structure, rate-market dynamics and product execution pathways.',
      tag: 'Google Doc',
      href: 'https://docs.google.com/document/d/1-ePt1jzCeur32UTVgzbxUkBmSIpnWAAZVmpAxHXLOAA/edit?usp=sharing',
    },
    {
      title: 'Pendle Yield Split: How PT / YT reshape rate markets',
      excerpt: 'A breakdown of tokenized yield design, user incentives and practical risk boundaries in on-chain rates.',
      tag: 'DeFi Research',
      href: 'https://x.com/shaunh666',
    },
    {
      title: 'RateX and On-chain Rates: variables behind liquidity efficiency',
      excerpt: 'Analyzing AMM depth, term structure and market-making behavior across different market phases.',
      tag: 'Protocol Analysis',
      href: 'https://x.com/shaunh666/status/1873297820951998878?s=20',
    },
    {
      title: 'PayFi Product Path: stablecoin settlement for cross-border flows',
      excerpt: 'Mapping product and compliance constraints for practical B2B and B2C payment experiences.',
      tag: 'PayFi',
      href: 'https://x.com/shaunh666/status/1857640946235748861?s=20',
    },
  ],
};

const partnerLogos = [
  { name: 'Huma Finance', logo: '/logos/huma-finance.svg', href: 'https://huma.finance' },
  { name: 'Solar', logo: '/logos/solar.svg', href: 'https://solar.org' },
  { name: 'Solana Foundation', logo: '/logos/solana-foundation.svg', href: 'https://solana.org' },
  { name: 'ArrivalX', logo: '/logos/arrivalx.svg', href: 'https://arrivalx.io' },
  { name: 'Tide Group', logo: '/logos/tide-group.svg', href: 'https://www.tide.group' },
  { name: 'SNS', logo: '/logos/sns.svg', href: 'https://www.sns.id' },
];

const vibeExperience = {
  zh: [
    {
      title: 'BuzzUp · Strategy & Product Lead',
      points: ['300k+ 用户增长规模', '20+ DeFi / AI 协议接入', '覆盖产品架构、风控与增长闭环'],
    },
    {
      title: 'Advisor · Huma Finance / ArrivalX',
      points: ['聚焦 PayFi 与跨境支付场景优化', '重构 B/C 端关键用户路径', '提升机构合作与转化效率'],
    },
    {
      title: 'W3Hub & Solar Solana · Community Ops',
      points: ['30+ 线下活动策划执行', '4000+ 开发者与用户触达', '持续推动 APAC 生态联动'],
    },
  ],
  en: [
    {
      title: 'BuzzUp · Strategy & Product Lead',
      points: ['Scaled to 300k+ users', '20+ DeFi / AI integrations', 'Built product, risk-control and growth loops'],
    },
    {
      title: 'Advisor · Huma Finance / ArrivalX',
      points: ['Focused on PayFi and cross-border payment flows', 'Reworked core B2B/B2C user journeys', 'Improved partner conversion efficiency'],
    },
    {
      title: 'W3Hub & Solar Solana · Community Ops',
      points: ['30+ offline technical events', '4000+ developers and users reached', 'Sustained APAC ecosystem collaborations'],
    },
  ],
};

const web2Experience = {
  zh: [
    {
      title: 'Cushman & Wakefield / HHM · 战略咨询',
      points: ['5 年+ Web2 战略与咨询交付经验', '端到端千万级项目交付（政府/国央企/金融机构）', '输出估值、收益与可行性模型用于决策'],
    },
    {
      title: 'Tide Group · 做市与投研协同',
      points: ['主导 DeFi 与 AI Infra 叙事研究', '参与 0-1 项目定位和市场策略', '连接公链、加速器与 VC 资源网络'],
    },
  ],
  en: [
    {
      title: 'Cushman & Wakefield / HHM · Strategic Consulting',
      points: ['5+ years in Web2 strategy and consulting delivery', 'Led end-to-end multi-million RMB projects', 'Built valuation, return and feasibility models for decisions'],
    },
    {
      title: 'Tide Group · MM + Research Collaboration',
      points: ['Led DeFi and AI Infra narrative research', 'Supported 0-1 project positioning and market strategy', 'Worked across chain, accelerator and VC partner networks'],
    },
  ],
};

const experienceKpis = {
  zh: ['300k+ Users', '20+ Integrations', '30+ Meetups', '4000+ Builders', '5+ Years Web2'],
  en: ['300k+ Users', '20+ Integrations', '30+ Meetups', '4000+ Builders', '5+ Years Web2'],
};

const statValues = [
  { value: 300, suffix: 'k+' },
  { value: 20, suffix: '+' },
  { value: 96, suffix: '%' },
];

const marqueeItems = ['Wallet Systems', 'Token Mechanics', 'Growth Loops', 'Protocol Research', 'APAC DevRel'];

export default function App() {
  const [lang, setLang] = useState('zh');
  const workSectionRef = useRef(null);
  const railRef = useRef(null);
  const pinRef = useRef(null);
  const t = copy[lang];
  const caps = useMemo(() => capabilityItems[lang], [lang]);
  const works = useMemo(() => projectItems[lang], [lang]);
  const timeline = useMemo(() => timelineItems[lang], [lang]);
  const research = useMemo(() => researchPosts[lang], [lang]);

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [lang]);

  useEffect(() => {
    const section = workSectionRef.current;
    const rail = railRef.current;
    const pin = pinRef.current;
    if (!section || !rail || !pin) return undefined;

    let maxShift = 0;
    let rafId = 0;

    const apply = () => {
      if (window.innerWidth <= 1024) {
        section.style.setProperty('--pin-extra', '0px');
        rail.style.setProperty('--rail-shift', '0px');
        return;
      }

      maxShift = Math.max(0, rail.scrollWidth - pin.clientWidth);
      section.style.setProperty('--pin-extra', `${maxShift}px`);
      tick();
    };

    const tick = () => {
      if (window.innerWidth <= 1024) return;
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(Math.max(-section.getBoundingClientRect().top / travel, 0), 1);
      const shift = -progress * maxShift;
      rail.style.setProperty('--rail-shift', `${shift}px`);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    };

    apply();
    window.addEventListener('resize', apply);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', apply);
      window.removeEventListener('scroll', onScroll);
    };
  }, [lang, works.length]);

  return (
    <div className="site-shell">
      <div className="bg-orb bg-orb-top" aria-hidden="true" />
      <div className="bg-orb bg-orb-bottom" aria-hidden="true" />
      <div className="noise-layer" aria-hidden="true" />

      <header className="top-nav" data-reveal>
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <span className="brand-dot" />
            Shaun Han
          </a>
          <nav className="nav-links">
            <a href="#capabilities">{t.nav[0]}</a>
            <a href="#work">{t.nav[1]}</a>
            <a href="#about">{t.nav[2]}</a>
          </nav>
          <div className="nav-right">
            <button className="lang-toggle" onClick={() => setLang((v) => (v === 'zh' ? 'en' : 'zh'))}>
              {t.locale}
            </button>
            <a href="#contact" className="nav-cta">
              {t.talk} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero container" data-reveal>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">
                <Globe size={14} />
                {t.heroEyebrow}
              </p>
              <h1>
                {t.heroTitle1}
                <br />
                {t.heroTitle2}
              </h1>
              <p className="hero-copy">{t.heroCopy}</p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  {t.viewWork}
                  <ArrowUpRight size={16} />
                </a>
                <a href="#contact" className="btn btn-ghost">
                  {t.contact}
                </a>
              </div>
            </div>

            <aside className="hero-tech" data-reveal>
              <div className="radar-core" aria-hidden="true">
                <div className="ring ring-a" />
                <div className="ring ring-b" />
                <div className="ring ring-c" />
                <div className="core-dot" />
              </div>
              <div className="tech-head">
                <Activity size={16} />
                <span>Live Signals</span>
              </div>
              <div className="signal-chips">
                {t.heroSignals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <div className="stat-grid">
                {statValues.map((item, index) => (
                  <MetricStat key={t.statLabels[index]} value={item.value} suffix={item.suffix} label={t.statLabels[index]} />
                ))}
              </div>
              <div className="tech-foot">
                <span>
                  <Cpu size={14} />
                  Data Pipeline
                </span>
                <span>
                  <Radar size={14} />
                  Strategy Radar
                </span>
              </div>
            </aside>
          </div>
          <div className="hero-marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="container trust-strip" aria-label="Trusted areas" data-reveal>
          <p>{t.trustTitle}</p>
          <div>
            {t.trustTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section id="capabilities" className="container section" data-reveal>
          <div className="section-head">
            <p>{t.capTitle}</p>
            <h2>{t.capHead}</h2>
          </div>
          <div className="cap-grid">
            {caps.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="cap-card" data-reveal>
                  <div className="cap-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="work" className="container section work-section" data-reveal ref={workSectionRef}>
          <div className="section-head">
            <p>{t.workTitle}</p>
            <h2>{t.workHead}</h2>
          </div>
          <p className="rail-hint">{t.railHint}</p>
          <div className="story-rail-wrap" data-reveal ref={pinRef}>
            <div className="story-rail" ref={railRef}>
              {works.map((project, index) => (
                <article key={project.title} className="work-card story-card" data-step={index + 1}>
                  <div className={`work-accent bg-gradient-to-br ${project.accent}`} />
                  <p className="work-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p className="work-text">{project.text}</p>
                  <div className="mini-block">
                    <strong>{t.metrics}</strong>
                    <ul>
                      {project.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a className="open-link" href={project.href}>
                    {t.linkLabel}
                    <ArrowUpRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <div className="research-wrap" data-reveal>
            <div className="research-head">
              <h3>{t.researchTitle}</h3>
              <a href="https://x.com/shaunh666" target="_blank" rel="noreferrer">
                {t.researchSub}
              </a>
            </div>
            <div className="research-grid">
              {research.map((post) => (
                <a className="research-card" key={post.title} href={post.href} target="_blank" rel="noreferrer">
                  <span>{post.tag}</span>
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <strong>{post.href.includes('docs.google.com') ? 'Read Doc →' : 'Read on X →'}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container section partner-section" data-reveal>
          <div className="section-head">
            <p>Advisory & Partners</p>
            <h2>{lang === 'zh' ? '过往顾问与合作项目' : 'Past Advisory and Collaborations'}</h2>
          </div>
          <div className="partner-rail">
            <div className="partner-track">
              {[...partnerLogos, ...partnerLogos].map((item, index) => (
                <a className="partner-card" key={`${item.name}-${index}`} href={item.href} target="_blank" rel="noreferrer">
                  <img className="partner-logo" src={item.logo} alt={item.name} loading="lazy" />
                  <span className="partner-name">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="container section timeline-wrap" data-reveal>
          <div className="section-head">
            <p>{t.experience}</p>
            <h2>{t.expHead}</h2>
          </div>
          <div className="timeline">
            {timeline.map((item) => (
              <article key={item.role} className="timeline-item" data-reveal>
                <p className="time">{item.time}</p>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="kpi-row" data-reveal>
            {experienceKpis[lang].map((kpi) => (
              <span key={kpi}>{kpi}</span>
            ))}
          </div>

          <div className="exp-split">
            <div className="exp-column" data-reveal>
              <h3>{lang === 'zh' ? 'Vibe Experience' : 'Vibe Experience'}</h3>
              {vibeExperience[lang].map((item) => (
                <article key={item.title} className="exp-card">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="exp-column" data-reveal>
              <h3>{lang === 'zh' ? 'Web2 Experience' : 'Web2 Experience'}</h3>
              {web2Experience[lang].map((item) => (
                <article key={item.title} className="exp-card">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container contact" data-reveal>
          <p className="contact-kicker">
            <Sparkles size={14} />
            {t.contactKicker}
          </p>
          <h2>{t.contactHead}</h2>
          <div className="contact-actions">
            <a href="mailto:shaun1chain@gmail.com" className="btn btn-primary">
              <Mail size={16} />
              shaun1chain@gmail.com
            </a>
            <a href="https://t.me/shaunh666" target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Send size={16} />
              @shaunh666
            </a>
          </div>
          <div className="trust-line">
            <span>
              <Shield size={14} />
              {t.trustLineA}
            </span>
            <span>
              <Orbit size={14} />
              {t.trustLineB}
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricStat({ value, suffix, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    let rafId = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(value * (1 - (1 - progress) * (1 - progress))));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value]);

  return (
    <div className="metric-card">
      <p>
        {count}
        {suffix}
      </p>
      <span>{label}</span>
    </div>
  );
}
