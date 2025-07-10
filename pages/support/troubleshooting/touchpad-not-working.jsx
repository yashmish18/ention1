import React from 'react';

export default function TouchpadNotWorking() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Touchpad Not Working</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">The touchpad isn’t responding to your finger movements or clicks.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Enable the Touchpad</span>
              <ul className="list-disc ml-6">
                <li>Press the Fn key + Touchpad key (usually F5) to toggle it on.</li>
                <li>You may see a touchpad symbol with a slash—pressing it will enable the touchpad.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Settings</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings → Bluetooth & Devices → Touchpad</li>
                <li>Make sure the toggle is turned ON.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Update or Reinstall Driver</span>
              <ul className="list-disc ml-6">
                <li>Open Device Manager → Human Interface Devices or Mice & other pointing devices</li>
                <li>Right-click on your touchpad → Update driver</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Connect a USB Mouse (for Now)</span>
              <ul className="list-disc ml-6">
                <li>You can plug in a wired/wireless mouse temporarily while troubleshooting.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Not Working?</h2>
            <p>It might be a hardware disconnection or internal fault. Reach out to Ention Support for a check-up.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 