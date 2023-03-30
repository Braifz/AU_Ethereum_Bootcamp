// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    address owner;

    constructor() payable {
        owner = msg.sender;
        if (msg.value < 1 ether) {
            revert("Some error");
        }
    }

    function withdraw() public {
        if (owner != msg.sender) {
            revert("Your aren't owner");
        }
        (bool s, ) = owner.call{value: address(this).balance}("");
    }
}
