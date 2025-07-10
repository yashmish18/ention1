import React from 'react';

export default function UsbPortNotWorking() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">USB Port Not Working</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">You’ve plugged in a USB device (mouse, pen drive, etc.) but it’s not detected or not working.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Try Another USB Port</span>
              <ul className="list-disc ml-6">
                <li>Plug the same device into a different port on the laptop.</li>
                <li>If it works, the original port may be faulty.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Test with a Different USB Device</span>
              <ul className="list-disc ml-6">
                <li>Plug a different device (like a USB mouse or phone) into the same port.</li>
                <li>If none of them work, the port might be disabled or damaged.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Restart the Laptop</span>
              <ul className="list-disc ml-6">
                <li>Unplug the USB device → Restart your laptop → Plug it in again.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Device Manager</span>
              <ul className="list-disc ml-6">
                <li>Open Device Manager → Universal Serial Bus controllers</li>
                <li>Look for any warning signs (yellow triangle ⚠️).</li>
                <li>Right-click → Uninstall any problematic entry → Restart.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Not Working?</h2>
            <p>Your USB port could be physically damaged or shorted. Ention’s service team can repair or replace the faulty port.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 