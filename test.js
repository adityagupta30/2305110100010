const Log = require("./Log");

async function test() {
    console.log("Starting log test...");

    const res = await Log(
        "backend",
        "info",
        "auth",
        "Test log from system"
    );

    console.log("API Response:", res);
}

test();