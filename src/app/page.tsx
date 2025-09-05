'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  // Данные для Hero секции
  const heroData = {
    title: 'ЭКСПЕРТЫ В ПРОДВИЖЕНИИ МУЗЫКИ',
    subtitle: 'Обеспечиваем прозрачный, индивидуальный и комфортный подход к продвижению и рекламе ваших релизов.',
    description: 'Мы не используем накрутку, только настоящий результат.',
    ctaText: 'СВЯЗАТЬСЯ С НАМИ',
    ctaLink: '#contact'
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero data={heroData} />
      </main>
      
      <Footer />
    </div>
  );
}