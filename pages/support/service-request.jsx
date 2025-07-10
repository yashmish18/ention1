import React from 'react';


export default function ServiceRequest() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
     
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Service Request Form</h1>
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
              <label className="block font-semibold mb-1">Product Model / Serial Number <span className="text-red-400">*</span></label>
              <input type="text" required className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" placeholder="On laptop’s bottom panel or invoice" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Purchase Date</label>
              <input type="date" className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Issue Category</label>
              <select className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none">
                <option>Hardware Issue</option>
                <option>Software Issue</option>
                <option>Display/Keyboard/Touchpad</option>
                <option>Battery or Charging Issue</option>
                <option>Performance/Lag</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Describe the Issue <span className="text-red-400">*</span></label>
              <textarea required className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" rows={3} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Mode of Support</label>
              <select className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none">
                <option>On-Site Service</option>
                <option>Remote Support</option>
                <option>Call Back</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Preferred Time for Service Contact</label>
              <input type="text" placeholder="e.g., 10 AM – 1 PM or 2 PM – 6 PM" className="w-full px-3 py-2 rounded bg-white/80 text-black focus:outline-none" />
            </div>
            <button type="submit" className="bg-[#0FAFCA] hover:bg-[#007e9e] text-white font-bold px-8 py-2 rounded-2xl text-lg shadow-lg transition mt-2">Submit Service Request</button>
          </form>
        </section>
      </main>
    
    </div>
  );
} 