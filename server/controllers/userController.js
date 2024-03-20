const EmployeeModel = require("../models/Employee")
const  upload = require('../utils/multer')
const Tesseract = require('tesseract.js');
const sendemail = require('../utils/Sendmail')  
exports.uploadImg = upload.fields([{name: "image"}]) 


exports.register = async(req,res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
}

async function getEmailArray() {
  try {
      const emails = await EmployeeModel.find({}, 'email');
      return emails.map(emp => emp.email);
  } catch (err) {
      console.error(err);
      return [];
  }
}
const orgn = null;
exports.uploadImage = async(req,res) => {
  try {
    //const allUsers = EmployeeModel.find(req.files); 
    const emailArray = await getEmailArray();
    console.log(emailArray)
    // return
    if(req?.files?.image){
        console.log('http://localhost:3001/public/'+req?.files?.image[0]?.filename, "regquest")
        Tesseract.recognize('http://localhost:3001/public/'+req?.files?.image[0]?.filename)
        .then(function(result) {
            const extractedText = result.data.text;
            // console.log(extractedText);
            const nameRegex = /Name :\s*([A-Za-z\s]+)/i;
            const emailRegex = /Email:\s*([\w\.-]+@[\w\.-]+)/i;
            const locationRegex = /Address:\s*([\w\s\d,]+)/i;
            const bloodGroupRegex = /Blood Group:\s*([ABOAB\+-]+)/i;
            const organNeededRegex = /Organ Needed:\s*([\w\s]+)/i
            const nameMatch = extractedText.match(nameRegex);
            const emailMatch = extractedText.match(emailRegex);
            const locationMatch = extractedText.match(locationRegex);
            const bloodGroupMatch = extractedText.match(bloodGroupRegex);
            const organNeededMatch = extractedText.match(organNeededRegex);

            function cleanName(name) {
              return name.split('\n')[0].trim();
            }

            function cleanLocation(location) {
              return location.split('\n')[0].trim();
            }

            
            function cleanEmail(email) {
              return email.split('\n')[0].trim();
            }

            function cleanBlood(blood){
              return blood.split('\n')[0].trim();
            }

            function cleanOrgan(organ)
            {
              return organ.split('\n')[0].trim();
            }

            const extractedInfo = {
              name: nameMatch ? cleanName(nameMatch[1]) : null,
              email: emailMatch ? cleanEmail(emailMatch[1]) : null,
              location: locationMatch ? cleanLocation(locationMatch[1]) : null,
              blood : bloodGroupMatch ? cleanBlood(bloodGroupMatch[1]) : null,
              organ : organNeededMatch ? cleanOrgan(organNeededMatch[1]) : null
            };
            orgn = extractedInfo.organ;
            console.log(extractedInfo);
            if (extractedInfo?.email) {
              try {
                for(let i=0;i<emailArray.length;i++) {
                sendemail({
                      email: emailArray[i],
                      subject: 'THANKS FOR REGISTERING',
                      html : `<h2>Hello Dear User, A patient named <p>${extractedInfo?.name}</p> is in</h2><h2>utmost need of <p>${extractedInfo?.organ}</p> people with matching blood group i.e.<p>${extractedInfo?.blood}</p><p>and nearest to city/district <p>${extractedInfo.location}<p/></h2><h2>who are interested in donating. Click on the button below to give your consent so that the user</h2><h2>can reach out to you </h2>
                      <a href=${process.env.BASE_URL}user/click-from-mail/${emailArray[i]}/${extractedInfo?.email}>Click</a>`
                  });

                }
          
                 return res.status(200).json({
                      status: true,
                      message: 'Image upload successfully!',
                  });
              } catch (err) {
                console.log(err, "Error")
            } 
          }


        });
    }else{
        return res.status(400).json({
            status: false,
        })
    }
  } catch (error) {
    return res.status(400).json({
        status: false,
        data: error
    })
  }
    
}

exports.clickFromMail = async(req,res) => {
    console.log("donerEmail: "+req.params.donerEmail)
    console.log("patientEmail: "+req.params.patientEmail)
     
    sendemail({
      email: req.params.patientEmail,
      subject: 'THANKS FOR REGISTERING',
      html : `<h2>Hello Dear User, A doner with Email <p>${req.params.donerEmail}</p> is intrsted to respond to your request for the needed Organ</h2>`
    });
    
    return res.status(200).json({
        message: 'Hello Main',
    });
}
 
