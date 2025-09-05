'use client';

import { ServiceCardProps } from '@/types/bgfpromo';

interface ServicesProps {
  services: ServiceCardProps[];
}

export default function Services({ services }: ServicesProps) {
  const defaultServices: ServiceCardProps[] = [
    {
      title: 'ВКонтакте Комплекс',
      description: 'Полное продвижение во ВКонтакте: реклама, посевы, работа с сообществами',
      icon: '📱',
      link: '/services/vkcomplex'
    },
    {
      title: 'ВКонтакте ТОП',
      description: 'Попадание в топы ВКонтакте и увеличение прослушиваний',
      icon: '🎯',
      link: '/services/vktop'
    },
    {
      title: 'TikTok Реклама',
      description: 'Продвижение в TikTok с помощью таргетированной рекламы',
      icon: '🎬',
      link: '/services/tiktok'
    },
    {
      title: 'Яндекс Музыка',
      description: 'Продвижение в Яндекс.Музыке и попадание в плейлисты',
      icon: '🎵',
      link: '/services/yandex'
    },
    {
      title: 'Spotify',
      description: 'Продвижение в Spotify и международных платформах',
      icon: '🎧',
      link: '/services/spotify'
    },
    {
      title: 'ТВ Реклама',
      description: 'Реклама на телевидении и в СМИ',
      icon: '📺',
      link: '/services/tv'
    }
  ];

  const servicesToShow = services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем полный спектр услуг по продвижению музыки на всех популярных платформах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToShow.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Подробнее
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
