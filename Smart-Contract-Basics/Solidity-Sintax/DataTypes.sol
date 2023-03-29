// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract {
  //boolean
  bool public a = true;  
  bool public b = false;

  //unsigned integers
  uint8 public a = 1;
  uint16 public b = 65530 ;
  uint256 public sum = a + b;

  //signed integers
  int8 public a = 1;
  int8 public b = -1;
  int16 public difference = a - b; 

  //string literals
  bytes32 public msg1 = "Hello World";
  string public msg2 = "Hello World my fren! gm :) here a string with at least 32bytes";

  //Enum
  enum Foods { Apple, Pizza, Bagel, Banana }

	Foods public food1 = Foods.Apple;
	Foods public food2 = Foods.Pizza;
	Foods public food3 = Foods.Bagel;
	Foods public food4 = Foods.Banana;
}