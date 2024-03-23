const multer = require("multer");

const Storage = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now().toString() + ".jpg");
    },
  }),
});

module.exports = Storage;