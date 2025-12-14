export const metadata = {
  title: "Return Policy | AduKorea",
};

export default function ReturnPolicyPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Return Policy</h1>
          <p className="mt-4 text-gray-600">
            We want you to be happy with your purchase. If something isn’t right, we’re here to help.
          </p>

          <div className="mt-10 space-y-8 text-gray-700">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Returns</h2>
              <p className="mt-2">
                Returns are accepted within 7 days of delivery, provided the item is unused, in original condition,
                and includes all original packaging.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Non-Returnable Items</h2>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Opened skincare/beauty products (for hygiene reasons)</li>
                <li>Items marked as final sale</li>
                <li>Gift cards</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Refunds</h2>
              <p className="mt-2">
                Once we receive and inspect your return, we’ll notify you of the approval status. Approved refunds are
                processed back to the original payment method.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Exchanges</h2>
              <p className="mt-2">
                If you need an exchange for the same item, contact us and we’ll guide you through the process.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
              <p className="mt-2">
                For return requests, reach out via the Contact page or email us at <span className="font-medium">info@adukorea.com</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
