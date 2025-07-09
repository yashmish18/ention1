import React from 'react';

export default function CameraNotWorkingVideoCalls() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-2xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Camera Not Working on Video Calls</h1>
        <div className="bg-white/10 rounded-xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Problem</h2>
          <p className="mb-4">Your camera isn’t turning on during Zoom, Google Meet, or Teams calls — or apps say “No Camera Found.”</p>
          <hr className="my-4 border-white/20" />
          <h2 className="text-xl font-bold mb-2 text-cyan-300">Try These Steps</h2>
          <ol className="list-decimal ml-6 space-y-3 mb-4">
            <li>
              <span className="font-semibold">Check Camera Permissions</span>
              <ul className="list-disc ml-6">
                <li>Go to <b>Settings → Privacy & Security → Camera</b></li>
                <li>Make sure Camera access is ON, and the app you’re using has permission.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Restart the Laptop</span>
              <ul className="list-disc ml-6">
                <li>Close all apps → Restart the laptop → Open only the video call app and test the camera.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Test Camera in Another App</span>
              <ul className="list-disc ml-6">
                <li>Try using the Camera app (search "Camera" in Start Menu).</li>
                <li>If it works here but not in video apps, the issue is app-specific.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Check for Camera Disable Button</span>
              <ul className="list-disc ml-6">
                <li>Look for the physical camera slider on the top notch of the laptop. Slide it in order to open the camera.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Update Camera Driver</span>
              <ul className="list-disc ml-6">
                <li>Open Device Manager → Cameras</li>
                <li>Right-click your camera → Update Driver</li>
              </ul>
            </li>
          </ol>
          <hr className="my-4 border-white/20" />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 text-cyan-300">Still Not Working?</h2>
            <p>It might be a loose connection or a hardware fault. Our Ention support team can run a deeper diagnosis for you.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 