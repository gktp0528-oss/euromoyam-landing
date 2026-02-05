'use client';

import React from 'react';
import { ShoppingBag, Users, Briefcase, GraduationCap, Home, MessageCircle, User, PlusSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="landing-page" style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', position: 'relative', minHeight: '100vh' }}>
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span>🇪🇺</span>
            <span>유럽모임</span>
          </div>
          <button style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: 'bold', cursor: 'pointer' }}>로그인</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>유럽 살이의<br />즐거운 시작</h1>
          <p>
            내 주변 한인들과 나누는<br />따뜻한 일상 이야기
          </p>
          <div className="hero-btns">
            <button className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>앱 설치하기</button>
          </div>
        </div>
      </section>

      {/* Main Services (Features) */}
      <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>우리 동네 서비스</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><ShoppingBag size={24} /></div>
              <h3>중고거래</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Briefcase size={24} /></div>
              <h3>알바</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><GraduationCap size={24} /></div>
              <h3>과외</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><Users size={24} /></div>
              <h3>모임</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Feed-like section */}
      <section style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>지금 인기있는 글</h2>
            <span style={{ fontSize: '0.8rem', color: '#3b82f6', cursor: 'pointer' }}>전체보기</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ padding: '1rem', border: '1px solid #f3f4f6', borderRadius: '1rem', cursor: 'pointer' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.8rem', color: '#6b7280' }}>
                  <span>독일</span> • <span>중고거래</span>
                </div>
                <h4 style={{ marginBottom: '0.5rem' }}>상태 좋은 자전거 급처합니다! ({i})</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: '#3b82f6' }}>50€</span>
                  <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>2분 전</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <div className="bottom-nav">
        <a href="#" className="nav-item active">
          <Home size={24} />
          <span>홈</span>
        </a>
        <a href="#" className="nav-item">
          <ShoppingBag size={24} />
          <span>거래</span>
        </a>
        <div className="nav-item" style={{ marginTop: '-24px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: '#3b82f6', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 10px rgba(59, 130, 246, 0.4)', 
            color: '#fff' 
          }}>
            <PlusSquare size={24} />
          </div>
          <span style={{ marginTop: '4px' }}>글쓰기</span>
        </div>
        <a href="#" className="nav-item">
          <MessageCircle size={24} />
          <span>채팅</span>
        </a>
        <a href="#" className="nav-item">
          <User size={24} />
          <span>마이</span>
        </a>
      </div>
    </div>
  );
}
