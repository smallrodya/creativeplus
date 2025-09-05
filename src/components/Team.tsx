'use client';

export default function Team() {
  const teamMembers = [
    {
      name: 'Денис',
      position: 'Руководитель операционных задач',
      description: 'Координирует все операционные процессы'
    },
    {
      name: 'Влад',
      position: 'Руководитель отдела продаж',
      description: 'Отвечает за развитие клиентской базы'
    },
    {
      name: 'Константин',
      position: 'Таргетолог',
      description: 'Специалист по настройке рекламных кампаний'
    },
    {
      name: 'Ксения',
      position: 'Менеджер проектов VK',
      description: 'Курирует проекты во ВКонтакте'
    },
    {
      name: 'Алина',
      position: 'Специалист TikTok реклама',
      description: 'Эксперт по продвижению в TikTok'
    },
    {
      name: 'Иван',
      position: 'Таргетолог Яндекс Директ',
      description: 'Специалист по Яндекс.Директ'
    },
    {
      name: 'Василий',
      position: 'Дизайнер',
      description: 'Создает визуальный контент'
    },
    {
      name: 'Роман',
      position: 'Юрист',
      description: 'Обеспечивает правовую поддержку'
    },
    {
      name: 'Ольга',
      position: 'Бухгалтер',
      description: 'Ведет финансовую отчетность'
    },
    {
      name: 'Диана',
      position: 'Специалист TikTok реклама',
      description: 'Эксперт по продвижению в TikTok'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            команда
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gray-100 rounded-2xl p-6 h-full flex flex-col justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
