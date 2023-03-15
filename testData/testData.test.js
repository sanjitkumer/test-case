const testData = require("./testData");
const common = require("./common");

beforeEach(()=>{
  console.warn(common());
});

test("test data testing", () => {
  expect(testData()).toBe("Hello");
});

test("test data testing", () => {
  expect(testData()).toBe("Hello");
});
