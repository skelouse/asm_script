import assert from "assert";
import { doStuff } from "../build/debug.js";
assert.strictEqual(doStuff(10), 0);
console.log("ok");
