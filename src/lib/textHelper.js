export function truncateMiddle(string, size) {
  return string.substring(0, size / 2) + '\u2026' + string.substring(string.length - size / 2 + 1, string.length);
}
