import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function Navbar({ activePage = '' }) {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  const navLinks = [
    { label: 'Home',      to: '/' },
    { label: 'Courses',   to: '/courses' },
    { label: 'Tutorials', to: '/library' },
    { label: 'Practice',  to: '/lesson' },
    { label: 'Profile',   to: '/profile' },
  ];

  return (
    <header
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        background: 'rgba(18,19,24,0.85)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(58,73,75,0.4)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontSize: 24, fontVariationSettings: "'FILL' 1" }}>code</span>
          <span style={{ fontFamily: 'Space Grotesk', fontSize: 20, fontWeight: 700, color: '#00dbe7', letterSpacing: '-0.03em' }}>
            Codust<span style={{ color: '#e3e1e9' }}>.hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="codust-nav-desktop">
          {navLinks.map(link => (
            <Link key={link.label} to={link.to} style={{
              color: activePage === link.label ? '#00dbe7' : '#b9cacb',
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
              transition: 'color 0.2s', whiteSpace: 'nowrap',
            }}
              onMouseOver={e => e.currentTarget.style.color = '#00dbe7'}
              onMouseOut={e => e.currentTarget.style.color = activePage === link.label ? '#00dbe7' : '#b9cacb'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Auth area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {user ? (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'transparent', border: 'none', borderRadius: 8, padding: '6px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(0,219,231,0.08)'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                <span className="material-symbols-outlined" style={{ color: '#00dbe7', fontSize: 20, fontVariationSettings: "'FILL' 1" }}>account_circle</span>
                <span style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#00dbe7' }}>{user.firstName} {user.lastName}</span>
                <span className="material-symbols-outlined" style={{ color: '#849495', fontSize: 16 }}>
                  {dropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute', top: 'calc(100% + 8px)', right: 0, minWidth: 180,
                  background: 'rgba(18,19,24,0.98)', border: '1px solid rgba(0,219,231,0.2)',
                  borderRadius: 10, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.5)', zIndex: 200,
                }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(58,73,75,0.3)' }}>
                    <p style={{ fontSize: 12, color: '#849495', margin: 0 }}>Signed in as</p>
                    <p style={{ fontFamily: 'JetBrains Mono', fontSize: 12, color: '#00dbe7', margin: '2px 0 0' }}>
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                  {[
                    { icon: 'home',        label: 'Home',         to: '/' },
                    { icon: 'person',      label: 'Profile',      to: '/profile' },
                    { icon: 'school',      label: 'My Courses',   to: '/courses' },
                    { icon: 'settings',    label: 'Settings',     to: '#' },
                  ].map(item => (
                    <Link key={item.label} to={item.to} onClick={() => setDropdownOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', color: '#b9cacb', textDecoration: 'none', fontSize: 13, transition: 'background 0.15s' }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(0,219,231,0.07)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(58,73,75,0.3)', padding: 6 }}>
                    <button onClick={handleLogout} style={{
                      width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px',
                      color: '#ffb4ab', background: 'none', border: 'none', borderRadius: 6, fontSize: 13,
                      cursor: 'pointer', fontFamily: 'Geist', transition: 'background 0.15s',
                    }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(255,180,171,0.1)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>logout</span>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" style={{
                fontSize: 14, color: '#b9cacb', textDecoration: 'none',
                padding: '6px 14px', border: '1px solid rgba(58,73,75,0.6)', borderRadius: 6, transition: 'color 0.2s',
              }}>Sign In</Link>
              <Link to="/login?tab=signup" style={{
                background: '#00dbe7', color: '#00363a', fontWeight: 700,
                padding: '8px 18px', borderRadius: 6, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14,
                transition: 'all 0.2s',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>rocket_launch</span>
                Sign Up Free
              </Link>
            </>
          )}

          {/* Mobile hamburger */}
          <button className="codust-mobile-toggle" onClick={() => setMobileOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: '#b9cacb', cursor: 'pointer', padding: 4 }}>
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: 'rgba(13,14,19,0.97)', borderTop: '1px solid rgba(58,73,75,0.3)', padding: '12px 24px 16px' }}>
          {navLinks.map(link => (
            <Link key={link.label} to={link.to} onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: '#b9cacb', textDecoration: 'none', fontSize: 15, borderBottom: '1px solid rgba(58,73,75,0.2)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
