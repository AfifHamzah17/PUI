import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { slides } from '../data/content.js';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const paused = hovered || focused;
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const t = setInterval(() => setIndex((n) => (n + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused, reduceMotion]);

  const go = (n) => setIndex((n + slides.length) % slides.length);
  const slide = slides[index];

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Sorotan utama"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
      }}
    >
      <div className="hero__art" aria-hidden="true" />
      <div className="container hero__inner">
        <div key={index} className="hero__slide" aria-live={paused ? 'polite' : 'off'}>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="actions">
            {slide.actions.map((a) => (
              <Link key={a.to} to={a.to} className={`btn ${a.primary ? 'btn--gold' : 'btn--line'}`}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hero__controls">
          <button type="button" className="round" onClick={() => go(index - 1)} aria-label="Slide sebelumnya">
            ‹
          </button>
          <div className="dots">
            {slides.map((s, n) => (
              <button
                key={s.title}
                type="button"
                className={n === index ? 'is-active' : ''}
                onClick={() => go(n)}
                aria-label={`Slide ${n + 1} dari ${slides.length}`}
                aria-current={n === index}
              />
            ))}
          </div>
          <button type="button" className="round" onClick={() => go(index + 1)} aria-label="Slide berikutnya">
            ›
          </button>
        </div>
      </div>
      <div className="ulos" aria-hidden="true" />
    </section>
  );
}
