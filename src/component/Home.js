import React from 'react'
import Logo from "./ieeeLogo.jpg";
// import iEee from './iEee';
import { Link} from "react-router-dom"
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
                <a href="#"><span className="material-symbols-outlined">
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
          <h1 style={{fontSize: "5.5rem"}}>CLUB-HUB</h1> 
        </div>

        <div className="ululu">
          <div class="lulu">
            <div class="age"></div>
            <div class="titu"></div>
           
          </div>
        </div>

        <div className="about1">
          {/* <div className="img1" /> */}

          <article>
        <section className="card">
          <div className="text-content">
            <h3>Elevate Your Brand with Exceptional Design</h3>
            <p>Your website is often the first point of contact for potential customers. We believe great design can help elevate your brand and make a lasting impression.</p>  
            <a href="#">Join now</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1548142813-c348350df52b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMDU1NDY&ixlib=rb-4.0.3&q=80" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>Responsive Design for Every Screen Size</h3>
            <p>We specialize in creating responsive designs that look great on desktop, tablet, and mobile devices, ensuring your site is accessible to all your visitors.</p>  
            <a href="#">Join now</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMDU1NDY&ixlib=rb-4.0.3&q=80" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>Design that Speaks to Your Audience</h3>
            <p>We work closely with you to understand your brand and your customers, so we can create a website that speaks directly to your target audience.</p>  
            <a href="#">Join now</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1631085274261-0ace0296eaa0?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTExMDg&ixlib=rb-4.0.3&q=80" alt="" />
          </div>
        </section> 
        <section className="card">
          <div className="text-content">
            <h3>Design that Drives Results for Your Business</h3>
            <p>We specialize in creating websites that not only look great but also drive traffic and conversions. Let us help you create a website that delivers real business value.</p>  
            <a href="#">Join now</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1611703372231-02ffff8abee6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzgzMTEyNTU&ixlib=rb-4.0.3&q=80" alt="" />
          </div>
        </section> 
      </article>

         
        </div>
      </div>

  )
}

export default Home
