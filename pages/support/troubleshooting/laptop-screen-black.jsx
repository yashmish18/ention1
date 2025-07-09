import React from 'react';

export default function LaptopScreenBlack() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Turns On But Screen is Black</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">You power on the laptop — the lights turn on, fan runs, but the screen stays black.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Force a Restart</span>
              <ul className="list-disc ml-6">
                <li>Hold down the power button for 10–15 seconds until the laptop shuts off.</li>
                <li>Wait 5 seconds → Press power again to restart.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Screen Brightness</span>
              <ul className="list-disc ml-6">
                <li>Increase brightness using keyboard brightness keys (usually F2,F3).</li>
                <li>Plug in a charger in case it's too dim from battery-saving mode.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Connect to External Display</span>
              <ul className="list-disc ml-6">
                <li>Use an HDMI cable to connect to a TV or monitor.</li>
                <li>If the display works externally, the laptop screen might be faulty.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Black?</h2>
            <p>If no display appears even on an external screen, contact Ention Support.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 