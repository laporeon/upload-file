import { randomBytes } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const config = multer({
  dest: path.resolve(__dirname, "..", "..", "temp"),
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, "..", "..", "temp"));
    },
    filename: (request, file, callback) => {
      randomBytes(12, (err, value) => {
        if (err) throw err;

        const fileExtension = path.extname(file.originalname);

        const fileName = `${value.toString("hex")}${fileExtension}`;

        callback(null, fileName);
      });
    },
  }),
  fileFilter: (request, file, callback) => {
    const allowedMimes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpg",
      "image/webp",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error("Invalid File Type."));
    }
  },
});
