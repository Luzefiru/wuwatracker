import extractGachaRecordQueryArgs from "./extractGachaRecordQueryArgs";

export default function isValidConveneHistoryUrl(s: string) {
  const { isValidQueryArgs } = extractGachaRecordQueryArgs(s);
  const conveneHistoryUrlRegex =
    /^https:\/\/(?:aki-gm-resources(?:-oversea)?\.aki-game\.(?:net|com))\/aki\/gacha\/index\.html\#\/record/;

  return isValidQueryArgs && conveneHistoryUrlRegex.test(s);
}
