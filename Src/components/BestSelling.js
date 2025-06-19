import React, { useState } from "react";

export default function BestSelling() {
  const [index, setIndex] = useState(0);
  const products = ["Product A", "Product B", "Product C"];

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products.map((product, i) => (
            <div key={i} className="min-w-full text-center p-8 bg-gray-100">
              {product}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => setIndex((index - 1 + products.length) % products.length)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Prev
        </button>
        <button
          onClick={() => setIndex((index + 1) % products.length)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
