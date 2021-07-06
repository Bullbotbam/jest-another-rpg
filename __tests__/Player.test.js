const Player = require("../lib/Player");
const Potion = require("../lib/Potion");
jest.mock("../lib/Potion");

console.log(new Potion());
test("creates a player object", () => {
  const player = new Player("Donald");

  expect(player.name).toBe("Donald");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
