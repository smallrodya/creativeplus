'use client';

import Image from 'next/image';
import { HeroSectionProps } from '@/types/bgfpromo';

interface HeroProps {
  data: HeroSectionProps;
}

export default function Hero({ data }: HeroProps) {
  // data не используется, так как весь контент на изображении
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.png"
          alt="BGF Promo - Эксперты в продвижении музыки"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>
      
      {/* Затемнение для лучшей читаемости, если нужно */}
      <div className="absolute inset-0 bg-black/10"></div>
      
    </section>
  );
}
