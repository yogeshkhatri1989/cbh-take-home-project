const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash when given an object without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).not.toBe("0");
  });

  it("Returns the partitionKey when passed in the object", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "foo" });
    expect(trivialKey).toBe("foo");
  });
});
