export default function Audio() {
  return (
    <main style={{ 
      padding: '40px', 
      color: 'white', 
      backgroundColor: 'black', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ marginBottom: '40px' }}>Audio</h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px' 
      }}>
        <a 
          href="https://kwahzee.bandcamp.com/music" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cacaca', fontSize: '24px' }}
        >
          → child inc.
        </a>
        <a 
          href="https://thathideoussound.bandcamp.com/music" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cacaca', fontSize: '24px' }}
        >
          → that hideous sound
        </a>
        <a 
          href="https://volumereferencetone.bandcamp.com/music" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cacaca', fontSize: '24px' }}
        >
          → volume reference tone
        </a>
        <a 
          href="https://harvey2.bandcamp.com/music" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cacaca', fontSize: '24px' }}
        >
          → harvey
        </a>
        <a 
          href="https://soundcloud.com/thathideoussound" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#cacaca', fontSize: '24px' }}
        >
          → soundcloud
        </a>
      </div>
    </main>
  );
}