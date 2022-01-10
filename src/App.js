import logo from './logo.svg';
import './App.css';
import pic from './pics/family-home.jpeg'
import pic1 from './pics/ap.jpg'
import pic2 from './pics/ap1.jpg'
import pic3 from './pics/ap2.jpg'
import pic4 from './pics/ap3.jpg'
import pic5 from './pics/ap4.jpg'
import pic6 from './pics/ap5.jpg'
import pic7 from './pics/ap6.jpg'
import pic8 from './pics/defaultLocality.png'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg  bg-transparent ">
           <div class="container-fluid">
                 <a class="navbar-brand " href="#">Navbar</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                 </button>
                 <div class="collapse navbar-collapse " id="navbarSupportedContent">
                 <ul class="navbar-nav  mb-2 mb-lg-0">
                 <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                 </li>
                 {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Dropdown
                      </a>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><hr class="dropdown-divider"/></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                           </ul>
                 </li> */}
                 </ul>
      
             </div>
            </div>
          </nav>
          <img class="main_pic" src={pic} alt="logo"></img>
          <div className="header_card">
               <div className="headercard1">
                    <div><span>Buy</span></div>
                    <div><span>Rent</span></div>
                    <div><span>PG</span></div>
                    <div><span>Commercial</span></div>
                    <div><span>Coworking</span></div>
                    <div><span>Projects</span></div>
                    <div><span>Dealer</span></div>
               </div>
               <hr></hr>
               <div class="main_search">
               <div class="dropdown">
                 <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                   All Residentials</button>
                    <div class="choose">
                         <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        <div class="dropdown-menu">
                              <input class="dropdown-item" type="checkbox" value="" id="flexCheckDefault"/>
                              <label class="dropdown-label" for="flexCheckDefault">
                              Default checkbox</label>
                        </div>
                        
                    </div>
                    {/* <div>
                         <span>Clear</span>
                       </div> */}
               </div>
              
               <div class="container-fluid2">
               
                <form class="d-flex">
                <input class="form-control" type="search" placeholder="Enter City/Project/Society" aria-label="Search"/>
                <span><i class="fas fa-crosshairs"></i>Near Me</span>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
               </div>
          </div>
          <hr></hr>
          <div class="projects">
               <h3>Projects in high demand</h3>
               <h6>The most explored projects in Dhanbad</h6>
                <div class="Project_stack">
                    <div class="card">
                        <div><img src={pic1}  alt="..."/>
                        <div class="fav"><i class="far fa-star"></i></div></div> 
                         
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         
                    </div>
                    <div class="card">
                    <div> <img src={pic2} alt="..."/>
                    <div class="fav"><i class="far fa-star"></i></div>
                    </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div class="card">
                    <div><img src={pic3} alt="..."/>
                    <div class="fav"><i class="far fa-star"></i></div>
                    </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div class="card">
                    <div> <img src={pic4}  alt="..."/>
                    <div class="fav"><i class="far fa-star"></i></div>
                    </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>  
                         </div>
                    </div>
                    <div class="card">
                    <div class="image_card"> <img src={pic5} alt="..."/>
                    <div class="fav"><i class="far fa-star"></i></div>
                    </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div class="card">
                    <div><img src={pic6} alt="..."/>
                    <div class="fav"><i class="far fa-star"></i></div>
                    </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
                    <div class="card">
                         <div><img src={pic7} alt="..."/>
                         <div class="fav"><i class="far fa-star"></i></div>
                         </div>
                         <div class="card-body">
                              <h5 class="card-title">Vindya Bliss</h5>
                              <p class="card-text">Gangotri nagar,Jhusi Allahabad</p>
                              <h5>20-30 Lac</h5>
                         </div>
                    </div>
               </div>
          </div>
          
          <h3>Popular localities</h3>
               <h6>The most explored localities in Dhanbad</h6>
               <div class="locality_stack">
                    <div class="card2">
                    <div class="card2-f">
                         <div class="card2-image"> 
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p> 
                              <hr></hr>   
                         </div>
                    </div>
                    
                    <div class="card2-f">
                         <div class="card2-image">  
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <hr></hr>
                         </div>
                    </div>
               </div>
               <div class="card2">
                    <div class="card2-f">
                         <div class="card2-image"> 
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p> 
                              <hr></hr>   
                         </div>
                    </div>
                    
                    <div class="card2-f">
                         <div class="card2-image">  
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <hr></hr>
                         </div>
                    </div>
               </div>
               <div class="card2">
                    <div class="card2-f">
                         <div class="card2-image"> 
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p> 
                              <hr></hr>   
                         </div>
                    </div>
                    
                    <div class="card2-f">
                         <div class="card2-image">  
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <hr></hr>
                         </div>
                    </div>
               </div>
               <div class="card2">
                    <div class="card2-f">
                         <div class="card2-image"> 
                              <img src={pic8}  alt="..."/>     
                         </div>
                         <div class="card2-body">
                              <p class="card2-title">Vindya Bliss</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p>
                              <p class="card2-text">2 BHK from ₹18 Lac</p> 
                              <hr></hr>   
                         </div>
                    </div>
                    
                    
               </div>
          </div>
          
     </div>
  );
}

export default App;
