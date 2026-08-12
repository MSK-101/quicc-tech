import { GRADIENT_ID } from "@/components/ui/svg-defs";

/**
 * Isometric background artwork.
 *
 * These are vector stand-ins for rendered 3D imagery: they stay crisp at any
 * size, cost no image bytes, and are already in the brand palette. To swap in a
 * generated render instead, drop the file in `/public/decor` and replace the
 * component with a `next/image` in the section that uses it — the wrapper
 * positioning does not need to change.
 */

type SlabProps = {
  cx: number;
  cy: number;
  halfWidth: number;
  halfHeight: number;
  /** Extrusion below the top face. */
  depth: number;
  fill: string;
  opacity?: number;
};

/** One isometric slab: a rhombus top face plus two side faces for thickness. */
function Slab({
  cx,
  cy,
  halfWidth,
  halfHeight,
  depth,
  fill,
  opacity = 1,
}: SlabProps) {
  const top = `M${cx} ${cy - halfHeight} L${cx + halfWidth} ${cy} L${cx} ${cy + halfHeight} L${cx - halfWidth} ${cy} Z`;
  const left = `M${cx - halfWidth} ${cy} L${cx} ${cy + halfHeight} L${cx} ${cy + halfHeight + depth} L${cx - halfWidth} ${cy + depth} Z`;
  const right = `M${cx + halfWidth} ${cy} L${cx} ${cy + halfHeight} L${cx} ${cy + halfHeight + depth} L${cx + halfWidth} ${cy + depth} Z`;

  return (
    <g opacity={opacity}>
      <path d={left} fill="#0B1A38" />
      <path d={right} fill="#071229" />
      <path d={top} fill={fill} />
      <path
        d={top}
        fill="none"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1.2"
      />
    </g>
  );
}

