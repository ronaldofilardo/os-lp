const ECG_PATH =
  'M0 120 H180 L205 120 L222 70 L244 170 L262 120 H430 L452 120 L468 84 L486 150 L502 120 H700 L724 120 L742 56 L766 184 L784 120 H960 L982 120 L998 92 L1014 140 L1030 120 H1200'

const NODES = [
  { left: '8%', top: '22%', delay: '0s' },
  { left: '17%', top: '68%', delay: '1.1s' },
  { left: '46%', top: '14%', delay: '2.2s' },
  { left: '92%', top: '30%', delay: '0.6s' },
  { left: '84%', top: '78%', delay: '1.7s' },
] as const

export function HeroBackground(): React.JSX.Element {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="aurora" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 0.75px, transparent 0.75px)', backgroundSize: '26px 26px' }}
      />
      <svg
        className="absolute inset-x-0 bottom-6 w-full h-28 opacity-60"
        viewBox="0 0 1200 240"
        preserveAspectRatio="none"
      >
        <path d={ECG_PATH} fill="none" stroke="#bae6fd" strokeWidth="2" />
        <path d={ECG_PATH} fill="none" stroke="#2ECC71" strokeWidth="2.5" strokeLinecap="round" className="os-ecg" />
      </svg>
      {NODES.map((node) => (
        <span
          key={node.left}
          className="os-node absolute w-2 h-2 rounded-full bg-emerald-400/70"
          style={{ left: node.left, top: node.top, animationDelay: node.delay }}
        />
      ))}
    </div>
  )
}
