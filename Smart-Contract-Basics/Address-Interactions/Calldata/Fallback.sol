// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Sidekick {
    function makeContact(address hero) external {
        // TODO: trigger the hero's fallback function!
        bytes memory payload = abi.encodeWithSignature("hello()");
        (bool s, ) = hero.call(payload);
        require(s);
    }
}
