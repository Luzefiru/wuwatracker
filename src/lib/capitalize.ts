export default function capitalize<T extends string>(s: T) {
  return (s[0].toUpperCase() + s.slice(1)) as Capitalize<typeof s>;
}
