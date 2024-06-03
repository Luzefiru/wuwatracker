export default function getPullNumber(
  qualityLevel: number,
  fourStarCurrentPity: number,
  pullNumber: number,
  previousFiveStarPullNumber: number,
) {
  const isFourStar = qualityLevel === 4 && fourStarCurrentPity === 0;

  if (isFourStar) {
    return pullNumber - previousFiveStarPullNumber;
  }
  return pullNumber - previousFiveStarPullNumber;
}
