// import { TextField } from "@mui/material";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

  const showModalRegister = () => {
    setIsModalOpenRegister(true);
  };

  const handleCancelRegister = () => {
    setIsModalOpenRegister(false);
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        {/* logi */}
        <Link to={"/"}>
          <img className="w-[50px]" src="https://mosoftvn.com/images/logo.png" alt="" />
        </Link>
        {/* search */}
        <div className="search">
          <TextField id="outlined-basic" size="small" label="Outlined" variant="outlined" />
        </div>
        {/* action login register */}
        <div className="action flex gap-3">
          <Button variant="text" onClick={showModal}>
            Sign In
          </Button>
          <Button variant="contained" onClick={showModalRegister}>
            Sign Up
          </Button>
        </div>
      </nav>
      <LoginPage isModalOpen={isModalOpen} handleCancel={handleCancel} />
      <RegisterPage isModalOpenRegister={isModalOpenRegister} handleCancelRegister={handleCancelRegister} />
    </>
  );
}

export default Header;
