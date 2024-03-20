// import React from 'react'

// function Imgtxt() {
//   return (
//     <>
//            <div className="heading" style={{display:'flex',justifyContent:"center",marginTop:'4vh'}}>
//            <h1>Upload you Medical Certificate/Prescreption</h1>
//            </div>
//            <div className="txtconv" style={{display:'flex',marginTop:'6vh',justifyContent:'space-around'}}>
//            <div className="scanner" style={{height:'50vh',width:'45vw',border:'1px solid red'}}>
//                 this is a scanner
//            </div>
//            <div className="uploadside" style={{height:'50vh',width:'45vw',border:'1px solid red'}}>
//             this is upload side
//            </div>
//            </div>
//     </>
//   )
// }

// export default Imgtxt

import React, { useState } from 'react';
import axios from 'axios';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    try {
      // Send the image to the server for saving in the database
      const response = await axios.post('http://localhost:3001/user/imageupload?image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.status, 'response.status')
      if(response.status == 200){
        alert('Image uploaded successfully:');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <div className="heading" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5vh'}}>
        <h1>Image Upload</h1>
      </div>
      <div className="imagecontent" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'9vh'}} >
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
      </div>
    </div>
  );
}

export default ImageUpload;

