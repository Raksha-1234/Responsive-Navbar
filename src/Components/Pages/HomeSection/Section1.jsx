import React from 'react'
import Style from "./Section1.module.css";
import IMAGE1 from "./Images/img2.jpg";
import IMAGE2 from "./Images/img3.jpg";
import IMAGE3 from "./Images/img4.jpg";
import IMAGE4 from "./Images/img5.jpg";
import Section2 from './Section2';

const Section1 = () => {
  return (
    <section>
        <article>
            <div className={Style.sec1}>
             <div className={Style.imgCard}>
              <img src={IMAGE1} alt="" />
               <div className={Style.text}>
                <h2>Welcome to Halcyonic</h2>
                <p>This is <b>Halcyonic</b>, a free site template by <u><b>AJ</b></u> for<br />
                <u><b>HTML5UP.</b></u> It's responsive, built on HTML5 + CSS3, and includes 5 unique page layouts. </p>
               </div>
             </div>

             <div className={Style.imgCard}>
              <img src={IMAGE2} alt="" />
               <div className={Style.text}>
                <h2>Responsive You Say?</h2>
                <p>Yes! Halcyonic is built to be fully responsive so it<br />
                looks great at every screen size, from desktops<br />
                 to tablets to mobile phones. </p>
               </div>
             </div>

             <div className={Style.imgCard}>
              <img src={IMAGE3} alt="" />
               <div className={Style.text}>
                <h2>License Info</h2>
                <p>Halcyonic is licensed under the <u><b>CCA</b></u> license,so<br />
                 use it for personal/commercial use as much as<br />
                  you like (just keep our credits intact).</p>
               </div>
             </div>

             <div className={Style.imgCard}>
              <img src={IMAGE4} alt="" />
               <div className={Style.text}>
                <h2>Volupat etiam aliquam</h2>
                <p>Duis neque nisi, dapibus sed mattis quis, rutrum <br />
                accumsan sed. Suspendisse barius nibh.<br />
                Suspendisse vitae magna mollis.</p>
               </div>
             </div>
            </div>
            <Section2/>
        </article>
    </section>
  )
}

export default Section1