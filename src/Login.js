import { useEffect, useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [displayError, setDisplayError] = useState("");
  const register = () => {
    if (!name) {
      return setDisplayError("Plaset enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userCredential.user.email,
              uid: userCredential.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => {
        setDisplayError(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            profileUrl: userCredential.user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.svg" />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic Url (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
      {displayError && <p style={{ color: "red" }}>{displayError} </p>}
    </div>
  );
};

export default Login;
