import { BigInt } from "@graphprotocol/graph-ts"
import {
  AdvNFTCreated,
  Transfer,
  AdvNFTAssetHashUpdated,
  AdvNFTMetaDataHashUpdated
} from "../generated/AdvNFT/AdvNFT"
import { MarketPlaceAddr } from "../env"
import { AdvNFT, MusicNFT, User } from "../generated/schema"


const tokenUriPrefix = "ipfs://"

function getUri(s: string): string {
  return tokenUriPrefix + s
}
export function handleAdvNFTCreated(event: AdvNFTCreated): void {
  let musicNft = MusicNFT.load(event.params.tokenID.toString())
  if (musicNft) {
    const advNft = new AdvNFT(event.params.tokenID.toString())
    advNft.musicNFT = event.params.musicNFTId.toString();
    advNft.owner = musicNft.owner;
    advNft.expirationTime = BigInt.fromString("0");
    advNft.expirationDuration = event.params.expirationDuration;
    advNft.listed = false;
    advNft.metaDataHash = getUri(event.params.metaDataHash);
    advNft.assetHash = ""
    if (event.params.assetHash != "") advNft.assetHash = getUri(event.params.assetHash)
    advNft.save();
  } else {
    //TODO
  }

}

export function handleAdvNFTMetaDataHashUpdated(event: AdvNFTMetaDataHashUpdated): void {
  const advNft = AdvNFT.load(event.params.tokenId.toString())
  if (advNft) {
    advNft.metaDataHash = getUri(event.params.metaDataHash);
    advNft.save();
  } else {
    //TODO
  }
}

export function handleAdvNFTAssetHashUpdated(event: AdvNFTAssetHashUpdated): void {
  const advNft = AdvNFT.load(event.params.tokenId.toString())
  if (advNft) {
    advNft.assetHash = getUri(event.params.assetHash);
    advNft.save();
  } else {
    //TODO
  }
}

export function handleTransfer(event: Transfer): void {
  const user = new User(event.params.to.toHexString())
  const advNft = AdvNFT.load(event.params.tokenId.toString())
  if (advNft) {
    if (event.params.to.toHexString() != MarketPlaceAddr) {
      advNft.expirationTime = event.block.timestamp.plus(BigInt.fromString(advNft.expirationDuration.toString()));
    }
    advNft.owner = event.params.to.toHexString();
    user.save();
    advNft.save();
  } else {
    //TODO
  }

}

