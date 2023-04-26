// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    mapping(address => bool) public members;
     
    function addMember (address newMember) external {
        members[newMember] = true;
    }

    function isMember(address addr) external view returns(bool){
        return members[addr];
    }

    function removeMember(address addr) external {
        members[addr] = false;
    }
}