// import { async } from "@firebase/util";
import { useState } from "react";
import { auth, googleprovider } from "./firebase";
import {
  BrowseRouter,
  Route,
  Switch,
  useHistory,
  useNavigate,
} from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();
  const [user, setU] = useState(null);
  //   const history = useHistory();

  const googleLogin = async () => {
    try {
      await auth.signInWithPopup(googleprovider);
      setU(await auth.currentUser);
      navigation("/home");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
  //   localStorage.setItem("auth", true);

  return (
    <div class="container-fluid">
      <div class="home">
        <h1 className="Front">Welcome Back to Skrate</h1>
        <button
          type="button"
          class="btn btn-primary  btn-lg btn-block"
          onClick={googleLogin}
        >
          Sign in With Google
        </button>
        <h1>{user?.email}</h1>
        <h2>{user?.displayName}</h2>
        <img src={user?.photoURL} alt={user?.displayName} />
      </div>
    </div>
  );
}
