// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract DirtyWorld is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Strings for uint256;

    uint256 public availableToken = 11111;
    uint256 public constant price = 0.1 ether;
    uint256 public constant maxPurchaseSize = 5;
    string public baseExtension = ".json";

    string _baseTokenURI;
    address contractOwner;

    constructor(
        string memory theBaseURI,
        address owner,
        uint256 numToken
    ) ERC721("DirtyWorld", "DIRTYWORLD") {
        setBaseURI(theBaseURI);
        contractOwner = owner;
        availableToken = numToken;
    }

    modifier saleIsOpen() {
        require(totalSupply() < availableToken, "Sale has ended");
        _;
    }

    function mint(uint256 _count) public payable saleIsOpen {
        require(_count > 0, "You can't mint 0 tokens");
        require(_count <= maxPurchaseSize, "Exceeds 5");
        require(
            totalSupply() + _count <= availableToken,
            "Not enough token left"
        );

        uint256 orderPrice = price.mul(_count);
        require(msg.value >= orderPrice, "Value below price");

        for (uint256 i = 0; i < _count; i++) {
            _safeMint(msg.sender, totalSupply()); //Enumerable
        }

        payable(contractOwner).transfer(orderPrice);
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function contractURI() public pure returns (string memory) {
        return "https://www.boxingboyz.com/contract-info.json";
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        (tokenId + 1).toString(),
                        baseExtension
                    )
                )
                : "";
    }

    function walletOfOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokensId;
    }
}
