export function AnimatedLetters({ text, offset = 0 }: { readonly text: string; readonly offset?: number }): JSX.Element {
  let position = offset
  return (
    <span aria-label={text}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} aria-hidden="true">
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((letter, letterIndex) => {
              position += 1
              return (
                <span key={`${letter}-${letterIndex}`} className="letter-wave inline-block" style={{ animationDelay: `${position * 70}ms` }}>
                  {letter}
                </span>
              )
            })}
          </span>
          {' '}
        </span>
      ))}
    </span>
  )
}
