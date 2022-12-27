import User from "../models/UserModel.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const saveUsers = async (req, res) => {
  const user = new User(req.body);
  try {
    const insertusers = await user.save();
    res.status(201).json(insertusers);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const updateUsers = async (req, res) => {
  try {
    const updatedusers = await User.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updatedusers);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const deletedusers = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedusers);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
