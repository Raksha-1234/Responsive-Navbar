import React from 'react'
import Style from "./Homepage.module.css";
import Section1 from './HomeSection/Section1';
import IMAGE1 from "./Images/img1.jpg"


const HomePage = () => {
  return (
    <>
  
<section>
  <main>
    <article>
      {/* <div className={Style.sec}> */}
    <div  className={Style.section1}>
      <div className={Style.head1}>
        <h2>We do something really useful,important, and <br/>
        unique. Learn all about it here...</h2>
       <br />
        
        <button className={Style.btn1}>Go on,click me!</button>
        </div>
        <div className={Style.secImg}>
        <img src={IMAGE1} alt="Hi" />
        </div>
        </div>
      {/* </div> */}
      <Section1/>
    </article>
  </main>
</section>  
   </>
  )
}
export default HomePage