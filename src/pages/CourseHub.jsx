import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { TOPICS } from '../data/topicsData.js';

export default function CourseHub() {
  const [query, setQuery] = useState('');

  const filtered = TOPICS.filter(t =>
    !query.trim() ||
    (t.name + ' ' + t.search + ' ' + t.tag).toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="page-background" />
      <div className="scanline" />
      <Navbar activePage="Courses" />

      {/* Hero / Search */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '128px 24px 72px', textAlign: 'center', width: '100%' }}>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(34px,5vw,58px)', fontWeight: 700, lineHeight: 1.06, letterSpacing: '-0.03em', margin: '0 0 12px' }}>
          Search your next coding path.
        </h1>
        <p style={{ color: '#b9cacb', fontSize: 17, lineHeight: 1.7, maxWidth: 620, margin: '0 auto 28px' }}>
          Start with a topic, stack, or interview track. Search once, then jump straight into the area you want to learn.
        </p>
        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px', borderRadius: 14, background: 'rgba(26,27,33,0.96)', border: '1px solid rgba(0,219,231,0.22)', boxShadow: '0 24px 60px rgba(0,0,0,0.28)' }}>
          <span className="material-symbols-outlined" style={{ color: '#849495', fontSize: 20 }}>search</span>
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder='Search topics like "Python", "Machine Learning", or "Interview Preparation"'
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: '#e3e1e9', fontSize: 15, fontFamily: 'Geist' }}
          />
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#849495', background: 'rgba(58,73,75,0.55)', padding: '4px 8px', borderRadius: 999 }}>Live filter</span>
        </div>
      </section>

      {/* Cards */}
      <section style={{ maxWidth: 1140, margin: '0 auto', padding: '0 40px 72px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 28, flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 30, letterSpacing: '-0.02em', margin: '0 0 8px' }}>Explore Learning Tracks</h2>
            <p style={{ color: '#849495', maxWidth: 640, lineHeight: 1.7, margin: 0 }}>From DSA and web development to AI, databases, and interview prep.</p>
          </div>
          <div style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(0,219,231,0.1)', border: '1px solid rgba(0,219,231,0.22)', color: '#00dbe7', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            {filtered.length} topic{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)', gap: 20, maxWidth: 1040, margin: '0 auto' }}>
          {filtered.map(t => (
            <Link key={t.name} to={`/topic/${t.slug}`}
              style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 22, borderRadius: 18, textDecoration: 'none', color: 'inherit', background: 'rgba(18,19,24,0.78)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,219,231,0.14)', transition: 'all 0.22s' }}
              onMouseOver={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.borderColor='rgba(0,219,231,0.36)'; e.currentTarget.style.background='rgba(0,219,231,0.05)'; }}
              onMouseOut={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.borderColor='rgba(0,219,231,0.14)'; e.currentTarget.style.background='rgba(18,19,24,0.78)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 22, lineHeight: 1.2, margin: 0 }}>{t.name}</h3>
                <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(0,219,231,0.2)', background: 'rgba(0,219,231,0.08)', color: '#00dbe7', fontSize: 22 }}>
                  <i className={`fa-solid ${t.icon}`} style={t.brand ? { fontFamily: "'Font Awesome 6 Brands'" } : {}} />
                </div>
              </div>
              <p style={{ color: '#b9cacb', lineHeight: 1.7, fontSize: 14, margin: 0 }}>{t.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 10, color: '#849495', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.tag}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#00dbe7', fontWeight: 600, fontSize: 14 }}>
                  View more <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass-panel" style={{ padding: 28, borderRadius: 18, textAlign: 'center', color: '#849495', maxWidth: 1040, margin: '0 auto' }}>
            No topics match your search. Try "Python", "DSA", "SQL", or "Web".
          </div>
        )}
      </section>

      <style>{`
        @media(min-width:640px){.card-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      <Footer />
    </div>
  );
}
