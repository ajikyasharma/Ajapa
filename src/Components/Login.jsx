import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="grid lg:grid-cols-2  mx-8 my-8  lg:my-20 lg:mx-20  h-80  items-center">
      <div className=" bg-white h-full shadow-sm p-4 flex items-center justify-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
       <div>
      <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3f" alt="logo" />
      </div>
      </div>
      <div className=" bg-white  shadow-sm items- p-5  drop-shadow-[35px_0_35px_rgba(0,0,0,0.25)]">
    
        <p className=" text-3xl my-5 text-center">Welcome</p>
        <form className="p-4 lg:p-10">
          <input className="w-full h-10 my-4 p-2 text-gray-700 border border-gray-400 rounded-sm" type="text" placeholder="Enter your Email or Phone" />
          <br></br>
          <input className="w-full h-10 my-4 p-2 text-gray-700 border border-gray-400 rounded-sm" type="text" placeholder="Enter your Email or Phone" />
          <br></br>
          <select className="w-full h-10 my-4 p-2 outline-none text-gray-700 border border-gray-400 rounded-sm" name="type" id="typee">
            <option value="disciple">Disciple</option>
            <option value="admin">Admin</option>
          </select>

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
          </div>
          <input className=" text-white w-full h-10 my-4 p-2 rounded bg-orange-700" type="submit" value="Login" />
        </form>

        <p className="text-center"><Link to="#">Login Through OTP</Link></p>
        <br></br>
        <p className="text-center"> <Link to="#">Create an Account</Link></p>
      </div>
    </div>
  );
}

export default Login;
