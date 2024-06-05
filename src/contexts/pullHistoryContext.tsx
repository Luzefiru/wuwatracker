"use client";

import { useConveneHistory } from "@/hooks/useConveneHistory";
import { BannerStats } from "@/types/BannerStats";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
  useState,
} from "react";

type pullHistoryContextType = {
  limitedCharacterStats: BannerStats | null;
  setLimitedCharacterStats: Dispatch<SetStateAction<BannerStats | null>>;
  limitedWeaponStats: BannerStats | null;
  setLimitedWeaponStats: Dispatch<SetStateAction<BannerStats | null>>;
  permanentCharacterStats: BannerStats | null;
  setPermanentCharacterStats: Dispatch<SetStateAction<BannerStats | null>>;
  permanentWeaponStats: BannerStats | null;
  setPermanentWeaponStats: Dispatch<SetStateAction<BannerStats | null>>;
  starterStats: BannerStats | null;
  setStarterStats: Dispatch<SetStateAction<BannerStats | null>>;
  starterSelectorStats: BannerStats | null;
  setStarterSelectorStats: Dispatch<SetStateAction<BannerStats | null>>;
};

const pullHistoryContext = createContext<pullHistoryContextType>({
  limitedCharacterStats: null,
  setLimitedCharacterStats: () => {},
  limitedWeaponStats: null,
  setLimitedWeaponStats: () => {},
  permanentCharacterStats: null,
  setPermanentCharacterStats: () => {},
  permanentWeaponStats: null,
  setPermanentWeaponStats: () => {},
  starterStats: null,
  setStarterStats: () => {},
  starterSelectorStats: null,
  setStarterSelectorStats: () => {},
});

export const PullHistoryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { getCardPoolTypeStatistics } = useConveneHistory();

  const [limitedCharacterStats, setLimitedCharacterStats] =
    useState<BannerStats | null>(null);
  const [limitedWeaponStats, setLimitedWeaponStats] =
    useState<BannerStats | null>(null);
  const [permanentCharacterStats, setPermanentCharacterStats] =
    useState<BannerStats | null>(null);
  const [permanentWeaponStats, setPermanentWeaponStats] =
    useState<BannerStats | null>(null);
  const [starterStats, setStarterStats] = useState<BannerStats | null>(null);
  const [starterSelectorStats, setStarterSelectorStats] =
    useState<BannerStats | null>(null);

  useEffect(() => {
    const getBannerStats = async () => {
      setLimitedCharacterStats(await getCardPoolTypeStatistics(1, 160));
      setLimitedWeaponStats(await getCardPoolTypeStatistics(2, 160));
      setPermanentCharacterStats(await getCardPoolTypeStatistics(3, 160));
      setPermanentWeaponStats(await getCardPoolTypeStatistics(4, 160));
      setStarterStats(await getCardPoolTypeStatistics(5, 128));
      setStarterSelectorStats(await getCardPoolTypeStatistics(6, 160));
    };
    getBannerStats();
  }, [getCardPoolTypeStatistics]);
  return (
    <pullHistoryContext.Provider
      value={{
        limitedCharacterStats,
        setLimitedCharacterStats,
        limitedWeaponStats,
        setLimitedWeaponStats,
        permanentCharacterStats,
        setPermanentCharacterStats,
        permanentWeaponStats,
        setPermanentWeaponStats,
        starterStats,
        setStarterStats,
        starterSelectorStats,
        setStarterSelectorStats,
      }}
    >
      {children}
    </pullHistoryContext.Provider>
  );
};

export function usePullHistory() {
  const context = useContext(pullHistoryContext);
  if (context === undefined)
    throw new Error("pullHistoryContext used outside of the provider");
  return context;
}
