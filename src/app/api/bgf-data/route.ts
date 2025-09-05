import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Путь к JSON файлу с данными
    const dataPath = path.join(process.cwd(), 'bgfpromo_data.json');
    
    // Проверяем существование файла
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json(
        { error: 'BGF data file not found' },
        { status: 404 }
      );
    }

    // Читаем файл
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading BGF data:', error);
    return NextResponse.json(
      { error: 'Failed to load BGF data' },
      { status: 500 }
    );
  }
}
