import React from 'react';


export default function ExtendedWarranty() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
   
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Extended Warranty Protection for Your Ention Device</h1>
        <section className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <p className="mb-4">At Ention, we’re committed to delivering powerful performance and long-term reliability. With our Extended Warranty Plans, you can continue to enjoy uninterrupted service and comprehensive protection for your Ention devices—beyond the standard warranty period.</p>
          <h3 className="text-xl font-semibold mb-2">Why Choose Ention Extended Warranty?</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Extended Coverage: Add 1 or 2 years of warranty coverage beyond the standard warranty.</li>
            <li>Nationwide Support: Get service at authorized Ention service centers across India.</li>
            <li>100% Genuine Parts: Repairs are done using only original Ention-certified parts.</li>
            <li>No Hidden Charges: Transparent service with zero hidden fees.</li>
            <li>Hassle-Free Claims: Quick and easy support process for a stress-free experience.</li>
            <li>Transferable Benefit: Warranty coverage is transferable in case of resale of the device.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Plans Available</h3>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-[300px] w-full text-white border border-white/20 rounded-lg overflow-hidden">
              <thead className="bg-[#0FAFCA]/20">
                <tr>
                  <th className="px-4 py-2 border-b border-white/20">Coverage Duration</th>
                  <th className="px-4 py-2 border-b border-white/20">Key Benefits</th>
                  <th className="px-4 py-2 border-b border-white/20">Suitable For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="px-4 py-2 border-b border-white/20">1 Year Extension</td>
                  <td className="px-4 py-2 border-b border-white/20">Extended protection for one year</td>
                  <td className="px-4 py-2 border-b border-white/20">General users, students</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2 Year Extension</td>
                  <td className="px-4 py-2">Maximum peace of mind</td>
                  <td className="px-4 py-2">Professionals, heavy users</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-2">How to Avail</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>You can purchase the Extended Warranty at the time of buying your Ention device or within 90 days of purchase.</li>
            <li>Visit your nearest Ention partner store or buy it online through our official website.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">What’s Covered</h3>
          <ul className="list-disc ml-6 mb-2">
            <li>Hardware failure due to manufacturing defects</li>
            <li>Functional issues with internal components</li>
            <li>Battery or keyboard issues under normal use</li>
            <li>Screen/display malfunction (non-accidental)</li>
          </ul>
          <div className="text-yellow-300 text-sm mt-2">Note: Accidental damage, liquid spills, and unauthorized repairs are not covered under the Extended Warranty. For accidental damage protection, check out our Ention Care+ plans (coming soon).</div>
        </section>
      </main>
     
    </div>
  );
} 