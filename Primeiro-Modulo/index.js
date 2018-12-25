"use strict";

// const firstMod = require("./primeiro-modulo");

// firstMod.doIt();

// const configurableMod = require("./configurable-module");

// const configurableA = configurableMod({ logPrefix: "A> " });
// configurableA.log("test");

// const configurableB = configurableMod({ logPrefix: "B> " });
// configurableB.log("test 2");

// const { doSomething, getItDone: test } = require("./primeiro-modulo");

// doSomething();
// test();

const firstMod1 = require("./primeiro-modulo");
const firstMod2 = require("./primeiro-modulo");

console.log(firstMod1 === firstMod2);