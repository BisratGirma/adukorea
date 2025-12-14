"use client";

import { useState } from 'react';
import { Product } from "@/lib/products";
import QuantitySelector from '@/components/QuantitySelector';
import InnerImageZoom from 'react-inner-image-zoom';
import { useCart } from '@/lib/cart';

type ProductPageClientProps = {
  product: Product;
};

export default function ProductPageClient({ product }: ProductPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  // Use a placeholder if gallery is empty, otherwise use the real gallery
  const gallery = (product.gallery && product.gallery.length > 0) 
    ? [product.image, ...product.gallery]
    : [product.image];


  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <InnerImageZoom
                    src={selectedImage}
                    zoomSrc={selectedImage}
                    zoomScale={2.5}
                    hideHint={true}
                    // alt={product.name}
                    className="h-full w-full max-w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="grid grid-cols-4 gap-2 lg:grid-cols-1 lg:gap-3">
                  {gallery.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`aspect-square w-full overflow-hidden rounded-lg border-2 ${selectedImage === img ? 'border-primary' : 'border-transparent'} text-center`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img className="h-full w-full object-cover" src={img} alt={`Thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <p className="text-sm font-medium text-gray-500">{product.category}</p>
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
            
            <div className="mt-5 flex items-center">
              <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
              <p className="ml-2 text-sm text-gray-500">+ Free Shipping</p>
            </div>

            <div className="mt-8 flex items-center">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <button
                type="button"
                onClick={() =>
                  addItem(
                    {
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    },
                    quantity
                  )
                }
                className="ml-4 flex-1 rounded-md border border-transparent bg-primary px-6 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-primary-600"
              >
                Add to Cart
              </button>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Category: <span className="text-gray-900 font-medium">{product.category}</span></p>
              <h3 className="text-base font-medium text-gray-900">Description</h3>
              <div 
                className="prose prose-sm mt-4 text-gray-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
