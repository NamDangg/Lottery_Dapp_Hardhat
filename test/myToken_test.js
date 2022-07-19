//const { getAllByDisplayvalue } = require("@testing-library/com");

const { expect, assert }= require("chai");
const { ethers, waffle } = require("hardhat");

describe("My Token", function() {
    let myToken;
    let owner;
    let addr1;
    let addr2;

    this.beforeEach(async function() {
        const MyToken = await ethers.getContractFactory("MyToken");
        myToken = await MyToken.deploy();
        await myToken.deployed();

        [owner, addr1, addr2] = await ethers.getSigners();
    });

    it("Should scuccfully deploy", async function() {
        console.log("Success");
    });

    it("Should deploy 10000 supply for the owner of the contract", async function() {
        const balance = await myToken.balanceOf(owner.address);
        expect(ethers.utils.formatEther(balance) == 10000);
    });

    it("Should let you send to another address", async function() {
        await myToken.transfer(addr1.address, ethers.utils.parseEther("100"));
        expect(await myToken.balanceOf(addr1.address)) == (ethers.utils.parseEther("100"));
    });

})
