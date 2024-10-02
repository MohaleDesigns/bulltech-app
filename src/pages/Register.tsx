import { useState } from "react";
import InputBox from "../components/InputBox";
import PrimaryButton from "../components/PrimaryButton";
import { BiLogIn } from "react-icons/bi";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !surname || !email || !password || !confirmPassword) {
      setErrorText("All fields are required");
      return;
    }
    if (!name) {
      setErrorText("Name is required");
      return;
    }
    if (!surname) {
      setErrorText("Surname is required");
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
    if (!confirmPassword) {
      setErrorText("Password required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorText("Invalid email format");
      return;
    }

    if (password === confirmPassword) {
      const userDetails = { name, surname, email, password };
      localStorage.setItem("user", JSON.stringify(userDetails));

      navigate("/dashboard");
    } else {
      setErrorText("Password don't match");
    }
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
        <div className="container mx-auto flex justify-starts items-center p-[10px]">
          <img src={Logo} alt="logo" width="200px" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-3">
        <div className="w-full h-screen flex flex-col justify-center px-[10px] py-20 space-y-[30px]">
          <div>
            <h2 className="font-overpass font-bold text-[38px] -mb-[10px]">
              Register
            </h2>
            <p className="font-lato font-normal text-[15px]">
              Register as user so that you can login as a user and use the
              system.
            </p>
          </div>

          <div className="space-y-[10px]">
            <div className="grid grid-cols-2 gap-3">
              <InputBox
                label="Name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputBox
                label="Surname"
                placeholder="Enter surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
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
            <InputBox
              label="Confirm Password"
              placeholder="Enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div>
            <PrimaryButton
              label="Register"
              icon={<BiLogIn size="24px" color="white" />}
              onClick={handleRegister}
            />

            <div className="flex items-center justify-end">
              {errorText && <p className="error text-red-500">{errorText}</p>}
            </div>
          </div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Register;
