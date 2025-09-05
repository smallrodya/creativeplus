'use client';

import { CaseStudyProps } from '@/types/bgfpromo';

interface CaseStudiesProps {
  cases: CaseStudyProps[];
}

export default function CaseStudies({ cases }: CaseStudiesProps) {
  const defaultCases: CaseStudyProps[] = [
    {
      title: 'Chriss Gross - Не Ведись',
      genre: 'Поп',
      reach: '810 000',
      listeners: '7 871',
      additions: '4,57',
      cost: 'цена 1-го слушателя',
      link: '#'
    },
    {
      title: 'ВИДЫ - Перечеркивая',
      genre: 'Хип-хоп',
      reach: '182 000',
      listeners: '1 620',
      additions: '881',
      cost: '5,5₽',
      link: '#'
    },
    {
      title: 'Dewensoon - По бараба...',
      genre: 'Хип-хоп',
      reach: '1 700 600',
      listeners: '10',
      additions: '2 171',
      cost: 'блогеров',
      link: '#'
    },
    {
      title: 'SKRIMER & NAIREX - Внатуре',
      genre: 'Хип-хоп',
      reach: '1 065 000',
      listeners: '100 000',
      additions: '18 322',
      cost: '6₽',
      link: '#'
    },
    {
      title: 'Alex Say - Любовь кончается',
      genre: 'Хип-хоп',
      reach: '600 000',
      listeners: '33',
      additions: '16.8k',
      cost: '0.84р',
      link: '#'
    },
    {
      title: 'Diving Birds - Touch the...',
      genre: 'Рок',
      reach: '61 540',
      listeners: '77',
      additions: '40 000 ₽',
      cost: '0.84р',
      link: '#'
    }
  ];

  const casesToShow = cases.length > 0 ? cases : defaultCases;

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            КЕЙСЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casesToShow.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {caseStudy.title}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-900 mb-1">
                    {caseStudy.reach}
                  </div>
                  <div className="text-sm text-gray-600">рекламный охват</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {caseStudy.listeners}
                  </div>
                  <div className="text-sm text-gray-600">слушателей на Яндекс</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {caseStudy.additions}
                  </div>
                  <div className="text-sm text-gray-600">добавлений в аудио</div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600 mb-1">
                    {caseStudy.cost}
                  </div>
                  <div className="text-sm text-gray-600">цена за 1 добавление</div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href={caseStudy.link}
                  className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors duration-300 inline-block"
                >
                  Хочу так же!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
