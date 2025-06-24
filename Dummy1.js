import React from "react";


function Dummy1(){
    return(
        <div className="dummy1">
            <from>
                <h3>please fill the details</h3>
                fullName*:<input type="text" name="fname" placeholder="ex.gowtham"/><br></br><br></br>
                mobile no*:<input type="text" name="phn no" placeholder="ex.+91xxxxxxxxxx"/><br></br><br></br>
                Email*:<input type="text" name="email" placeholder="Enter the mail"/><br></br><br></br>
                Course register*:<select> <option value="current-affairs">Current Affairs</option>
        <option value="history">History of India & Indian National Movement</option>
        <option value="geography">Indian & World Geography</option>
        <option value="polity">Indian Polity & Governance</option>
        <option value="economy">Economic & Social Development</option>
        <option value="environment">Environmental Ecology & Biodiversity</option>
        <option value="science">General Science</option>
        <option value="ethics">Ethics, Integrity & Aptitude</option>
        <option value="essay">Essay Writing</option>
        <option value="optional">Optional Subject</option>
    </select> <br></br><br></br>


                <label for="states">Select a State:</label>
    <select id="states">
        <option value="37">Andhra Pradesh</option>
        <option value="12">Arunachal Pradesh</option>
        <option value="18">Assam</option>
        <option value="10">Bihar</option>
        <option value="22">Chhattisgarh</option>
        <option value="07">Delhi</option>
        <option value="30">Goa</option>
        <option value="24">Gujarat</option>
        <option value="06">Haryana</option>
        <option value="02">Himachal Pradesh</option>
        <option value="01">Jammu & Kashmir</option>
        <option value="20">Jharkhand</option>
        <option value="29">Karnataka</option>
        <option value="32">Kerala</option>
        <option value="23">Madhya Pradesh</option>
        <option value="27">Maharashtra</option>
        <option value="14">Manipur</option>
        <option value="17">Meghalaya</option>
        <option value="15">Mizoram</option>
        <option value="13">Nagaland</option>
        <option value="21">Odisha</option>
        <option value="03">Punjab</option>
        <option value="08">Rajasthan</option>
        <option value="11">Sikkim</option>
        <option value="33">Tamil Nadu</option>
        <option value="36">Telangana</option>
        <option value="16">Tripura</option>
        <option value="09">Uttar Pradesh</option>
        <option value="05">Uttarakhand</option>
        <option value="19">West Bengal</option>
    </select><br></br><br></br>
                <input type="submit" value="submit"/>
                <input type="Reset" value="Reset"/>


            </from>    
        </div>
    )
}
export default Dummy1;



