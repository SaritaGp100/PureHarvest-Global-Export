import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Pure Harvest Global Exports
            </h3>

            <p className="leading-relaxed">
              Premium Indian spices and agricultural products
              sourced with quality and exported worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/products">Products</Link>
              <Link href="/export-process">Export Process</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3">
              <p>Nerul, Navi Mumbai, India</p>

              <p>
                <a href="tel:+918369759857">
                  +91 83697 59857
                </a>
              </p>

              <p>
                info@pureharvestglobalexports.com
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Pure Harvest Global Exports.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}