function Glow({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${GRADIENT_ID.decorGlow})`} />;
}

/**
 * A stack of floating isometric platforms linked by dashed connectors —
 * a layered, well-architected system. Used behind the tech stack.
 */
export function IsoLayers({ className = "" }: { className?: string }) {
  const layers = [
    { cy: 430, halfWidth: 158, halfHeight: 79, fill: "#0E2A63", opacity: 0.55 },
    { cy: 330, halfWidth: 146, halfHeight: 73, fill: "#153C8C", opacity: 0.7 },
    { cy: 232, halfWidth: 134, halfHeight: 67, fill: "#1D4ED8", opacity: 0.82 },
    { cy: 138, halfWidth: 120, halfHeight: 60, fill: "#22D3EE", opacity: 0.9 },
  ];

  return (
    <svg viewBox="0 0 380 560" className={className} aria-hidden="true" fill="none">
      <Glow cx={190} cy={300} rx={180} ry={240} />

      {/* Connectors sit behind the slabs so they read as spindles between them. */}
      <g stroke="rgba(96,165,250,0.45)" strokeWidth="1.2" strokeDasharray="4 7">
        <path d="M190 138v94M190 232v98M190 330v100" />
        <path d="M120 168l-42 30M260 262l44 30M120 360l-44 32" />
      </g>

      {layers.map((layer) => (
        <Slab key={layer.cy} cx={190} depth={16} {...layer} />
      ))}

      <g>
        <circle cx="78" cy="198" r="6" fill="#22D3EE" />
        <circle cx="304" cy="292" r="6" fill="#3B82F6" />
        <circle cx="76" cy="392" r="5" fill="#60A5FA" />
      </g>
    </svg>
  );
}

/**
 * Four isometric columns rising left to right — tiers that scale with scope.
 * Used behind the pricing grid.
 */
export function IsoSteps({ className = "" }: { className?: string }) {
  const columns = [
    { cx: 96, cy: 330, height: 60, fill: "#12379B", opacity: 0.6 },
    { cx: 168, cy: 288, height: 108, fill: "#1D4ED8", opacity: 0.72 },
    { cx: 240, cy: 246, height: 156, fill: "#2563EB", opacity: 0.84 },
    { cx: 312, cy: 204, height: 204, fill: "#22D3EE", opacity: 0.94 },
  ];

  return (
    <svg viewBox="0 0 420 520" className={className} aria-hidden="true" fill="none">
      <Glow cx={210} cy={290} rx={200} ry={220} />

      <path
        d="M40 400 L210 314 L380 400 L210 486 Z"
        fill="rgba(37,99,235,0.07)"
        stroke="rgba(96,165,250,0.22)"
        strokeWidth="1.2"
      />

      {columns.map((column) => (
        <Slab
          key={column.cx}
          cx={column.cx}
          cy={column.cy}
          halfWidth={44}
          halfHeight={22}
          depth={column.height}
          fill={column.fill}
          opacity={column.opacity}
        />
      ))}

      <path
        d="M96 330 L168 288 L240 246 L312 204"
        stroke="rgba(103,232,249,0.6)"
        strokeWidth="1.6"
        strokeDasharray="5 6"
      />
    </svg>
  );
}

/**
 * Three isometric panels cascading down and to the right, like screens handed
 * off one to the next — several services, one delivery. Used behind services.
 */
export function IsoPanels({ className = "" }: { className?: string }) {
  const panels = [
    { cx: 132, cy: 168, fill: "#22D3EE", opacity: 0.88 },
    { cx: 190, cy: 288, fill: "#2563EB", opacity: 0.76 },
    { cx: 248, cy: 408, fill: "#12379B", opacity: 0.62 },
  ];

  return (
    <svg viewBox="0 0 380 560" className={className} aria-hidden="true" fill="none">
      <Glow cx={190} cy={290} rx={180} ry={230} />

      <g stroke="rgba(96,165,250,0.4)" strokeWidth="1.2" strokeDasharray="4 7">
        <path d="M132 182 L190 274M190 302 L248 394" />
      </g>

      {panels.map((panel) => (
        <Slab
          key={panel.cx}
          cx={panel.cx}
          cy={panel.cy}
          halfWidth={104}
          halfHeight={52}
          depth={14}
          fill={panel.fill}
          opacity={panel.opacity}
        />
      ))}

      {/* Content bars sitting on the front panel. */}
      <g opacity="0.5" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round">
        <path d="M104 166 L146 145M112 180 L172 150" />
      </g>

      <g>
        <circle cx="300" cy="212" r="5.5" fill="#67E8F9" />
        <circle cx="72" cy="330" r="5" fill="#3B82F6" />
      </g>
    </svg>
  );
}

/**
 * Five isometric nodes stepping down a dashed track — a staged pipeline.
 * Used behind the process timeline.
 */
export function IsoFlow({ className = "" }: { className?: string }) {
  const nodes = [
    { cx: 92, cy: 148, fill: "#22D3EE", opacity: 0.9 },
    { cx: 152, cy: 186, fill: "#3B82F6", opacity: 0.82 },
    { cx: 212, cy: 224, fill: "#2563EB", opacity: 0.74 },
    { cx: 272, cy: 262, fill: "#1D4ED8", opacity: 0.66 },
    { cx: 332, cy: 300, fill: "#12379B", opacity: 0.58 },
  ];

  return (
    <svg viewBox="0 0 420 520" className={className} aria-hidden="true" fill="none">
      <Glow cx={210} cy={250} rx={200} ry={210} />

      {/* Track the nodes travel along. */}
      <path
        d="M92 148 L332 300"
        stroke="rgba(103,232,249,0.5)"
        strokeWidth="1.6"
        strokeDasharray="6 7"
      />

      {/* Ground shadow plane. */}
      <path
        d="M52 392 L212 312 L372 392 L212 472 Z"
        fill="rgba(37,99,235,0.06)"
        stroke="rgba(96,165,250,0.18)"
        strokeWidth="1.2"
      />

      {nodes.map((node, index) => (
        <g key={node.cx}>
          {/* Drop lines tie each node back to the ground plane. */}
          <path
            d={`M${node.cx} ${node.cy + 30} V${360 - index * 4}`}
            stroke="rgba(96,165,250,0.22)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <Slab
            cx={node.cx}
            cy={node.cy}
            halfWidth={34}
            halfHeight={17}
            depth={22}
            fill={node.fill}
            opacity={node.opacity}
          />
        </g>
      ))}
    </svg>
  );
}
