import { BGFData, BGFPage } from '@/types/bgfpromo';

// Загружаем данные из JSON файла
export async function loadBGFData(): Promise<BGFData> {
  try {
    const response = await fetch('/api/bgf-data');
    if (!response.ok) {
      throw new Error('Failed to load BGF data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading BGF data:', error);
    // Возвращаем пустые данные в случае ошибки
    return {
      site_info: {
        base_url: 'https://bgfpromo.ru',
        total_pages: 0,
        parsed_at: new Date().toISOString(),
        parser_version: '1.0'
      },
      pages: []
    };
  }
}

// Получаем главную страницу
export function getMainPage(data: BGFData): BGFPage | null {
  return data.pages.find(page => page.url === 'https://bgfpromo.ru') || data.pages[0] || null;
}

// Получаем страницу по URL
export function getPageByUrl(data: BGFData, url: string): BGFPage | null {
  return data.pages.find(page => page.url === url) || null;
}

// Получаем все страницы услуг
export function getServicePages(data: BGFData): BGFPage[] {
  const serviceUrls = [
    'https://bgfpromo.ru/services',
    'https://bgfpromo.ru/vkcomplex',
    'https://bgfpromo.ru/vktop',
    'https://bgfpromo.ru/tiktok',
    'https://bgfpromo.ru/yandex',
    'https://bgfpromo.ru/spotify',
    'https://bgfpromo.ru/tv',
    'https://bgfpromo.ru/concert'
  ];
  
  return data.pages.filter(page => serviceUrls.includes(page.url));
}

// Извлекаем кейсы из контента
export function extractCaseStudies(data: BGFData): Array<{
  title: string;
  genre: string;
  reach: string;
  listeners: string;
  additions: string;
  cost: string;
  link: string;
}> {
  const cases: Array<{
    title: string;
    genre: string;
    reach: string;
    listeners: string;
    additions: string;
    cost: string;
    link: string;
  }> = [];

  // Ищем кейсы в контентных блоках
  data.pages.forEach(page => {
    page.content_blocks.forEach(block => {
      const text = block.content.text.toLowerCase();
      
      // Ищем паттерны кейсов
      if (text.includes('рекламный охват') || text.includes('слушателей') || text.includes('добавлений')) {
        // Извлекаем данные кейса
        const headings = block.content.headings;
        const paragraphs = block.content.paragraphs;
        
        if (headings.length > 0) {
          const title = headings[0].text;
          const genre = extractGenre(text);
          const reach = extractNumber(text, 'рекламный охват');
          const listeners = extractNumber(text, 'слушателей');
          const additions = extractNumber(text, 'добавлений');
          const cost = extractCost(text);
          
          cases.push({
            title,
            genre,
            reach,
            listeners,
            additions,
            cost,
            link: page.url
          });
        }
      }
    });
  });

  return cases;
}

// Извлекаем отзывы
export function extractReviews(data: BGFData): Array<{
  author: string;
  role: string;
  text: string;
  platform: string;
  link: string;
}> {
  const reviews: Array<{
    author: string;
    role: string;
    text: string;
    platform: string;
    link: string;
  }> = [];

  data.pages.forEach(page => {
    page.content_blocks.forEach(block => {
      const text = block.content.text;
      
      // Ищем отзывы по характерным словам
      if (text.includes('отзыв') || text.includes('доволен') || text.includes('результат')) {
        block.content.paragraphs.forEach(paragraph => {
          const pText = paragraph.text;
          if (pText.length > 50 && (pText.includes('спасибо') || pText.includes('результат'))) {
            // Извлекаем автора и роль
            const lines = pText.split('\n');
            const author = lines[0] || 'Аноним';
            const role = lines[1] || '';
            
            reviews.push({
              author: author.trim(),
              role: role.trim(),
              text: pText,
              platform: 'VK',
              link: page.url
            });
          }
        });
      }
    });
  });

  return reviews;
}

// Вспомогательные функции
function extractGenre(text: string): string {
  const genres = ['Поп', 'Хип-хоп', 'Рок', 'Электронная музыка', 'Rap'];
  for (const genre of genres) {
    if (text.includes(genre.toLowerCase())) {
      return genre;
    }
  }
  return 'Не указан';
}

function extractNumber(text: string, keyword: string): string {
  const regex = new RegExp(`(\\d+[\\s,]*\\d*)\\s*${keyword}`, 'i');
  const match = text.match(regex);
  return match ? match[1] : '0';
}

function extractCost(text: string): string {
  const costRegex = /(\d+[.,]?\d*)\s*₽/;
  const match = text.match(costRegex);
  return match ? match[1] + '₽' : 'Не указана';
}

// Получаем статистику сайта
export function getSiteStats(data: BGFData): {
  yearsExperience: number;
  projects: number;
  listeners: string;
  topSongs: number;
} {
  // Извлекаем статистику из контента
  let yearsExperience = 11;
  let projects = 7300;
  let listeners = '5+ млрд';
  let topSongs = 54;

  data.pages.forEach(page => {
    page.content_blocks.forEach(block => {
      const text = block.content.text;
      
      // Ищем статистику
      if (text.includes('лет') && text.includes('работаем')) {
        const yearsMatch = text.match(/(\d+)\s*лет/);
        if (yearsMatch) yearsExperience = parseInt(yearsMatch[1]);
      }
      
      if (text.includes('проектов')) {
        const projectsMatch = text.match(/(\d+[,\s]*\d*)\s*проектов/);
        if (projectsMatch) projects = parseInt(projectsMatch[1].replace(/[,\s]/g, ''));
      }
      
      if (text.includes('прослушиваний')) {
        const listenersMatch = text.match(/(\d+[+\s]*млрд)/);
        if (listenersMatch) listeners = listenersMatch[1] + ' млрд';
      }
      
      if (text.includes('ТОП') && text.includes('песен')) {
        const topMatch = text.match(/(\d+)\s*песен/);
        if (topMatch) topSongs = parseInt(topMatch[1]);
      }
    });
  });

  return {
    yearsExperience,
    projects,
    listeners,
    topSongs
  };
}
