import React from 'react';
import Mascot from './shared/Mascot';

export default function IntroScreen({ onBegin }) {
  return (
    <div className="main-card" style={{ alignItems: 'center', textAlign: 'center', minHeight: '520px' }}>
      {/* Curriculum Badge */}
      <div className="card-header-badge">
        <span>✨</span> MOE Curriculum · Grade 3 · Geometry
      </div>

      {/* Main Page Title */}
      <h1 style={{ fontSize: '44px', lineHeight: '1.1', marginBottom: '24px', fontWeight: '900' }}>
        <span className="title-white">Amazing</span><br />
        <span className="title-gold">Angles!</span>
      </h1>

      {/* Mascot Greeting */}
      <Mascot mood="curious" bubble="Ready to spot square corners all around us? Let's go! 🌟" />

      {/* Introductory Paragraph */}
      <p style={{
        color: 'var(--text-muted-lavender)',
        fontSize: '17px',
        lineHeight: '1.6',
        maxWidth: '620px',
        marginBottom: '24px'
      }}>
        Join Vertex the Robot and discover Right Angles — and how to tell whether an angle is bigger or smaller than one — through stories, simulations, and exciting games!
      </p>

      {/* Journey Map Section (3 + 2 layout) */}
      <div style={{
        backgroundColor: 'var(--surface-card-nested)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '18px',
        padding: '18px 22px',
        width: '100%',
        maxWidth: '640px',
        textAlign: 'center',
        marginBottom: '24px'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '800',
          color: 'var(--accent-gold)',
          letterSpacing: '1px',
          marginBottom: '16px'
        }}>
          YOUR LEARNING JOURNEY
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          color: 'var(--text-muted-lavender)',
          fontSize: '14px',
          fontWeight: '700',
          marginBottom: '10px'
        }}>
          <div style={{ background: '#1b103c', padding: '10px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>🔍 Wonder</div>
          <div style={{ background: '#1b103c', padding: '10px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>📖 Story</div>
          <div style={{ background: '#1b103c', padding: '10px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>✏️ Simulate</div>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          color: 'var(--text-muted-lavender)',
          fontSize: '14px',
          fontWeight: '700'
        }}>
          <div style={{ background: '#1b103c', padding: '10px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>🎮 Practice</div>
          <div style={{ background: '#1b103c', padding: '10px 16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>📋 Reflect</div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn-gold" onClick={onBegin} style={{ marginBottom: '28px' }}>
        🚀 Begin Your Journey!
      </button>

      {/* Feature Highlights (3 + 2 layout) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        maxWidth: '640px',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 120px', maxWidth: '170px', backgroundColor: 'rgba(14, 7, 36, 0.4)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '38px' }}>📐</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>3 Angle Types</span>
          </div>
          <div style={{ flex: '1 1 120px', maxWidth: '170px', backgroundColor: 'rgba(14, 7, 36, 0.4)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '38px' }}>🧩</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>4 Simulations</span>
          </div>
          <div style={{ flex: '1 1 120px', maxWidth: '170px', backgroundColor: 'rgba(14, 7, 36, 0.4)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '38px' }}>🏆</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>10 Angle Worlds</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 120px', maxWidth: '170px', backgroundColor: 'rgba(14, 7, 36, 0.4)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '38px' }}>💡</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>Fun Facts</span>
          </div>
          <div style={{ flex: '1 1 120px', maxWidth: '170px', backgroundColor: 'rgba(14, 7, 36, 0.4)', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '38px' }}>🎯</span>
            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-muted-lavender)' }}>Quizzes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
