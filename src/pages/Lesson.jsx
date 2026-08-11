import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { COURSE_DATA, CourseManager } from '../../courseData.js';

export default function Lesson() {
  const [searchParams] = useSearchParams();
  const [courseData, setCourseData] = useState(null);
  const [currentModule, setCurrentModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const data = CourseManager.loadCourseData();
    const progress = CourseManager.loadUserProgress();
    const moduleId = searchParams.get('module') || data.modules[0]?.moduleId;
    const lessonId = searchParams.get('lesson');

    const mod = data.modules.find(m => m.moduleId === moduleId) || data.modules[0];
    const les = lessonId ? mod?.lessons.find(l => l.lessonId === lessonId) : mod?.lessons[0];

    setCourseData(data);
    setCurrentModule(mod);
    setCurrentLesson(les);
    document.getElementById('progress-indicator') && (
      document.getElementById('progress-indicator').textContent = `LESSON 1/${mod?.lessons.length}`
    );
  }, [searchParams]);

  const answerQuiz = (idx) => {
    if (quizAnswered) return;
    setQuizAnswered(true);
    if (idx === currentLesson.quiz.correctAnswer) {
      setQuizResult('correct');
    } else {
      setQuizResult('incorrect');
      setShowHint(true);
      setTimeout(() => { setQuizAnswered(false); setQuizResult(null); setShowHint(false); }, 1500);
    }
  };

  if (!currentLesson) return (
    <div style={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div className="page-background" /><Navbar />
      <span className="material-symbols-outlined" style={{ fontSize: 38, color: '#00dbe7', animation: 'spin 1s linear infinite' }}>refresh</span>
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column' }}>
      <div className="page-background" />
      <div className="scanline" />
      <Navbar activePage="Practice" />

      <main style={{ flex:1, display:'flex', flexDirection:'column', paddingTop:64 }}>
        <div style={{ flex:1, display:'flex', flexDirection:'column', gap:16, padding:'16px 16px 24px', maxWidth:1280, margin:'0 auto', width:'100%' }}>
          <div className="lesson-layout" style={{ flex:1, display:'flex', flexDirection:'column', gap:16 }}>

            {/* Content Panel */}
            <section className="glass-panel" style={{ flex:1, padding:16, display:'flex', flexDirection:'column', overflowY:'auto', borderRadius:8 }}>
              <div style={{ marginBottom:16 }}>
                <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#00dbe7', letterSpacing:'0.1em', textTransform:'uppercase' }}>LEARNING_MODULE</span>
                <h2 style={{ fontFamily:'Space Grotesk', fontSize:24, color:'#e3e1e9', marginTop:8 }} id="lesson-title">{currentLesson.title}</h2>
                <p style={{ color:'#b9cacb', fontSize:14, marginTop:4 }}>{currentLesson.description}</p>
              </div>

              <p style={{ color:'#e3e1e9', lineHeight:1.7, marginBottom:20 }}>{currentLesson.content}</p>

              {/* Code snippet */}
              <div style={{ marginBottom:20 }}>
                <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                  <span className="material-symbols-outlined" style={{ color:'#00dbe7', fontSize:16 }}>code</span>
                  <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#00dbe7', letterSpacing:'0.1em', textTransform:'uppercase' }}>CODE_EXAMPLE</span>
                </div>
                <pre style={{ background:'rgba(13,14,19,0.8)', border:'1px solid rgba(58,73,75,0.2)', borderRadius:8, padding:16, fontFamily:'JetBrains Mono', fontSize:13, color:'#74f5ff', overflowX:'auto', lineHeight:1.6, whiteSpace:'pre-wrap' }}>
                  {currentLesson.codeSnippet}
                </pre>
              </div>
            </section>

            {/* Quiz Panel */}
            <section className="glass-panel" style={{ padding:16, borderRadius:8 }}>
              <div style={{ marginBottom:12 }}>
                <span style={{ fontFamily:'JetBrains Mono', fontSize:10, color:'#00dbe7', letterSpacing:'0.1em', textTransform:'uppercase' }}>QUIZ</span>
                <p style={{ color:'#e3e1e9', marginTop:6, fontWeight:500 }}>{currentLesson.quiz.question}</p>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                {currentLesson.quiz.options.map((opt, idx) => (
                  <button key={idx} onClick={() => answerQuiz(idx)} disabled={quizAnswered && quizResult === 'correct'}
                    style={{
                      padding:'10px 16px', borderRadius:6, textAlign:'left', cursor: quizAnswered && quizResult==='correct' ? 'default' : 'pointer',
                      background: quizResult==='correct' && idx===currentLesson.quiz.correctAnswer ? 'rgba(0,230,118,0.15)'
                        : quizResult==='incorrect' && idx===currentLesson.quiz.options.indexOf(currentLesson.quiz.options[idx]) && quizAnswered ? 'rgba(255,180,171,0.15)'
                        : 'rgba(30,31,37,0.8)',
                      border: quizResult==='correct' && idx===currentLesson.quiz.correctAnswer ? '1px solid rgba(0,230,118,0.5)'
                        : '1px solid rgba(58,73,75,0.4)',
                      color: '#e3e1e9', fontSize:14, fontFamily:'Geist', transition:'all 0.2s',
                    }}
                  >{opt}</button>
                ))}
              </div>

              {showHint && (
                <div style={{ marginTop:12, background:'rgba(255,180,171,0.1)', border:'1px solid rgba(255,180,171,0.3)', borderRadius:8, padding:'10px 14px' }}>
                  <p style={{ fontSize:13, color:'#ffb4ab', margin:0 }}>💡 Hint: {currentLesson.quiz.hint}</p>
                </div>
              )}

              {quizResult === 'correct' && (
                <div style={{ marginTop:12, background:'rgba(0,230,118,0.1)', border:'1px solid rgba(0,230,118,0.3)', borderRadius:8, padding:'10px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                  <p style={{ fontSize:13, color:'#00e676', margin:0 }}>✓ Correct! Well done.</p>
                  <button onClick={() => {
                    CourseManager.completeLesson(courseData.courseId, currentModule.moduleId, currentLesson.lessonId);
                    const idx = currentModule.lessons.findIndex(l => l.lessonId === currentLesson.lessonId);
                    if (idx < currentModule.lessons.length - 1) {
                      setCurrentLesson(currentModule.lessons[idx + 1]);
                      setQuizAnswered(false); setQuizResult(null);
                    }
                  }} style={{ padding:'6px 14px', background:'#00dbe7', color:'#00363a', fontWeight:700, border:'none', borderRadius:6, cursor:'pointer', fontSize:13 }}>
                    Next Lesson →
                  </button>
                </div>
              )}
            </section>

          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media(min-width:768px){
          .lesson-layout { flex-direction: row !important; }
        }
      `}</style>
      <Footer />
    </div>
  );
}
