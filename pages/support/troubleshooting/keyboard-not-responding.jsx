import React from 'react';

export default function KeyboardNotResponding() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Keyboard Not Responding</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Keyboard keys are not working, typing wrong letters, or are completely unresponsive.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Restart Your Laptop</span>
              <ul className="list-disc ml-6">
                <li>A restart can fix temporary glitches affecting keyboard response.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Clean the Keyboard</span>
              <ul className="list-disc ml-6">
                <li>Gently blow out dust using compressed air or a soft brush.</li>
                <li>Sticky keys may be caused by dust or residue.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Test with an External Keyboard</span>
              <ul className="list-disc ml-6">
                <li>Plug in a USB or Bluetooth keyboard.</li>
                <li>If it works fine, the built-in keyboard may need repair.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check Language Settings</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings → Time & Language → Typing → Advanced Keyboard Settings</li>
                <li>Ensure you’re using the correct input language (like English - India or US).</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Facing Issues?</h2>
            <p>If the keyboard remains unresponsive, it may require servicing or replacement. Please reach out to Ention Support for a quick fix.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 