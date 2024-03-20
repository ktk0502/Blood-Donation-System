import React from 'react'

function About() {
  return (
    <>
      <div className="container">
        <div className="heading" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <h1 style={{padding:"3vh"}}>About Us</h1>
        </div>
        <div className="about" style={{display:"flex",padding:"5vh 10vw"}}>
          <p style={{width:'90vw',backgroundColor:"#ba0735",boxShadow:"2px 2px 4px #000000",padding:"3vh 3vw",borderRadius:"20px",color:'white',textShadow:'2px 2px 4px #00f'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sit quasi voluptatem quisquam,
             quos velit repellendus nemo magni harum est, nesciunt quo vero! Doloremque delectus molestiae
              maiores recusandae numquam voluptatum libero magni tempore dignissimos inventore, nisi expedita 
              vitae voluptatibus debitis accusantium hic, qui totam odit, error ex officia tenetur! 
              Dignissimos, quos omnis beatae voluptate, animi similique ducimus voluptates ipsam perspiciatis
               ratione velit! Consequuntur pariatur officia voluptatibus accusantium rerum nisi beatae corporis!
                Vel aperiam nemo modi explicabo error libero nobis, beatae aspernatur provident ad id minima! 
                Asperiores sint quas, maxime sit reiciendis sunt dolor expedita repellat quis odit tenetur,
              neque debitis!
          </p>
        </div>
        <div className="about-main" style={{display:"flex",paddingLeft:"10vw",paddingRight:"10vw",justifyContent:"space-between"}}>
          <div className="left-doner" style={{height:'55vh',width:'42vw',backgroundColor:'#ba0735',borderRadius:'20px',boxShadow:"2px 2px 4px #000000"}}>
              <div className="heading-doner" style={{display:'flex',padding:'2vh',color:'white',fontSize:'20px'}}>
                For Doners
              </div>
              <div className="para" style={{padding:'1vh 3vw',color:'white'}}>
                  <p style={{textShadow:'2px 2px 4px #00f'}}>
                  A convenient Platform for those who want to help towards betterment of others (those in need).
                  Makes people aware about the legal process related to Organ-Donation provides insight of latest
                  amendments in Organ-Donation related laws . 
                  We aim to provide flawless services such as User Interface,
                  User Experience . Doner's just need to register once and thereafter will be provided with notification
                  whenever our users require help.
                  </p>
              </div>
          </div>          
          <div className="rightdoner" style={{height:'55vh',width:'42vw',backgroundColor:'#ba0735',borderRadius:'20px',boxShadow:"2px 2px 4px #000000"}}>
          <div className="right-doner" style={{display:'flex',padding:'2vh',color:'white',fontSize:'20px'}}>
             For Recipients
            </div>
             <div className="para" style={{padding:'1vh 3vw',color:'white'}}>
                <p style={{textShadow:'2px 2px 4px #00f'}}>
                  A Website for helping those who are in utmost needs of neceessary Organs but lack knowledge about 
                  how to get them . We here provide easy interface to find doners . Users have to register and enter 
                  neceessary information essential for finding users , our site also provides option to upload image 
                  of medical prescription and it will automatically find ideal doners.
                  We aim to help Recipients in most efficient ways . We provide list of 10 nearest users within their
                  vicinity.
                </p>
             </div>
          </div>
        </div>
        
      </div>
      <div className="footer" style={{marginTop:'5vh',display:'flex',justifyItems:'center',height:'11vh',backgroundColor:'#ba0735'}}>
      <div class="footer-content" style={{maxWidth:'800px',margin:'0px auto',height:'10vh'}}>
            <p style={{padding:'4vh',color:'white'}}>&copy; 2023 Your Website</p>
        </div>
      </div>
    </>
  )
}

export default About
