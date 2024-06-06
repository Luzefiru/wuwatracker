import extractGachaRecordQueryArgs from "./extractGachaRecordQueryArgs";

export default function isValidConveneHistoryUrl(s: string) {
  const { isValidQueryArgs } = extractGachaRecordQueryArgs(s);
  return isValidQueryArgs;
}
