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