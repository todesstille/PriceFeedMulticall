const { expect } = require("chai");

describe("PriceFeed Multicall", function () {

    priceFeedAddress = "0xc2E2ad8Bbf700C054951DD869750803B15d27A9F";
    
    beforeEach(async () => {
      const PriceFeedMulticall = await ethers.getContractFactory("PricefeedMulticall");
      multicall = await PriceFeedMulticall.deploy(priceFeedAddress);
    });

    describe("Multicall", function () {
      it("Could get data from pricefeed", async function () {
        let r = await multicall.callStatic.getNormalizedPriceOutUSDBatch(
          ["0x6E88056E8376AE7709496BA64D37FA2F8015CE3E", "0x6E88056E8376AE7709496BA64D37FA2F8015CE3F"],
          ["1000000000000000000", "1000000000000000000"]
        );
        console.log(r);
      });
    });
});
