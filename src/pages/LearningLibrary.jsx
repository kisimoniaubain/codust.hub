import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { codustSidebarData } from '../../sidebarData.js';

export default function LearningLibrary() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [expanded, setExpanded] = useState({});
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (searchParams.get('q')) setQuery(searchParams.get('q'));
  }, [searchParams]);

  const toggleCategory = (i) => setExpanded(prev => ({ ...prev, [i]: !prev[i] }));

  const filteredData = codustSidebarData.map(cat => ({
    ...cat,
    topics: cat.topics.filter(t =>
      !query.trim() ||
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      (t.description || '').toLowerCase().includes(query.toLowerCase())
    ),
  })).filter(cat => !query.trim() || cat.topics.length > 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="page-background" />
      <div className="scanline" />
      <Navbar activePage="Library" />

      <main style={{ flex: 1, display: 'flex', paddingTop: 64, gap: 16, padding: '64px 16px 24px', maxWidth: 1280, margin: '0 auto', width: '100%' }}>

        {/* Sidebar */}
        <aside style={{ width: '100%', maxWidth: 320, background: 'rgba(18,19,24,0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,219,231,0.15)', borderRadius: 8, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

          {/* Search inside sidebar */}
          <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(58,73,75,0.3)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(13,14,19,0.6)', border:'1px solid rgba(58,73,75,0.4)', borderRadius:6, padding:'6px 10px' }}>
              <span className="material-symbols-outlined" style={{ color:'#849495', fontSize:16 }}>search</span>
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search topics..."
                style={{ background:'transparent', border:'none', outline:'none', color:'#e3e1e9', fontSize:15, fontFamily:'Geist', flex:1 }}
              />
            </div>
          </div>

          <div className="codust-sidebar-scroll" style={{ overflowY: 'auto', flex: 1 }}>
            {filteredData.map((cat, i) => (
              <div key={i}>
                <div onClick={() => toggleCategory(i)}
                  style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 12px', cursor:'pointer', transition:'background 0.2s', background: expanded[i] ? 'rgba(0,219,231,0.15)' : 'transparent', borderBottom:'1px solid rgba(58,73,75,0.15)' }}
                  onMouseOver={e => { if (!expanded[i]) e.currentTarget.style.background='rgba(0,219,231,0.08)'; }}
                  onMouseOut={e => { if (!expanded[i]) e.currentTarget.style.background='transparent'; }}
                >
                  <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                    <span className="material-symbols-outlined" style={{ color:'#00dbe7', fontSize:16 }}>{cat.icon}</span>
                    <span style={{ fontSize:15, color:'#e3e1e9', fontWeight:500 }}>{cat.category}</span>
                  </div>
                  <span className="material-symbols-outlined" style={{ color:'#849495', fontSize:16, transition:'transform 0.3s', transform: expanded[i] ? 'rotate(180deg)' : 'none' }}>expand_more</span>
                </div>

                {expanded[i] && (
                  <div>
                    {cat.topics.map(topic => (
                      <div key={topic.slug} onClick={() => setSelected({ ...topic, category: cat.category })}
                        style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 12px 8px 28px', cursor:'pointer', transition:'all 0.2s', borderLeft: selected?.slug === topic.slug ? '3px solid #00dbe7' : '3px solid transparent', background: selected?.slug === topic.slug ? 'rgba(0,219,231,0.3)' : 'transparent' }}
                        onMouseOver={e => { if (selected?.slug !== topic.slug) e.currentTarget.style.background='rgba(0,219,231,0.08)'; e.currentTarget.style.paddingLeft='20px'; }}
                        onMouseOut={e => { if (selected?.slug !== topic.slug) e.currentTarget.style.background='transparent'; e.currentTarget.style.paddingLeft='28px'; }}
                      >
                        <span className="material-symbols-outlined" style={{ color:'#00dbe7', fontSize:14 }}>chevron_right</span>
                        <span style={{ fontSize:15, color:'#b9cacb' }}>{topic.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Content area */}
        <section style={{ flex:1, background:'rgba(18,19,24,0.7)', backdropFilter:'blur(20px)', border:'1px solid rgba(0,219,231,0.15)', borderRadius:8, padding:16, overflowY:'auto', display:'none' }} className="content-panel">
          {selected ? (
            <div style={{ animation:'fadeIn 0.4s ease' }}>
              <div style={{ marginBottom:24, paddingBottom:16, borderBottom:'1px solid rgba(58,73,75,0.2)' }}>
                <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#fface8', letterSpacing:'0.1em', textTransform:'uppercase' }}>{selected.category}</span>
                <h2 style={{ fontFamily:'Space Grotesk', fontSize:24, color:'#e3e1e9', marginTop:8 }}>{selected.name}</h2>
                <p style={{ color:'#b9cacb', marginTop:8 }}>{selected.description}</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                <div>
                  <h3 style={{ fontWeight:700, color:'#00dbe7', marginBottom:8 }}>📚 Overview</h3>
                  <p style={{ color:'#b9cacb' }}>This lesson covers the fundamentals of <strong>{selected.name.toLowerCase()}</strong>. You'll learn practical concepts you can apply immediately in your projects.</p>
                </div>
                <div>
                  <h3 style={{ fontWeight:700, color:'#00dbe7', marginBottom:8 }}>🎯 Learning Outcomes</h3>
                  <ul style={{ color:'#b9cacb', paddingLeft:20 }}>
                    <li>Understand the core concepts of {selected.name}</li>
                    <li>Apply these concepts in real-world projects</li>
                    <li>Prepare for more advanced topics</li>
                  </ul>
                </div>
                <div style={{ background:'rgba(255,36,228,0.08)', border:'1px solid rgba(255,36,228,0.2)', borderRadius:8, padding:16 }}>
                  <p style={{ fontWeight:700, color:'#fface8', margin:'0 0 4px' }}>Coming Soon</p>
                  <p style={{ fontSize:13, color:'#b9cacb', margin:0 }}>Full lesson content, code examples, and interactive exercises are being prepared for this topic.</p>
                </div>
                <button style={{ alignSelf:'flex-start', padding:'8px 16px', background:'#00dbe7', color:'#00363a', fontWeight:700, border:'none', borderRadius:6, cursor:'pointer', fontFamily:'Geist', fontSize:14 }}>
                  Start Learning
                </button>
              </div>
            </div>
          ) : (
            <div style={{ textAlign:'center', padding:'48px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize:64, color:'rgba(132,148,149,0.3)', display:'block', marginBottom:16 }}>library_books</span>
              <h2 style={{ fontFamily:'Space Grotesk', fontSize:24, color:'rgba(227,225,233,0.5)' }}>Select a topic to begin</h2>
              <p style={{ color:'#849495', marginTop:8 }}>Start from the beginner fundamentals or jump to advanced concepts</p>
            </div>
          )}
        </section>

      </main>

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        @media(min-width:768px){ .content-panel { display: block !important; } }
      `}</style>

      <Footer />
    </div>
  );
}
