// import { total } from "./App";

const add = jest.fn(() => 3);

// Unit test
// It only tests one thing
test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
  // expect(add(5, 2)).toBe(7);
});

// Integration tests
// Tests things working toghether
// test("total", () => {
//   expect(total(5, 20)).toBe("$25");
// });
