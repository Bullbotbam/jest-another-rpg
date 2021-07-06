const Player = require("../lib/Player");

test("creates a player object", () => {
  const player = new Player("Donald");

  expect(player.name).toBe("Donald");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
});
