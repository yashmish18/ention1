import React from 'react';

export default function LaptopStuckRestartUpdate() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Laptop Stuck on Restart or Update Screen</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop is stuck on a “Restarting…”, “Preparing Windows…”, or “Installing Updates…” screen for a long time.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Wait Patiently (Up to 30–60 Minutes)</span>
              <ul className="list-disc ml-6">
                <li>Some updates, especially feature upgrades, take time.</li>
                <li>If there’s progress happening (dots spinning or % increasing), let it finish.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Force Restart (If Frozen for Over 1 Hour)</span>
              <ul className="list-disc ml-6">
                <li>Press and hold the power button for 10–15 seconds until it shuts down.</li>
                <li>Wait 10 seconds → Turn it back on.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Boot into Safe Mode</span>
              <ul className="list-disc ml-6">
                <li>If it gets stuck again:</li>
                <li>Hold power button to shut down</li>
                <li>Turn it on and immediately press F8 or Shift + F8 repeatedly</li>
                <li>Choose Safe Mode or Startup Repair if the option appears</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Run Windows Troubleshooter</span>
              <ul className="list-disc ml-6">
                <li>Once booted:</li>
                <li>Go to Settings → System → Troubleshoot → Other troubleshooters</li>
                <li>Scroll to Windows Update</li>
                <li>Click the Run button next to it</li>
                <li>Follow the on-screen instructions</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Free Up Space for Updates</span>
              <ul className="list-disc ml-6">
                <li>Make sure you have at least 10–15GB free on the system drive.</li>
                <li>Go to Settings → System → Storage and delete unnecessary files or use Disk Cleanup.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Stuck?</h2>
            <p>This could indicate an update failure or corrupted system files. Please reach out to Ention Support — we’ll help reset or restore Windows without losing your data.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 