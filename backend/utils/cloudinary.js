import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'azzawj',
    api_key: '647754443767752',
    api_secret: 'TJo2AC8NoKewVaZ7oms6G9G44so'
})

const nameTransformations = (name) => {
    return [{
        overlay: {
            font_family: 'Montserrat',
            font_size: '30',
            font_weight: '700',
            text: name,
            text_align: 'center'
        },
        width: 500,
        color: '#000000',
        x: '0',
        y: '0',
        crop: 'fit'
    }]
}

const generateCoverUrl = async (data) => {
    // console.log('api_key:', process.env.CLOUDINARY_API_KEY)
    // console.log('api_key:', process.env.CLOUDINARY_API_SECRET)
    // console.log('Cloud_Name:', process.env.CLOUDINARY_CLOUD_NAME)
    const { name } = data;
    const nameField = nameTransformations(name)
    const url = cloudinary.url('insta_posts/base-image', {
        transformation: [...nameField]
    });
    return url;
}

export {
    generateCoverUrl
}