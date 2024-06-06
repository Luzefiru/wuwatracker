import { ServerArea, ServerAreaEnum } from "@/types/ServerArea";

/**
 * Returns the base upstream server URL for the specified server area.
 *
 * @example
 * const area = ServerArea.global;
 * const baseUrl = getServerUrlByArea(area); // https://gmserver-api.aki-game2.net
 *
 * @param area the server area
 * @returns base URL for the area
 */
export default function getServerUrlByArea(area: ServerAreaEnum): string {
  switch (area) {
    case ServerArea.global:
      return "https://gmserver-api.aki-game2.net";
    case ServerArea.cn:
      return "https://gmserver-api.aki-game2.com";
  }
}
