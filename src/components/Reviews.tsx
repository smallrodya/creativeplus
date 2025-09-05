'use client';

import { ReviewProps } from '@/types/bgfpromo';

interface ReviewsProps {
  reviews: ReviewProps[];
}

export default function Reviews({ reviews }: ReviewsProps) {
  const defaultReviews: ReviewProps[] = [
    {
      author: 'Владимир Коршунов',
      role: 'Дуэт GNEZDO',
      text: 'BGF с нуля продвигали нашу группу, ещё 3 месяца назад там было 0 подписчиков Сейчас у нас 60k+ добавлений, 5k подписчиков Бюджет был не маленький, они грамотно смогли его распределить, так что будьте уверены, что ваш бюджет не сольют. Нам пишут девочки в лс, говорят спасибо за музыку, желают здоровья и долголетия',
      platform: 'VK',
      link: '#'
    },
    {
      author: 'Валерий Михайлычев',
      role: 'Эф Трю',
      text: 'Работали с ребятами. Очень грамотные, прозрачные и умные! Здесь ты чувствуешь профессионализм и не сомневаешься в их действиях. Будем работать еще',
      platform: 'VK',
      link: '#'
    },
    {
      author: 'Денис Никоркин',
      role: 'Раш (YouTube блоггер, 1,5 миллиона подписчиков)',
      text: 'Ребята большие молодцы, знают своё дело, всегда готовы помочь и ответить на интересующие вопросы, сотрудничеством полностью доволен, результат превзошёл ожидания',
      platform: 'VK',
      link: '#'
    }
  ];

  const reviewsToShow = reviews.length > 0 ? reviews : defaultReviews;

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Что говорят артисты о работе с нами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsToShow.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Источник: {review.platform}</span>
                <a
                  href={review.link}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Читать отзыв
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
