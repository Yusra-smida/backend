const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.mongo_db);

    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DBconnect;