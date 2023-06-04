'use client'

import styles from './page.module.css';
import Lottie from "lottie-react";
import bounce from "@/lottie/bounce_pin.json";
import {AiOutlineGoogle, AiOutlineArrowRight} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import {useState} from "react";

export default function Home() {
    const [number, setNumber] = useState<number>(0)
    setTimeout(() => {
      if (number < 2) {
        setNumber(number + 1)
      } else {
        setNumber(0)
      }
    }, 2000)
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
              {/* <div className={styles.mainContainerIntroBounce}>
                <div className={styles.mainContainerIntroBounceContainer}>
                  <Lottie animationData={bounce} /> 
                </div>
              </div> */}
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
                  <h1 className={styles.mainContainerFormAreaHeaderText}>Account.</h1>
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
                    <p className={styles.mainContainerFormAreaInputsContentText}>Email</p>
                    <input className={styles.mainContainerFormAreaInputsContentValue} type="email" placeholder='Enter your email...' />
                  </div>
                  <div className={styles.mainContainerFormAreaInputsContent}>
                    <p className={styles.mainContainerFormAreaInputsContentText}>Password</p>
                    <input className={styles.mainContainerFormAreaInputsContentValue} type="password" placeholder='Enter your password...' />
                  </div>
                  <button className={styles.mainContainerFormAreaInputsButton}>Create account</button>
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
