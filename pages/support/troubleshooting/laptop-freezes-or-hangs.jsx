import React from 'react';

export default function LaptopFreezesOrHangs() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Freezes or Hangs Frequently</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">System becomes unresponsive during use or startup; mouse/keyboard stops working temporarily.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Check for Overheating</span>
              <ul className="list-disc ml-6">
                <li>Touch the laptop's base — if too hot, let it cool.</li>
                <li>Avoid using on beds/cushions, which block airflow.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">End High-Usage Tasks</span>
              <ul className="list-disc ml-6">
                <li>Press Ctrl + Shift + Esc → Task Manager</li>
                <li>End apps using high CPU or memory (e.g., Chrome, heavy games).</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Scan for Malware</span>
              <ul className="list-disc ml-6">
                <li>Run Windows Defender.</li>
                <li>Malware can cause resource hogging.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check RAM & Storage Health</span>
              <ul className="list-disc ml-6">
                <li>Open Windows Memory Diagnostic → Restart & scan RAM</li>
                <li>Check if SSD/HDD is full → Free up at least 15% space.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Update Drivers and Windows</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings &gt; Windows Update</li>
                <li>Update all drivers via Device Manager.</li>
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