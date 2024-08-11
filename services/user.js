const {generateRandomAddress,getRandomBio} = require('../utils/index')
const { uuid: uuidv4 } = require("uuidv4");

const fs = require("fs");

const path = require("path");

const filePath = path.join(__dirname, "../", "data", "user.json");


const readJsonData = () => {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};

const addUserToJsonData = (data) => {
  const users = readJsonData();

  const id = uuidv4();

  const newUser = { id, ...data, createdAt: new Date() };

  users.push(newUser);

  fs.writeFileSync(filePath, JSON.stringify(users));

  return newUser;
};

const getUsersService = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;
  const users = readJsonData();

  if (!(users instanceof Array)) {
    throw new Error("malformed user data");
  }
  //manually delaying to mimic db call
  await new Promise((resolve) => setTimeout(resolve, 300))

  return { items: users.slice(skip, skip + perPage), page, perPage, total: users.length };
};

const getUserByIdService = (id) => {
  if (!id) {
    throw new Error("Please provide a valid user id");
  }

  const users = readJsonData();

  if (!(users instanceof Array)) {
    throw new Error("malformed user data");
  }

  return users.find(item => item.id === id);
};

const addUserService = (data) => {
  const { name, bio } = data;

  const newUser = addUserToJsonData({ name, bio });
  return newUser;
};

const generateData = () => {

  for(let i=0;i<1000;i++){
    const customer = {
      name: `Customer ${i+1}`,
      address: generateRandomAddress(),
      bio: getRandomBio()
    }
    addUserToJsonData(customer);
  }
}

module.exports = { getUsersService, getUserByIdService, addUserService, generateData };
