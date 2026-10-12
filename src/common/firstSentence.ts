export function firstSentence(text: string): string {
  return text.split(/(?<=\.)\s/)[0] ?? text
}
