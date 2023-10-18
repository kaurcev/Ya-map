# React приложение с инеграцей Yandex Maps

Данный проект демонстрирует работу интеграции Я.Карт в ваше React-приложение.

[![npm](https://img.shields.io/npm/v/@pbe/react-yandex-maps)](https://www.npmjs.com/package/@pbe/react-yandex-maps)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@pbe/react-yandex-maps)](https://bundlephobia.com/package/@pbe/react-yandex-maps)

[Yandex Maps API][ymaps-api] bindings for React

[ymaps-api]:
  https://tech.yandex.com/maps/doc/jsapi/2.1/quick-start/index-docpage/

### Особенности

- Supports TypeScript out of the box
- Automatic yamps api and modules loading
- Declarative rendering

### Установка

npm:

```
npm install @pbe/react-yandex-maps
```

yarn:

```
yarn add @pbe/react-yandex-maps
```


### Добавляем карту в приложение

```TypeScript
import { YMaps, Map, Placemark, } from 'react-yandex-maps'; 
import points from './file.json'; // Импорт данных точек из JSON файла

var App = () => (
<YMaps>
    <!-- Атрибут defaultState позволяет указать начальную позицию карты и зум (приближение) -->
  <Map className='map' defaultState={{ center: [54.9924, 73.3686], zoom: 14 }}>

  <!-- Полученные данные точек из JSON файла отрисовываются на карте  -->

    {points.map(point => (
      <Placemark geometry={point.coordinates} properties={{ iconCaption: point.content }} />
    ))}
  </Map>
</YMaps>
);
```


### Данные о метках

Содержание указано ниже

```JSON
[
  {
    "coordinates": [54.976893,73.432472],
    "content": "ОНИИП"
  },
  {
    "coordinates": [54.966893,73.432472],
    "content": "Ещё одна точка"
  }
]
```