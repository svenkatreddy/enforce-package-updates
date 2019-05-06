const { expect } = require("ultimate-chai");
const sinon = require("sinon");
const outdated = require("../outdated");
const perf = require("execution-time")();
perf.start("epu-flow");

describe("outdated.js", () => {
  context("when outdated is called", () => {
    it("should have ok method from dirty-chai", () => {
      sinon.stub(process, "exit");
      outdated();
      return new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve(expect(process.exit).to.have.been.calledWith(1));
        }, 1500);
      });
    });
  });
});
