import React from 'react';

const troubleshootingTopics = [
  {
    title: 'Laptop Freezes or Hangs Frequently',
    slug: 'laptop-freezes-or-hangs',
  },
  {
    title: 'Laptop Body Getting Shock or Tingly Vibration',
    slug: 'laptop-body-shock-vibration',
  },
  {
    title: 'Wi-Fi Not Connecting',
    slug: 'wifi-not-connecting',
  },
  {
    title: 'USB Port Not Working',
    slug: 'usb-port-not-working',
  },
  {
    title: 'Touchpad Not Working',
    slug: 'touchpad-not-working',
  },
  {
    title: 'No Sound from Laptop',
    slug: 'no-sound-from-laptop',
  },
  {
    title: 'Laptop Turns On But Screen is Black',
    slug: 'laptop-screen-black',
  },
  {
    title: 'Laptop Stuck on Restart or Update Screen',
    slug: 'laptop-stuck-restart-update',
  },
  {
    title: 'Laptop not charging',
    slug: 'laptop-not-charging',
  },
  {
    title: 'Laptop is Running Slow',
    slug: 'laptop-running-slow',
  },
  {
    title: 'Laptop Getting Too Hot',
    slug: 'laptop-getting-too-hot',
  },
  {
    title: 'Keyboard Not Responding',
    slug: 'keyboard-not-responding',
  },
  {
    title: 'Function (Fn) Keys Not Working Properly',
    slug: 'fn-keys-not-working',
  },
  {
    title: 'Camera Not Working on Video Calls',
    slug: 'camera-not-working-video-calls',
  },
];

export default function Troubleshooting() {
  return (
    <div className="min-h-screen bg-[#070D2A] text-white flex flex-col">
      <main className="flex-1 max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Troubleshooting Problems</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {troubleshootingTopics.map(topic => (
            <a
              key={topic.slug}
              href={`/support/troubleshooting/${topic.slug}`}
              className="block bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:bg-cyan-900/30 transition text-lg font-semibold text-cyan-200 hover:text-white"
            >
              {topic.title}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
} 