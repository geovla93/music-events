import { v2 as cloudinary } from 'cloudinary';
import { File } from 'formidable';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: File) {
  const result = await cloudinary.uploader.upload(file.filepath, {
    folder: 'dj_events',
    upload_preset: 'ml_default',
  });
  return {
    publicId: result.public_id,
    url: result.secure_url,
  };
}

export default cloudinary;
