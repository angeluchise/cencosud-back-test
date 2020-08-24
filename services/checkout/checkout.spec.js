const { getCheckout } = require("./checkout");

describe("checkout", () => {
  it("should return all products", () => {
    expect(getCheckout());
  });

});
