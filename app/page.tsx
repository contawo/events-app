'use client'

import styles from './page.module.css';
import Lottie from "lottie-react";
import lightBg from "@/lottie/light_bg.json";
import {AiOutlineGoogle, AiOutlineArrowRight} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {useState} from "react";
import { FormError, FormType } from '@/types/all';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [number, setNumber] = useState<number>(0)
    const [userDetails, setUserDetails] = useState<FormType>({
      email: "",
      password: ""
    })
    const [error, setError] = useState<FormError>({
      emailError: "",
      passwordError: ""
    })
    const router = useRouter();

    setTimeout(() => {
      if (number < 2) {
        setNumber(number + 1)
      } else {
        setNumber(0)
      }
    }, 2000)

    const createAccount = () => {
      if (userDetails.email.trim() === "") {
        setError({...error, emailError: "Please enter your email"})
        return
      }

      if (userDetails.password.trim() === "") {
        setError({...error, passwordError: "Please enter your password"})
        return
      }
      
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]*$/;
      if (!userDetails.email.match(validRegex)) {
        setError({passwordError: "", emailError: "Please enter a valid email"})
        return
      } else {
        setError({passwordError: "", emailError: ""})
        router.push("/genre")
      }
      
    }

    return (
        <main className={styles.main}>
          <section className={styles.mainHeader}>
            <h2 className={styles.mainHeaderTitle}>LME</h2>
            <div className={styles.mainHeaderBusiness}>
              <p className={styles.mainHeaderBusinessText}>Business account</p>
              <AiOutlineArrowRight className={styles.mainHeaderBusinessIcon} />
            </div>
          </section>
          <section className={styles.mainContainer}>
            <section className={styles.mainContainerIntro}>
              <div className={styles.mainContainerIntroBounce}>
                <div className={styles.mainContainerIntroBounceContainer}>
                  <Lottie animationData={lightBg} /> 
                </div>
              </div>
              <div className={styles.mainContainerIntroContent}>
                <div className={styles.mainContainerIntroContentWords}>
                  <h1 className={styles.mainContainerIntroContentWordsTitle} 
                    style={{
                      color: (number === 0) ? 'rgb(216, 0, 0)' : "",
                      transition: ".3s all ease-in-out"
                    }}>Search.</h1>
                  <h1 className={styles.mainContainerIntroContentWordsTitle} 
                    style={{
                      color: (number === 1) ? '#0085D1' : "",
                      transition: ".3s all ease-in-out"
                    }}>Find.</h1>
                  <h1 className={styles.mainContainerIntroContentWordsTitle} 
                    style={{
                      color: (number === 2) ? 'rgb(232, 151, 0)' : "",
                      transition: ".3s all ease-in-out"
                    }}>Visit.</h1>
                </div>
                <p className={styles.mainContainerIntroContentText}>All your favourite events in one place.</p>
              </div>
            </section>
            <section className={styles.mainContainerForm}>
              <div className={styles.mainContainerFormArea}>
                <div className={styles.mainContainerFormAreaHeader}>
                  <h1 className={styles.mainContainerFormAreaHeaderText}>Create</h1>
                  <h1 className={styles.mainContainerFormAreaHeaderText}>account.</h1>
                </div>
                <div className={styles.mainContainerFormAreaAuto}>
                  <div className={styles.mainContainerFormAreaAutoContainer}>
                    <AiOutlineGoogle className={styles.mainContainerFormAreaAutoContainerGoogle} />
                    <p className={styles.mainContainerFormAreaAutoContainerText}>Sign up with google</p>
                  </div>
                  <div className={styles.mainContainerFormAreaAutoContainer}>
                    <FaFacebookF className={styles.mainContainerFormAreaAutoContainerFacebook} />
                    <p className={styles.mainContainerFormAreaAutoContainerText}>Sign up with facebook</p>
                  </div>
                </div>
                <form className={styles.mainContainerFormAreaInputs}>
                  <div className={styles.mainContainerFormAreaInputsContent}>
                    {
                      (error.emailError.trim() === "") ?
                      <p className={styles.mainContainerFormAreaInputsContentText}>Email</p> : 
                      <p className={styles.mainContainerFormAreaInputsContentError}>{error.emailError}</p>
                    }
                    <input 
                      className={styles.mainContainerFormAreaInputsContentValue} 
                      type="email" 
                      placeholder='Enter your email...' 
                      onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                      value={userDetails.email}
                    />
                  </div>
                  <div className={styles.mainContainerFormAreaInputsContent}>
                    {
                      (error.passwordError.trim() === "") ?
                      <p className={styles.mainContainerFormAreaInputsContentText}>Pawword</p> : 
                      <p className={styles.mainContainerFormAreaInputsContentError}>{error.passwordError}</p>
                    }
                    <input 
                      className={styles.mainContainerFormAreaInputsContentValue} 
                      type="password" 
                      placeholder='Enter your password...' 
                      onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
                      value={userDetails.password}
                    />
                  </div>
                  <button 
                    className={styles.mainContainerFormAreaInputsButton} 
                    type="button"
                    onClick={createAccount}
                  >Create account</button>
                  <div className={styles.mainContainerFormAreaInputsLogin}>
                    <p className={styles.mainContainerFormAreaInputsLoginText}>Already have account?</p>
                    <p className={styles.mainContainerFormAreaInputsLoginLink}>Login</p>
                  </div>
                </form>
              </div>
            </section>
          </section>
        </main>
    )
}
