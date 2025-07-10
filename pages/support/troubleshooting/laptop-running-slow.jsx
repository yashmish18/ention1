import React from 'react';

export default function LaptopRunningSlow() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop is Running Slow</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop feels sluggish when opening apps or browsing.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Restart Your Laptop</span>
              <ul className="list-disc ml-6">
                <li>A simple restart can clear temporary glitches and boost performance.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Storage Space</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings → System → Storage</li>
                <li>Make sure at least 15–20% of space is free on your main drive.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Uninstall Unused Apps</span>
              <ul className="list-disc ml-6">
                <li>Remove heavy or rarely used programs via:<br/>Settings → Apps → Installed Apps</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Facing Issues?</h2>
            <p>Frequent freezing may indicate hardware issues. Contact Ention Support for in-depth troubleshooting.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 