const multer = require('multer');

const DIR = "./public/";

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = Math.random() * 10 + "-" + file.originalname.toLowerCase().split(" ").join("-");
    // const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    res.status(400).json({
      status: req.t("FAIL"),
      message: 'Unsupported file format',
    });
  }
};
const upload = multer({
  storage: storage,
  // limits: { fileSize: 1024 * 1024 },
  limits: 1000000, // 1000000 Bytes = 1 M
  fileFilter: fileFilter,
});

module.exports = upload;