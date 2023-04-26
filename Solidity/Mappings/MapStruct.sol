// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    struct User {
        uint balance;
        bool isActive;
    }

    mapping(address => User) public users;

    function createUser() external {
        require(
            users[msg.sender].isActive == false,
            "you should be a new user"
        );
        users[msg.sender].balance = 100;
        users[msg.sender].isActive = true;
    }

    function transfer(address recipient, uint amount) external {
        require(
            users[msg.sender].isActive && users[recipient].isActive,
            "should be users active"
        );
        require(
            users[msg.sender].balance >= amount,
            "your balance is insuficient"
        );
        users[msg.sender].balance -= amount;
        users[recipient].balance += amount;
    }
}
