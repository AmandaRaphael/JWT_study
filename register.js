
import bcrypt from "bcrypt"
const userInput = process.argv[2];

console.log(process.argv[2]);

const hashingFunc = async (string) => {
    const hashpassword = await bcrypt.hash(string, 10)
    console.log('hash',hashpassword);
    
return hashpassword
}
const comparePassword = async (password, hash) => {
  const checkPassword = await bcrypt.compare(password, hash);
  console.log("passwords are matching: ", checkPassword);
};


const hashPassword = async () => {
  const salt = await bcrypt.genSalt(15);

  console.log("the salt is ", salt);

//   const hashedValue = await bcrypt.hash("MySecretPassword", salt);

//   console.log("the hashed value is the same", hashedValue);

//   const hashedValue2 = await bcrypt.hash("MySecretPassword2", salt);
//   console.log("the second hashed value is not the same: ", hashedValue2);
};

hashPassword()

hashingFunc(userInput);
comparePassword(
  "kittens",
  "$2b$10$xNVVYtxavm50bWGqJnFib.MTbDcivhqxuK0kVctj1.2lnYv3h8UGe"
);

const plainTextPassword = "Wat$2Rce*";

for (let saltRounds = 10; saltRounds < 21; saltRounds++) {
  console.time(`bcrypt | cost: ${saltRounds}, time to hash`);
  let hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  console.timeEnd(`bcrypt | cost: ${saltRounds}, time to hash`);
  console.log(hash);
  console.log("_____________________________________________________");
}