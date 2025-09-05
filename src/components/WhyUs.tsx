'use client';

export default function WhyUs() {
  const features = [
    {
      title: 'Нам важен ваш успех',
      description: 'Мы работаем на результат, тщательно настраиваем и тестируем рекламу, тратим рекламный бюджет только когда уверены в результате.',
      icon: '🎯'
    },
    {
      title: 'Индивидуальный подход',
      description: 'У вас будет личный менеджер, который координирует для вас работу нашей команды и помогает на каждом этапе рекламной кампании.',
      icon: '👤'
    },
    {
      title: 'Только настоящий результат',
      description: 'Мы гарантируем только настоящие результаты и никогда не используем накрутку.',
      icon: '✅'
    },
    {
      title: 'Работаем с множеством жанров',
      description: 'Мы любим и продвигаем музыку всех жанров, главное, чтобы она была качественная и крутая.',
      icon: '🎵'
    },
    {
      title: 'Юридическая прозрачность',
      description: 'Работаем официально. Мы работаем как с независимыми артистами, так и с лейблами и при желании можем подписать договор и подготовить закрывающие документы.',
      icon: '📋'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Почему мы?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
