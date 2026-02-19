const posts = [
  {
    date: '',
    title: '',
    body: '',
  },
];

export default function Blog() {
  return (
    <main style={{
      maxWidth: '660px',
      margin: '0 auto',
      padding: '80px 20px 60px',
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'Times New Roman, Times, serif',
      color: '#000000',
      fontSize: '15px',
      lineHeight: '1.7',
    }}>
      <header style={{ borderBottom: '1px solid #000000', paddingBottom: '10px', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 4px 0' }}>kwahzee</h1>
      </header>

      {posts.map((post, i) => (
        <article key={i} style={{ marginBottom: '40px' }}>
          <time style={{ fontSize: '12px', color: '#777777' }}>{post.date}</time>
          <h2 style={{ fontSize: '16px', fontWeight: 'bold', margin: '4px 0 12px 0' }}>{post.title}</h2>
          <p style={{ margin: '0 0 20px 0' }}>{post.body}</p>
          <hr style={{ border: 'none', borderTop: '1px solid #dddddd', margin: 0 }} />
        </article>
      ))}
    </main>
  );
}
