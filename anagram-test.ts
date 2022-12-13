import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { isAnagram } from './anagram.ts'

Deno.test("isAnagram should return true, when inputs are anagrams of each other", () => {
  assertEquals(isAnagram('lagerregal', 'regalargel'), true);
  assertEquals(isAnagram('test', 'estt'), true);
});

Deno.test("isAnagram should return false, when inputs are not anagrams of each other", () => {
  assertEquals(isAnagram('fail', 'thetest'), false);
  assertEquals(isAnagram('fail', 'Fail'), false);
  assertEquals(isAnagram('teszt', 'teßt'), false);
});