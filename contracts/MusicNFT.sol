pragma solidity 0.8.13;
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "./AdvNFT.sol";
import "hardhat/console.sol";

//TODO remove approve
// TODO: add token uri func and append ipfs://
contract MusicNFT is Context, ERC721Pausable {
    using Counters for Counters.Counter;

    address public advNFTAddr;

    Counters.Counter private _tokenIdTracker;

    // Optional mapping for token URIs
    mapping(uint256 => string) private _tokenURIs;

    address public admin;
    event MusicNFTCreated(
        uint256 tokenID,
        address indexed creator,
        string metaDataUri
    );

    using Strings for uint256;

    constructor(
        string memory name,
        string memory symbol,
        address _advNFTAddr
    ) ERC721(name, symbol) {
        advNFTAddr = _advNFTAddr;
        admin = _msgSender();
    }

    modifier onlyAdmin() {
        require(admin == _msgSender(), "sender is not admin");
        _;
    }

    function createMusic(string memory metadataHash) public returns (uint256) {
        uint256 tokenId = _createMusic(_msgSender(), metadataHash);
        return tokenId;
    }

    function _createMusic(address creator, string memory metadataHash)
        internal
        returns (uint256)
    {
        console.log(creator);
        _tokenIdTracker.increment();
        uint256 currentTokenID = _tokenIdTracker.current();
        _safeMint(creator, currentTokenID);
        _setTokenURI(currentTokenID, metadataHash);

        emit MusicNFTCreated(currentTokenID, creator, tokenURI(currentTokenID));
        return currentTokenID;
    }

    function createMusicWithAdv(
        string memory musicMetadataHash,
        string memory advMetadataHash,
        uint32 advExpirationDuration
    ) public returns (uint256) {
        console.log(_msgSender());
        AdvNFT advNFt = AdvNFT(advNFTAddr);
        uint256 tokenId = _createMusic(_msgSender(), musicMetadataHash);
        advNFt._musicNFTCreateAdSpace(
            _msgSender(),
            tokenId,
            advMetadataHash,
            advExpirationDuration
        );

        return tokenId;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Non-Existent NFT");
        string memory _tokenURI = _tokenURIs[tokenId];

        return _tokenURI;
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI)
        internal
        virtual
    {
        require(_exists(tokenId), "Non-Existent NFT");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function pause() public onlyAdmin {
        _pause();
    }

    function unpause() public onlyAdmin {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        require(from == address(0), "music is soul bound");
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
