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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "918369759857";

    const text = `
*New Export Inquiry*

Name: ${form.name}
Email: ${form.email}
Product: ${form.product}
Quantity: ${form.quantity}
Country: ${form.country}
Message: ${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-5">

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

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                name="product"
                placeholder="Product Required"
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                name="quantity"
                placeholder="Quantity"
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <input
                name="country"
                placeholder="Destination Country"
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <textarea
                name="message"
                placeholder="Additional Requirements"
                rows={4}
                onChange={handleChange}
                className="w-full border rounded-xl p-4"
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-4 rounded-xl font-semibold hover:bg-green-800 transition"
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