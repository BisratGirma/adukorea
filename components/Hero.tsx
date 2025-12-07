export default function Hero() {
  return (
    <section id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Shop for </span>
              <span className="block text-primary">30% Off for travelers</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 sm:mt-5 sm:text-xl md:mt-6">
              We value your time and strive to provide a seamless shopping experience with fast delivery and easy returns.
            </p>
            <div className="mt-8 sm:mt-10">
              <a
                href="#products"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 md:py-4 md:text-lg md:px-10 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Open Store
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/ethiopian-hostess.png"
              alt="Happy woman with shopping bags"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
