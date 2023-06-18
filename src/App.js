import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header>
        <a href="#opening"><h2>GoPark</h2></a>
        <nav>
            <a href="#about-us">About Us</a>
            <a href="#demo">Demo</a>
            <a href="#business">Business</a>
            <a href="#people">People</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
    <main>
        <img src="gopark.png" className="me"/>
        <div id="opening">
            <div className="content">
                <div>
                    <h1>Introducing GoPark</h1>
                    <h3>An innovative solution for parking</h3><hr/>
                    <a href="#about-us"><button>About Us</button></a>
                </div>
            </div>
        </div>

        <div id="about-us">
            <h1>About Us</h1>
            <div className="content">
                <div>
                    <b>GoPark - a groundbreaking project aimed at transforming parking in Hong Kong.</b>
                    <p>One of the primary problems being addressed by the Green Deck project is the extremely congested traffic around the tunnel area in Hong Kong. To alleviate this issue, GoPark provides real-time guidance to drivers, helping them navigate to available parking spots.</p>
                    <p>Another concern involves poor air quality and lack of healthy living in the community. By encouraging drivers to quickly find parking spots, the project reduces unnecessary idling, thereby minimizing vehicle emissions and enhancing air quality.</p>
                    <a href="#demo"><button>Try GoPark </button></a>
                </div>
                <div className="wrapper">
                    <iframe src="https://www.youtube.com/embed/5YIev0D1_ck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div id="demo">
            <h1>GoPark Demo</h1>
            <div className="content">
                <h2 className="subtitle">Where do you want to go?<hr/></h2>
                <ul className="navmenu">
                    <li>
                        <div className="dot"></div>
                        <form action="https://formsubmit.co/dylanharyoto@gmail.com" method="POST">
                            <input type="text" placeholder="Your location" name="name" required/>
                        </form> 
                    </li>
                    <div className="line"></div>
                    <li>
                        <div className="dot"></div>
                        <form action="https://formsubmit.co/dylanharyoto@gmail.com" method="POST">
                            <input type="text" placeholder="Destination" name="name" required/>
                        </form>
                    </li>
                </ul>
            </div>
        </div>

        <div id="business">
            <h1>Revenue</h1>
            <div className="content">
                <h2 className="subtitle"></h2>
                <div className="left">
                    <img src="a1.JPG" className="image"/>
                    <div>
                        <h2>Advertising</h2>
                        <p>As the first step, we are planning to run advertisements from Google AdMob. Also, we are planning to partner with local businesses such as nearby restaurants, shopping malls, theaters or cinemas so they can use our app as an advertising platform.</p>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Subscription</h2>
                        <p>Subscription Plans offer customers access to reserved parking slots, faster updates on availability, discounts at partnering locations, and an ad-free experience. Free trial available. Monthly or annual subscriptions.</p>
                    </div>
                    <img src="a2.JPG" className="image"/>
                </div>
                <div className="left">
                    <img src="a3.JPG" className="image"/>
                    <div>
                        <h2>Commision</h2>
                        <p>Since we are collaborating with parking lot owners, we are planning to charge them a commission for each booking made through the app. This commission will be 10% of the total parking fee that the user pays for a particular parking owner.</p>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <h2>Data Analytics</h2>
                        <p>GoPark tracks analytics on peak hours, popular locations, and user preferences. This data can be utilized for city planning, transportation management, and business insights, and GoPark will charge a fee for providing these analytics.</p>
                    </div>
                    <img src="a4.jpg" className="image"/>
                </div>
            </div>
        </div>

        <div id="people">
            <h1>People</h1>
            <div className="content">
                <div className="entry">
                    <img src="l1.jpg" className="logo"/>
                    <h2>Dylan</h2>
                    <h4>Year 2 COMP</h4>
                    <a href="https://www.linkedin.com/in/dylanharyoto/" target="_blank"><button>View Profile</button></a>
                </div>

                <div className="entry">
                    <img src="l2.jpeg" className="logo"/>
                    <h2>Awwab</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/awwabh/" target="_blank"><button>View Profile</button></a>
                </div>

                <div className="entry">
                    <img src="l3.jpg" className="logo"/>
                    <h2>Manish</h2>
                    <h4>Year 2 COMP</h4>
                    <a href="https://www.linkedin.com/in/rai-manish-cs/" target="_blank"><button>View Profile</button></a>
                </div>
                <div className="entry">
                    <img src="l4.jpg" className="logo"/>
                    <h2>Sashenka</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/sashenka-gamage-2001/" target="_blank"><button>View Profile</button></a>
                </div>
                <div className="entry">
                    <img src="l5.jpg" className="logo"/>
                    <h2>Phurinut</h2>
                    <h4>Year 2 EIE</h4>
                    <a href="https://www.linkedin.com/in/phurinut/" target="_blank"><button>View Profile</button></a>
                </div>
            </div>
        </div>




        <div id="contact">
            <h1>Subscription Offers</h1>
            <div className="content">
                <h2 className="subtitle">Enjoy better<hr/></h2>
                <form action="https://formsubmit.co/dylanharyoto@gmail.com" method="POST">
                    <input type="text" placeholder="Full Name" name="name" required/>
                    <input type="text" placeholder="Email Address" name="email" required/>
                    <input type="text" placeholder="Subject" name="subject" required/>
                    <textarea name="message" rows="5" placeholder="Message" required></textarea>
                    <a name="submit"><button>Submit</button></a>
                </form>
                <img src="dylan2.png" className="me"/>
                <div>
                    <a href="https://www.linkedin.com/in/dylanharyoto/" target="_blank"><img src="i1.png" className="icon"/></a>
                    <a href="https://www.instagram.com/dylanharyoto/" target="_blank"><img src="i2.png" className="icon"/></a>
                    <a href="https://github.com/dylanharyoto?tab=repositories" target="_blank"><img src="i3.png" className="icon"/></a>
                </div>
            </div>
        </div>
    </main>

  </div>
  );
}

export default App;