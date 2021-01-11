import cloudinary from './cloudinary';

const {upload_preset, upload_url} = cloudinary;

class ImgUpload {
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', upload_preset);
        const result = await fetch(
            upload_url,
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImgUpload;