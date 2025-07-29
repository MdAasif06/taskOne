// middlewares/multer.js
const multer = require("multer");
const path = require("path");
const os = require("os");

const upload = multer({
  dest: os.tmpdir(), // save to temp directory
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (![".jpg", ".jpeg", ".png",".webp",".avif"].includes(ext.toLowerCase())) {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
});

module.exports = upload;
