// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint public x;

    constructor(uint _value) {
        x = _value;
    }

    function increment() external {
        x++;
    }

    function add(uint num) external view returns (uint) {
        return x + num;
    }

    function double(uint num) external pure returns (uint sum) {
        sum = num + num;
    }

    function double(uint x, uint y) external pure returns (uint, uint) {
        return (x * 2, y * 2);
    }
}
