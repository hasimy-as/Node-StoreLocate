// @access public
// @route GET /

exports.Main = (req, res, next) => {
  res.end("hello");
};

exports.Admin = (req, res, next) => {
  res.end("hello admins");
};
