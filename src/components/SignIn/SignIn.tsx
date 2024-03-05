import AppButton from "../AppButton/AppButton";
import styles from "./SignIn.module.scss";
import { Icons } from "../../assets/images";
import { FC, useEffect, useState } from "react";
import useIsTablet from "../../hooks/useIsTablet";
import useIsMobile from "../../hooks/useIsMobile";
import axios from "axios";
import { appRoutes } from "../../shared/constants";

interface SignInProps {
  toggleSignIn: () => void;
}

const SignIn: FC<SignInProps> = ({ toggleSignIn }) => {
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  const isMobileOrTablet = isMobile || isTablet;

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${appRoutes.serverUrl}${appRoutes.user.login}`, {
        email,
        password,
      });
      alert("Login successful!");
      toggleSignIn();
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleForgetPassword = () => {
    alert("FORGET PASSWORD?");
    return;
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(`${appRoutes.serverUrl}${appRoutes.user.signUp}`, {
        email,
        password,
      });
      alert("Registration successful!");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  useEffect(() => {
    setIsActiveLogin(!!email);
  }, [email]);

  return (
    <div className={styles.signInLayout}>
      {isMobileOrTablet ? (
        <div className={styles.popoverHeaderContainer}>
          <button className={styles.xBtnContainer} onClick={() => toggleSignIn()}>
            <img src={Icons.blackXIcon} alt="black-x-icon" />
          </button>
        </div>
      ) : (
        ""
      )}
      <div className={styles.signInShadow}>
        <div className={styles.signInContentContainer}>
          <section className={styles.signInSection}>
            <div className={styles.signInTitle}>SIGN IN</div>
            <div className={styles.signInDescription}>To continue the order, please sign in</div>
            <div className={styles.inputContainer}>
              {isActiveLogin ? (
                <label htmlFor="email" className={styles.inputLabel}>
                  Email address
                </label>
              ) : (
                <div className={styles.inputLabelPlaceholder} />
              )}
              <input
                className={styles.inputText}
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className={styles.inputContainer} style={{ paddingTop: "32px" }}>
              {isActiveLogin ? (
                <label htmlFor="password" className={styles.inputLabel}>
                  Password
                </label>
              ) : (
                <div className={styles.inputLabelPlaceholder} />
              )}
              <input
                className={styles.inputText}
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
            </div>
          </section>
          <div className={styles.loginContainer}>
            <AppButton buttonContent="LOGIN" isGray={isActiveLogin ? false : true} isBlack={isActiveLogin ? true : false} handleClick={handleLogin} />
            <button className={styles.forgetPasswordBtn} onClick={handleForgetPassword}>
              Forget password?
            </button>
          </div>
          <div className={styles.orSeparatorContainer}>
            <div className={styles.line}> </div>
            or
            <div className={styles.line}> </div>
          </div>
          <AppButton buttonContent="SIGN UP" handleClick={handleSignUp} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
