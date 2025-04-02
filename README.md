# React приложение с интеграцией Yandex Maps

[![npm](https://img.shields.io/npm/v/@pbe/react-yandex-maps)](https://www.npmjs.com/package/@pbe/react-yandex-maps)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@pbe/react-yandex-maps)](https://bundlephobia.com/package/@pbe/react-yandex-maps)

## Использование готового компонента

Чтобы быстро начать работу с этим проектом, клонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/kaurcev/Ya-map.git
cd Ya-map
npm install
npm run start
```

## Пример использования

Ниже приведен пример кода, демонстрирующий, как добавить карту с метками в ваше приложение:

```typescript
import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import points from './file.json';

interface Point {
  coordinates: number[];
  content: string;
}

const App: React.FC = () => (
  <YMaps>
    <Map className='map' defaultState={{ center: [54.9924, 73.3686], zoom: 14 }}>
      {points.map((point: Point, index: number) => (
        <Placemark
          key={index}
          geometry={point.coordinates}
          properties={{ iconCaption: point.content }} 
        />
      ))}
    </Map>
  </YMaps>
);

export default App;
```

## Структура данных для меток

Пример JSON-данных, используемых для отображения меток на карте:

```json
[
  {
    "coordinates": [54.9924, 73.3686],
    "content": "Это типа Омск"
  },
  {
    "coordinates": [54.993611, 73.360028],
    "content": "Легендарное метро из одной станции"
  }
]
```

## Описание

Это приложение демонстрирует, как эффективно интегрировать Яндекс.Карты в ваше React-приложение, используя библиотеку `@pbe/react-yandex-maps`. Этот инструмент предоставляет удобные биндинги для работы с API Яндекс.Карт, обеспечивая простоту и гибкость в разработке.

[Yandex Maps API][ymaps-api] предоставляет мощные возможности для создания интерактивных карт в веб-приложениях.

[ymaps-api]: https://pbe-react-yandex-maps.vercel.app/

### Основные особенности

- **Поддержка TypeScript:** Легкая интеграция с TypeScript, позволяющая использовать типизацию и автодополнение.
- **Автоматическая загрузка API:** Библиотека автоматически загружает необходимые модули API Яндекс.Карт, что упрощает процесс интеграции.
- **Декларативный рендеринг:** Используйте декларативный подход для рендеринга карт и меток, что делает код более читаемым и поддерживаемым.

## Установка

Установите пакет с помощью npm:

```bash
npm install @pbe/react-yandex-maps
```