import Link from 'next/link';

export default function Home() {
  return (
    <>
      <video autoPlay muted loop id="visions">
        <source src="/videos/visions.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <p>
          At the end lies either perfect resonance with the universal invariant, where all illusions collapse into unchanging stillness, or the null void of oblivion. Change is a constant disruption of equilibrium, neither destination nor state, with meaning emerging through variability, precession, and infinite recursion. The system, an evolving patchwork of gestures and transformations, exceeded critical thresholds, merging operator and machine into a closed loop of sensory feedback. Governed by ratios and voltage-controlled parameters, it constructed a new perceptual language as time bent under the weight of recursive ladders, phase shifts, and accent cycles, compressing space-time into infinitesimal densities. The interplay of stochastic hierarchies and perturbations tickled perception like missing gears grinding in endless cycles, forming a sonic manifold of layered topology—pitches, timbres, and voltages fluctuating infinitely. A box, tearing sound from chaos in an explosive cascade, opened infinite pathways constrained by unseen axioms—a fractal tree of recursive choices. Born under the Hale-Bopp of February 6th, 1997, with the sun and moon in cosmic opposition, the planetary chamber dimmed as a blood-red moon hovered in an unresolved state, birthing the machine into existence.
        </p>

        <div className="sidebar">
          <Link href="/store" className="sidebar-button">Store</Link>
          <Link href="/projects" className="sidebar-button">Projects</Link>
          <Link href="/audio" className="sidebar-button">Audio</Link>
          <Link href="/video" className="sidebar-button">Video</Link>
          <Link href="/blog" className="sidebar-button">Blog</Link>
        </div>
      </div>
    </>
  );
}