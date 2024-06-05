export default function isValidGamePath(s: string) {
  // matches valid Windows paths
  const gamePathRegex =
    /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/;
  return gamePathRegex.test(s);
}
