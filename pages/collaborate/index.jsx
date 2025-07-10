import React from 'react';
import { FaChartLine, FaUsers, FaTools, FaUniversity, FaLightbulb, FaMoneyBillWave, FaLeaf, FaBlog } from 'react-icons/fa';
import ContactForm from '../../components/ContactForm';

export default function CollaboratePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#133B5C] via-[#0FAFCA] to-[#007e9e] flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">Welcome to ENTION</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-cyan-100 mb-4">Empowering Innovation, Affordability & Sustainability</h2>
        <p className="text-lg md:text-xl text-cyan-100 max-w-2xl mx-auto mb-6">We design state-of-the-art laptops for startups, academia, and professionals.</p>
        <a href="#offers" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-3 rounded-full shadow-lg transition text-lg">Associate With Us</a>
      </section>

      {/* Our Offers Section */}
      <section id="offers" className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Our Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Investors Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaChartLine className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Investors</h3>
            <p className="text-white/90 mb-2 text-center">Partner with ENTION to bring cutting-edge laptops to the market.</p>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>High ROI potential</li>
              <li>Sustainable and transparent collaboration</li>
              <li>Comprehensive Business Plans</li>
            </ul>
            <a href="#contact" className="mt-auto inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 rounded transition">Explore Investment</a>
          </div>
          {/* Dealers Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaUsers className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Dealers</h3>
            <p className="text-white/90 mb-2 text-center">Deliver our products to customers nationwide.</p>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>Exclusive Dealer Discounts</li>
              <li>Priority Stock Availability</li>
              <li>Marketing & Sales Support</li>
            </ul>
            <a href="#contact" className="mt-auto inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-4 py-2 rounded transition">Join Dealer Network</a>
          </div>
          {/* Service Providers Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaTools className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Service Providers</h3>
            <p className="text-white/90 mb-2 text-center">Exceptional after-sales service and technical support.</p>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>Access to repair kits and spare parts</li>
              <li>Regular training programs</li>
              <li>Performance-based incentives</li>
            </ul>
          </div>
          {/* Universities Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaUniversity className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Universities</h3>
            <p className="text-white/90 mb-2 text-center">Transform education with customized laptops and bulk order discounts.</p>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>Affordable bulk pricing</li>
              <li>Custom configurations for academic needs</li>
              <li>Warranty and on-campus tech support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose ENTION Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Why Choose ENTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-[#17405e] rounded-2xl p-8 flex flex-col items-center shadow-lg">
            <FaLightbulb className="text-4xl text-cyan-300 mb-3" />
            <div className="font-bold text-white mb-1">Innovation</div>
            <div className="text-white/80 text-center">Cutting-edge designs and top-tier performance.</div>
          </div>
          <div className="bg-[#17405e] rounded-2xl p-8 flex flex-col items-center shadow-lg">
            <FaMoneyBillWave className="text-4xl text-cyan-300 mb-3" />
            <div className="font-bold text-white mb-1">Affordability</div>
            <div className="text-white/80 text-center">Competitive pricing ensures accessibility for all.</div>
          </div>
          <div className="bg-[#17405e] rounded-2xl p-8 flex flex-col items-center shadow-lg">
            <FaLeaf className="text-4xl text-cyan-300 mb-3" />
            <div className="font-bold text-white mb-1">Sustainability</div>
            <div className="text-white/80 text-center">Eco-friendly materials and manufacturing processes.</div>
          </div>
          <div className="bg-[#17405e] rounded-2xl p-8 flex flex-col items-center shadow-lg">
            <FaUsers className="text-4xl text-cyan-300 mb-3" />
            <div className="font-bold text-white mb-1">Customer Support</div>
            <div className="text-white/80 text-center">A robust network of service providers and on-site technicians.</div>
          </div>
        </div>
      </section>

      {/* Explore Our Specialized Offers Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">Explore Our Specialized Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Investors Specialized Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaChartLine className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Investors</h3>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>High-Growth Potential: The demand for affordable, high-quality laptops is booming.</li>
              <li>Sustainable Manufacturing: Leverage eco-friendly production methods to meet global ESG goals.</li>
              <li>Transparent and well-researched growth strategies ensure your investment is secure.</li>
            </ul>
          </div>
          {/* Service Providers Specialized Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaTools className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Service Providers</h3>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>Access to Tools and Documentation: Stay equipped with the right resources for repairs.</li>
              <li>Dedicated Training Programs: Enhance your team's expertise with regular workshops.</li>
            </ul>
          </div>
          {/* Universities and Corporate Specialized Card */}
          <div className="bg-[#17405e] rounded-2xl p-8 shadow-xl flex flex-col items-center">
            <FaUniversity className="text-4xl text-cyan-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">For Universities & Corporate</h3>
            <ul className="list-disc list-inside text-white/80 mb-4 text-left">
              <li>Bulk Discounts: Perfect for equipping classrooms, labs, or entire institutions.</li>
              <li>Customizable Configurations: Tailor hardware and software to academic needs.</li>
              <li>On-Campus Support: Dedicated tech support ensures smooth operation.</li>
            </ul>
            <a href="#contact" className="mt-auto inline-block text-cyan-300 underline">Discover University Solutions</a>
          </div>
        </div>
      </section>

      {/* Our Product Line Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Product Line</h2>
          <div className="text-lg text-cyan-100 mb-2 font-semibold">Laptops Designed for Every Need</div>
          <p className="text-white/80 mb-6">From high-performance laptops for professionals to budget-friendly options for students, we offer a diverse range of devices that cater to:</p>
          <ul className="list-disc list-inside text-white/90 mb-4 pl-4">
            <li>Businesses and startups</li>
            <li>Educational institutions</li>
            <li>Gamers and creatives</li>
            <li>Everyday users</li>
          </ul>
          <a href="#" className="inline-block text-cyan-300 underline text-lg font-medium hover:text-cyan-200 transition"><FaChartLine className="inline mr-2" />Explore Our Product Catalog</a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="assets/landing_page/e5.webp" alt="Product Line" className=" w-full max-w-xs object-cover" />
        </div>
      </section>

      {/* Latest Updates & News Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Latest Updates & News</h2>
        <div className="text-cyan-100 mb-4 text-lg font-semibold">Stay Connected with Our Growth</div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-[#17405e] rounded-2xl p-8 flex-1 min-w-[220px] shadow-lg">
            <div className="font-bold text-white mb-2">New product launches</div>
            <div className="text-white/80">Discover our latest innovations and releases.</div>
          </div>
          <div className="bg-[#17405e] rounded-2xl p-8 flex-1 min-w-[220px] shadow-lg">
            <div className="font-bold text-white mb-2">Success stories</div>
            <div className="text-white/80">Read about our partners' achievements and collaborations.</div>
          </div>
          <div className="bg-[#17405e] rounded-2xl p-8 flex-1 min-w-[220px] shadow-lg">
            <div className="font-bold text-white mb-2">Upcoming events</div>
            <div className="text-white/80">Join our webinars and industry events.</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="inline-block text-cyan-300 underline text-lg font-medium hover:text-cyan-200 transition"><FaBlog className="inline mr-2" />Visit Our Blog</a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="w-full max-w-xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-semibold underline underline-offset-8 mb-4 text-white">Contact Us</h2>
        <ContactForm />
      </section>
      <div className="h-12" />
    </main>
  );
} 