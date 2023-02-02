// import React, { useEffect, useState } from 'react'
// import './ComingSoon.css'
// import FooterCS from './Footer-CS/FooterCS'
// import NavbarCS from './Navbar-CS/Navbar-cs'
// import Axios from "axios";
// import ReCAPTCHA from "react-google-recaptcha";
// const recaptchaRef = React.createRef();
// export default function ComingSoon() {
//   const baseURL = "https://safezen.herokuapp.com/subscribers";
//   const [status, setStatus] = useState(false)
//   const [status2, setStatus2] = useState()
//   const [verefied , setVerefied] = useState(true)

//   const [data, setData] = useState({
//     email: "",

//   });
//   function onChange(value) {
//     // console.log("Captcha value:", value);
//     setVerefied(false)
//   }
//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value;
//     setData(newdata);
//   }

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       await Axios.post(baseURL, {
//         email: data.email,

//       },
//         setStatus2(false),

//         setStatus(true),
//       )
//     } catch (error) {
//       if (
//         error.message = `E11000 duplicate key error collection: Subscribers.subscribers index: email_1 dup key: { email: \"${data.email}\"`
//       ) {
//         console.log("User Already exists");

//         setStatus(false)
//         setStatus2(true)
//       }

//     }

//   };

//   return (
//     <>
//       <div className="outer-coming">
//         <NavbarCS />

//         <div className="Coming">
//           <h1>
//             Coming Soon
//           </h1>
//           <h4>
//             the world's first zero premium  and pay-as-you-go insurance  products based on risk-based coverage pools.
//           </h4>
//           <form className="input-CS" onSubmit={(e) => submit(e)} >
//             <input type="email" placeholder='Please enter your email address'  onChange={(e) => handle(e)} value={data.email} id="email" required disabled={verefied} />
//             <button disabled={verefied}>Notify Me</button>

//           </form>         
//              <ReCAPTCHA id='rec'
              
//               sitekey="6Ld_fh8hAAAAAF2ExAvS3g5VECzCRYLQBZeTk2Lj"
//             onChange={onChange}
//             />
//           <p>{status ? `You have Registered Successfully` : ""} {status ? <img src="https://img.icons8.com/color/24/000000/checked--v1.png" /> : ""}{status2 ? "This Email is already registered" : ""}

//           </p>

//         </div>
//         <FooterCS />
//       </div>
//     </>
//   )
// }
