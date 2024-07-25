// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./IPriceFeed.sol";

interface IPricefeedMulticall {
    function getNormalizedPriceOutUSDBatch(
        address[] calldata inTokens,
        uint256[] calldata amountsIn
    ) external returns (uint256[] memory amountsOut, IPriceFeed.SwapPath[] memory paths);

}