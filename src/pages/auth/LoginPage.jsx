import { AUTH_LOGIN } from "../../redux/api/services/authService";
import { Button } from "@mui/material";
import { Modal } from "antd";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";

function LoginPage({ isModalOpen, handleCancel }) {
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const formLogin = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    dispatch(AUTH_LOGIN(formLogin));
    console.log("alo");
    handleCancel();
  };

  return (
    <Modal open={isModalOpen} footer={null} closeIcon={null} onCancel={handleCancel}>
      <h2 className="text-center">SIGN IN</h2>
      <form onSubmit={handleLogin} action="" className="flex flex-col gap-3">
        <TextField size="small" name="username" label="Username" variant="outlined" />
        <TextField size="small" name="password" label="Password" variant="outlined" />
        <Button type="submit" variant="contained">
          SIGN IN
        </Button>
      </form>
    </Modal>
  );
}

export default LoginPage;
