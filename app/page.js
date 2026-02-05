'use client';

import React from 'react';
import { ShoppingBag, Users, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <span>🇪🇺</span>
            <span>유럽모임</span>
          </div>
          <div className="nav-links">
            <a href="#features">기능</a>
            <a href="#about">소개</a>
            <a href="#download">시작하기</a>
          </div>
          <button className="btn-primary">앱 다운로드</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>유럽 한인 생활의<br /><span style={{ color: 'var(--primary)' }}>모든 연결</span>, 유럽모임</h1>
          <p>
            중고거래부터 알바 취업, 과외 레슨, 취미 모임까지.<br />
            유럽 곳곳에 흩어진 우리들의 이야기를 하나로 잇습니다.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">지금 시작하기 <ArrowRight size={18} style={{ marginLeft: '8px', display: 'inline' }} /></button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-title">
            <h2>무엇을 도와드릴까요?</h2>
            <p>유럽 생활에 꼭 필요한 네 가지 핵심 서비스를 제공합니다.</p>
          </div>

          <div className="feature-grid">
            {/* Marketplace */}
            <div className="feature-card">
              <div className="feature-icon">
                <ShoppingBag size={32} />
              </div>
              <h3>중고거래</h3>
              <p>귀국 정리부터 나눔까지, 이웃과 안전하게 거래하세요.</p>
            </div>

            {/* Jobs */}
            <div className="feature-card">
              <div className="feature-icon">
                <Briefcase size={32} />
              </div>
              <h3>알바/구인구직</h3>
              <p>나에게 딱 맞는 파트타임부터 정규직 채용 정보까지 확인하세요.</p>
            </div>

            {/* Tutoring */}
            <div className="feature-card">
              <div className="feature-icon">
                <GraduationCap size={32} />
              </div>
              <h3>과외/레슨</h3>
              <p>언어, 악기, 전공 지식 등 서로의 재능을 나누고 배워보세요.</p>
            </div>

            {/* Community */}
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>모임/커뮤니티</h3>
              <p>카페 투어, 러닝, 정보 공유 등 취향 맞는 친구들을 만나보세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" style={{ padding: '100px 0', textAlign: 'center', background: 'var(--primary)', color: '#fff' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>지금 유럽모임을 경험해보세요</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>당신의 유럽 생활이 더욱 편리하고 즐거워집니다.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button style={{ backgroundColor: '#000', color: '#fff', padding: '1rem 2rem', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>App Store</button>
            <button style={{ backgroundColor: '#000', color: '#fff', padding: '1rem 2rem', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Google Play</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <span className="footer-logo">🇪🇺 유럽모임</span>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Connecting Koreans in Europe.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>서비스</h4>
              <ul style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li>중고거래</li>
                <li>알바/취업</li>
                <li>과외/레슨</li>
                <li>모임</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem' }}>고객지원</h4>
              <ul style={{ color: 'rgba(255,255,255,0.6)' }}>
                <li>공지사항</li>
                <li>자주 묻는 질문</li>
                <li>문의하기</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 유럽모임 (EuroMoyam). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
