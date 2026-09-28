import { useEffect, useState } from 'react'
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Code2, Download,
  Github, GraduationCap, Instagram, Linkedin, Mail, MapPin, Menu, Moon,
  Phone, Send, Sparkles, Sun, UserRound, X
} from 'lucide-react'
import { content } from './data/content'

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true)
        let start = 0
        const duration = 900
        const step = Math.max(1, Math.round(value / 25))
        const timer = window.setInterval(() => {
          start += step
          if (start >= value) {
            start = value
            window.clearInterval(timer)
          }
          setCurrent(start)
        }, duration / 25)
      }
    }, { threshold: 0.8 })
    const el = document.getElementById(`counter-${value}-${suffix}`)
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix, started])

  return <span id={`counter-${value}-${suffix}`}>{current}{suffix}</span>
}

function ThemeToggle({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="icon-btn"
      aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={dark ? 'Modo claro' : 'Modo escuro'}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

function Profile({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const p = content.profile
  return (
    <aside className="profile-card">
      <div className="flex items-center justify-between mb-5">
        <span className="eyebrow">PORTFÓLIO</span>
        <ThemeToggle dark={dark} setDark={setDark} />
      </div>

      <div className="relative">
        <img
          src={p.photo}
          alt={`Foto de ${p.name}`}
          className="profile-photo"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextElementSibling?.classList.remove('hidden')
          }}
        />
        <div className="profile-fallback hidden">
          <UserRound size={58} />
        </div>
      </div>

      <div className="availability"><span />{p.availability}</div>

      <h1 className="profile-name">{p.name}</h1>
      <p className="profile-role">{p.role}</p>
      <p className="text-muted text-sm mt-1">{p.secondaryRole}</p>

      <div className="socials">
        <a href={p.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href={p.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={p.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <a className="btn btn-primary" href={p.cv} download><Download size={16} /> Baixar CV</a>
        <a className="btn btn-secondary" href="#contato">Fale comigo</a>
      </div>

      <div className="profile-meta">
        <div><span>Localização</span><strong>{p.location}</strong></div>
        <div><span>Origem</span><strong>{p.origin}</strong></div>
        <div><span>Sobre mim</span><strong>{p.age} anos • {p.family}</strong></div>
      </div>
    </aside>
  )
}

function SectionTitle({ icon, eyebrow, title }: { icon: React.ReactNode; eyebrow: string; title: string }) {
  return (
    <div className="section-title reveal">
      <div className="section-icon">{icon}</div>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function Hero() {
  const p = content.profile
  return (
    <section id="inicio" className="section hero-section">
      <div className="hero-top reveal">
        <span className="eyebrow">SEJA BEM-VINDO</span>
        <span className="hero-line" />
        <span className="text-muted text-sm">Diego Maximo • Florianópolis, SC</span>
      </div>
      <h2 className="hero-heading reveal delay-1">
        Eu sou <span>{p.name},</span><br />
        moro em <span>Florianópolis, SC.</span>
      </h2>
      <p className="hero-copy reveal delay-2">{p.bio}</p>

      <div className="stats-grid">
        {content.stats.map((stat, i) => (
          <div className={`stat-card reveal delay-${Math.min(i + 1, 3)}`} key={stat.label}>
            <strong><Counter value={stat.value} suffix={stat.suffix} /></strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experiencia" className="section">
      <SectionTitle icon={<BriefcaseBusiness size={20} />} eyebrow="TRAJETÓRIA" title="Experiência" />
      <div className="timeline">
        {content.experience.map((item, i) => (
          <article className="timeline-card reveal" key={item.company}>
            <div className="timeline-dot">{i + 1}</div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3>{item.role}</h3>
                  <p className="accent-text">{item.company}</p>
                </div>
                <span className="period">{item.period}</span>
              </div>
              <p className="text-muted mt-4 leading-7">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const [showMore, setShowMore] = useState(false)
  const visible = showMore ? content.projects : content.projects.slice(0, 3)
  return (
    <section id="projetos" className="section">
      <SectionTitle icon={<Code2 size={20} />} eyebrow="TRABALHOS" title="Projetos" />
      <div className="project-grid">
        {visible.map((project, i) => (
          <a href={project.url} target="_blank" rel="noreferrer" className={`project-card reveal delay-${Math.min(i + 1, 3)}`} key={project.title}>
            <div className="project-image-wrap">
              <img src={project.image} alt="" className="project-image" />
              <span className="project-arrow"><ArrowUpRight size={20} /></span>
            </div>
            <div className="p-5">
              <span className="tag">{project.category}</span>
              <h3 className="mt-3">{project.title}</h3>
              <p className="text-muted text-sm mt-2 leading-6">{project.detail}</p>
            </div>
          </a>
        ))}
      </div>
      {content.projects.length > 3 && (
        <button className="outline-btn mx-auto mt-8" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Mostrar menos' : 'Ver mais'} <ChevronDown size={17} className={showMore ? 'rotate-180' : ''} />
        </button>
      )}
    </section>
  )
}

function Education() {
  return (
    <section id="educacao" className="section">
      <SectionTitle icon={<GraduationCap size={20} />} eyebrow="FORMAÇÃO" title="Educação" />
      <div className="grid gap-4">
        {content.education.map((item) => (
          <article className="info-card reveal" key={item.title}>
            <div className="mini-icon"><GraduationCap size={19} /></div>
            <div className="flex-1">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <h3>{item.title}</h3>
                  <p className="accent-text mt-1">{item.institution}</p>
                </div>
                <span className="period">{item.period}</span>
              </div>
              <p className="text-muted mt-3 leading-7">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Tools() {
  return (
    <section id="ferramentas" className="section">
      <SectionTitle icon={<Sparkles size={20} />} eyebrow="STACK" title="Ferramentas e tecnologias" />
      <div className="tools-grid">
        {content.tools.map((tool, i) => (
          <div className="tool-card reveal" key={tool.name} style={{ transitionDelay: `${i * 45}ms` }}>
            <div className="tool-icon">{tool.name.slice(0, 1)}</div>
            <div><h3>{tool.name}</h3><p>{tool.category}</p></div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const p = content.profile
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.includes('@') || !message.trim()) return
    setSent(true)
  }

  return (
    <section id="contato" className="section contact-section">
      <SectionTitle icon={<Send size={20} />} eyebrow="CONTATO" title="Vamos conversar!" />
      <div className="contact-grid">
        <a className="contact-card reveal" href={p.contact.whatsapp} target="_blank" rel="noreferrer">
          <div className="contact-icon"><Phone size={20} /></div>
          <span>Telefone / WhatsApp</span>
          <strong>{p.contact.phone}</strong>
        </a>
        <a className="contact-card reveal" href={`mailto:${p.contact.email}`}>
          <div className="contact-icon"><Mail size={20} /></div>
          <span>E-mail</span>
          <strong>{p.contact.email}</strong>
        </a>
        <div className="contact-card reveal">
          <div className="contact-icon"><MapPin size={20} /></div>
          <span>Localização</span>
          <strong>{p.location}</strong>
        </div>
      </div>

      <form className="contact-form reveal" onSubmit={submit}>
        <div className="grid md:grid-cols-2 gap-4">
          <label>Nome<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" required /></label>
          <label>E-mail<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="voce@email.com" required /></label>
        </div>
        <label>Mensagem<textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Como posso ajudar?" rows={6} required /></label>
        <button className="btn btn-primary w-full sm:w-auto" type="submit"><Send size={16} /> Enviar mensagem</button>
        {sent && <div className="success"><Check size={17} /> Mensagem enviada com sucesso (demonstração).</div>}
      </form>
    </section>
  )
}

function Footer() {
  return <footer>© {new Date().getFullYear()} Diego Maximo. Todos os direitos reservados.</footer>
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [mobileOpen, setMobileOpen] = useState(false)
  useReveal()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const nav = [
    ['inicio', 'Início'],
    ['experiencia', 'Experiência'],
    ['projetos', 'Projetos'],
    ['educacao', 'Educação'],
    ['ferramentas', 'Ferramentas'],
    ['contato', 'Contato'],
  ]

  return (
    <div className="site-shell">
      <header className="mobile-header">
        <a href="#inicio" className="font-bold">Diego<span className="accent-text">.</span></a>
        <div className="flex gap-2">
          <ThemeToggle dark={dark} setDark={setDark} />
          <button className="icon-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Abrir menu">
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {mobileOpen && (
          <nav className="mobile-nav">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}</a>)}
          </nav>
        )}
      </header>

      <div className="layout">
        <div className="sidebar"><Profile dark={dark} setDark={setDark} /></div>
        <main>
          <nav className="desktop-nav">
            {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </nav>
          <Hero />
          <Experience />
          <Projects />
          <Education />
          <Tools />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App