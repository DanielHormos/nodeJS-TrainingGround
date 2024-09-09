import assert from "assert";
import { getAge } from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });

  it("someone born in 2021 is 1 year old in year 2022", () => {
    const result = getAge(2021, 2022);

    assert.equal(result, 1);
  })

  it("Someone born 2000 is now 24 in the year 2024 if they had their birthday already", () => {
    const result = getAge(2000, 2024);
    assert.equal(result, 24);
  })
});