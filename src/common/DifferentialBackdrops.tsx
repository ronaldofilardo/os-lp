const BARS = Array.from({ length: 28 }, (_, index) => index)
const NODES = [
  [40, 70], [140, 40], [250, 90], [70, 190], [190, 170], [270, 250], [110, 300], [220, 340],
] as const
const LINKS = [[0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 7], [6, 7]] as const

export function ApiFlowBackdrop(): JSX.Element {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {LINKS.map(([from, to], index) => (
        <line
          key={`${from}-${to}`}
          x1={NODES[from]?.[0]} y1={NODES[from]?.[1]} x2={NODES[to]?.[0]} y2={NODES[to]?.[1]}
          stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="5 7" className="bg-dash-flow"
          style={{ animationDelay: `${index * -0.4}s` }}
        />
      ))}
      {NODES.map(([x, y], index) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#0ea5e9" className="bg-pulse-node" style={{ animationDelay: `${index * 0.35}s` }} />
      ))}
    </svg>
  )
}

export function ListeningBackdrop(): JSX.Element {
  return (
    <>
      <span className="bg-ripple absolute -top-10 -right-10 w-56 h-56 rounded-full border-2 border-emerald-300" aria-hidden="true" />
      <span className="bg-ripple absolute -top-10 -right-10 w-56 h-56 rounded-full border-2 border-emerald-300" style={{ animationDelay: '1.6s' }} aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 flex items-end justify-between gap-1 px-4 opacity-40" aria-hidden="true">
        {BARS.map((bar) => (
          <span
            key={bar}
            className="bg-eq-bar flex-1 h-full rounded-t bg-gradient-to-t from-emerald-300 to-emerald-100"
            style={{ animationDelay: `${(bar * 0.17) % 1.4}s`, animationDuration: `${1.1 + (bar % 5) * 0.25}s` }}
          />
        ))}
      </div>
    </>
  )
}

export function SecurityBackdrop(): JSX.Element {
  return (
    <>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-sky-200 opacity-70" aria-hidden="true">
        <span className="absolute inset-8 rounded-full border border-sky-200" />
        <span className="absolute inset-16 rounded-full border border-sky-200" />
        <span className="bg-radar-sweep absolute inset-0 rounded-full" />
      </div>
      <span className="bg-scan-line absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-sky-300/30 to-transparent" aria-hidden="true" />
    </>
  )
}
