import { useEffect, useRef, useState } from 'react';
import './SkillsGraph.scss';

const nodes = [
  { label: 'Python', x: 36, y: 44, mx: 43, my: 42, size: 18 },
  { label: 'Git', x: 27, y: 23, mx: 25, my: 22 },
  { label: 'pytest', x: 13, y: 37, mx: 9, my: 34 },
  { label: 'AI Agents', x: 17, y: 63, mx: 15, my: 58, size: 14 },
  { label: 'LLMs', x: 25, y: 80, mx: 24, my: 79 },
  { label: 'RAG', x: 43, y: 86, mx: 53, my: 90 },
  { label: 'LangGraph', x: 47, y: 68, mx: 48, my: 71 },
  { label: 'LangChain', x: 69, y: 59, mx: 64, my: 58 },
  { label: 'FastAPI', x: 62, y: 39, mx: 67, my: 30 },
  { label: 'TypeScript', x: 75, y: 21, mx: 67, my: 17 },
  { label: 'React', x: 56, y: 11, mx: 43, my: 9 },
];

const edges = [
  [0, 1], [0, 2], [0, 3], [0, 6], [0, 7], [0, 8],
  [1, 10], [2, 3], [3, 4], [3, 5], [3, 6], [4, 5],
  [4, 7], [5, 7], [6, 7], [7, 8], [8, 10], [9, 10],
];

export default function SkillsGraph({ hero }) {
  const section = useRef(null);
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState(null);
  const active = focused ?? hovered ?? selected;
  const connected = new Set([active]);
  for (const [from, to] of edges) {
    if (from === active) connected.add(to);
    if (to === active) connected.add(from);
  }

  useEffect(() => {
    const graph = section.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let previous;

    const update = () => {
      frame = 0;
      const { top, height } = graph.getBoundingClientRect();
      const viewport = window.innerHeight;
      const progress = reduced.matches ? 1 : Math.max(0, Math.min(1,
        (viewport - top) / Math.min(height, viewport * 0.86)
      ));
      if (progress === previous) return;
      previous = progress;
      graph.style.setProperty('--graph-progress', progress);
      hero.current?.style.setProperty('--hero-exit', reduced.matches ? 0 : progress);
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    reduced.addEventListener('change', requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reduced.removeEventListener('change', requestUpdate);
    };
  }, [hero]);

  return (
    <section
      ref={section}
      className="skills-graph"
      aria-label="Skills network"
      data-highlight={active !== null}
      onKeyDown={event => {
        if (event.key === 'Escape') {
          setSelected(null);
          setHovered(null);
          setFocused(null);
        }
      }}
    >
      <div className="skills-graph-field">
        {['desktop', 'mobile'].map(layout => (
          <svg
            key={layout}
            className={`skills-graph-edges skills-graph-edges--${layout}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {edges.map(([from, to], index) => {
              const a = nodes[from];
              const b = nodes[to];
              const mobile = layout === 'mobile';

              return (
                <line
                  key={`${from}-${to}`}
                  x1={mobile ? a.mx : a.x}
                  y1={mobile ? a.my : a.y}
                  x2={mobile ? b.mx : b.x}
                  y2={mobile ? b.my : b.y}
                  pathLength="1"
                  vectorEffect="non-scaling-stroke"
                  data-connected={from === active || to === active}
                  style={{ '--edge-delay': (index % 6) * 0.045 }}
                />
              );
            })}
          </svg>
        ))}
        {nodes.map(({ label, x, y, mx, my, size = 9 }, index) => (
          <button
            key={label}
            type="button"
            className="skills-graph-node"
            style={{
              '--node-x': `${x}%`,
              '--node-y': `${y}%`,
              '--node-mobile-x': `${mx}%`,
              '--node-mobile-y': `${my}%`,
              '--node-size': `${size}px`,
              '--node-delay': index * 0.035,
            }}
            data-connected={connected.has(index)}
            aria-pressed={selected === index}
            aria-description={`Connected to ${edges.flatMap(([from, to]) =>
              from === index ? [nodes[to].label] : to === index ? [nodes[from].label] : []
            ).join(', ')}`}
            onPointerEnter={event => {
              if (event.pointerType === 'mouse') setHovered(index);
            }}
            onPointerLeave={() => setHovered(null)}
            onFocus={event => {
              if (event.currentTarget.matches(':focus-visible')) setFocused(index);
            }}
            onBlur={() => setFocused(null)}
            onClick={() => setSelected(current => current === index ? null : index)}
          >
            <span className="skills-graph-dot" aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
