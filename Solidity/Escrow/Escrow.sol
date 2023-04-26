// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {
    address public depositor;
    address public beneficiary;
    address public arbiter;
    bool public isApproved;

    event Approved(uint balance);

    constructor(address _arbiter, address _beneficiary) payable {
        arbiter = _arbiter;
        beneficiary = _beneficiary;
        depositor = msg.sender;
    }

    modifier onlyArbiter() {
        require(arbiter == msg.sender, "vos nos el arbiter :)");
        _;
    }

    function approve() external payable onlyArbiter {
        uint balanceContract = address(this).balance;
        (bool s, ) = beneficiary.call{value: balanceContract}("");
        require(s, "Failed to send ether");
        isApproved = true;
        emit Approved(balanceContract);
    }
}
