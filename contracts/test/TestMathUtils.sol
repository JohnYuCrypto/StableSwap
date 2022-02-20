// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../libraries/MathUtils.sol";

contract TestMathUtils {
    using MathUtils for uint256;

    function difference(uint256 a, uint256 b) public pure returns (uint256) {
        return a.difference(b);
    }

    function within1(uint256 a, uint256 b) public pure returns (bool) {
        return a.within1(b);
    }
}