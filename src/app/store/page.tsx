'use client';

import { useEffect } from 'react';

export default function Store() {
  useEffect(() => {
    window.location.href = 'https://reverb.com/shop/kwahzee';
  }, []);

  return (
    <main style={{ padding: '40px', color: 'white', backgroundColor: 'black', minHeight: '100vh', textAlign: 'center' }}>
      <p>store</p>
    </main>
  );
}