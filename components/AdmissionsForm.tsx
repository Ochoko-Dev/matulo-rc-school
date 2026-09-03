"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdmissionsForm() {
  const [formData, setFormData] = useState({
    parent_name: "",
    phone: "",
    email: "",
    child_grade: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const { error } = await supabase.from("admissions_inquiries").insert([formData]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("success");
      setFormData({ parent_name: "", phone: "", email: "", child_grade: "", message: "" });
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gold text-navy-dark">
        <p className="font-semibold text-navy">Thank you for your inquiry!</p>
        <p className="text-sm mt-1">We&apos;ve received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Parent / Guardian Name</label>
        <input
          type="text"
          name="parent_name"
          required
          value={formData.parent_name}
          onChange={handleChange}
          className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Child&apos;s Intended Grade</label>
        <input
          type="text"
          name="child_grade"
          placeholder="e.g. PP1, Grade 3"
          required
          value={formData.child_grade}
          onChange={handleChange}
          className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-navy mb-1">Message (optional)</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-navy-light/20 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-gold text-navy-dark font-semibold px-6 py-3 rounded hover:bg-gold-light transition disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
