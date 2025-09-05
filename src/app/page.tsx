'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { loadBGFData } from '@/lib/data';
import { BGFData } from '@/types/bgfpromo';

export default function Home() {
  const [data, setData] = useState<BGFData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const bgfData = await loadBGFData();
        setData(bgfData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

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