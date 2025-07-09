import React from 'react';

export default function NoSoundFromLaptop() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">No Sound from Laptop</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop speakers aren’t working. No sound in videos, music, or system alerts.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Check Volume Settings</span>
              <ul className="list-disc ml-6">
                <li>Make sure volume is not muted and is turned up.</li>
                <li>Try increasing volume using keyboard keys.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Try Headphones</span>
              <ul className="list-disc ml-6">
                <li>Plug in headphones → If they work, the speaker may be the issue.</li>
                <li>Unplug to check if sound returns to laptop speakers.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Restart Audio Services</span>
              <ul className="list-disc ml-6">
                <li>Press Windows + R → type services.msc</li>
                <li>Find Windows Audio → Right-click → Restart</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Silent?</h2>
            <p>Update or reinstall the audio driver via Device Manager → Sound, video and game controllers. Or contact our support team for quick help.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 