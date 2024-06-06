export default function isValidConveneHistoryUrl(s: string) {
  const conveneHistoryUrlRegex =
    /^https:\/\/(?:aki-gm-resources-oversea\.aki-game\.net|aki-gm-resources\.aki-game\.com)\/aki\/gacha\/index\.html\#\/record\?(?=.*\bplayer_id=\w+\b)(?=.*\brecord_id=\w+\b)(?=.*\bsvr_id=\w+\b).*$/;
  return conveneHistoryUrlRegex.test(s);
}
