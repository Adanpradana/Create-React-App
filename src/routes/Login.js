import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginEvent = (event) => {
    event.preventDefault();
    const checkLogin = true;
    if (checkLogin) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <form action="submit" onClick={loginEvent}>
        <input type="text" name="username" />
        <input type="password" name="password" />
        <button>SUBMIT BROK</button>
      </form>
    </>
  );
};

export default Login;
