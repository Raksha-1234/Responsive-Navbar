import React from 'react'
import Style from "./Sec2.module.css";
import {TiTick} from "react-icons/ti"
import IMAGE1 from "./Images/img6.jpg"
import IMAGE2 from  "./Images/pic1.jpg"
import IMAGE3 from  "./Images/pic2.jpg"
import IMAGE4 from  "./Images/pic3.jpg"
import Footer from './Footer';
const Section2 = () => {
  return (
    <section>
        <article>
            <main>
                <div className={Style.section}>
                    <div className={Style.cards}>
                    <h1>Who We Are</h1>
                 <p>A subheading about who we are</p>
                    <img src={IMAGE1} alt={"No caption needed"} />
                    <p>Duis neque nisi, apibusnsed mattis quis,rutrum <br />
                    accumsan magna sed. Suspendisse eu varius nibh.<br />
                    Suspendisse vitae magna eget odi0 amet mollis <br />
                    facilisis quis. Sed sagittis amet lorem ipsum.</p>
                    </div>

                    <div className={Style.cards}>
                    <h1>What We Do </h1>
                   <p>A subheading about who we are</p>
                    <div className={Style.icon}>
                    <p><TiTick className={Style.ico}/> Sed mattis quis rutrum accum</p>
                    </div>
                    <div className={Style.icon}>
                    <p><TiTick className={Style.ico}/> Eu varius nibh suspendisse lorem</p>
                     </div>
                     <div className={Style.icon}>
                    <p><TiTick  className={Style.ico}/> Magna eget odio amet mollis justo</p>
                     </div>
                    <div className={Style.icon}>
                    <p><TiTick className={Style.ico}/> Facilisis quis sagittis mauris</p>
                    </div>
                    <div className={Style.icon} id={Style.iconLast}>
                    <p><TiTick className={Style.ico}/> Amet tellus gravida lorem ipsum</p>
                    </div>
                    </div>

                    <div className={Style.cards} id={Style.lastCol}>
                    <h1>What People Are Saying</h1>
                  <p>And a final subheading about our clients</p>
                    <div className={Style.imgCard}>
                        <img src={IMAGE2} alt={"No caption needed"} />
                          <div className={Style.text}>
                        <p>"Neque nisidapibus mattis"</p>
                        <h3>Jane Doe,CEO of UntitledCorp</h3>
                        </div>
                    </div>

                    <div className={Style.imgCard}>
                        <img src={IMAGE3} alt={"No caption needed"} />
                        <div className={Style.text}>
                        <p>"Lorem ipsum consequat!"</p>
                        <h3>Jane Doe,President of FakeBiz</h3>
                        </div>
                    </div>

                    <div className={Style.imgCard} id={Style.imgCard3} >
                        <img src={IMAGE4} alt={"No caption needed"} />
                        <div className={Style.text}>
                        <p>"Magna veroeros amet tempus"</p>
                        <h3>Mary Smith,CFO of UntitledBiz</h3>
                      </div>
                    </div>
                    </div>
                </div>
                <Footer/>
            </main>
        </article>
    </section>
  )
}

export default Section2