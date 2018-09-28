import { AuctionInfoService } from "./AuctionInfoService";
import { AuctionService } from "./AuctionServices";
import { ExchangeService } from "./ExchangeServices";
import { store } from "../store/index";

export namespace services
{
    export const auction_neo = new AuctionService(store.auction_neo);
    export const auctionInfo_neo = new AuctionInfoService(store.auction_neo, 24 * 60 * 60);
    export const exchange = new ExchangeService();
}