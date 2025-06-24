// import { useState } from "react";
// function Registration(){
//     const [name , setName]=useState("");
//     const [fullName, setFullname]=useState("");
//     const [dob , setDob]=useState("");
//     const [fname ,setFname]=useState("");
//     const [mname ,setMname]=useState("");
//     const [phone ,setPhone]=useState("");
//     const [email ,setEmail]=useState("");
//     function Updatename(event)
//     {
//      setName(event.target.value);
     
//     }
//     function Updatefname(event)
//     {
//      setFullname(event.target.value);
     
//     }
//     function Updatedob(event)
//     {
//      setDob(event.target.value);
     
//     }
//     function Updatefaname(event)
//     {
//      setFname(event.target.value);
     
//     }
//     function Updatemname(event)
//     {
//      setMname(event.target.value);
     
//     }
//     function Updatephone(event)
//     {
//      setPhone(event.target.value);
     
//     }
//     function Updatemail(event)
//     {
//      setEmail(event.target.value);
     
//     }
//     return(
//         <div className="form">
//             <h2>Application From For Civil Service(Preliminary) Examination-2025</h2>
//           <div>
//             <h3>OTR(One Time Registration) Profile</h3>
//             <form className="for">

//     <div>Name: <input type="text" name='name' placeholder="Enter valid name" onChange={Updatename} /></div><br/><br/>

//     <div>Full Name: <input type="text" name="fullName" placeholder="Enter Full Name" onChange={Updatefname} required /></div><br/><br/>

//     <div>Gender:
//         <input type="radio" name="gender" value="Male" /> Male
//         <input type="radio" name="gender" value="Female" /> Female
//         <input type="radio" name="gender" value="Other" /> Other<br/><br/>
//     </div>

//     <div>Date of Birth: <input type="date" name="dob" onChange={Updatedob}required /></div><br/><br/>

//     <div>Father's Name: <input type="text" name="fatherName" placeholder="Father's Name" onChange={Updatefaname}required /></div><br/><br/>
//     <div>Mother's Name: <input type="text" name="motherName" placeholder="Mother's Name"  onChange={Updatemname}required /></div><br/><br/>

//     <div>Do you belong to a minority?
//         <input type="radio" name="minority" value="Yes" /> Yes
//         <input type="radio" name="minority" value="No" /> No
//     </div><br/><br/>

//     <div>Phone No: <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{10}" onChange={Updatephone}required /></div><br/><br/>
//     <div>Email: <input type="email" name="email" placeholder="Email Address" onChange={Updatemail}required /></div><br/><br/>

//     <button type="submit">Register</button>


    
//             </form>
//             name:{name}
//           </div>
//         </div>
//     )
// }
// export default Registration;

// import { useState } from "react";

// function Registration() {
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState("");
//     const [dob, setDob] = useState("");
//     const [fname, setFname] = useState("");
//     const [mname, setMname] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [address, setAddress] = useState("");
//     const [gender, setGender] = useState("");
//     const [photo, setPhoto] = useState(null);
//     const [signature, setSignature] = useState(null);
//     const [document, setDocument] = useState(null);

    

//     const handleSubmit = async(event) =>{
//     event.preventDefault();
//     const formData = new FormData(); // Use "formData" consistently

//     formData.append("name", name);
//     formData.append("fullName", fullName);
//     formData.append("dob", dob);
//     formData.append("fname", fname);
//     formData.append("mname", mname);
//     formData.append("gender", gender);
//     formData.append("phone", phone);
//     formData.append("email", email);
//     formData.append("address", address);
//     formData.append("photo", photo);
//     formData.append("signature", signature);
//     formData.append("document", document);

//     const response = await fetch("http://localhost:4000/register", {
//         method: "POST",
//         body: formData, // No need for "Content-Type" header when using FormData
//     });

//     const msg = await response.text();
//     alert(msg);
// }

//     return (
//         <div className="form">
//             <h2>Application Form For Civil Service (Preliminary) Examination - 2025</h2>
//             <form className="for" onSubmit={handleSubmit}>
//                 <div>Name: <input type="text" name="name" placeholder="Enter valid name" onChange={(e) => setName(e.target.value)} required /></div><br/><br/>
//                 <div>Full Name: <input type="text" name="fullName" placeholder="Enter Full Name" onChange={(e) => setFullName(e.target.value)} required /></div><br/><br/>
//                 <div>Date of Birth: <input type="date" name="dob" onChange={(e) => setDob(e.target.value)} required /></div><br/><br/>
//                 <div>Gender:
//             <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} required/> Male     
//                 <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} required/> Female
//                      <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} required/> Other
//                          </div><br/><br/>
//                 <div>Father's Name: <input type="text" name="fatherName" placeholder="Father's Name" onChange={(e) => setFname(e.target.value)} required /></div><br/><br/>
//                 <div>Mother's Name: <input type="text" name="motherName" placeholder="Mother's Name" onChange={(e) => setMname(e.target.value)} required /></div><br/><br/>
//                 <div>Phone No: <input type="tel" name="phone" placeholder="Phone Number" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required /></div><br/><br/>
//                 <div>Email: <input type="email" name="email" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required /></div><br/><br/>
//                 <div>Address: <textarea name="address" placeholder="Enter your address" onChange={(e) => setAddress(e.target.value)} required /></div><br/><br/>
//                 <h3>Upload Files:</h3>
//             <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required /><br/><br/>
//             <input type="file" accept="image/*" onChange={(e) => setSignature(e.target.files[0])} required /><br/><br/>
//             <input type="file" accept="image/*" onChange={(e) => setDocument(e.target.files[0])} /><br/><br/>


//                 <button type="submit">Register</button>
//             </form>
//         </div>
//     );
// }

// export default Registration;


import React, { useState } from 'react';

const Registration= () => {
  const [formData, setFormData] = useState({
    name: '',
    fullName: '',
    dob: '',
    fname: '',
    mname: '',
    gender: '',
    phone: '',
    email: '',
    address: ''
  });

  const [files, setFiles] = useState({
    photo: null,
    signature: null,
    document: null
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();

    // Append text fields
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    // Append files
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        payload.append(key, file);
      }
    });

    try {
      const res = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: payload
      });

      const result = await res.json();
      if (res.ok) {
        setMessage('✅ Registration successful!');
      } else {
        setMessage(`❌ ${result.message || 'Registration failed.'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setMessage('❌ Server error or network issue.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }} className='form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        Name:<input name="name" placeholder="Username" value={formData.name} onChange={handleChange} required /><br/><br/>
        FullName:<input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required /><br/><br/>
        Date-of-birth<input name="dob" type="date" value={formData.dob} onChange={handleChange} required /><br/><br/>
        father-name:<input name="fname" placeholder="Father's Name" value={formData.fname} onChange={handleChange} required /><br/><br/>
        Mother-Name<input name="mname" placeholder="Mother's Name" value={formData.mname} onChange={handleChange} required /><br/><br/>
        Gender:<select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">-- Select Gender --</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br/><br/>
        Phone:<input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required /><br/><br/>
        Email:<input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required /><br/><br/>
        Address:<textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} required /><br/><br/>

        <label>Photo:</label>
        Photo:<input name="photo" type="file" accept="image/*" onChange={handleFileChange} required /><br/><br/>

        <label>Signature:</label>
        Signature:<input name="signature" type="file" accept="image/*" onChange={handleFileChange} required /><br/><br/>

        <label>Document:</label>
        Document<input name="document" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required /><br/><br/>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Registration;
