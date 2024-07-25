// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./interfaces/IPriceFeed.sol";
import "./interfaces/IPricefeedMulticall.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract PricefeedMulticall is IPricefeedMulticall {
    IPriceFeed public priceFeed;

    constructor(address _priceFeed) {
        priceFeed = IPriceFeed(_priceFeed);
    }

    function getNormalizedPriceOutUSDBatch(
        address[] calldata inTokens,
        uint256[] calldata amountsIn
    ) external returns (uint256[] memory amountsOut, IPriceFeed.SwapPath[] memory paths) {
        uint256 length = inTokens.length;
        require(length == amountsIn.length, "PFM: different array amounts");

        amountsOut = new uint256[](length);
        paths = new IPriceFeed.SwapPath[](length);

        for (uint256 i = 0; i < length; i++) {

            try priceFeed.getNormalizedPriceOutUSD(inTokens[i], amountsIn[i]) returns (uint256 amountOut, IPriceFeed.SwapPath memory path) {
                amountsOut[i] = amountOut;
                paths[i] = path;
            } catch {}
        }
    }
}