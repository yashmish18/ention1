import React from 'react';

export default function LaptopNotCharging() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Not Charging</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop is plugged in, but the battery icon shows “Not Charging”, or the battery percentage isn’t increasing.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Check the Basics</span>
              <ul className="list-disc ml-6">
                <li>Make sure the power cable is firmly connected to both the laptop and the wall socket.</li>
                <li>Try a different socket to rule out power supply issues.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Inspect the Charger & Cable</span>
              <ul className="list-disc ml-6">
                <li>Look for any signs of damage (fraying, bends, or burn marks).</li>
                <li>If possible, try using another compatible charger to see if the laptop starts charging.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Restart with Charger Plugged In</span>
              <ul className="list-disc ml-6">
                <li>Shut down the laptop completely.</li>
                <li>Plug in the charger, then turn the laptop back on.</li>
                <li>Sometimes, restarting refreshes the power circuit inside.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Battery Health</span>
              <ul className="list-disc ml-6">
                <li>Check Settings → System → Power & Battery for any battery health warnings.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Let it Cool</span>
              <ul className="list-disc ml-6">
                <li>If the laptop is overheating, it may temporarily disable charging to protect itself.</li>
                <li>Let it rest for 15–20 minutes in a cool space before trying again.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Not Charging?</h2>
            <p>If none of the above works, your battery or charger might need a replacement. Please contact Ention Support.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 