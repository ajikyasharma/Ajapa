import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Loading from "./Loading";

function Login() {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [emailormob, setEmailormob] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("disciple");
  const [showAlert, setShowAlert] = useState(true);
  const [erroMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  // };

  function onlyDigits(s) {
    for (let i = s.length - 1; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) return false;
    }
    return true;
  }

  const checkValidation = () => {
    if (emailormob == "") {
      setErrorMsg("Please fill the email or mobile no");
      setError(true);
      return false;
    }

    if (onlyDigits(emailormob)) {
      if (emailormob.length != 10) {
        setErrorMsg("Please fill the valid mobile number");
        setError(true);
        return false;
      }
    }

    if (!onlyDigits(emailormob)) {
      if (!(emailormob.includes(".") || emailormob.includes("@"))) {
        setError(true);
        setErrorMsg("Please fill the valid email");
        return false;
      }
    }

    if (password == "") {
      setError(true);
      setErrorMsg("Please fill the Password");
      return false;
    }

    if (!verified) {
      setError(true);
      // setErrorMsg("Please fill the recapcha");
      return false;
    }

    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // setShowAlert(checkValidation());
    if (!checkValidation()) {
      return;
    }
    console.log(emailormob, password, state);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 4000);
    setEmailormob("");
    setPassword("");
  };

  let msg = (
    <div className="grid lg:grid-cols-2  mx-8 my-8  lg:my-20 lg:mx-20  h-80  items-center drop-shadow-2xl">
      <div className=" bg-white h-full shadow-sm p-8 flex items-center justify-center  ">
        <div>
          <img src="/src/Images/logo.jpg" alt="logo" />
        </div>
      </div>
      <div className=" bg-white  shadow-sm items- p-5  ">
        <p className=" text-3xl my-5 text-center">Welcome</p>
        <form className="p-4 lg:p-10" onSubmit={submitHandler}>
          <input
            className="w-full h-10 mb-1 mt-2 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="text"
            placeholder="Enter your Email or Phone"
            value={emailormob}
            onChange={(e) => {
              setEmailormob(e.target.value);
              setError(false);
            }}
          />
          {error && emailormob == "" ? (
            <label className="text-red-700">
              Please fill Email or Mobile Number
            </label>
          ) : (
            ""
          )}
          {error &&
          !emailormob == "" &&
          onlyDigits(emailormob) &&
          emailormob.length != 10 ? (
            <label className="text-red-700">
              Please fill a valid 10 digit Mobile Number
            </label>
          ) : (
            ""
          )}
          {error &&
          !onlyDigits(emailormob) &&
          !(emailormob.includes(".") && emailormob.includes("@")) ? (
            <label className="text-red-700">
              Please fill the valid Email Address
            </label>
          ) : (
            ""
          )}

          <br></br>
          <input
            className="w-full h-10 mt-2 mb-1 p-2 text-gray-700 border border-gray-400 rounded-sm"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
          {error && password == "" ? (
            <label className="text-red-700">Please fill the Password</label>
          ) : (
            ""
          )}
          <br></br>
          <select
            className="w-full h-10 my-4 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm"
            name="type"
            id="typee"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="disciple">Disciple</option>
            <option value="admin">Admin</option>
          </select>

          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={() => setVerified(true)}
            className="flex items-center justify-center mt-2 mb-2"
          />
          {error && !verified ? (
            <label className="text-red-700 text-center flex items-center justify-center">
              Please fill the Recaptcha
            </label>
          ) : (
            ""
          )}

          {/* <div className="flex items-center justify-center mt-8">
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
            value="Login"
          />
        </form>

        <p className="text-center">
          <Link to="#">Login Through OTP</Link>
        </p>
        <br></br>
        <p className="text-center">
          {" "}
          <Link to="/signup">Create an Account</Link>
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
  //               class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto "
  //             >
  //               ok
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return showAlert ? msg : alert;
  return loading ? <Loading /> : msg;
}

export default Login;
