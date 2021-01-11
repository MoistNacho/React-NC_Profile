const cloudinary = {
    cloud_name: process.env.REACT_APP_CLOUDINARY_NAME,
    upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
    upload_url : process.env.REACT_APP_CLOUDINARY_UPLOAD_URL
};

export default cloudinary;