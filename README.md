# OCTAV3

## Polygon

Adv Contract - [Explorer](https://mumbai.polygonscan.com/address/0x0b6abA80D045a29d1c720284421094eB0EF2291D#readContract)

```
0x0b6abA80D045a29d1c720284421094eB0EF2291D
```

Music Contract - [Explorer](https://mumbai.polygonscan.com/address/0x8A316d5f0b04eA495D3808Fb66144c90f2da662e#readContract)

```
0x8A316d5f0b04eA495D3808Fb66144c90f2da662e
```

Marketplace Contract - [Explorer](https://mumbai.polygonscan.com/address/0x890351b827Bd1f48e479A93dd3397C6b16b33870#readContract)

```
0x890351b827Bd1f48e479A93dd3397C6b16b33870
```

## Evmos

Adv Contract - [Explorer](https://evm.evmos.dev/address/0x972CddA647fC1c2D12505d968D906664C1D9205f)

```
0x972CddA647fC1c2D12505d968D906664C1D9205f
```

Music Contract - [Explorer](https://evm.evmos.dev/address/0x1a8758092fe15983b9f4D6C5E0E0c7315F0b9239)

```
0x1a8758092fe15983b9f4D6C5E0E0c7315F0b9239
```

MarketPlace Contract - [Explorer](https://evm.evmos.dev/address/0x652e32c2273a2D0b0c5494F30a794bE67Cc8b12D)

```
0x652e32c2273a2D0b0c5494F30a794bE67Cc8b12D
```

# INFO

- Don't approve to normal addresses and unverified marketplaces, only approve to verified and trusted marketplaces, since during transfer, if the address is approved then it will skip timer initiation, and the token will be valid unnecessarily

# Important functions

```solidity
    // Calls internal _createAdSpace
    function createAdSpace(
        uint256 musicNFTId,
        string memory metadataHash,
        string memory assetHash,
        uint32 expirationDuration
    )
```

```solidity
    // Calls internal _createAdSpace while checking if the called in
    function _musicNFTCreateAdSpace(
        address owner,
        uint256 musicNFTId,
        string memory metadataHash,
        string memory assetHash,
        uint32 expirationDuration
    )
```

```solidity
    // Creates ad space
    function _createAdSpace(
        address owner,
        uint256 musicNFTId,
        string memory metadataHash,
        string memory assetHash,
        uint32 _expirationDuration
    )
```

```solidity
    // If the adv is not expired then returns metadata uri
    function getCurrentAdvAssetUri(uint256 musicNFTId)
        external
        view
        returns (string memory)
```

```solidity
    // Returns token uri
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
```

```solidity
    // Updates metadata hash
    function updateMetaDataHash(uint256 tokenId, string memory _metaDataHash)
        external
```

```solidity
    // Updates asset hash
    function updateAssetHash(uint256 tokenId, string memory _assetHash)
        external
```

```solidity
    // Updates both asset hash and metdata hash
    function updateHash(
        uint256 tokenId,
        string memory _assetHash,
        string memory _metaDataHash
    )
```
