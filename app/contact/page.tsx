"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    product: "",
    quantity: "",
    country: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (error) {
      setError("");
    }
  };

  const isValid =
    form.name.trim() &&
    form.email.trim() &&
    form.product.trim() &&
    form.quantity.trim() &&
    form.country.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      setError(
        "Please fill in all required fields (*) before sending your export inquiry."
      );
      return;
    }

    setError("");

    const whatsappNumber = "918369759857";

    const text = `
Dear Pure Harvest Global Exports,

I am reaching out to request an export quotation for the following requirement:

Product: ${form.product}
Quantity: ${form.quantity}
Destination Country: ${form.country}

Buyer Details:
Name: ${form.name}
Email: ${form.email}

Additional Requirements:
${form.message || "Not specified"}

Kindly share a quotation including product specifications, available grades, packaging options, pricing, and estimated delivery timeline.

Looking forward to your response.

Best regards,
${form.name}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
              Contact Pure Harvest
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-950">
              Let&apos;s Discuss Your Export Requirement
            </h1>

            <p className="mt-7 max-w-3xl text-lg md:text-xl leading-8 text-slate-600">
              Tell us what you are looking for and our team will explore
              suitable sourcing and export options from India.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="border-y border-slate-100 bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* LEFT INFORMATION */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                Start an Enquiry
              </span>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-950">
                Share Your Requirement
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Whether you are looking for spices, agricultural products, or
                a specific Indian-origin product, share your requirement with
                us. We can discuss sourcing, specifications, quantity,
                packaging, and export requirements.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-10 space-y-6">
                {/* ADDRESS */}
                <a
                  href= "https://www.google.com/maps/search/?api=1&query=Innov8+Q+Parc+Plot+No+GEN-4%2F1+Floor+13+Building+Q2+TTC+Industrial+Area+Ghansoli+Thane+Mumbai+400701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-950">
                      Office Address
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600 group-hover:text-slate-950 transition">
                      Innov8 Q Parc, Plot No. GEN-4/1, Floor 13, Building Q2,
                      TTC Industrial Area, Ghansoli, Thane, Mumbai – 400701,
                      Maharashtra, India
                    </p>

                    <p className="mt-1 text-xs font-medium text-amber-600 opacity-0 transition group-hover:opacity-100">
                      View on Google Maps →
                    </p>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+918369759857"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-950">Phone</p>
                    <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-950 transition">
                      +91 83697 59857
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:pureharvestglobalexports@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-950">Email</p>
                    <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-950 transition">
                      pureharvestglobalexports@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* WHAT TO SHARE */}
              <div className="mt-10 rounded-3xl bg-slate-950 p-7 md:p-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-slate-950">
                    <MessageCircle size={18} />
                  </div>

                  <h3 className="text-lg font-bold">
                    What to include in your enquiry
                  </h3>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Product name and specifications",
                    "Required quantity",
                    "Packaging requirements",
                    "Destination country",
                    "Required certifications or documentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-amber-400"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:p-10">
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
                  Export Enquiry
                </span>

                <h2 className="mt-3 text-2xl md:text-3xl font-bold text-slate-950">
                  Request an Export Quotation
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Fill in the details below and continue the enquiry directly
                  through WhatsApp.
                </p>
              </div>

              {/* ERROR */}
              {error && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME + EMAIL */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Full Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      placeholder="Enter your name"
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Email Address{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      placeholder="Enter your business email"
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                {/* PRODUCT */}
                <div>
                  <label
                    htmlFor="product"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Product Required{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="product"
                    name="product"
                    type="text"
                    value={form.product}
                    placeholder="e.g. Black Pepper, Turmeric, Cumin Seeds"
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                {/* QUANTITY + COUNTRY */}
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Required Quantity{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="quantity"
                      name="quantity"
                      type="text"
                      value={form.quantity}
                      placeholder="e.g. 500 kg / 1 MT"
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="text-sm font-semibold text-slate-800"
                    >
                      Destination Country{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={form.country}
                      placeholder="e.g. UAE, USA, Germany"
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Additional Requirements{" "}
                    <span className="font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    placeholder="Packaging, grade, quality specifications, certifications, delivery terms, etc."
                    rows={5}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold transition ${
                    isValid
                      ? "bg-slate-950 text-white hover:bg-amber-500 hover:text-slate-950"
                      : "cursor-not-allowed bg-slate-300 text-slate-500"
                  }`}
                >
                  <span>Request Export Quote on WhatsApp</span>

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  By submitting this enquiry, your details will be prepared
                  into a WhatsApp message for our export team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-7 py-12 text-center md:px-12 md:py-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              International Trade
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Looking for Indian products?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-8 text-slate-300">
              Share your requirement with Pure Harvest Global Exports and let
              us explore suitable sourcing and export options for your market.
            </p>

            <a
              href="https://wa.me/918369759857"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
            >
              <MessageCircle size={18} />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}