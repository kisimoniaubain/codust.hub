import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { TOPICS } from '../data/topicsData.js';

const SAVED_VIDEOS_KEY = 'codust-saved-videos';
const LEARNING_PROFILE_KEY = 'codust-learning-profile';

function getSavedVideos() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_VIDEOS_KEY) || '[]');
  } catch {
    return [];
  }
}

function setSavedVideos(videos) {
  try {
    localStorage.setItem(SAVED_VIDEOS_KEY, JSON.stringify(videos));
  } catch {}
}

function getLearningProfile() {
  try {
    return JSON.parse(localStorage.getItem(LEARNING_PROFILE_KEY) || '{}');
  } catch {
    return {};
  }
}

function getTrackedTopics(profileMap) {
  return Object.values(profileMap)
    .map((entry) => {
      const topic = TOPICS.find(item => item.slug === entry.topicSlug);
      const totalHighlights = topic?.highlights?.length || 0;
      const completedCount = entry.completedHighlights?.length || 0;
      const progressPercent = totalHighlights > 0 ? Math.round((completedCount / totalHighlights) * 100) : 0;

      return {
        ...entry,
        topic,
        totalHighlights,
        completedCount,
        progressPercent,
      };
    })
    .filter(entry => entry.topic)
    .sort((a, b) => {
      if (a.focus !== b.focus) return a.focus ? -1 : 1;
      return (b.lastViewedAt || 0) - (a.lastViewedAt || 0);
    });
}

