const FACES = [0, 1, 2, 3, 4, 5] as const

export function SceneFallback(): React.JSX.Element {
  return (
    <div className="css-cube-scene absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="css-cube">
        {FACES.map((face) => (
          <span key={face} />
        ))}
      </div>
    </div>
  )
}
