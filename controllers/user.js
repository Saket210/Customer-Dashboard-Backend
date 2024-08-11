const { getUsersService, addUserService, getUserByIdService,generateData } = require("../services/user");

const getUsers = async (req, res) => {
  const { page=1, perPage=10 } = req.query;

  try {
    const result = await getUsersService({ page:+page, perPage:+perPage });
    res.status(200).send({ success: true, result });
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Unable to fetch the users");
  }
};

const getuserById = (req, res) => {
    const { id } = req.params;
  try {
    const user = getUserByIdService(id);

    if(!user) {
       return res.status(404).send({ success: false, message: 'No user found with the given id' });
    }

    return res.status(200).send({ success: true, result: user });
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Unable to fetch the user with given id");
  }
};

const addUser = (req, res) => {
  try {
    const result = addUserService(req.body);
    res.status(201).send({ success: true, result });
  } catch (error) {
    res
      .status(error.status || 500)
      .send(error.message || "Unable to add the user");
  }
};

const generateUsers = (req, res) => {
  try {
    generateData();
    res.status(201).send({success: true});
  } catch (error) {
    res.send(error.message || "Unable to complete");
  }
}

module.exports = {
  getUsers,
  getuserById,
  addUser,
  generateUsers
};