export default function Profile() {
  const [savedVideos, setSavedVideosState] = useState(() => getSavedVideos());
  const [learningProfile, setLearningProfile] = useState(() => getLearningProfile());

  const persistLearningProfile = (nextProfile) => {
    setLearningProfile(nextProfile);
    try {
      localStorage.setItem(LEARNING_PROFILE_KEY, JSON.stringify(nextProfile));
    } catch {}
  };

  useEffect(() => {
    const syncFromStorage = () => {
      setSavedVideosState(getSavedVideos());
      setLearningProfile(getLearningProfile());
    };

    window.addEventListener('storage', syncFromStorage);
    window.addEventListener('focus', syncFromStorage);

    return () => {
      window.removeEventListener('storage', syncFromStorage);
      window.removeEventListener('focus', syncFromStorage);
    };
  }, []);

  const removeVideo = (id) => {
    const updated = savedVideos.filter(v => v.id !== id);
    setSavedVideosState(updated);
    setSavedVideos(updated);
  };

  const resetAllLearningProgress = () => {
    const shouldReset = window.confirm('Reset all learning profile progress for every tracked topic?');
    if (!shouldReset) return;
    persistLearningProfile({});
  };

  const resetTopicLearningProgress = (topicSlug) => {
    const shouldReset = window.confirm('Reset learning progress for this topic?');
    if (!shouldReset) return;

    const nextProfile = { ...learningProfile };
    delete nextProfile[topicSlug];
    persistLearningProfile(nextProfile);
  };

  const trackedTopics = getTrackedTopics(learningProfile);
  const focusedTopic = trackedTopics.find(entry => entry.focus) || trackedTopics[0] || null;
  const recentTopic = [...trackedTopics].sort((a, b) => (b.lastViewedAt || 0) - (a.lastViewedAt || 0))[0] || null;
  const totalCompletedHighlights = trackedTopics.reduce((sum, entry) => sum + entry.completedCount, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#0d0e13', fontFamily: 'Geist, sans-serif' }}>
      <Navbar activePage="Profile" />
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '96px 24px 56px' }}>
        <div style={{ marginBottom: 28 }}>
          <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#fface8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>MY_PROFILE</span>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 38, color: '#e3e1e9', margin: '8px 0 6px' }}>Learning Profile</h1>
          <p style={{ color: '#849495', margin: 0, fontSize: 15, maxWidth: 680, lineHeight: 1.7 }}>
            Your topic level, study duration, focus areas, checkpoint progress, and saved tutorial videos all live here.
          </p>
          {trackedTopics.length > 0 ? (
            <div style={{ marginTop: 14 }}>
              <button
                type="button"
                onClick={resetAllLearningProgress}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  border: '1px solid rgba(255,107,107,0.35)',
                  background: 'rgba(255,107,107,0.08)',
                  color: '#ff9ea8',
                  padding: '8px 12px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>restart_alt</span>
                Reset All Learning Progress
              </button>
            </div>
          ) : null}
        </div>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14, marginBottom: 26 }}>
          <div style={{ border: '1px solid rgba(0,219,231,0.18)', borderRadius: 18, background: 'linear-gradient(180deg, rgba(0,219,231,0.1) 0%, rgba(0,219,231,0.03) 100%)', padding: '18px 18px 16px' }}>
            <p style={{ margin: '0 0 8px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Focus topic</p>
            <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 23 }}>{focusedTopic?.topicName || 'Not set yet'}</p>
            <p style={{ margin: 0, color: '#9eb0b3', fontSize: 13 }}>{focusedTopic?.currentStage || 'Open any topic and set a focus area.'}</p>
          </div>

          <div style={{ border: '1px solid rgba(255,172,232,0.18)', borderRadius: 18, background: 'linear-gradient(180deg, rgba(255,172,232,0.08) 0%, rgba(255,172,232,0.03) 100%)', padding: '18px 18px 16px' }}>
            <p style={{ margin: '0 0 8px', color: '#fface8', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Study pace</p>
            <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 23 }}>{focusedTopic?.paceLabel || 'Balanced pace'}</p>
            <p style={{ margin: 0, color: '#9eb0b3', fontSize: 13 }}>{focusedTopic ? `${focusedTopic.weeklyHours || 5} hrs/week on your current focus.` : 'Set this from any topic sidebar.'}</p>
          </div>

          <div style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 18, background: 'rgba(14,16,21,0.58)', padding: '18px 18px 16px' }}>
            <p style={{ margin: '0 0 8px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Tracked topics</p>
            <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 23 }}>{trackedTopics.length}</p>
            <p style={{ margin: 0, color: '#9eb0b3', fontSize: 13 }}>Topics you have opened and personalized.</p>
          </div>

          <div style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 18, background: 'rgba(14,16,21,0.58)', padding: '18px 18px 16px' }}>
            <p style={{ margin: '0 0 8px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Checkpoints done</p>
            <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 23 }}>{totalCompletedHighlights}</p>
            <p style={{ margin: 0, color: '#9eb0b3', fontSize: 13 }}>Completed highlights across your learning tracks.</p>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16, marginBottom: 30 }}>
          <div style={{ border: '1px solid rgba(0,219,231,0.16)', borderRadius: 22, background: 'linear-gradient(135deg, rgba(0,219,231,0.14) 0%, rgba(17,25,32,0.95) 55%, rgba(255,172,232,0.08) 100%)', padding: 22 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, padding: '6px 12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.04)', color: '#d6fbff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase', marginBottom: 14 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>track_changes</span>
              Active learning spotlight
            </span>

            <h2 style={{ margin: '0 0 8px', color: '#ffffff', fontFamily: 'Space Grotesk', fontSize: 30 }}>
              {focusedTopic?.topicName || 'Choose a topic to start tracking'}
            </h2>
            <p style={{ margin: '0 0 14px', color: '#c2d5d8', lineHeight: 1.7, fontSize: 14 }}>
              {focusedTopic?.topic?.desc || 'Open any topic page, tap the level or duration cards in the sidebar, and your learning setup will appear here.'}
            </p>

            <div style={{ display: 'grid', gap: 10, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#d6fbff', fontSize: 13 }}>
                <span>Current stage</span>
                <strong>{focusedTopic?.currentStage || 'Not selected'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#d6fbff', fontSize: 13 }}>
                <span>Recommended duration</span>
                <strong>{focusedTopic?.duration || 'Self-paced'}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#d6fbff', fontSize: 13 }}>
                <span>Progress</span>
                <strong>{focusedTopic ? `${focusedTopic.completedCount}/${focusedTopic.totalHighlights}` : '0/0'}</strong>
              </div>
            </div>

            <div style={{ height: 8, borderRadius: 999, background: 'rgba(255,255,255,0.12)', overflow: 'hidden', marginBottom: 18 }}>
              <div style={{ width: `${focusedTopic?.progressPercent || 0}%`, height: '100%', background: 'linear-gradient(90deg, #74f5ff 0%, #fface8 100%)' }} />
            </div>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {focusedTopic ? (
                <Link
                  to={`/topic/${focusedTopic.topicSlug}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#74f5ff', color: '#00363a', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>school</span>
                  Resume Topic
                </Link>
              ) : (
                <Link
                  to="/courses"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#74f5ff', color: '#00363a', padding: '10px 16px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  Explore Topics
                </Link>
              )}
              {recentTopic ? (
                <p style={{ margin: 0, color: '#c2d5d8', fontSize: 13, alignSelf: 'center' }}>
                  Last updated {new Date(recentTopic.lastViewedAt || Date.now()).toLocaleDateString()}
                </p>
              ) : null}
            </div>
          </div>

          <div style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 22, background: 'rgba(14,16,21,0.58)', padding: 22 }}>
            <p style={{ margin: '0 0 10px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Recent learning activity</p>
            {recentTopic ? (
              <div style={{ display: 'grid', gap: 14 }}>
                <div>
                  <p style={{ margin: '0 0 4px', color: '#e3e1e9', fontFamily: 'Space Grotesk', fontSize: 24 }}>{recentTopic.topicName}</p>
                  <p style={{ margin: 0, color: '#9eb0b3', fontSize: 14, lineHeight: 1.7 }}>{recentTopic.topic?.desc}</p>
                </div>

                <div style={{ display: 'grid', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                    <span>Last panel used</span>
                    <strong style={{ color: '#e3e1e9', textTransform: 'capitalize' }}>{recentTopic.lastPanelViewed || 'overview'}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                    <span>Study pace</span>
                    <strong style={{ color: '#e3e1e9' }}>{recentTopic.paceLabel}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                    <span>Level stage</span>
                    <strong style={{ color: '#e3e1e9' }}>{recentTopic.currentStage}</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ border: '1px dashed rgba(58,73,75,0.45)', borderRadius: 16, padding: '22px 18px', color: '#9eb0b3', lineHeight: 1.7 }}>
                Open a topic page and interact with the level or duration cards to start building your learning profile.
              </div>
            )}
          </div>
        </section>

        <section style={{ marginBottom: 34 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 14 }}>
            <div>
              <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#74f5ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>TRACKED_TOPICS</span>
              <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 30, color: '#e3e1e9', margin: '8px 0 0' }}>Your topic progress</h2>
            </div>
            <Link to="/courses" style={{ color: '#74f5ff', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
              Browse more topics
            </Link>
          </div>

          {trackedTopics.length === 0 ? (
            <div style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 18, background: 'rgba(14,16,21,0.52)', padding: '28px 22px', color: '#9eb0b3', lineHeight: 1.7 }}>
              No tracked topics yet. Use the level or duration cards in any topic sidebar to create a personalized study plan.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 14 }}>
              {trackedTopics.map(entry => (
                <div key={entry.topicSlug} style={{ border: '1px solid rgba(58,73,75,0.35)', borderRadius: 18, background: 'rgba(14,16,21,0.58)', padding: 18 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap', marginBottom: 14 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 5 }}>
                        <p style={{ margin: 0, fontFamily: 'Space Grotesk', fontSize: 24, color: '#e3e1e9' }}>{entry.topicName}</p>
                        {entry.focus ? (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, borderRadius: 999, padding: '4px 10px', background: 'rgba(255,172,232,0.12)', border: '1px solid rgba(255,172,232,0.25)', color: '#fface8', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>star</span>
                            Focused
                          </span>
                        ) : null}
                      </div>
                      <p style={{ margin: 0, color: '#9eb0b3', fontSize: 14, lineHeight: 1.7 }}>{entry.topic?.desc}</p>
                    </div>

                    <Link
                      to={`/topic/${entry.topicSlug}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, border: '1px solid rgba(0,219,231,0.28)', background: 'rgba(0,219,231,0.08)', color: '#74f5ff', padding: '9px 14px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', flexShrink: 0 }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>open_in_new</span>
                      Open topic
                    </Link>
                    <button
                      type="button"
                      onClick={() => resetTopicLearningProgress(entry.topicSlug)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        border: '1px solid rgba(255,107,107,0.3)',
                        background: 'rgba(255,107,107,0.06)',
                        color: '#ff9ea8',
                        padding: '9px 12px',
                        borderRadius: 10,
                        fontWeight: 700,
                        fontSize: 12,
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>refresh</span>
                      Reset Topic
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10, marginBottom: 14 }}>
                    <div style={{ borderRadius: 14, background: 'rgba(255,255,255,0.03)', padding: '12px 13px' }}>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Level stage</p>
                      <p style={{ margin: 0, color: '#e3e1e9', fontWeight: 700, fontSize: 14 }}>{entry.currentStage}</p>
                    </div>
                    <div style={{ borderRadius: 14, background: 'rgba(255,255,255,0.03)', padding: '12px 13px' }}>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Duration</p>
                      <p style={{ margin: 0, color: '#e3e1e9', fontWeight: 700, fontSize: 14 }}>{entry.duration}</p>
                    </div>
                    <div style={{ borderRadius: 14, background: 'rgba(255,255,255,0.03)', padding: '12px 13px' }}>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Weekly pace</p>
                      <p style={{ margin: 0, color: '#e3e1e9', fontWeight: 700, fontSize: 14 }}>{entry.paceLabel}</p>
                    </div>
                    <div style={{ borderRadius: 14, background: 'rgba(255,255,255,0.03)', padding: '12px 13px' }}>
                      <p style={{ margin: '0 0 4px', color: '#74f5ff', fontFamily: 'JetBrains Mono', fontSize: 11, textTransform: 'uppercase' }}>Updated</p>
                      <p style={{ margin: 0, color: '#e3e1e9', fontWeight: 700, fontSize: 14 }}>{entry.lastViewedAt ? new Date(entry.lastViewedAt).toLocaleDateString() : 'Today'}</p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, color: '#9eb0b3', fontSize: 13 }}>
                      <span>Progress through key highlights</span>
                      <strong style={{ color: '#e3e1e9' }}>{entry.completedCount}/{entry.totalHighlights}</strong>
                    </div>
                    <div style={{ height: 8, borderRadius: 999, background: 'rgba(58,73,75,0.45)', overflow: 'hidden' }}>
                      <div style={{ width: `${entry.progressPercent}%`, height: '100%', background: 'linear-gradient(90deg, #00dbe7 0%, #74f5ff 100%)' }} />
                    </div>
                    {entry.completedHighlights?.length ? (
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
                        {entry.completedHighlights.map(highlight => (
                          <span key={`${entry.topicSlug}-${highlight}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, borderRadius: 999, padding: '5px 10px', background: 'rgba(0,219,231,0.08)', border: '1px solid rgba(0,219,231,0.18)', color: '#bffbff', fontSize: 12 }}>
                            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>done</span>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <div style={{ marginBottom: 18 }}>
            <span style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#fface8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SAVED_VIDEOS</span>
            <h2 style={{ fontFamily: 'Space Grotesk', fontSize: 30, color: '#e3e1e9', margin: '8px 0 6px' }}>My Saved Videos</h2>
            <p style={{ color: '#849495', margin: 0, fontSize: 15 }}>Videos you saved from tutorial pages.</p>
          </div>

        {savedVideos.length === 0 ? (
          <div style={{
            border: '1px solid rgba(58,73,75,0.35)',
            borderRadius: 18,
            background: 'rgba(14,16,21,0.5)',
            padding: '44px 24px',
            textAlign: 'center',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: 48, color: '#849495', display: 'block', marginBottom: 12 }}>bookmark</span>
            <p style={{ color: '#849495', fontSize: 16, margin: '0 0 20px' }}>
              No saved videos yet. Go to any Tutorial page and click <strong style={{ color: '#00dbe7' }}>Save Video</strong>.
            </p>
            <Link to="/topic/dsa" style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#00dbe7', color: '#00363a',
              padding: '10px 20px', borderRadius: 8,
              fontWeight: 700, fontSize: 14, textDecoration: 'none',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
              Go to Tutorials
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 16 }}>
            {savedVideos.map(video => (
              <div
                key={video.id}
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 16, flexWrap: 'wrap',
                  border: '1px solid rgba(58,73,75,0.35)',
                  borderRadius: 18,
                  background: 'rgba(14,16,21,0.5)',
                  padding: '16px',
                }}
              >
                {/* Thumbnail */}
                {video.videoId ? (
                  <img
                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                    alt={video.title}
                    style={{
                      width: 180, height: 101, objectFit: 'cover',
                        borderRadius: 10, border: '1px solid rgba(58,73,75,0.4)',
                      flexShrink: 0,
                    }}
                  />
                ) : null}

                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: '0 0 4px', fontFamily: 'Space Grotesk', fontSize: 17, fontWeight: 700, color: '#e3e1e9', lineHeight: 1.3 }}>
                    {video.title || 'Tutorial Video'}
                  </p>
                  {video.channelName ? (
                    <p style={{ margin: '0 0 6px', color: '#849495', fontFamily: 'JetBrains Mono', fontSize: 12 }}>
                      {video.channelName}
                    </p>
                  ) : null}
                  {video.topicTitle ? (
                    <span style={{
                      display: 'inline-block',
                      fontSize: 12, color: '#00dbe7',
                      border: '1px solid rgba(0,219,231,0.28)',
                      background: 'rgba(0,219,231,0.08)',
                      borderRadius: 999,
                      padding: '2px 10px',
                      marginBottom: 10,
                    }}>
                      {video.topicTitle}
                    </span>
                  ) : null}

                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <a
                      href={video.watchUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: '#00dbe7', color: '#00363a',
                        padding: '7px 14px', borderRadius: 8,
                        fontSize: 13, fontWeight: 700, textDecoration: 'none',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>play_arrow</span>
                      Watch on YouTube
                    </a>
                    <button
                      type="button"
                      onClick={() => removeVideo(video.id)}
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        border: '1px solid rgba(255,107,107,0.35)',
                        background: 'rgba(255,107,107,0.08)',
                        color: '#ff6b6b',
                        padding: '7px 14px', borderRadius: 8,
                        fontSize: 13, fontWeight: 600, cursor: 'pointer',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 15 }}>delete</span>
                      Remove
                    </button>
                  </div>
                </div>

                <p style={{ margin: 0, color: '#3a494b', fontFamily: 'JetBrains Mono', fontSize: 11, flexShrink: 0 }}>
                  {new Date(video.savedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
