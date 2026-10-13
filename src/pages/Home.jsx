import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const TOPICS = [
  { icon: 'fa-python',          label: 'Python',       sub: 'Beginner Friendly', brand: true },
  { icon: 'fa-js',              label: 'JavaScript',   sub: 'Web Language',      brand: true },
  { icon: 'fa-code',            label: 'HTML / CSS',   sub: 'Web Foundations' },
  { icon: 'fa-react',           label: 'React',        sub: 'UI Framework',      brand: true },
  { icon: 'fa-node-js',         label: 'Node.js',      sub: 'Backend JS',        brand: true },
  { icon: 'fa-java',            label: 'Java',         sub: 'OOP Language',      brand: true },
  { icon: 'fa-laptop-code',     label: 'C / C++',      sub: 'Systems' },
  { icon: 'fa-brain',           label: 'DSA',          sub: 'Data Structures' },
  { icon: 'fa-database',        label: 'SQL',          sub: 'Databases' },
  { icon: 'fa-git-alt',         label: 'Git & GitHub', sub: 'Version Control',   brand: true },
  { icon: 'fa-file-code',       label: 'TypeScript',   sub: 'Typed JS' },
  { icon: 'fa-layer-group',     label: 'Full-Stack',   sub: 'All-in-One',        highlight: true },
];

