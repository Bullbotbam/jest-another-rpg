const Potion = require("../lib/Potion.js");

test("creates a health potion object", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toBeEqual(expect, any(Number));
});
