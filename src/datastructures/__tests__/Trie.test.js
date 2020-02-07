const Trie = require("../Trie");

test("testing contains method", () => {
  const trie = new Trie();
  trie.insert("hello");
  trie.insert("helium");

  const contains_helium = trie.contains("helium"); // true
  const contains_kickass = trie.contains("kickass"); // false

  expect(contains_helium).toBeTruthy();
  expect(contains_kickass).toBeFalsy();
});

test("testing find method", () => {
  const trie = new Trie();
  trie.insert("hello");
  trie.insert("helium");

  const find_hel = trie.find("hel");
  const find_hell = trie.find("hell");

  const expected_hel = ["helium", "hello"];
  const expected_hell = ["hello"];

  expect(find_hel.sort()).toEqual(expected_hel.sort());
  expect(find_hell.sort()).toEqual(expected_hell.sort());
});
