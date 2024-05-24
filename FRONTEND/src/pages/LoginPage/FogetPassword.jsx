import { useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig"; // Adjust the import path as needed
import { Button } from "@mui/material";
import { Fingerprint } from "@mui/icons-material";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpConfirmed, setIsOtpConfirmed] = useState(false); // State to track OTP confirmation

  const handleGetOTP = async () => {
    try {
      const response = await axiosInstance.post("/auth/reset", { email });

      if (response.status === 200) {
        setMessage("OTP has been sent to your email.");
      } else {
        setMessage(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  const handleConfirmOTP = async () => {
    try {
      const response = await axiosInstance.post("/auth/checkOTP", {
        email,
        otp,
      });

      if (response.status === 200) {
        setMessage("OTP confirmed. Proceed with password reset.");
        setIsOtpConfirmed(true);
      } else {
        setMessage(response.data.message || "Failed to verify OTP.");
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "An error occurred. Please try again later."
      );
    }
  };

  // Navigate to change-password route if OTP is confirmed
  if (isOtpConfirmed) {
    return <Navigate to="/change-password" state={{ email }} />;
  }

  return (
    <div className="ForgetPassword">
      <style>
        {`
         *,*:before,*:after{
          padding: 0%;
          margin: 0%;
          box-sizing: bordeer-box;
      }
      body{
          background-color: black;
          color: white;
      }
      .background{
          width: 430%;
          height: 520%;
          position: absolute;
          left: 50%;
          top:50%;
          transform: (-50%,-50%);
          
      }
      
      #shapeB{
          height:200px;
          width:200px;
          position: absolute;
          border-radius:50%; 
      }
      #shapeA{
          height:200px;
          width:200px;
          position: absolute;
          border-radius:50%; 
      }
      #shapeB{
          background-image: linear-gradient(#ad1894,#f67723);
          left: -280px;
          top: -120px;
      }
      #shapeA{
          background-image: linear-gradient(to right,#ee1ea9,black);
          right: 100px;
          top: -80px;
      }
      
      .b
      {
          height: 650px;
          width: 400px;
          background-color: rgba(255,255,255, 0.13);
          position: absolute;
          transform: translate(-50%,-50px);
          top: 50%;
          left: 50%;
          border-radius: 10%;
          backdrop-filter:blur(10px);
          border: 2px solid rgba(255 ,255,255,0.1);
          box-shadow: 0 0 30px rgba(8,7,16, 0.6);
          padding: 50px 35px;
      }
      
      form *{
          font-family:poppins,sans-serif;
          color: #ffffff;
          letter-spacing:0.5px;
          outline: none;
          border:none;
      }
      form h3{
          font-size: 32px;
          font-weight: 500px;
          line-height: 42px;
          text-align: center;
      }
      label{
          display: block;
          margin-top: 30px;
          font-size: 16px;
          font-weight: 500250;
      }
      input{
          display: block;
          height: 40px;
          width: 100%;
          background-color: rgba(255 ,255,255,0.07);
          border-radius: 3px;
          padding:0 10px ;
          margin-top: 8px;
          font-size: 14px;
          font-weight: 300px;
      }
      
      ::placeholder{
          color: #e5e5e5;
      }
      button1{
          margin-top: 50px;
          color: #080710;
          width: 75%;
          background-color: rgb(247, 255, 16);
          padding: 5px 10px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          margin-left: 40px;
          
      }
      button2{
          margin-top: 50px;
          color: #080710;
          width: 75%;
          background-color: rgb(247, 255, 16);
          padding: 5px 10px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          margin-left: 40px;
      
      }
      p{
          margin-top: 40px;
      }
          `}
      </style>
      <div className="background">
        <div className="shapeA" id="shapeA"></div>
        <div className="shapeB" id="shapeB"></div>
      </div>
      <form action="" className="b">
        <h3>Forget Password</h3>
        {` Please enter your email address ,We'll send you an instruction to help
        you reset password`}
        <label htmlFor="Enter Email">Enter Email:</label>
        <input
          type="text"
          name="Enter Email"
          id="Enter Email"
          placeholder="Email "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button1" type="button" onClick={handleGetOTP}>
          Get OTP
        </button>
        <p>{message}</p>
        <p>please check the mail box and Enter OTP code</p>
        <label htmlFor="OTP">OTP:</label>
        <input
          type="text"
          name="OTP"
          id="OTP"
          placeholder="OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button startIcon={<Fingerprint />} size="small" variant="contained">
          Confirm
        </Button>
        <button className="button2" type="button" onClick={handleConfirmOTP}>
          Confirm
        </button>
      </form>
    </div>
  );
}
