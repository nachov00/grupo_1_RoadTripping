const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/images/avatars"));
    },
    filename: function (req, file, cb) {
 
      cb(null, file.fieldname + "-" + Date.now() + "-" + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = upload;