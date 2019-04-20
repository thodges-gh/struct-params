pragma solidity 0.4.24;
pragma experimental ABIEncoderV2;

contract ReceiverInterface {

  event GetCallData(bytes data);

  struct MyStruct {
    uint256 num1;
    uint256 num2;
    uint256 num3;
    address[] addresses;
    bytes32 someData;
  }

  function withStruct(MyStruct memory _myStruct) public;
  function withParams(
    uint256 _num1,
    uint256 _num2,
    uint256 _num3,
    address[] _addresses,
    bytes32 _someData
  ) public;
}