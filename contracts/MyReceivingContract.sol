pragma solidity 0.4.24;
pragma experimental ABIEncoderV2;

import "./ReceiverInterface.sol";

contract MyReceivingContract is ReceiverInterface {

  function withStruct(MyStruct memory _myStruct) public {
    emit GetCallData(msg.data);
  }

  function withParams(
    uint256 _num1,
    uint256 _num2,
    uint256 _num3,
    address[] _addresses,
    bytes32 _someData
  ) public {
    emit GetCallData(msg.data);
  }
}