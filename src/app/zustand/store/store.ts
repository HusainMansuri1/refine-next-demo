import { create } from "zustand";

export type Action = {
    setCoins: (coins: State["coins"]) => void,
};

export type State = {
    coins: {
        "uuid": string,
        "symbol": string,
        "name": string,
        "color": string,
        "iconUrl": string,
        "marketCap": string,
        "price": string,
        "listedAt": number,
        "tier": number,
        "change": string,
        "rank": number,
        "sparkline": string[],
        "lowVolume": false,
        "coinrankingUrl": string,
        "24hVolume": string,
        "btcPrice": string,
        "contractAddresses": string[]
    }[]
}

const useStore = create<State & Action>((set) => ({
    coins: [],
    setCoins: (coins: State["coins"]) => set({ coins: coins })
}));

export default  useStore;
