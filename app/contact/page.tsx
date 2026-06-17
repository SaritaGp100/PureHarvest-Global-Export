export default function ContactPage() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12">

          <div>

            <h1 className="text-5xl font-bold">
              Contact Us
            </h1>

            <p className="mt-6 text-slate-600">
              Looking for premium Indian spices and
              agricultural products?
            </p>

            <div className="mt-10 space-y-4">

              <div>
                <h3 className="font-semibold">
                  Location
                </h3>

                <p>Nerul, Navi Mumbai, India</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p>+91 83697 59857</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p>info@pureharvestglobalexports.com</p>
              </div>

            </div>

            <a
              href="https://wa.me/918369759857"
              target="_blank"
              className="inline-flex mt-8 px-8 py-4 rounded-xl bg-green-700 text-white"
            >
              Chat on WhatsApp
            </a>

          </div>

          <div className="glass-card rounded-3xl p-8">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Product Required"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="btn-primary px-8 py-4 rounded-xl"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}