import {
  AskCanceled,
  AskCreated,
  AskFilled,
  AskPriceUpdated,
} from "../generated/ZoraAsk/ZoraAsk"
import {
  Ask
} from "../generated/schema"

export function handleAskCanceled(event: AskCanceled): void {
  let ask = new Ask(event.params.tokenId.toString() + event.params.tokenContract.toHexString())
  if (ask) {
    ask.cancelled = true;
    ask.save()
  } else {
    //TODO
  }
}

export function handleAskCreated(event: AskCreated): void {
  let ask = new Ask(event.params.tokenId.toString() + event.params.tokenContract.toHexString())
  ask.tokenContract = event.params.tokenContract
  ask.token = event.params.tokenId.toString()
  ask.ask_seller = event.params.ask.seller.toHexString()
  ask.ask_sellerFundsRecipient = event.params.ask.sellerFundsRecipient.toHexString()
  ask.ask_askCurrency = event.params.ask.askCurrency
  ask.ask_findersFeeBps = event.params.ask.findersFeeBps
  ask.ask_askPrice = event.params.ask.askPrice
  ask.fullfilled = false;
  ask.cancelled = false;
  ask.save()
}

export function handleAskFilled(event: AskFilled): void {
  let ask = new Ask(event.params.tokenId.toString() + event.params.tokenContract.toHexString())
  if (ask) {
    ask.fullfilled = true;
    ask.save()
  } else {
    //TODO
  }
}

export function handleAskPriceUpdated(event: AskPriceUpdated): void {
  let ask = new Ask(event.params.tokenId.toString() + event.params.tokenContract.toHexString())
  if (ask) {
    ask.ask_askPrice = event.params.ask.askPrice;
    ask.save()
  } else {
    //TODO
  }
}