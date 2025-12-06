"use client";

import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import { useState } from 'react';

export default function PriceRangeSlider() {
  const [priceRange, setPriceRange] = useState([14, 30]);

  return (
    <div className="p-6 border border-gray-200 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-4">Filter by price</h3>
      <Slider
        range
        min={0}
        max={100}
        value={priceRange}
        onChange={(value) => setPriceRange(value as number[])}
        trackStyle={[{ backgroundColor: '#198754' }]}
        handleStyle={[
          { borderColor: '#198754', backgroundColor: 'white', borderWidth: 2 },
          { borderColor: '#198754', backgroundColor: 'white', borderWidth: 2 },
        ]}
        railStyle={{ backgroundColor: '#e5e7eb' }}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">
          Min. Price: <span className="font-semibold">${priceRange[0]}</span>
        </div>
        <div className="text-sm text-gray-600">
          Max. Price: <span className="font-semibold">${priceRange[1]}</span>
        </div>
      </div>
      <button className="text-sm text-gray-500 hover:text-primary mt-4">
        Reset
      </button>
    </div>
  );
}
