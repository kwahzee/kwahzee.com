export default function Arcade() {
  return (
    <main style={{ 
      height: '100vh', 
      overflow: 'hidden', 
      backgroundColor: 'black',
      backgroundImage: `url('/images/king.png')`,
      backgroundSize: 500,
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundPositionY: 280,
      backgroundPositionX: 750,
    }}>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 300, whiteSpace:'pre', fontSize: 20,}}>
        opening soon... until then visit <a style={{color: 'red'}} href='http://harmonyzone.org/'>harmony zone</a> and play <a style={{color: 'green'}} href='http://harmonyzone.org/SpaceFuneral.html'>space funeral</a> by <a style={{color: 'yellow'}} href='https://thecatamites.itch.io/'>thecatamites</a>
      </div>
    </main>
  );
}