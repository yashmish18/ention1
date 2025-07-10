import React from 'react';

export default function LaptopBodyShockVibration() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Body Getting Shock or Tingly Vibration</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">User feels a mild electric shock or buzzing/vibration when touching the laptop body or ports.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Use a 3-Pin Plug with Earthing</span>
              <ul className="list-disc ml-6">
                <li>Always connect your charger to a properly earthed 3-pin socket.</li>
                <li>A missing ground pin can cause static build-up.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Switch Sockets and Charger</span>
              <ul className="list-disc ml-6">
                <li>Try plugging the charger into a different socket or using a surge protector.</li>
                <li>If possible, test with another compatible charger.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Surrounding Appliances</span>
              <ul className="list-disc ml-6">
                <li>Nearby heavy appliances (fridge, AC, induction) may be causing power leakage through shared outlets.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Consult Electrician</span>
              <ul className="list-disc ml-6">
                <li>Ask a certified electrician to check for grounding issues at your premises.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Facing Issues?</h2>
            <p>If problem persists across sockets and chargers, your device may have internal grounding problems. Contact Ention Support for inspection.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 