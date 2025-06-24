import React, { useState } from "react";
import { Link, Routes,Route,BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Login from "../clg/Login";
import Sign from  '../clg/Sign';
import Registration from "../Chinnu.js/Registration"; 
import Dummy1 from "./Dummy1";
import Free from "./Free";
import Forget from "./Forget";
import Slideshow from "./Slide";


function Syllabus(){
    return(
        <div className="car">
            <div><h1>UPSC Syllabus for CSE Prelims, Mains and Interview</h1></div>
            <div><img src="https://www.clearias.com/up/upsc-syllabus-for-civil-services-examination.png.webp" width={500}  height={500}/></div>
            <div><h1>UPSC Syllabus – Civil Services Mains Exam</h1>
               <p className="p">A candidate’s rank in the UPSC Civil Service Exam depends only on the mark scored in the Main and Interview. The main exam has 1750 marks while the interview has 275 marks.</p>
               <p className="p">The written examination (main) will consist of the following nine papers, but only 7 papers will be counted for the final merit ranking. Each paper is for 250 marks. Thus the total mark for the Main exam is 1750.

              For the rest two papers, the candidate should secure the minimum marks prescribed by UPSC each year. For each of the qualifying papers, it is usually 25% i.e. 75/300 marks.

                 </p>
            </div>
            <div>
                <table border="1" className="table">
                    <tr>
                        <th>Mains Paper</th>
                        <th>Subject</th>
                        <th>Marks</th>
                    </tr>
                    <tr><td>Paper-I</td><td>Essay</td><td>250</td></tr>
                    <tr><td>Paper-II</td><td>General Studies – I (Indian Heritage and Culture, History and Geography of the World and Society)</td><td>250</td></tr>
                    <tr><td>Paper-III</td><td>General Studies – II (Governance, Constitution, Polity, Social Justice and International Relations)</td><td>250</td></tr>
                    <tr><td>Paper-IV</td><td>General Studies – III (Technology, Economic Development, Biodiversity, Security and Disaster Management)</td><td>250</td></tr>
                    <tr><td>Paper-V</td><td>General Studies – IV (Ethics, Integrity and Aptitude)</td><td>250</td></tr>
                    <tr><td>Paper-VI</td><td>Optional Subject – Paper I</td><td>250</td></tr>
                    <tr><td>Paper-VII</td><td>Optional Subject – Paper II</td><td>250</td></tr>
                    <tr><td>Qualifying Paper A</td><td>Indian Language</td><td>300</td></tr>
                    <tr><td>Qualifying Paper B</td><td>English Language</td><td>300</td></tr>
                </table>
            </div>
        </div>
    )
}

function Age(){
    return(
        <div style={{background:"lightblue" , textAlign:"center"}}>
            <div><h2 className="h1">Minimum age to appear for UPSC IAS Exam | IAS Exam Eligibility</h2></div>
            <div><p className="p" style={{color:"maroon"}}>The minimum age to appear for IAS Exam is 21 years. This means that the candidate must have at least 21 years of age on 1st August of that given year when the exam is held. For example, if the candidate is appearing for 2023 prelims, he/she should be above 21 years of age by Aug 1, 2023.</p></div>
            <div><h2 className="h1">Upper age limit to appear for UPSC IAS Exam | IAS Exam Eligibility</h2></div>
            <div><img src="https://www.clearias.com/up/UPSC-CSE-Age-Limit.png" width={1000} height={1000}></img></div>
        </div>
    )
}
function Calculator(){
    return(
        <div style={{textAlign:"center"}}>
            <div><h2>Age is calculated as of August 01</h2></div>
            <div><p>UPSC calculates your age as of August 01 of your exam year.

For example, if you intend to attempt UPSC CSE Prelims 2026, even though the exam is on May 24, 2026, you must calculate your age as of August 01, 2026.

For UPSC CSE 2026: A candidate must have attained the age of 21 years and must not have attained the age of 32 years on the 1st of August, 2026 i.e., the candidate must have been born not earlier than 2nd August, 1994 and not later than 1st August, 2005.</p></div>
        <div><h2 className="car">Frequently Asked Questions (FAQs)</h2></div>
        <div className="p" style={{background:"orange"}}>
            <p>Q1. Can I appear for UPSC after the age of 32 as a general category candidate?</p>
            <p>Answer: As a general category candidate, the maximum age limit is 32. However, there are age relaxations for other categories.</p>
            <p>Q2. How many attempts do general category candidates get?</p>
            <p>Answer: General category candidates are eligible for 6 attempts up to 32.</p>
            <p>Q3. How many attempts do OBC candidates get?</p>
            <p>Answer: OBC candidates are eligible for 9 attempts up to 35.</p>
            <p>Q4. Which is the date based on which UPSC calculates the age?</p>
            <p>Answer: August 1st of the year of the exam.</p>
        </div>
        <div className="table" style={{textAlign:"center"}}>
            <h2>Upper Age Limit and Number of Attempts</h2>
            <table border="1" style={{textAlign:"center"}}>
    <tr>
        <th>Category</th>
        <th>Minimum Age</th>
        <th>Maximum Age</th>
        <th>Number of Attempts</th>
    </tr>
    <tr>
        <td>General</td>
        <td>21</td>
        <td>32</td>
        <td>6</td>
    </tr>
    <tr>
        <td>OBC</td>
        <td>21</td>
        <td>35</td>
        <td>9</td>
    </tr>
    <tr>
        <td>SC/ST</td>
        <td>21</td>
        <td>37</td>
        <td>Unlimited</td>
    </tr>
    <tr>
        <td>PwD</td>
        <td>21</td>
        <td>42</td>
        <td>Depends on category</td>
    </tr>
</table>
        </div>
        
    </div>
    )
}
function Previous(){
    return(
        <div className="previous">
            <div>Civil Services (Preliminary) Examination, 2025</div>
            <a href="https://upsc.gov.in/sites/default/files/QP-CSP-25-GENERAL-STUDIES-PAPER-I-26052025.pdf">General Studies Paper -1</a><br/><br/>
            <a href="https://upsc.gov.in/sites/default/files/QP-CSP-25-GENERAL-STUDIES-PAPER-II-26052025.pdf">General Studies Paper -2</a>
        </div>
    )
}
// function Offline(){
//     return(
//         <div>
//             <div><h1><i>HELP</i></h1></div>
//             <div><</div>
//         </div>
//     )
// }
function Home(){
    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
    return(
        <div className="image-Container">
            <div><img src="https://th.bing.com/th/id/OIP.nORNkNHTXMLpNaiugcd1YAHaEK?w=322&h=181&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" width={1500} height={500}></img></div>
            <div><img src="https://wallpaperaccess.com/full/9343716.jpg" width={1500} height={500}></img></div>
            <div><img src="https://upsc.gov.in/sites/default/files/styles/slider/public/slide41.jpg?itok=gNhBI9Wk"width={1500} height={500}></img></div>
            <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div>
    )
}
function Man() {
    return (
        <Router>
        <div>
            <div className="man">
                <img src="https://i.pinimg.com/736x/ca/fd/31/cafd3136fc173b6ecb2392ffaf7661d2.jpg" width="150" height={150} />
                <img src="https://www.bing.com/th/id/OIP.xogN6_fghwxUwU1eBVSlvgHaHa?w=211&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={150} height={150} />
                <img src="https://www.bing.com/th/id/OIP.pTDIOPnf2xwHs6OffwCRPwHaHa?w=212&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="150" height={150} />
            </div>

            <div className="header-container">
                <h1 style={{ textAlign: "center" }}>Union Public Service Commission (UPSC)</h1>
            </div>

            <div className="menu">
                <div className="menu-item">Home
                    <div className="subitem">
                        <div><Link to="/home">home</Link></div>
                    </div>
                </div>
                <div className="menu-item">Guidance
                    <div className="subitem">
                        <div><Link to="/syllabus">Upse syllabus</Link></div>
                        <div><Link to="/exam"> upsc exam Eligibility</Link></div>
                        <div><Link to="/calculator">upsc Calculator</Link></div>
                        {/* <div><Link to="/mentorship">Upsc Mentorship</Link></div> */}
                    </div>
                </div>
                <div className="menu-item">Courses
                    <div className="subitem">
                        <div><Link to="/online"> Online</Link></div>
                        <div><Link to="/offline"> Offline</Link></div>
                        {/* <div><Link to="/test"> Prelims Test</Link></div> */}
                    </div>
                </div>
                <div className="menu-item">model
                    <div className="subitem">
                        <div><Link to="/uonline">previous year papers</Link></div>
                        <div><Link to="/uoffline">mock test</Link></div>
                        <div><Link to="/selection">selection process</Link></div>
                    </div>
                </div>
                <div className="menu-item">Study Materials
                    <div className="subitem">
                        <div><Link to="/free">Resources</Link></div>
                        {/* <div><Link to="/pay"> Premium Resources</Link></div> */}
                    </div>
                </div>
                <div className="menu-item">Exam Application
                    <div className="subitem">
                        <div><Link to="/sign">Sign up</Link></div>
                        <div><Link to="/login">Login</Link></div>
                        <div><Link to="/registration"></Link></div>
                        
                    </div>
                </div>
            </div>
        
        </div>
    
        <Routes>
            <Route path="syllabus" element={<Syllabus/>}></Route> 
            <Route path="sign" element={<Sign/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="registration" element={<Registration/>}></Route> 
            <Route path="exam" element={<Age/>}></Route> 
            <Route path="calculator" element={<Calculator/>}></Route> 
            <Route path="online" element={<Dummy1/>}></Route> 
            <Route path="free" element={<Free/>}></Route> 
            <Route path="forgot" element={<Forget/>}></Route>
            <Route path="uonline" element={<Previous/>}></Route>
            <Route path="home" element={<Slideshow/>}></Route>
        </Routes>
    
        </Router>
        
    );
}

export default Man;