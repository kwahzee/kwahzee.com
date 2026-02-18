export default function Blog() {
  return (
    <main style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Comic Sans MS, cursive'
    }}>
      <h1 style={{ 
        color: '#ff00ff',
        textAlign: 'center',
        fontSize: '48px',
        textShadow: '2px 2px #00ffff'
      }}>
        blog
      </h1>
      
      <p style={{ textAlign: 'center', color: '#0000ff' }}>
        updates • projects • thoughts
      </p>

      <div style={{ marginTop: '40px' }}>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>
          🚧 under construction 🚧
        </p>
        <p style={{ textAlign: 'center', color: '#666' }}>
          blog posts coming soon...
        </p>
      </div>
    </main>
  );
}