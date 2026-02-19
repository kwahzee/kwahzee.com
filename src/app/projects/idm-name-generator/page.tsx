'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './styles.css';

const syllables = [
  "tsu", "ka", "shi", "ru", "zen", "ko", "mi", "ta", "ri", "yo",
  "na", "ha", "chi", "fu", "ke", "sa", "to", "ni", "wa", "ma",
  "ra", "ki", "su", "te", "mo", "yu", "ne", "ho", "mu", "re",
  "no", "ku", "ya", "so", "nu", "he", "ro", "me", "se", "wo",
  "hi", "do", "ga", "ba", "pu", "de", "bo", "gi", "zu", "pe", 
  "vö", "jök", "yksi", "häll", "øy", "fjör", "skål", "björk", "älv", "snö",
  "fjäll", "kär", "ström", "örn", "foss", "köld", "vík", "höfn", "rök", "þór",
  "ást", "úlf", "eyja", "völ", "drög", "fjall", "vatn", "söng", "röst", "ljós",
  "mörk", "hrafn", "völd", "ætt", "gísla", "þung", "hrím", "vindur", "skugga", "dökkur",
  "hvert", "eilíf", "örlög", "móður", "fólk", "sæll", "kirkja", "ferð", "stund", "þjóð",
  "crx", "blp", "wrz", "skr", "tkr", "phl", "vnx", "zph", "qrx", "fkl",
  "drv", "klz", "prx", "tch", "vrt", "xnk", "flx", "grz", "hrp", "jxt",
  "krl", "lmn", "mrz", "nxt", "plk", "qtz", "rvx", "shn", "trk", "vph",
  "wlk", "xrl", "ylz", "znx", "brt", "chx", "dph", "frz", "glk", "hxt",
  "jrp", "kpz", "lrx", "mth", "nkl", "phz", "qrk", "rxt", "shp", "thx",
  "qbit", "flux", "node", "vex", "algo", "byte", "core", "data", "exec", "grid",
  "hash", "init", "kern", "loop", "mem", "null", "proc", "quad", "root", "sync",
  "tech", "unit", "void", "wave", "hex", "bin", "cpu", "disk", "edge", "func",
  "gate", "host", "inet", "join", "key", "link", "mod", "net", "opt", "port",
  "ram", "scan", "term", "unix", "vec", "web", "xml", "zip", "arch", "bit"
];

const others = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
  "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
  "60", "61", "62", "63", "64", "65", "66", "67", "68", "69",
  "70", "71", "72", "73", "74", "75", "76", "77", "78", "79",
  "80", "81", "82", "83", "84", "85", "86", "87", "88", "89",
  "90", "91", "92", "93", "94", "95", "96", "97", "98", "99",
  "_", "-", ".", "+", "#", "=", "~", "^", "*", "|",
  "Δ", "∑", "π", "∞", "√", "±", "÷", "×", "∅", "∈",
  "∂", "∇", "∫", "∏", "∪", "∩", "⊕", "⊗", "≈", "≠",
  "(", ")", "[", "]", "<", ">", "{", "}"
];

export default function IDMGenerator() {
  const [names, setNames] = useState<string[]>([]);
  const [totalGenerated, setTotalGenerated] = useState(0);
  const [secretTriggered, setSecretTriggered] = useState(false);
  const [secretMessage, setSecretMessage] = useState('');
  const lengthRef = useRef<HTMLInputElement>(null);
  const chaosRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const customRef = useRef<HTMLInputElement>(null);

  const generateName = (length: number, chaos: number, customInput: string) => {
    const nameParts: string[] = [];
    
    for (let i = 0; i < length; i++) {
      const randomChance = Math.random();
      let chaosThreshold = 0;
      
      if (chaos === 1) chaosThreshold = 0.25;
      else if (chaos === 2) chaosThreshold = 0.50;
      else if (chaos === 3) chaosThreshold = 0.75;
      
      if (randomChance < chaosThreshold) {
        const randomElement = others[Math.floor(Math.random() * others.length)];
        nameParts.push(randomElement);
      } else {
        const randomElement = syllables[Math.floor(Math.random() * syllables.length)];
        nameParts.push(randomElement);
      }
    }
    
    if (customInput) {
      const randomPosition = Math.floor(Math.random() * nameParts.length);
      nameParts.splice(randomPosition, 0, customInput);
    }
    
    return nameParts.join('');
  };

  const typeMessage = () => {
    const message = "kwahzee.com";
    let i = 0;
    const step = () => {
      if (i >= message.length) return;
      const char = message[i];
      i++;
      setSecretMessage(prev => prev + char);
      setTimeout(step, 200);
    };
    step();
  };

  const triggerSecret = (initialNames: string[]) => {
    let remaining = [...initialNames];
    const deleteStep = () => {
      if (remaining.length === 0) {
        typeMessage();
        return;
      }
      const idx = Math.floor(Math.random() * remaining.length);
      remaining.splice(idx, 1);
      setNames([...remaining]);
      setTimeout(deleteStep, 25);
    };
    deleteStep();
  };

  const generate = () => {
    const length = parseInt(lengthRef.current?.value ?? '1');
    const chaos = parseInt(chaosRef.current?.value ?? '1');
    const amount = parseInt(amountRef.current?.value ?? '1');
    const custom = customRef.current?.value ?? '';

    if (totalGenerated >= 999 && !secretTriggered) {
      setSecretTriggered(true);
      triggerSecret(names);
      return;
    }

    if (secretTriggered) return;

    const newNames: string[] = [];
    for (let i = 0; i < amount; i++) {
      const newTotal = totalGenerated + i + 1;
      setTotalGenerated(newTotal);

      if (newTotal >= 999) {
        setSecretTriggered(true);
        const allNames = [...names, ...newNames];
        setNames(allNames);
        triggerSecret(allNames);
        return;
      }
      
      newNames.push(generateName(length, chaos, custom));
    }

    setNames(prev => [...prev, ...newNames]);
  };

  return (
    <div className="idm-page">
      <div className="options">
        <div className="header">
          <Image 
            src="/images/image.png" 
            alt="cat" 
            width={150} 
            height={150}
            className="logo"
          />
          <div className="title">IDM <br /> Name <br /> Generator</div>
        </div>
        <div className="controls">
          <label htmlFor="length">Length:</label>
          <input type="range" id="length" min="1" max="6" defaultValue="1" ref={lengthRef} />

          <label htmlFor="chaos">Chaos:</label>
          <input type="range" id="chaos" min="1" max="3" defaultValue="1" ref={chaosRef} />

          <label htmlFor="amount">Amount:</label>
          <input type="range" id="amount" min="1" max="50" defaultValue="1" ref={amountRef} />

          <label htmlFor="customInput">Custom Input:</label>
          <input type="text" id="customInput" ref={customRef} />

          <button onClick={generate}>Generate</button>
        </div>
      </div>
      
      <div className="display">
        {!secretMessage && names.map((name, index) => (
          <div key={index} className="name">{name}</div>
        ))}
        {secretMessage && (
          secretMessage === 'kwahzee.com'
            ? <Link href="/" style={{ fontSize: '60px', textAlign: 'center', marginTop: '200px', display: 'block', color: 'white', textDecoration: 'none', cursor: 'pointer' }}>
                {secretMessage}
              </Link>
            : <div style={{ fontSize: '60px', textAlign: 'center', marginTop: '200px' }}>
                {secretMessage}
              </div>
        )}
      </div>
      <Link href="/projects" className="home-btn">&lt; back</Link>
    </div>
  );
}