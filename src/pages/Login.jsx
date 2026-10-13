import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tab, setTab] = useState(searchParams.get('tab') === 'signup' ? 'signup' : 'login');
  const [showPw, setShowPw] = useState(false);
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [strength, setStrength] = useState(0);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [resetMode, setResetMode] = useState(searchParams.get('reset') === '1');
  const { login, signup, loginWithGoogle, resetPassword, updatePassword, isConfigured } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const openTab = localStorage.getItem('codust_open_tab');
    if (openTab === 'signup') { setTab('signup'); localStorage.removeItem('codust_open_tab'); }
  }, []);

  const checkStrength = (val) => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    setStrength(s);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const email = e.currentTarget.email.value.trim().toLowerCase();
    const password = e.currentTarget.password.value;

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setSubmitting(true);
    try {
      await login(email, password);
      setSuccess('Welcome back! Redirecting...');
      setTimeout(() => navigate('/'), 900);
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Could not sign in. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await signup({ firstName, lastName, email, password });
      if (result.needsEmailConfirmation) {
        setSuccess('Account created. Check your email to confirm your account, then sign in.');
        setTab('login');
      } else {
        setSuccess(`Account created! Welcome, ${firstName}! Redirecting...`);
        setTimeout(() => navigate('/'), 900);
      }
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Could not create your account. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setSubmitting(true);
    try {
      await loginWithGoogle();
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Google sign-in could not be started.');
      setSubmitting(false);
    }
  };

  const handlePasswordReset = async () => {
    setError('');
    if (!forgotEmail.trim()) {
      setError('Enter your email address first.');
      return;
    }

    setSubmitting(true);
    try {
      await resetPassword(forgotEmail.trim().toLowerCase());
      setForgotOpen(false);
      setSuccess(`If an account exists for ${forgotEmail.trim()}, a reset link has been sent.`);
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Could not send the password reset email.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError('');
    const password = e.currentTarget.password.value;
    const confirm = e.currentTarget.confirm.value;
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setSubmitting(true);
    try {
      await updatePassword(password);
      setResetMode(false);
      setSearchParams({});
      setSuccess('Password updated. You can now sign in with your new password.');
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : 'Could not update your password.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = { width:'100%', background:'rgba(13,14,19,0.8)', border:'1px solid rgba(58,73,75,0.6)', borderRadius:8, padding:'12px 44px 12px 44px', color:'#e3e1e9', fontFamily:'Geist', fontSize:15, outline:'none' };
  const strengthColors = ['#ff4444','#ff9800','#f7df1e','#00e676'];
  const strengthLabels = ['Weak','Fair','Good','Strong'];

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', background:'#121318', color:'#e3e1e9', fontFamily:'Geist', position:'relative' }}>
      <div className="page-background" />
      <div className="scanline" />
      <div style={{ position:'fixed', inset:0, zIndex:0, backgroundImage:'linear-gradient(rgba(0,219,231,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,219,231,0.04) 1px, transparent 1px)', backgroundSize:'40px 40px' }} />

      <main style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 24px', position:'relative', zIndex:1 }}>
        <div style={{ width:'100%', maxWidth:440 }} className="fade-up">

          {/* Logo */}
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <Link to="/" style={{ display:'inline-flex', alignItems:'center', gap:10, textDecoration:'none', justifyContent:'center', marginBottom:20 }}>
              <span className="material-symbols-outlined" style={{ color:'#00dbe7', fontSize:32, fontVariationSettings:"'FILL' 1" }}>code</span>
              <span style={{ fontFamily:'Space Grotesk', fontSize:26, fontWeight:700, color:'#00dbe7', letterSpacing:'-0.03em' }}>
                Codust<span style={{ color:'#e3e1e9' }}>.hub</span>
              </span>
            </Link>
            <p style={{ color:'#849495', fontSize:14 }}>Your coding journey starts here</p>
          </div>

          <div style={{ background:'rgba(18,19,24,0.85)', backdropFilter:'blur(24px)', border:'1px solid rgba(0,219,231,0.18)', borderRadius:20, padding:32 }}>

            {/* Tabs */}
            {!resetMode && (
              <div style={{ display:'flex', gap:4, background:'rgba(13,14,19,0.6)', borderRadius:10, padding:4, marginBottom:28 }}>
                {['login','signup'].map(t => (
                  <button key={t} onClick={() => { setTab(t); setError(''); setSuccess(''); }}
                    style={{ flex:1, padding:10, fontFamily:'JetBrains Mono', fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', background: tab===t ? 'rgba(0,219,231,0.12)' : 'none', color: tab===t ? '#00dbe7' : '#849495', border:'none', borderRadius:8, cursor:'pointer', transition:'all 0.2s' }}>
                    {t === 'login' ? 'Sign In' : 'Sign Up'}
                  </button>
                ))}
              </div>
            )}

            {!isConfigured && (
              <div style={{ background:'rgba(255,180,171,0.1)', border:'1px solid rgba(255,180,171,0.3)', borderRadius:8, padding:'10px 14px', color:'#ffb4ab', fontSize:13, marginBottom:16 }}>
                Account services are not configured yet. Add the Supabase URL and public anon key to the site environment, then redeploy.
              </div>
            )}

            {error && (
              <div style={{ background:'rgba(255,180,171,0.1)', border:'1px solid rgba(255,180,171,0.3)', borderRadius:8, padding:'10px 14px', color:'#ffb4ab', fontSize:13, display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span className="material-symbols-outlined" style={{ fontSize:16 }}>error</span>{error}
              </div>
            )}
            {success && (
              <div style={{ background:'rgba(0,230,118,0.1)', border:'1px solid rgba(0,230,118,0.3)', borderRadius:8, padding:'10px 14px', color:'#00e676', fontSize:13, display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <span className="material-symbols-outlined" style={{ fontSize:16 }}>check_circle</span>{success}
              </div>
            )}

            {/* LOGIN */}
            {resetMode && (
              <form onSubmit={handleUpdatePassword} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                <h2 style={{ color:'#e3e1e9', fontFamily:'Space Grotesk', fontSize:20 }}>Choose a new password</h2>
                <input name="password" type="password" placeholder="New password (min. 8 characters)" required minLength={8} style={inputStyle} />
                <input name="confirm" type="password" placeholder="Confirm new password" required minLength={8} style={inputStyle} />
                <button type="submit" disabled={submitting || !isConfigured} style={{ width:'100%', background:'#00dbe7', color:'#00363a', fontWeight:700, padding:13, borderRadius:8, border:'none', cursor:submitting || !isConfigured ? 'not-allowed' : 'pointer', opacity:submitting || !isConfigured ? 0.65 : 1, fontFamily:'Space Grotesk', fontSize:16 }}>
                  {submitting ? 'Please wait…' : 'Update Password'}
                </button>
              </form>
            )}

            {tab === 'login' && !resetMode && (
              <form onSubmit={handleLogin} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase', display:'block', marginBottom:6 }}>Email</label>
                  <div style={{ position:'relative' }}>
                    <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>mail</span>
                    <input name="email" type="email" placeholder="you@example.com" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                  </div>
                </div>
                <div>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
                    <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase' }}>Password</label>
                    <button type="button" onClick={() => setForgotOpen(true)} style={{ fontSize:12, color:'#00dbe7', background:'none', border:'none', cursor:'pointer', padding:0 }}>Forgot password?</button>
                  </div>
                  <div style={{ position:'relative' }}>
                    <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>lock</span>
                    <input name="password" type={showPw ? 'text' : 'password'} placeholder="Enter your password" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                    <button type="button" onClick={() => setShowPw(p => !p)} className="material-symbols-outlined"
                      style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18, background:'none', border:'none', cursor:'pointer' }}>
                      {showPw ? 'visibility' : 'visibility_off'}
                    </button>
                  </div>
                </div>
                <label style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'#b9cacb', cursor:'pointer' }}>
                  <input type="checkbox" style={{ accentColor:'#00dbe7', width:16, height:16 }} /> Remember me
                </label>
                <button type="submit" disabled={submitting || !isConfigured} style={{ width:'100%', background:'#00dbe7', color:'#00363a', fontWeight:700, padding:13, borderRadius:8, border:'none', cursor:submitting || !isConfigured ? 'not-allowed' : 'pointer', opacity:submitting || !isConfigured ? 0.65 : 1, fontFamily:'Space Grotesk', fontSize:16, display:'flex', alignItems:'center', justifyContent:'center', gap:8, transition:'all 0.2s' }}>
                  <span className="material-symbols-outlined" style={{ fontSize:18 }}>login</span> {submitting ? 'Please wait…' : 'Sign In'}
                </button>
              </form>
            )}

            {/* SIGNUP */}
            {tab === 'signup' && !resetMode && (
              <form onSubmit={handleSignup} style={{ display:'flex', flexDirection:'column', gap:18 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                  {[['firstName','First Name','Alex','person'],['lastName','Last Name','Dev','badge']].map(([name,label,ph,icon]) => (
                    <div key={name}>
                      <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase', display:'block', marginBottom:6 }}>{label}</label>
                      <div style={{ position:'relative' }}>
                        <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>{icon}</span>
                        <input name={name} type="text" placeholder={ph} required style={inputStyle}
                          onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase', display:'block', marginBottom:6 }}>Email</label>
                  <div style={{ position:'relative' }}>
                    <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>mail</span>
                    <input name="email" type="email" placeholder="you@example.com" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase', display:'block', marginBottom:6 }}>Password</label>
                  <div style={{ position:'relative' }}>
                    <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>lock</span>
                    <input name="password" type={showSignupPw ? 'text' : 'password'} placeholder="Min. 8 characters" required style={inputStyle}
                      onChange={e => checkStrength(e.target.value)}
                      onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                    <button type="button" onClick={() => setShowSignupPw(p => !p)} className="material-symbols-outlined"
                      style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18, background:'none', border:'none', cursor:'pointer' }}>
                      {showSignupPw ? 'visibility' : 'visibility_off'}
                    </button>
                  </div>
                  <div style={{ marginTop:8 }}>
                    <div style={{ display:'flex', gap:4, marginBottom:4 }}>
                      {[0,1,2,3].map(i => (
                        <div key={i} style={{ flex:1, height:4, borderRadius:2, background: i < strength ? strengthColors[strength-1] : '#3a494b', transition:'background 0.3s' }} />
                      ))}
                    </div>
                    {strength > 0 && <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:strengthColors[strength-1] }}>{strengthLabels[strength-1]}</span>}
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily:'JetBrains Mono', fontSize:11, fontWeight:700, letterSpacing:'0.08em', color:'#849495', textTransform:'uppercase', display:'block', marginBottom:6 }}>Confirm Password</label>
                  <div style={{ position:'relative' }}>
                    <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>lock_reset</span>
                    <input name="confirm" type="password" placeholder="Repeat password" required style={inputStyle}
                      onFocus={e => e.target.style.borderColor='#00dbe7'} onBlur={e => e.target.style.borderColor='rgba(58,73,75,0.6)'} />
                  </div>
                </div>
                <label style={{ display:'flex', alignItems:'flex-start', gap:8, fontSize:13, color:'#b9cacb', cursor:'pointer', lineHeight:1.4 }}>
                  <input type="checkbox" required style={{ accentColor:'#00dbe7', width:16, height:16, marginTop:2, flexShrink:0 }} />
                  I agree to the <a href="#" style={{ color:'#00dbe7', textDecoration:'none' }}>Terms of Service</a> and <a href="#" style={{ color:'#00dbe7', textDecoration:'none' }}>Privacy Policy</a>
                </label>
                <button type="submit" disabled={submitting || !isConfigured} style={{ width:'100%', background:'#00dbe7', color:'#00363a', fontWeight:700, padding:13, borderRadius:8, border:'none', cursor:submitting || !isConfigured ? 'not-allowed' : 'pointer', opacity:submitting || !isConfigured ? 0.65 : 1, fontFamily:'Space Grotesk', fontSize:16, display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
                  <span className="material-symbols-outlined" style={{ fontSize:18 }}>rocket_launch</span> {submitting ? 'Please wait…' : 'Create Account'}
                </button>
              </form>
            )}

            {/* Divider */}
            {!resetMode && <div style={{ display:'flex', alignItems:'center', gap:12, color:'#849495', fontSize:13, margin:'22px 0' }}>
              <div style={{ flex:1, height:1, background:'rgba(58,73,75,0.5)' }} />
              or continue with
              <div style={{ flex:1, height:1, background:'rgba(58,73,75,0.5)' }} />
            </div>}

            {/* Google */}
            {!resetMode && <button onClick={handleGoogle} disabled={submitting || !isConfigured} style={{ width:'100%', background:'rgba(26,27,33,0.9)', border:'1px solid rgba(58,73,75,0.6)', color:'#e3e1e9', padding:12, borderRadius:8, cursor:submitting || !isConfigured ? 'not-allowed' : 'pointer', opacity:submitting || !isConfigured ? 0.65 : 1, fontFamily:'Geist', fontSize:15, display:'flex', alignItems:'center', justifyContent:'center', gap:10, transition:'all 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.borderColor='rgba(0,219,231,0.4)'; e.currentTarget.style.background='rgba(0,219,231,0.06)'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor='rgba(58,73,75,0.6)'; e.currentTarget.style.background='rgba(26,27,33,0.9)'; }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>}
          </div>

          {!resetMode && <p style={{ textAlign:'center', marginTop:20, fontSize:13, color:'#849495' }}>
            {tab === 'login'
              ? <>Don't have an account? <button onClick={() => setTab('signup')} style={{ color:'#00dbe7', background:'none', border:'none', cursor:'pointer', fontWeight:600, fontSize:13 }}>Sign up free</button></>
              : <>Already have an account? <button onClick={() => setTab('login')} style={{ color:'#00dbe7', background:'none', border:'none', cursor:'pointer', fontWeight:600, fontSize:13 }}>Sign in</button></>
            }
          </p>}
        </div>
      </main>

      {/* Forgot Modal */}
      {forgotOpen && (
        <div style={{ position:'fixed', inset:0, zIndex:200, background:'rgba(0,0,0,0.7)', backdropFilter:'blur(6px)', display:'flex', alignItems:'center', justifyContent:'center', padding:24 }}>
          <div style={{ background:'rgba(18,19,24,0.98)', border:'1px solid rgba(0,219,231,0.2)', borderRadius:20, padding:32, width:'100%', maxWidth:400 }}>
            <h2 style={{ fontFamily:'Space Grotesk', fontSize:20, fontWeight:700, color:'#e3e1e9', marginBottom:8 }}>Reset Password</h2>
            <p style={{ fontSize:14, color:'#849495', marginBottom:24 }}>Enter your email and we'll send you a reset link.</p>
            <div style={{ position:'relative', marginBottom:20 }}>
              <span className="material-symbols-outlined" style={{ position:'absolute', left:14, top:'50%', transform:'translateY(-50%)', color:'#849495', fontSize:18 }}>mail</span>
              <input type="email" value={forgotEmail} onChange={e=>setForgotEmail(e.target.value)} placeholder="you@example.com" style={inputStyle} />
            </div>
            <div style={{ display:'flex', gap:12 }}>
              <button onClick={() => setForgotOpen(false)} style={{ flex:1, padding:12, borderRadius:8, border:'1px solid rgba(58,73,75,0.6)', background:'none', color:'#b9cacb', cursor:'pointer', fontFamily:'Geist', fontSize:14 }}>Cancel</button>
              <button onClick={handlePasswordReset} disabled={submitting || !isConfigured} style={{ flex:1, padding:12, borderRadius:8, border:'none', background:'#00dbe7', color:'#00363a', fontWeight:700, cursor:submitting || !isConfigured ? 'not-allowed' : 'pointer', opacity:submitting || !isConfigured ? 0.65 : 1, fontFamily:'Space Grotesk', fontSize:14 }}>{submitting ? 'Sending…' : 'Send Link'}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
