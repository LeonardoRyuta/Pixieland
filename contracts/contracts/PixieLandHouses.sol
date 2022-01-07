// contracts/PixieLandHouses.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title  Minting your House
/// @notice using ERC721 standard for Houses

contract PixieLandHouses is Ownable, ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter public totalHouses;

    string private _currentBaseURI;

    constructor() ERC721("PixieLandHouses", "PXH") {
        setBaseURI("test/");
    }

    function setBaseURI(string memory baseURI) public onlyOwner
    {
        _currentBaseURI = baseURI;
    }

    function _baseURI() internal view virtual override returns (string memory)
    {
        return _currentBaseURI;
    }

    function mintHouse() payable public
    { 

        uint256 newHousesId = totalHouses.current();

        totalHouses.increment();

        _safeMint(msg.sender, newHousesId);
        
    }

    function fetchBalance() external onlyOwner
    {
        payable(msg.sender).transfer(address(this).balance);
    }
}