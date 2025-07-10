import React from 'react';

export default function WifiNotConnecting() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Wi-Fi Not Connecting</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your laptop isn’t connecting to Wi-Fi, or it shows “No Internet”, even though your phone is working fine.</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Restart Everything</span>
              <ul className="list-disc ml-6">
                <li>Restart your laptop and Wi-Fi router.</li>
                <li>Wait 30 seconds after turning the router off before restarting.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Forget and Reconnect</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings → Network & Internet → Wi-Fi</li>
                <li>Select your Wi-Fi → Click Forget</li>
                <li>Now reconnect by entering the password again.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Turn on Airplane Mode</span>
              <ul className="list-disc ml-6">
                <li>Turn on Airplane Mode for 10 seconds → then turn it off.</li>
                <li>This resets all wireless connections.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Run Network Troubleshooter</span>
              <ul className="list-disc ml-6">
                <li>Go to Settings → System → Troubleshoot → Other Troubleshooters</li>
                <li>Find Network and Internet → Click Run</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Not Working?</h2>
            <p>Try connecting to another Wi-Fi network. If that works, the issue may be with your router, not the laptop. If none of the networks work, your Wi-Fi adapter might need servicing.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 