# Test Struct vs Param gas usage

      Contract: MyReceivingContract
        withStruct
    Calldata: 0xc743f608000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000a09c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb6580000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef
          ✓ calls the function (33219 gas)
        withParams
    Calldata: 0x41ed7cb800000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000a09c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb6580000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f17f52151ebef6c7334fad080c5704d77216b732000000000000000000000000c5fdf4076b8f3a5357c5e395ab970b5b54098fef
          ✓ calls the function (32514 gas)

    ·-----------------------------------------------------------------|----------------------------·
    |                               Gas                               ·  Block limit: 6721975 gas  │
    ·······································|··························|·····························
    |  Methods                             ·        1 gwei/gas        ·       174.27 usd/eth       │
    ························|··············|·······|·······|··········|··············|··············
    |  Contract             ·  Method      ·  Min  ·  Max  ·  Avg     ·  # calls     ·  usd (avg)  │
    ························|··············|·······|·······|··········|··············|··············
    |  MyReceivingContract  ·  withParams  ·    -  ·    -  ·   32514  ·           1  ·       0.01  │
    ························|··············|·······|·······|··········|··············|··············
    |  Deployments                         ·                          ·  % of limit  ·             │
    ·······································|·······|·······|··········|··············|··············
    |  MyReceivingContract                 ·    -  ·    -  ·  355117  ·       5.3 %  ·       0.06  │
    ·--------------------------------------|-------|-------|----------|--------------|-------------·

      2 passing (1s)