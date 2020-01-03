// @require <es6
// @access public

const Store = require("../models/Store");

// @route GET /
exports.getStore = async (req, res, next) => {
  try {
    const stores = await Store.find();

    return res.status(200).json({
      success: true,
      count: stores.length,
      data: stores
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};

// @route POST /
exports.addStore = async (req, res, next) => {
  try {
    const store = await Store.create(req.body);

    return res.status(200).json({
      success: true,
      data: store
    });
  } catch (err) {
    console.error(err);

    if (err.code === 11000) {
      res.status(400).json({
        error: "This store is already exist!"
      });
    }
    res.status(500).json({
      error: "Internal server error"
    });
  }
};
