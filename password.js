console.log("Welcome to the password validator tool! ");

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(
  "Please provide your password to validate. Must have ! at beginning, contains the number 1, and is at least 10 characters long. ",
  function (input) {
    const password = input.split("");
    // const passContains = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{10, }$/;
    //   const needTen = 'Need10char';

    if (
      password.length >= 10 &&
      password[0] === "!" &&
      password.indexOf("1") > -1
    ) {
      console.log("Succuss! 🎉");
    } else {
      console.log("Failure 🚫");
    }

    console.log(`${password.length}`);

    // This line closes the connection to the command line interface.
    reader.close();
  }
);
