"use client";

import { useState } from "react";

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
    setForm({ ...form, [e.target.name]: e.target.value });
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
      setError("Please fill all required fields (*) before sending your export inquiry.");
      return;
    }

    setError("");

    const whatsappNumber = "918369759857";

    const text = `
Dear Pure Harvest Global Exports,

I am reaching out to request a premium export quotation for the following requirement:

1. Product: ${form.product}
2. Quantity: ${form.quantity}
3. Destination Country: ${form.country}

Buyer Details:
Name: ${form.name}
Email: ${form.email}

Additional Requirements:
${form.message || "Not specified"}

Kindly share a detailed and professional quotation including specifications, available grades, packaging options, and delivery timelines.

Looking forward to your response.

Best regards,
${form.name}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-5">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Get Export Quotation
            </h1>

            <p className="mt-6 text-slate-600">
              Send us your requirements and we will connect you with verified suppliers.
            </p>
          </div>

          {/* FORM */}
          <div className="glass-card rounded-3xl p-8">

            {/* ERROR */}
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-100 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="text-sm font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Product Required <span className="text-red-500">*</span>
                </label>
                <input
                  name="product"
                  placeholder="e.g. Black Pepper, Turmeric"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  name="quantity"
                  placeholder="Enter quantity"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Destination Country <span className="text-red-500">*</span>
                </label>
                <input
                  name="country"
                  placeholder="Enter country"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Additional Requirements <span className="text-slate-400">(Optional)</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Packaging, quality, certifications, etc."
                  rows={4}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-4 rounded-xl font-semibold transition ${
                  isValid
                    ? "bg-green-700 hover:bg-green-800 text-white"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                Request Export Quote on WhatsApp
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}