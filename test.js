

const Log = require("./Log");

async function test() {
    await Log("backend", "info", "auth", "Login API hit");
    await Log("backend", "error", "auth", "Login failed test");
}

test();