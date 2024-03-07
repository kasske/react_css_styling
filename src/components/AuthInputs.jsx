import { useState } from "react";
import styled from "styled-components";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  &:hover: color: red;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses =
    "w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow";

  if (emailNotValid) {
    labelClasses += " text-red-400";
  } else {
    labelClasses += " text-stone-300";
  }

  if (passwordNotValid) {
    inputClasses += " bg-red-400";
  } else {
    inputClasses += " bg-stone-300";
  }

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            className={inputClasses}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={labelClasses}>Password</label>
          <input
            type="password"
            className={inputClasses}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <div className="flex row-auto justify-center gap-4">
        <button
          type="button"
          className="text-xl px-11 py-4 bg-orange-800 text-neutral-200 rounded-2xl hover:bg-orange-400 hover:text-zinc-800 transition-all"
        >
          Create a new account
        </button>
        <button
          className="text-xl px-11 py-4 bg-zinc-600 text-neutral-200 rounded-2xl hover:bg-slate-400 transition-all"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
