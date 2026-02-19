const posts = [
  {
    date: 'February 19 2026',
    title: 'new website',
    body: "i started work on this website in early 2025 when i initially started learning to program. this year i took some time to really dive headfirst into programming and thought it would be a good project to return to and publish. i converted my 2025 html/css/javascript into a next.js (tsx) project and deployed it using vercel. i'm excited with how it turned out. while having psychedelic flashing glitch videos as background images for pages and pixle gothic font is most likely not following any web development best practices, and mobile optimization is non-existent as of now, but i'm proud of getting this far into a personal project. there are links to music i've made throughout my life, videos that i try to film and release weekly, a store where i sell music equipment i've either made or bought, a page to display programming portfolio projects, and of course, this blog where i plan on writing about programming progress and other music-related topics. i also plan on getting a comment system up and running soon for blog posts in case anyone cares to comment or ask any questions. and finally, a long-term project for this site is to program a fully interactive site-bot which might take a while, but that's one of the goals! anyways, that's all for now so thanks fer reading!",
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
