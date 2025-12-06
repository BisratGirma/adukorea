import Image from 'next/image';

interface FeaturedProductProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  learnMoreUrl: string;
  shopUrl: string;
  reverse?: boolean;
}

export default function FeaturedProduct({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  learnMoreUrl,
  shopUrl,
  reverse = false,
}: FeaturedProductProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href={learnMoreUrl}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600"
            >
              Learn more
            </a>
            <a
              href={shopUrl}
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Shop {title}
            </a>
          </div>
        </div>
        <div className="mt-12">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1200}
            height={600}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
