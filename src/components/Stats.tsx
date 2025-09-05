'use client';

interface StatsProps {
  yearsExperience: number;
  projects: number;
  listeners: string;
  topSongs: number;
}

export default function Stats({ yearsExperience, projects, listeners, topSongs }: StatsProps) {
  const stats = [
    {
      number: yearsExperience,
      label: 'работаем на музыкальном рынке',
      sublabel: 'лет'
    },
    {
      number: projects.toLocaleString() + '+',
      label: 'успешных проектов для тысяч артистов',
      sublabel: ''
    },
    {
      number: listeners,
      label: 'прослушиваний из нашей рекламы',
      sublabel: ''
    },
    {
      number: topSongs,
      label: 'песен выведено в ТОП Чарты VK и Яндекс Музыки',
      sublabel: ''
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 rounded-2xl p-8 h-full flex flex-col justify-center">
                <div className="text-5xl md:text-6xl font-black text-gray-900 mb-2">
                  {stat.number}
                </div>
                {stat.sublabel && (
                  <div className="text-2xl font-bold text-gray-700 mb-2">
                    {stat.sublabel}
                  </div>
                )}
                <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
