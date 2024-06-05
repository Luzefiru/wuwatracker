/**
 * Used to get the get an item's pull number within the pity range (out of 80)
 *
 * @param qualityLevel - the rarity level of a character
 * @param fourStarCurrentPity - the current pity for four star items (out of 10)
 * @param pullNumber - the overall pull number which an item was acquired
 * @param previousFourStarPullNumber - the last pity in which a four star item was pulled
 * @param previousFiveStarPullNumber - the last pity in which a five star item was pulled
 * @returns an integer that represents an item's current pull number within pity
 */
export default function getPullNumber(
  qualityLevel: number,
  fourStarCurrentPity: number,
  pullNumber: number,
  previousFourStarPullNumber: number,
  previousFiveStarPullNumber: number,
) {
  const isFourStar = qualityLevel === 4 && fourStarCurrentPity === 0;

  return (
    pullNumber -
    (isFourStar ? previousFourStarPullNumber : previousFiveStarPullNumber)
  );
}
