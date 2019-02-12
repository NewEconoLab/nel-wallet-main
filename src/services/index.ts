import { AuctionInfoService } from "./AuctionInfoService";
import { AuctionService } from "./AuctionServices";
import { ExchangeService } from "./ExchangeServices";
import { TransferService } from "./TransferService";
import { store } from "../store/index";
import { DomainBuyService } from "./DomainBuyService";

export namespace services
{
    export const auction_neo = new AuctionService(store.auction_neo);
    export const auctionInfo_neo = new AuctionInfoService(24 * 60 * 60);
    export const exchange = new ExchangeService();
    export const transfer = new TransferService();
    export const buyAuction_neo = new DomainBuyService();
}