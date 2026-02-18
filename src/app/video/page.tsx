'use client';

import { useEffect } from 'react';

export default function Video() {
  useEffect(() => {
    window.location.href = 'https://www.youtube.com/@kwahzee';
  }, []);

  return (
    <main style={{ padding: '40px', color: 'white', backgroundColor: 'black', minHeight: '100vh', textAlign: 'center' }}>
      <p>videos</p>
    </main>
  );
}