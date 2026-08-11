import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: 'fixed',
        right: 18,
        bottom: 18,
        width: 44,
        height: 44,
        borderRadius: 999,
        border: '1px solid rgba(0,219,231,0.35)',
        background: 'rgba(14,16,21,0.82)',
        color: '#00dbe7',
        cursor: 'pointer',
        boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        lineHeight: 1,
      }}
    >
      ↑
    </button>
  );
}