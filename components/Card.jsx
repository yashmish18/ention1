import React from 'react';

export default function Card({ items }) {
  return (
    <div>
      {items && items.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
} 