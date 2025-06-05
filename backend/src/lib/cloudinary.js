import { v2 as cloudinary } from "cloudinary";

// import * as cloudinary from "cloudinary";  //similar to the above import
// const cloud =  cloudinary.v2;

import { config } from "dotenv";

config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;