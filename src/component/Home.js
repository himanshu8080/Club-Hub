import React from 'react'
import Logo from "./ieeeLogo.jpg";
import { Link} from "react-router-dom"

import Ieee from "./Ieee";
import C2s2 from "./C2s2";
import Acm from "./Acm";
import GFG from "./GFG";
import ToastMaster from "./ToastMaster";
import cLOGO from './cLOGO.jpg';
const Home = () => {
  return (


<div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./index.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Rubik:wght@600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />
        <title>About page</title>
        <div className="navbar">
          <nav className="nav">
            <div className="container">
              <div className="logo">
                <a href=""><span className="material-symbols-outlined">
                    rocket_launch
                  </span>
                </a>
                <a>
                  <div className="bhen">
                   
                  </div>
                </a>
              </div>
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  <li><a href="/about page/index.html"><span className="material-symbols-outlined">
                        manage_search
                        {/* about */}
                      </span></a></li>
                  <li><a href="/login/signup/index.html"><span className="material-symbols-outlined">
                        captive_portal
                        {/* login */}
                      </span></a></li>
                  <li><a href="/maps/index.html"><span className="material-symbols-outlined">
                        design_services
                      </span></a></li>
                  <li><a href="#"><span className="material-symbols-outlined">
                        contact_page
                      </span></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* nav bar end */}
        <div className="helix">
          <h1 style={{fontSize: "5.5rem",color:"white"}}>CLUB-HUB</h1> 
        </div>

        <div className="ululu">
          <div class="lulu">
            <div class="age">
            <img style={{height:"265px",width:"424px",objectFit:"cover",marginTop:"55px"}} src="https://static.wixstatic.com/media/0d4301_a3375181c4ad4214b34215bc16b16587~mv2.png" alt="" />
            
            </div>
            
            
           
          </div>
        </div>

        <div className="about1">
          {/* <div className="img1" /> */}  

          <article>
        <section className="card">
          <div className="text-content">
            <h3>Institute of Electrical and Electronics Engineers</h3>
            <p>IEEE, an organization dedicated to advancing innovation and technological excellence for the benefit of humanity, is the world's largest technical professional society.</p>  
            <a href="/Ieee">Know more..</a>
          </div>
          <div className="visual">
            <img style={{height:"279px",width:"240px",objectFit:"cover",marginTop:"46px"}} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/bsmq8rbdsnijtp9hbtg5" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>Association for Computing Machinery(ACM)</h3>
            <p>ACM, the Association for Computing Machinery is the world's largest educational and scientific computing society, uniting educators, researchers and professionals to inspire dialogue, share resources and address the field's challenges.</p>  
            <a href="/Acm">Know more..</a>
          </div>
          <div className="visual">
            <img style={{height:"418px",width:"251px",objectFit:"cover"}} src="https://www.acm.org/binaries/content/gallery/acm/ctas/acm-sym-branded.jpg/acm-sym-branded.jpg/acm%3Adesktopcta" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>GeeksforGeeks Student Chapter</h3>
            <p>GeeksforGeeks student Chapters will provide students with various events and webinars on coding or placements. Students may get internship opportunities at GeeksforGeeks. </p>  
            <a href="/GFG">Know more..</a>
          </div>
          <div className="visual">
            <img style={{height:"102%",width:"241px"}} src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>ToastMasters</h3>
            <p>Toastmasters International is a nonprofit educational organization that teaches public speaking and leadership skills through a worldwide network of clubs. </p>  
            <a href="/ToastMaster">Know more..</a>
          </div>
          <div className="visual">
            <img style={{height:"322px",width:"240px",objectFit:"cover"}} src="https://toastmasterscdn.azureedge.net/medias/images/pubs-and-magazine/2020-digital-magazine/repeating-images/toastmasters-logo-for-main-image.png" alt="" />
          </div>
        </section> 


        <section className="card">
          <div className="text-content">
            <h3>C2S2 </h3>
            <p>C2S2’s mission is to help students unleash their potential in the co-curricular segments to foster, inculcate and nurture their hobbies. </p>  
            <a href="/C2s2">Know more..</a>
          </div>
          <div className="visual">
            <img style={{height:"322px",width:"240px",objectFit:"cover"}} src="data:image/jpeg;base64,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a2bv9Fq9ujOEU4S4peyQfguOO7n4rcO7Mkeneki3u0WjrFqG3eK1qY4qR8IKCGQ8vWQ/QJ2x0DAqQCCMEEZBHUEHnIHtD6K7K6y9INbuetPihPjTPD+kiaZieUYemkXTuAdM1OjcoP1N0S1RR3CouKi/zq3nPbU7m7rG3p1dOdNy6o1GqJVSrSCo2WOQQ44d6zmOq+iS/pEtRNOuBy3G3H/pfAz5MZhD38tDge+K44AflKifV6yxiB6bdfpyp+/t/uUpKNuPz6v5p+GkgKUbyveU69zSrtUarTLu1NgfVKjJ4ADAA+qT/bhCb2sQp4lOmf1aTDcemHT+FfWmJ9pTW8rXFG9epSsqtdaltQQMroiBqdSuzBmdhjg68gZdcC+qrvXFxQsqfUUvylTHd21QBFPiEPnIL77ahV4CpcHPD1UK/dUS+jsxfXDbzU3z8aq+PvEt9kj52eIW/Dor31NSISAa3YWBZrZWrVn4PVLF3c/LrNkkeC8PCRu/1a61FxTAZgT6tJM7o8W7/M8JJdL9Hg4Nc1s9dxOA+ljx+oCTTTtLpW67tGmqjrgcT4k8yfORNb29U4hMa2123fSjqt7zwi2zGxQokVbndeoOKqOKoe8/Gb7B9smoEYlZpWsVjEOfra19a3VecyrERJZkREBERAREQEREBERAREQEREBERAREQEt3ZdEC3djdl0QLQJdEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q==" alt="" />
          </div>
        </section> 
      </article>
      
    <div style={{marginTop:"8 0px"}}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/*GOOGLE FONTS*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        {/*footer*/}
        <footer className="padding_4x">
          <div className="flex">
            <section className="flex-content padding_1x">
              <h3>CLUB</h3>
              <ul>
              <li><a href="#">IEEE</a></li>
              <li> <a href="#">ACM</a></li>
              <li>  <a href="#">GFG</a></li>
              <li> <a href="#">ToastMaster</a></li>
              <li> <a href="#">C2S2</a></li>
              </ul>
            </section>
            <section className="flex-content padding_1x">
              <h3>Quick Links</h3>
              <a href="#">Jobs</a>
              <a href="#">Brand Assets</a>
              <a href="#">Investor Relations</a>
              <a href="#">Terms of Service</a>
            </section>
            <section className="flex-content padding_1x">
              <h3>Features</h3>
              <a href="#">Jobs</a>
              <a href="#">Brand Assets</a>
              <a href="#">Investor Relations</a>
              <a href="#">Terms of Service</a>
            </section>
            <section className="flex-content padding_1x">
              <h3>Resources</h3>
              <a href="#">Guides</a>
              <a href="#">Research</a>
              <a href="#">Experts</a>
              <a href="#">Agencies</a>
            </section>
            <section className="flex-content padding_1x">
              <h3>CLUB-HUB</h3>
              <p>You can trust us. we only send promo offers,</p>
              <fieldset className="fixed_flex">
                <input type="email" name="newsletter" placeholder="Your Email Address" />
                <button className="btn btn_2">Contact</button>
              </fieldset>
            </section>
          </div>
          <div className="flex">
            <section className="flex-content padding_1x">
              <p>Copyright ©2023 All rights reserved || website name</p>
            </section>
            <section className="flex-content padding_1x">
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-dribbble" /></a>
              <a href="#"><i className="fa fa-linkedin" /></a>
            </section>
          </div>
        </footer>
      </div>
        </div>
        
      </div>

  )
}

export default Home
