export default function Hero() {
  return (
    <section id="home" className="relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Shop for </span>
          <span className="block text-primary xl:inline">Quality</span>
        </h1>
        <p className="mt-4 text-lg text-gray-200 sm:mt-5 sm:text-xl md:mt-6">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
          fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-6 sm:mt-8">
          <a
            href="#products"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 md:py-4 md:text-lg md:px-10 shadow-lg"
          >
            Open Store
          </a>
        </div>
      </div>
    </section>
  );
}
