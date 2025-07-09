import React from 'react';

export default function FnKeysNotWorking() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Function (Fn) Keys Not Working Properly</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Brightness, volume, or other Fn-based shortcut keys are unresponsive or work only when pressing Fn.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Check Fn Lock Status</span>
              <ul className="list-disc ml-6">
                <li>Look for an Fn Lock key (often Esc or a dedicated key “FnLock”).</li>
                <li>Press Fn + Esc or FnLock key once to toggle function mode.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Reinstall Keyboard Drivers</span>
              <ul className="list-disc ml-6">
                <li>Go to Device Manager → Keyboards</li>
                <li>Right-click and update or reinstall the keyboard driver.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Test with External Keyboard</span>
              <ul className="list-disc ml-6">
                <li>If external keyboard shortcuts work, internal hardware might need servicing.</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Facing Issues?</h2>
            <p>Fn key problems may be tied to hardware or firmware. Contact Ention Support for assistance or further diagnosis.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 