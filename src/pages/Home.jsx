import React from 'react'
import { Link } from 'react-router-dom'
// import Imgtxt from './Imgtxt';

function Home() {
    const link = "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1920,c_limit/GoogleMapTA.jpg";
    const healthMatters = "https://www.thehindu.com/sci-tech/health/in-noble-organ-donations-we-trust/article67171081.ece";
    // const link2 = "C:\Users\varni\OneDrive\Desktop\Backup minor\G14Project\src\Header.png"
  return (
    <>
      {/* <div className="firstimage">
        <img className='first_image' src={link2} style={{height:'40vh',width:'100vw'}}/>
      </div> */}
        <div className="sbsebda" style={{backgroundColor:'#fffafa'}}>
        <div className="toppage" style={{marginLeft:'14vw',height:'80vh',width:'70vw',backgroundSize:'90% 100%'}}>
        
        </div>
        <div className="home-container" style={{height:"90vh",backgroundColor:'#fffafa'}}>
            <div className="mains">
      
              <div className="container" style={{height:'62vh',width:'45vw'}}>
                  <img className="container-img" src={link} style={{height:'61vh',width:'44vw'}}/>
              </div>
  
              <div className="right-h" style={{height:'62vh',width:'45vw'}}>
                  <div className="news" style={{height:'61vh',width:'44vw',backgroundColor:'black',borderRadius:'30px'}}>
                      <div className="imgdivi" style={{marginLeft:'10vw',pddingTop:'2vh',paddingBottom:'2vh',height:'100%',width:'100%',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
  
                      </div>
                  </div>
                  {/* ,borderBottom:'10px solid red',borderLeft:'10px solid red',borderRight:'10px solid left' */}
              </div>
          </div>
        <div className="btn" style={{display:'flex',alignItems:'center',justifyContent:'space-around',marginTop:'4vh',backgroundColor:'#fffafa'}}>
          <button style={{height:'6vh',width:'6vw',backgroundColor:'red',borderRadius:'5px',padding:'2px',color:'white'}}>
              <Link to='/Imgtxt'>
                Find
              </Link>
          </button>
          <button style={{height:'6vh',width:'6vw',backgroundColor:'red',borderRadius:'5px',padding:'2px',color:'white'}}>
              <Link to='/Register'>
                Register
              </Link>
          </button>
        </div>
        
        {/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */}
        <div className="cards" style={{display:'flex',justifyContent:'space-evenly',marginTop:'2vh'}}>
          <div className="customcard1" style={{height:'50vh',width:'28vw',backgroundColor:'lightgrey',borderRadius:'20px'}}>
            <div style={{height:'29vh'}}>
                <div className="img_cc1" style={{marginLeft:'7vw',height:'100%',width:'100%',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
  
                </div>
            </div>
            <div className="card_body">
              <h5 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Health Matters!</h5>
              <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>This week in health: prenuptial seizures, India’s substandard drugs issue and the curious case...</p>
              <a href="https://www.thehindu.com/sci-tech/health/in-noble-organ-donations-we-trust/article67171081.ece" target='_blank' style={{display:'flex',alignItems:'center',justifyContent:'center',color:'black'}}>Visit Article</a>
            </div>
          </div>
  
          <div className="customcard2" style={{height:'50vh',width:'28vw',backgroundColor:'lightgrey',borderRadius:'20px'}}>
          <div style={{height:'29vh'}}>
                <div className="img_cc2" style={{marginLeft:'7vw',height:'100%',width:'100%',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
  
                </div>
            </div>
            <div className="card_body" >
              <h5 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Brightest Organ Donation Week</h5>
              <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>The brightest Organ Donation Week yet As we reflect back on this year's Organ Donation Week....</p>
              <a href="https://www.organdonation.nhs.uk/get-involved/news/the-brightest-organ-donation-week-yet/" target='_blank' style={{display:'flex',alignItems:'center',justifyContent:'center',color:'black'}}>Visit Article</a>
            </div>
          </div>
  
          <div className="customcard3" style={{height:'50vh',width:'28vw',backgroundColor:'lightgrey',borderRadius:'20px'}}>
            <div style={{height:'29vh'}}>
                <div className="img_cc3" style={{marginLeft:'4vw',height:'100%',width:'100%',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
  
                </div>
            </div>
            <div className="card_body">
              <h5 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>India still lagging</h5>
                <p style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Doctor explains why India is lagging ,debunks the myths related..</p>
                <a href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/organ-donation-day-doctor-explains-why-india-still-lags-behind-in-organ-donation-myths-we-need-to-stop-believing-in/articleshow/102685583.cms?from=mdr" target='_blank' style={{display:'flex',alignItems:'center',justifyContent:'center',color:'black'}}>Visit Article</a>
            </div>
          </div>
        </div>
  
        <div className="footer" style={{marginTop:'5vh',display:'flex',justifyItems:'center',height:'11vh',backgroundColor:'#ba0735'}}>
        <div class="footer-content" style={{maxWidth:'800px',margin:'0px auto',height:'10vh'}}>
              <p style={{padding:'4vh',color:'white'}}>&copy; 2023 Your Website</p>
          </div>
        </div>
        </div>
        </div>
    </>
  )
}

export default Home
