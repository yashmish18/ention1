import React from 'react';


export default function RequestCallback() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
     
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Request a Callback</h1>
        <section className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <form className="grid gap-4">
            <div>
              <label className="block font-semibold mb-1">Full Name <span className="text-red-400">*</span></label>
              <input type="text" required className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Mobile Number <span className="text-red-400">*</span></label>
              <input type="tel" required className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input type="email" className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Time for Callback</label>
              <input type="text" placeholder="e.g., 10 AM – 1 PM, 2 PM – 6 PM" className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Query Type</label>
              <select className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none">
                <option>Product Information</option>
                <option>Order & Pre-booking</option>
                <option>After-Sales Support</option>
                <option>Partnership/Reseller Inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Your Message</label>
              <textarea className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" rows={3} />
            </div>
            <button type="submit" className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition mt-2">Submit Request</button>
          </form>
        </section>
      </main>

    </div>
  );
} 