const COURSES = [
  {
    track: 'Full-Stack', title: 'Full-Stack Web Engineering',
    desc: 'Go from zero to building live production web apps. HTML → CSS → JavaScript → Node.js → Databases → Deployment.',
    tags: ['HTML/CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    tagColors: ['#00dbe7', '#f7df1e', '#68a063', '#b9cacb'],
    accent: 'linear-gradient(90deg,#00dbe7,#74f5ff)', weeks: 12, lessons: '30+', level: 'Beginner → Advanced',
  },
  {
    track: 'Python', title: 'Python for Beginners',
    desc: 'The most beginner-friendly language. Learn Python from scratch — variables, loops, functions, OOP, and beyond.',
    tags: ['Variables', 'Functions', 'OOP', 'File I/O'],
    tagColors: ['#74b8e6','#74b8e6','#74b8e6','#b9cacb'],
    accent: 'linear-gradient(90deg,#3776ab,#ffd343)', weeks: 6, lessons: '20+', level: 'Beginner',
  },
  {
    track: 'DSA', title: 'Data Structures & Algorithms',
    desc: 'Crack coding interviews. Master arrays, linked lists, trees, graphs, sorting, searching, and dynamic programming.',
    tags: ['Arrays', 'Trees', 'Graphs', 'DP'],
    tagColors: ['#ff24e4','#ff24e4','#ff24e4','#b9cacb'],
    accent: 'linear-gradient(90deg,#ff24e4,#fface8)', weeks: 8, lessons: '40+', level: 'Intermediate',
  },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/library?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="page-background" />
      <div className="scanline" />
      <Navbar activePage="Home" />

      {/* HERO */}
      <section style={{ paddingTop: 96, paddingBottom: 64, padding: '96px 24px 64px', maxWidth: 1280, margin: '0 auto', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
          <div className="fade-up">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
              {['Free Platform','Hands-On Coding','Real-World Skills'].map((b,i) => (
                <span key={b} style={{
                  fontFamily: 'JetBrains Mono', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block',
                  ...(i===0 ? { background:'rgba(0,219,231,0.15)', color:'#00dbe7', border:'1px solid rgba(0,219,231,0.3)' }
                    : i===1 ? { background:'rgba(255,36,228,0.12)', color:'#ff24e4', border:'1px solid rgba(255,36,228,0.3)' }
                    : { background:'rgba(0,230,118,0.12)', color:'#00e676', border:'1px solid rgba(0,230,118,0.3)' })
                }}>{b}</span>
              ))}
            </div>

            <h1 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(36px,5vw,60px)', fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', color:'#e3e1e9', marginBottom:20 }}>
              Learn to <span style={{ color:'#00dbe7', textShadow:'0 0 20px rgba(0,219,231,0.4)' }}>Code.</span><br/>
              Build Real Projects.<br/>
              <span style={{ color:'#fface8' }}>Get Hired.</span>
            </h1>

            <p style={{ color:'#b9cacb', fontSize:18, lineHeight:1.7, maxWidth:540, marginBottom:32 }}>
              From your very first{' '}
              <code style={{ background:'rgba(0,219,231,0.1)', color:'#00dbe7', padding:'2px 6px', borderRadius:4, fontFamily:'JetBrains Mono', fontSize:14 }}>Hello World</code>
              {' '}to deploying full-stack apps — Codust.hub gives you structured tutorials, real coding exercises, and a clear path to mastery.
            </p>

            <div style={{ display:'flex', flexWrap:'wrap', gap:16, marginBottom:32 }}>
              <Link to="/courses" style={{ background:'#00dbe7', color:'#00363a', fontWeight:700, padding:'12px 28px', borderRadius:6, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, transition:'all 0.2s' }}>
                <span className="material-symbols-outlined" style={{ fontSize:20 }}>play_circle</span>
                Start Free Course
              </Link>
              <Link to="/library" style={{ border:'1px solid rgba(0,219,231,0.5)', color:'#00dbe7', padding:'12px 28px', borderRadius:6, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, transition:'all 0.2s' }}>
                <span className="material-symbols-outlined" style={{ fontSize:20 }}>library_books</span>
                Browse Topics
              </Link>
            </div>

            {/* Search */}
            <div style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px', borderRadius:8, background:'rgba(26,27,33,0.95)', border:'1px solid rgba(0,219,231,0.2)' }}>
              <span className="material-symbols-outlined" style={{ color:'#849495', fontSize:18 }}>search</span>
              <input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={handleSearch}
                placeholder='"Python loops", "React hooks", "SQL joins" ...'
                style={{ background:'transparent', fontSize:14, color:'#e3e1e9', border:'none', outline:'none', flex:1, minWidth:0, fontFamily:'Geist' }}
              />
              <kbd style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#849495', background:'rgba(58,73,75,0.6)', padding:'2px 8px', borderRadius:4 }}>Enter ↵</kbd>
            </div>
          </div>

          {/* Code preview */}
          <div className="fade-up fade-up-delay-1 hero-code glass-panel" style={{ borderRadius:16, overflow:'hidden', display:'none' }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, padding:'12px 16px', borderBottom:'1px solid rgba(58,73,75,0.4)', background:'rgba(13,14,19,0.6)' }}>
              {['rgba(255,180,171,0.7)','rgba(255,172,232,0.7)','rgba(0,219,231,0.7)'].map((c,i) => (
                <div key={i} style={{ width:12, height:12, borderRadius:'50%', background:c }} />
              ))}
              <span style={{ marginLeft:12, fontFamily:'JetBrains Mono', fontSize:12, color:'#849495' }}>lesson_01.py</span>
              <span style={{ marginLeft:'auto', fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:4, background:'rgba(0,219,231,0.15)', color:'#00dbe7', border:'1px solid rgba(0,219,231,0.3)', textTransform:'uppercase', letterSpacing:'0.08em' }}>Python</span>
            </div>
            <div style={{ padding:20, fontFamily:'JetBrains Mono', fontSize:13, lineHeight:1.8 }}>
              <div><span className="syntax-comment"># Codust.hub — Lesson 1</span></div>
              <br/>
              <div><span className="syntax-keyword">def </span><span className="syntax-fn">greet</span>(<span className="syntax-type">name</span>: <span className="syntax-type">str</span>) -&gt; <span className="syntax-type">str</span>:</div>
              <div style={{ paddingLeft:24 }}><span className="syntax-keyword">return </span><span className="syntax-string">f"Hello, {'{'}name{'}'}! Ready to code?"</span></div>
              <br/>
              <div><span className="syntax-fn">print</span>(<span className="syntax-fn">greet</span>(<span className="syntax-string">"Developer"</span>))<span className="cursor-block" style={{ marginLeft:4 }} /></div>
              <div style={{ borderTop:'1px solid rgba(58,73,75,0.4)', marginTop:12, paddingTop:12 }}>
                <span style={{ color:'#00e676', fontSize:12 }}>▶ Output: </span>
                <span style={{ color:'#ffd7f0', fontSize:12 }}>Hello, Developer! Ready to code?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-code { display: block !important; }
        }
      `}</style>

      {/* STATS */}
      {/* <section style={{ padding:'40px 24px', borderTop:'1px solid rgba(58,73,75,0.3)', borderBottom:'1px solid rgba(58,73,75,0.3)', background:'rgba(13,14,19,0.4)' }}>
        <div className="stats-grid" style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:32, textAlign:'center' }}>
          {[['50+','Courses Available'],['500+','Coding Lessons'],['12+','Languages Covered'],['100%','Free to Learn']].map(([n,l]) => (
            <div key={l}>
              <div style={{ fontFamily:'Space Grotesk', fontSize:32, fontWeight:700, color:'#00dbe7', textShadow:'0 0 12px rgba(0,219,231,0.4)' }}>{n}</div>
              <div style={{ fontSize:13, color:'#849495', marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
        <style>{`@media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr)!important}}`}</style>
      </section> */}

      {/* TOPICS */}
      <section id="topics" style={{ padding:'64px 24px', maxWidth:1280, margin:'0 auto', width:'100%' }}>
        <div style={{ marginBottom:40 }}>
          <span style={{ fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:4, textTransform:'uppercase', letterSpacing:'0.08em', background:'rgba(0,219,231,0.15)', color:'#00dbe7', border:'1px solid rgba(0,219,231,0.3)', display:'inline-block', marginBottom:12 }}>Topics</span>
          <h2 style={{ fontFamily:'Space Grotesk', fontSize:28, fontWeight:700, color:'#e3e1e9', marginBottom:8 }}>What do you want to learn?</h2>
          <p style={{ color:'#849495', maxWidth:500 }}>Pick a language or technology and start with beginner-friendly tutorials.</p>
        </div>
        <div className="topics-grid" style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
          {TOPICS.map(t => (
            <Link key={t.label} to="/library" style={{
              border: t.highlight ? '1px solid rgba(0,219,231,0.3)' : '1px solid rgba(0,219,231,0.12)',
              background: t.highlight ? 'rgba(0,219,231,0.05)' : 'rgba(30,31,37,0.8)',
              borderRadius:12, padding:16, display:'flex', flexDirection:'column', alignItems:'center', gap:12, textAlign:'center', textDecoration:'none', transition:'all 0.25s',
            }}
              onMouseOver={e => { e.currentTarget.style.borderColor='rgba(0,219,231,0.5)'; e.currentTarget.style.transform='translateY(-3px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor=t.highlight?'rgba(0,219,231,0.3)':'rgba(0,219,231,0.12)'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <div style={{ width:48, height:48, borderRadius:10, background:'rgba(0,219,231,0.08)', border:'1px solid rgba(0,219,231,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#00dbe7', fontSize:22 }}>
                <i className={`${t.brand ? 'fa-brands' : 'fa-solid'} ${t.icon}`} />
              </div>
              <div style={{ fontWeight:600, fontSize:14, color: t.highlight ? '#00dbe7' : '#e3e1e9' }}>{t.label}</div>
              <div style={{ fontSize:11, color:'#849495' }}>{t.sub}</div>
            </Link>
          ))}
        </div>
        <style>{`
          @media(min-width:640px){.topics-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(min-width:1024px){.topics-grid{grid-template-columns:repeat(4,1fr)!important}}
        `}</style>
      </section>

      {/* COURSES */}
      <section style={{ padding:'64px 24px', maxWidth:1280, margin:'0 auto', width:'100%' }}>
        <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:40, flexWrap:'wrap', gap:16 }}>
          <div>
            <span style={{ fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:4, textTransform:'uppercase', letterSpacing:'0.08em', background:'rgba(255,36,228,0.12)', color:'#ff24e4', border:'1px solid rgba(255,36,228,0.3)', display:'inline-block', marginBottom:12 }}>Courses</span>
            <h2 style={{ fontFamily:'Space Grotesk', fontSize:28, fontWeight:700, color:'#e3e1e9', marginBottom:8 }}>Structured Learning Paths</h2>
            <p style={{ color:'#849495' }}>Follow a guided path from beginner to job-ready developer.</p>
          </div>
          <Link to="/courses" style={{ border:'1px solid rgba(0,219,231,0.5)', color:'#00dbe7', padding:'8px 20px', borderRadius:6, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:6, fontSize:14 }}>
            View All <span className="material-symbols-outlined" style={{ fontSize:16 }}>arrow_forward</span>
          </Link>
        </div>

        <div className="courses-grid" style={{ display:'grid', gridTemplateColumns:'1fr', gap:24 }}>
          {COURSES.map(c => (
            <Link key={c.title} to="/courses" style={{ border:'1px solid rgba(0,219,231,0.12)', background:'rgba(18,19,24,0.9)', borderRadius:16, overflow:'hidden', textDecoration:'none', display:'block', transition:'all 0.25s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='rgba(0,219,231,0.4)'; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor='rgba(0,219,231,0.12)'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <div style={{ height:4, background:c.accent }} />
              <div style={{ padding:24 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:16 }}>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:4, background:'rgba(0,219,231,0.15)', color:'#00dbe7', border:'1px solid rgba(0,219,231,0.3)', textTransform:'uppercase' }}>{c.track}</span>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10, fontWeight:700, padding:'2px 8px', borderRadius:4, background:'rgba(0,230,118,0.12)', color:'#00e676', border:'1px solid rgba(0,230,118,0.3)', textTransform:'uppercase' }}>Free</span>
                </div>
                <h3 style={{ fontFamily:'Space Grotesk', fontSize:20, fontWeight:700, color:'#e3e1e9', marginBottom:8 }}>{c.title}</h3>
                <p style={{ fontSize:14, color:'#b9cacb', lineHeight:1.6, marginBottom:16 }}>{c.desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:16 }}>
                  {c.tags.map((tag,i) => (
                    <span key={tag} style={{ fontSize:12, padding:'4px 10px', borderRadius:4, background:'rgba(58,73,75,0.3)', color:c.tagColors[i] }}>{tag}</span>
                  ))}
                </div>
                <div style={{ display:'flex', gap:16, fontSize:12, color:'#849495', flexWrap:'wrap' }}>
                  <span>📅 {c.weeks} weeks</span>
                  <span>📚 {c.lessons} lessons</span>
                  <span>📶 {c.level}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style>{`@media(min-width:768px){.courses-grid{grid-template-columns:repeat(3,1fr)!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding:'64px 24px', maxWidth:1280, margin:'0 auto', width:'100%' }}>
        <div className="glass-panel" style={{ borderRadius:24, padding:'60px 40px', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 0%, rgba(0,219,231,0.08) 0%, transparent 60%)', pointerEvents:'none' }} />
          <div style={{ position:'relative', zIndex:1 }}>
            <h2 style={{ fontFamily:'Space Grotesk', fontSize:'clamp(24px,4vw,40px)', fontWeight:700, color:'#e3e1e9', marginBottom:12 }}>Ready to write your first line of code?</h2>
            <p style={{ color:'#b9cacb', fontSize:18, marginBottom:32, maxWidth:500, marginLeft:'auto', marginRight:'auto' }}>Join thousands of learners building real skills on Codust.hub — completely free.</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:16, justifyContent:'center' }}>
              <Link to="/courses" style={{ background:'#00dbe7', color:'#00363a', fontWeight:700, padding:'14px 32px', borderRadius:6, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, fontSize:16 }}>
                <span className="material-symbols-outlined">rocket_launch</span> Get Started Free
              </Link>
              <Link to="/library" style={{ border:'1px solid rgba(0,219,231,0.5)', color:'#00dbe7', padding:'14px 32px', borderRadius:6, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, fontSize:16 }}>
                <span className="material-symbols-outlined">library_books</span> Explore the Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile bottom nav */}
      <nav className="mobile-nav" style={{ position:'fixed', bottom:0, width:'100%', zIndex:50, background:'rgba(13,14,19,0.95)', backdropFilter:'blur(20px)', borderTop:'1px solid rgba(58,73,75,0.4)', display:'flex', justifyContent:'space-around', alignItems:'center', height:60, padding:'0 16px' }}>
        {[['home','Home','/'],['school','Courses','/courses'],['code_blocks','Practice','/lesson'],['person','Profile','/profile']].map(([icon,label,to]) => (
          <Link key={label} to={to} style={{ display:'flex', flexDirection:'column', alignItems:'center', textDecoration:'none', color: to === '/' ? '#00dbe7' : '#849495', fontSize:9, fontFamily:'JetBrains Mono', fontWeight:700, letterSpacing:'0.05em' }}>
            <span className="material-symbols-outlined" style={{ fontSize:22 }}>{icon}</span>
            {label.toUpperCase()}
          </Link>
        ))}
      </nav>
      <style>{`@media(min-width:768px){.mobile-nav{display:none!important}}`}</style>
    </div>
  );
}
