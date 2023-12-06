import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Login from "./Login";
import Loading from "./Loading";

function SignUp() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  const [ccode, setCcode] = useState("91");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [disciple, setDisciple] = useState("no");
  // const [showAlert, setShowAlert] = useState(true);
  // const [erroMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);



  //function for checking validations in all input fields.
  const checkValidation = () => {
    if (name == "") {
      setError(true);
      // setErrorMsg("Please fill the Name");
      return false;
    }

    if (gender == "") {
      setError(true);
      // setErrorMsg("Please select the Gender");
      return false;
    }

    if (dob == "") {
      setError(true);
      // setErrorMsg("Please fill the DOB");
      return false;
    }

    if (image == "") {
      setError(true);
      // setErrorMsg("Please select the image");
      return false;
    }

    if (ccode == "") {
      setError(true);
      // setErrorMsg("Please Select the Country Code");
      return false;
    }

    if (mobile == "") {
      setError(true);
      // setErrorMsg("Please fill the Mobile Number");
      return false;
    }

    if (mobile.length != 10) {
      setError(true);
      // setErrorMsg("Please fill the valid mobile number");
      return false;
    }

    if (email == "") {
      setError(true);
      // setErrorMsg("Please fill the Email");
      return false;
    }

    if (password == "") {
      setError(true);
      // setErrorMsg("Please fill the Password");
      return false;
    }

    if (repassword == "") {
      setError(true);
      // setErrorMsg("Please fill the Password Again");
      return false;
    }

    if (password != repassword) {
      setError(true);
      // setErrorMsg("Both Password does not Match");
      return false;
    }

    if (country == "") {
      setError(true);
      // setErrorMsg("Please Select the Country");
      return false;
    }

    if (state == "") {
      setError(true);
      // setErrorMsg("Please Select the State");
      return false;
    }

    if (city == "") {
      setError(true);
      // setErrorMsg("Please Select the City");
      return false;
    }

    if (!verified) {
      setError(true);
      // setErrorMsg("Please fill the recapcha");
      return false;
    }

    return true;
  };

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };


  //function on the submission of signUp form.
  const submitHandler = (e) => {
    e.preventDefault();
 
    // setShowAlert(checkValidation());

    if (!checkValidation()) {

      return;
    }

    console.log(
      name,
      gender,
      dob,
      image,
      ccode,
      mobile,
      email,
      password,
      repassword,
      country,
      state,
      city,
      disciple
    );

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 4000);

    // axios("", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name,
    //     gender,
    //     dob,
    //     image,
    //     ccode,
    //     mobile,
    //     email,
    //     password,
    //     country,
    //     state,
    //     city,
    //     disciple,
    //   }),
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    setName("");
    setGender("");
    setDob("");
    setCcode("");
    setMobile("");
    setEmail("");
    setPassword("");
    setRepassword("");
    setCountry("");
    setState("");
    setCity("");
    setDisciple("");
  };

  let msg = (
    <div className="grid lg:grid-cols-2  mx-8 my-8  lg:my-20 lg:mx-20    items-center drop-shadow-2xl ">
      <div className=" bg-white h-full shadow-sm  flex items-center justify-center  ">
        <img
          className="w-64 md:w-80 lg:w-96"
          src="/src/Images/signuplogo.jpg"
          alt="logo"
        />
      </div>
      <div className=" bg-white  shadow-sm items- p-5  ">
        <p id="heading" className="  text-3xl my-5 text-center">
          Register:Head Of Family
        </p>

        <form id="form" onSubmit={submitHandler}>
          <p className=" text-lg  mt-2">Name</p>
          <input
            className="w-full h-10 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {error && name.length == 0 ? (
            <label className="text-red-700 ">Please fill the Name</label>
          ) : (
            ""
          )}

          <br></br>
          <p className=" text-lg mt-2  ">Select Gender</p>
          <select
            className="w-full h-10 mb-1 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="select">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {error && gender == "" ? (
            <label className="text-red-700 ">Please select the Gender</label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Date Of Birth</p>
          <input
            className="w-full h-10 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm outline-none"
            type="date"
            placeholder="DD-MM-YYYY"
            min="1923-01-01"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {error && dob == "" ? (
            <label className="text-red-700 ">
              Please fill the Date of Birth
            </label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Choose Image for profile</p>
          <input
            type="file"
            className="mb-1"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br></br>
          {error && image == "" ? (
            <label className="text-red-700 ">Please select the Image</label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Mobile Number</p>
          <div className=" grid grid-cols-8 ">
            <div className="col-span-1 mr-1 ">
              <select
                className="h-10 w-full text-gray-700 border border-gray-400 rounded-sm outline-none"
                value={ccode}
                onChange={(e) => setCcode(e.target.value)}
              >
                <option value="91">91</option>
                <option value="92">92</option>
                <option value="93">93</option>
              </select>
            </div>
            <div className="col-span-7">
              <input
                className=" h-10 w-full mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
                type="text"
                placeholder="Enter your Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          {error && mobile.length != 10 ? (
            <label className="text-red-700 ">
              Please fill the valid Mobile Number
            </label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg mt-2 ">Email</p>
          <input
            className="w-full h-10 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="email"
            placeholder="Enter your Email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && email == "" ? (
            <label className="text-red-700 ">
              Please fill the valid Email address
            </label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Password</p>
          <input
            className="w-full h-10 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && password == "" ? (
            <label className="text-red-700 ">Please fill the Password</label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Re-Password</p>
          <input
            className="w-full h-10 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="password"
            placeholder="Enter password again"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
          {error && repassword != password ? (
            <label className="text-red-700 ">
              Both Password does not match
            </label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg mt-2 ">Select Country</p>
          <select
            className="w-full h-10 mb-1 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="country">Country</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
            <option value="rusia">Rusia</option>
          </select>
          {error && country == "" ? (
            <label className="text-red-700 ">Please select the Country</label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Select State</p>
          <select
            className="w-full h-10 mb-1 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="state">State</option>
            <option value="up">UP</option>
          </select>
          {error && state == "" ? (
            <label className="text-red-700 ">Please select the State</label>
          ) : (
            ""
          )}
          <p className=" text-lg  mt-2">Select City</p>
          <select
            className="w-full h-10 mb-1 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="city">City</option>
            <option value="bareilly">Bareilly</option>
          </select>
          {error && city == "" ? (
            <label className="text-red-700 ">Please select the City</label>
          ) : (
            ""
          )}
          <br></br>
          <p className=" text-lg  mt-2">Are you an Ajapa Disciple </p>
          <select
            className="w-full h-10 mb-1 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={disciple}
            onChange={(e) => setDisciple(e.target.value)}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={() => setVerified(true)}
            className="flex items-center justify-center mt-2 mb-1"
          />
          {error && !verified ? (
            <label className="text-red-700 text-center flex items-center justify-center">
              Please fill the Recaptcha
            </label>
          ) : (
            ""
          )}
          {/* <br></br>
          <div className="flex items-center justify-center mt-8">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="ml-2 text-gray-700">I'm not a robot</span>
            </label>
            <img
              className="ml-4 h-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhWKrlce2v-nFxqPhh775epJHdave2QUznan4icGIkA&s" // Replace this URL with your image source
              alt="Robot"
            />
          </div> */}
          <input
            className=" text-white w-full h-10 my-4 p-2 rounded bg-orange-500 cursor-pointer"
            type="submit"
            value="Sign Up"
          />
        </form>

        <p className="text-center">
          <Link to="/login">Already Have Account? Login</Link>
        </p>
      </div>
    </div>
  );

  // let alert = (
  //   <div
  //     class="relative z-10"
  //     aria-labelledby="modal-title"
  //     role="dialog"
  //     aria-modal="true"
  //   >
  //     <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  //     <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
  //       <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
  //         <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
  //           <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
  //             <div class="sm:flex sm:items-start">
  //               <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
  //                 <svg
  //                   class="h-6 w-6 text-red-600"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke-width="1.5"
  //                   stroke="currentColor"
  //                   aria-hidden="true"
  //                 >
  //                   <path
  //                     stroke-linecap="round"
  //                     stroke-linejoin="round"
  //                     d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  //                   />
  //                 </svg>
  //               </div>
  //               <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
  //                 <h3
  //                   class="text-base font-semibold leading-6 text-gray-900"
  //                   id="modal-title"
  //                 >
  //                   {erroMsg}
  //                 </h3>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
  //             <button
  //               onClick={() => setShowAlert(true)}
  //               type="button"
  //               class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
  //             >
  //               ok
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return showAlert ? loading ? <Loading /> : msg : alert;

  return loading ? <Loading /> : msg
}

export default SignUp;
