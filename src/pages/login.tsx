import { useState } from "react";
import InputBox from "../components/InputBox";
import PrimaryButton from "../components/PrimaryButton";
import { BiLogIn } from "react-icons/bi";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setErrorText("Both fields are required");
      return;
    }
    if (!email) {
      setErrorText("Email is required");
      return;
    }
    if (!password) {
      setErrorText("Password required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorText("Invalid email format");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Validate email and password
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      setErrorText("Invalid credentials");
    }
  };

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: "url(/src/assets/bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="shadow-black/10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-[10px]">
          <img src={Logo} alt="logo" width="200px" />

          <button
            className="bg-[#93C23D] flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-[#A5FF00] hover:bg-gradient-to-br hover:from-[#93C23D] hover:to-[#B8E5DE] hover:cursor-pointer transition-all delay-150 ease-in-out duration-150"
            onClick={handleSignup}
          >
            <BiLogIn size="20px" color="white" />
            <h4 className="font-lato font-normal text-[15px] text-white hidden md:block">
              Signup
            </h4>
          </button>
        </div>
      </div>
      <div className="container mx-auto md:grid md:grid-cols-3">
        <div className="w-full h-screen flex flex-col justify-center px-[10px] py-20 space-y-[30px]">
          <div>
            <h2 className="font-overpass font-bold text-[38px] -mb-[10px]">
              Login
            </h2>
            <p className="font-lato font-normal text-[15px]">
              If you are a registered user, login with by entering your email
              and password.
            </p>
          </div>

          <div className="space-y-[10px]">
            <InputBox
              label="Email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBox
              label="Password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <PrimaryButton
              label="Login"
              icon={<BiLogIn size="24px" color="white" />}
              onClick={handleLogin}
            />

            <div className="flex items-center justify-end">
              {errorText && <p className="error text-red-500">{errorText}</p>}
            </div>
          </div>
        </div>

        <div className="md:block hidden"></div>
      </div>
    </div>
  );
}

export default Login;
