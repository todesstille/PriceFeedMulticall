const hre = require("hardhat");

async function main() {
  const PricefeedMulticall = await hre.ethers.getContractFactory("PricefeedMulticall");
  const nft = await PricefeedMulticall.deploy("0xc2E2ad8Bbf700C054951DD869750803B15d27A9F");

  await nft.deployed();

  console.log(
    `PriceFeedMulticall deployed to ${nft.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
