"use client";

import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center border border-gray-300 rounded-md w-32">
      <button onClick={decrement} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-md focus:outline-none">
        <MinusIcon className="h-5 w-5" />
      </button>
      <input
        type="text"
        value={quantity}
        readOnly
        className="w-full text-center border-l border-r border-gray-300 focus:outline-none bg-white"
      />
      <button onClick={increment} className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-md focus:outline-none">
        <PlusIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
