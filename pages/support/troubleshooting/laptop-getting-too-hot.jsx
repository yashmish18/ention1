import React from 'react';

export default function LaptopGettingTooHot() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Getting Too Hot</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop feels uncomfortably hot while using it, or shuts down unexpectedly.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Place on a Hard Surface</span>
              <ul className="list-disc ml-6">
                <li>Avoid using your laptop on a bed, pillow, or soft surface.</li>
                <li>Always use it on a flat, hard surface so air can circulate properly.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Clean Air Vents</span>
              <ul className="list-disc ml-6">
                <li>Dust can block air vents and cause overheating.</li>
                <li>Use a soft brush or air blower to gently clean around the vents.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Close Heavy Apps</span>
              <ul className="list-disc ml-6">
                <li>Check Task Manager to see if apps are overloading your CPU or memory.</li>
                <li>Close any unused heavy apps like video editors or games.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Use Cooling Pad (Optional)</span>
              <ul className="list-disc ml-6">
                <li>External cooling pads can help regulate temperature during long sessions.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Heating?</h2>
            <p>It may need a thermal paste replacement or fan cleaning—contact Ention Support for service.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 