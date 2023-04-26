// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    address owner;
    uint price;
    bool isForSale;

    event Deployed(address indexed add);
    event Transfer(address indexed owner, address indexed newOwner);
    event ForSale(uint price, uint timestamp);
    event Purchase(uint amount, address indexed buyer);

    constructor() {
        owner = msg.sender;
        emit Deployed(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "vos no sos el owner pa");
        _;
    }

    function transfer(address recipient) external onlyOwner {
        address pastOwner = owner;
        owner = recipient;
        emit Transfer(pastOwner, owner);
    }

    function markPrice(uint askingPrice) external onlyOwner {
        price = askingPrice;
        isForSale = true;
        emit ForSale(askingPrice, block.timestamp);
    }

    function purchase() external payable {
        require(isForSale == true, "is not for sale");
        require(price > 0, "dont have price");
        require(msg.value >= price, "you haven't suficient funds");
        (bool success, ) = owner.call{value: price}("");
        require(success);
        owner = msg.sender;
        emit Purchase(price, msg.sender);
        isForSale = false;
    }
}
