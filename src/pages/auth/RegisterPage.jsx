import { AUTH_REGISTER } from "../../redux/api/services/authService";
import { Button } from "@mui/material";
import { Modal } from "antd";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

function RegisterPage({ isModalOpenRegister, handleCancelRegister }) {
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();
    const formRegister = {
      fullName: e.target.fullName.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(AUTH_REGISTER(formRegister));
    handleCancelRegister();
  };

  return (
    <Modal open={isModalOpenRegister} footer={null} closeIcon={null} onCancel={handleCancelRegister}>
      <h2 className="text-center">SIGN UP</h2>
      <form onSubmit={handleRegister} action="" className="flex flex-col gap-3">
        <TextField size="small" name="fullName" label="FullName" variant="outlined" />
        <TextField size="small" name="username" label="Username" variant="outlined" />
        <TextField size="small" name="email" label="Email" variant="outlined" />
        <TextField size="small" name="password" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">
          SIGN UP
        </Button>
      </form>
    </Modal>
  );
}

export default RegisterPage;
