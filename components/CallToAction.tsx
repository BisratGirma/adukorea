import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-800 sm:text-4xl">
          Didn't find what you're looking for in our store ?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          If you don't find what you're looking for in this virtual shop,
          please go to the Contact Us page and fill out the form which will
          allow you to send an email with your detailed request. Thank you!
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-600 transition-colors text-lg font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div
        className="h-56 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528495612343-9ca924a4529d?auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>
    </div>
  );
}
