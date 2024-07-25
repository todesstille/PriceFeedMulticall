const hre = require("hardhat");

async function main() {
  // const PricefeedMulticall = await hre.ethers.getContractFactory("PricefeedMulticall");
  // const nft = await PricefeedMulticall.deploy("0xc2E2ad8Bbf700C054951DD869750803B15d27A9F");

  // await nft.deployed();

  // console.log(
  //   `PriceFeedMulticall deployed to ${nft.address}`
  // );

  const [admin] = await hre.ethers.getSigners();

  const addresses = [
    "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
    "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    "0x8a9424745056Eb399FD19a0EC26A14316684e274",
    "0xa651EdBbF77e1A2678DEfaE08A33c5004b491457"
  ]

  const amounts = [
    await hre.ethers.utils.parseEther("1"),
    await hre.ethers.utils.parseEther("1"),
    await hre.ethers.utils.parseEther("1"),
    await hre.ethers.utils.parseEther("1"),
    await hre.ethers.utils.parseEther("1")
  ];

  const feed = await hre.ethers.getContractAt("PricefeedMulticall", "0x69D93807C92413465445ccbB6B5D83EfBD1B36a4");

  console.log(await feed.callStatic.getNormalizedPriceOutUSDBatch(addresses, amounts));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
