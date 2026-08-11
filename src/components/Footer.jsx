import { Link } from 'react-router-dom';

export default function Footer() {
  const sections = [
    {
      title: 'Learn',
      links: [
        { label: 'All Tutorials',     to: '/library' },
        { label: 'Course Hub',        to: '/courses' },
        { label: 'Practice Problems', to: '/lesson' },
      ],
    },
    {
      title: 'Topics',
      links: [
        { label: 'Python',       to: '/library' },
        { label: 'JavaScript',   to: '/library' },
        { label: 'HTML & CSS',   to: '/library' },
        { label: 'Data Structures', to: '/library' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { label: 'Home',      to: '/' },
        { label: 'Course Hub', to: '/courses' },
        { label: 'Sign In',   to: '/login' },
      ],
    },
  ];

  const linkStyle = {
    fontSize: 13, color: '#849495', textDecoration: 'none', transition: 'color 0.2s',
  };

  return (
    <footer style={{ borderTop: '1px solid rgba(58,73,75,0.3)', padding: '40px 24px 40px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 32, marginBottom: 32 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontVariationSettings: "'FILL' 1" }}>code</span>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#00dbe7' }}>
                Codust<span style={{ color: '#e3e1e9' }}>.hub</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: '#849495', lineHeight: 1.6, maxWidth: 260 }}>
              A free coding education platform. Learn programming from beginner to pro with structured courses and real examples.
            </p>
          </div>

          {/* Nav columns */}
          {sections.map(section => (
            <div key={section.title}>
              <h4 style={{ fontFamily: 'Space Grotesk', fontSize: 14, fontWeight: 600, color: '#e3e1e9', marginBottom: 12 }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {section.links.map(link => (
                  <li key={link.label}>
                    <Link to={link.to} style={linkStyle}
                      onMouseOver={e => e.currentTarget.style.color = '#00dbe7'}
                      onMouseOut={e => e.currentTarget.style.color = '#849495'}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(58,73,75,0.3)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: '#849495' }}>© 2026 Codust.hub — Free coding education for everyone.</p>
          <p style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#849495' }}>
            Built with <span style={{ color: '#00dbe7' }}>{'{ }'}</span> and passion
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr !important; } }
      `}</style>
    </footer>
  );
}
