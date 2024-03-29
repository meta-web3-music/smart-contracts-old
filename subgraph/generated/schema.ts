// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MusicNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MusicNFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MusicNFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MusicNFT", id.toString(), this);
    }
  }

  static load(id: string): MusicNFT | null {
    return changetype<MusicNFT | null>(store.get("MusicNFT", id));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get metaDataUri(): string {
    let value = this.get("metaDataUri");
    return value!.toString();
  }

  set metaDataUri(value: string) {
    this.set("metaDataUri", Value.fromString(value));
  }

  get assetUri(): string {
    let value = this.get("assetUri");
    return value!.toString();
  }

  set assetUri(value: string) {
    this.set("assetUri", Value.fromString(value));
  }

  get advNfts(): Array<string> {
    let value = this.get("advNfts");
    return value!.toStringArray();
  }

  set advNfts(value: Array<string>) {
    this.set("advNfts", Value.fromStringArray(value));
  }

  get latestAdvNft(): string | null {
    let value = this.get("latestAdvNft");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set latestAdvNft(value: string | null) {
    if (!value) {
      this.unset("latestAdvNft");
    } else {
      this.set("latestAdvNft", Value.fromString(<string>value));
    }
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get created(): Array<string> {
    let value = this.get("created");
    return value!.toStringArray();
  }

  set created(value: Array<string>) {
    this.set("created", Value.fromStringArray(value));
  }
}

export class AdvNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AdvNFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AdvNFT must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AdvNFT", id.toString(), this);
    }
  }

  static load(id: string): AdvNFT | null {
    return changetype<AdvNFT | null>(store.get("AdvNFT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get musicNFT(): string {
    let value = this.get("musicNFT");
    return value!.toString();
  }

  set musicNFT(value: string) {
    this.set("musicNFT", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get expirationTime(): BigInt {
    let value = this.get("expirationTime");
    return value!.toBigInt();
  }

  set expirationTime(value: BigInt) {
    this.set("expirationTime", Value.fromBigInt(value));
  }

  get expirationDuration(): BigInt {
    let value = this.get("expirationDuration");
    return value!.toBigInt();
  }

  set expirationDuration(value: BigInt) {
    this.set("expirationDuration", Value.fromBigInt(value));
  }

  get metaDataHash(): string {
    let value = this.get("metaDataHash");
    return value!.toString();
  }

  set metaDataHash(value: string) {
    this.set("metaDataHash", Value.fromString(value));
  }

  get assetHash(): string {
    let value = this.get("assetHash");
    return value!.toString();
  }

  set assetHash(value: string) {
    this.set("assetHash", Value.fromString(value));
  }

  get listed(): boolean {
    let value = this.get("listed");
    return value!.toBoolean();
  }

  set listed(value: boolean) {
    this.set("listed", Value.fromBoolean(value));
  }

  get marketItems(): Array<string> {
    let value = this.get("marketItems");
    return value!.toStringArray();
  }

  set marketItems(value: Array<string>) {
    this.set("marketItems", Value.fromStringArray(value));
  }

  get latest(): boolean {
    let value = this.get("latest");
    return value!.toBoolean();
  }

  set latest(value: boolean) {
    this.set("latest", Value.fromBoolean(value));
  }
}

export class MarketItem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save MarketItem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type MarketItem must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("MarketItem", id.toString(), this);
    }
  }

  static load(id: string): MarketItem | null {
    return changetype<MarketItem | null>(store.get("MarketItem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get itemId(): BigInt {
    let value = this.get("itemId");
    return value!.toBigInt();
  }

  set itemId(value: BigInt) {
    this.set("itemId", Value.fromBigInt(value));
  }

  get nftContract(): Bytes {
    let value = this.get("nftContract");
    return value!.toBytes();
  }

  set nftContract(value: Bytes) {
    this.set("nftContract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get forSale(): boolean {
    let value = this.get("forSale");
    return value!.toBoolean();
  }

  set forSale(value: boolean) {
    this.set("forSale", Value.fromBoolean(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get metaDataUri(): string {
    let value = this.get("metaDataUri");
    return value!.toString();
  }

  set metaDataUri(value: string) {
    this.set("metaDataUri", Value.fromString(value));
  }

  get sold(): boolean {
    let value = this.get("sold");
    return value!.toBoolean();
  }

  set sold(value: boolean) {
    this.set("sold", Value.fromBoolean(value));
  }

  get deleted(): boolean {
    let value = this.get("deleted");
    return value!.toBoolean();
  }

  set deleted(value: boolean) {
    this.set("deleted", Value.fromBoolean(value));
  }
}
