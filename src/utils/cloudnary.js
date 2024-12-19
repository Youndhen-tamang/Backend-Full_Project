import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET // 
    });

        const uploadOnCloudinary = async function (localFilePath) {
            try{
                if (!localFilePath)return null;
                //upload the gile in cloudinary
                const response = await cloudinary.uploader.upload(localFilePath,{
                    resource_type:"auto"
                })
                // file has been uploaded successfully
                console.log(
                "file is uploaded on cloudnary",response.url);
                return response;
                
            }catch(error){
                fs.unlinkSync(localFilePath);
                // removes the locally saved tem[porary file as the upload operation got failed 
                return null
            }
        }
    


    cloudinary.v2.uploader.upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           },
           function (error,result) {
            console.log(result);
           }
       )
export {uploadOnCloudinary}