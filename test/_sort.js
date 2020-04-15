const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });

  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });

  it("should return a sorted version of input array", () => {
    let array = [6, 4, 9, 23, 5, 4, 77, 5, 1];
    let bubbleSort = new Sort();
    //console.log("Sorted", bubbleSort.sort(array));
    expect(bubbleSort.sort(array)).to.deep.equal([1, 4, 4, 5, 5, 6, 9, 23, 77]);
  });
});
