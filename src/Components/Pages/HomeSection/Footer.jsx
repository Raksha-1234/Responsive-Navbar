import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
     <section>
        <article>
            <main>
               <div className={Style.footerSection}>
                <div className={Style.container}>
                     
                      <div className={Style.footerDiv}>
                        <div className={Style.divText}>
                    <h1>Links to Important Stuff</h1>
                    </div>
                   
                <div className={Style.col1}>
                <ul>
                    <li><Link>Neque amet dapibus</Link></li>
                    <li><Link>Sed mattis quis rutrum</Link></li>
                    <li><Link>Accumsan susoendisse</Link></li>
                    <li><Link>Eu varius vitae magna</Link></li>
                </ul>
                </div>
                </div>
                
 
                <div className={Style.col1}>
                <ul>
                    <li><Link>Neque amet dapibus</Link></li>
                    <li><Link>Sed mattis quis rutrum</Link></li>
                    <li><Link>Accumsan susoendisse</Link></li>
                    <li><Link>Eu varius vitae magna</Link></li>
                </ul>
                </div>
           

             
                <div className={Style.col1}>
                <ul>
                    <li><Link>Neque amet dapibus</Link></li>
                    <li><Link>Sed mattis quis rutrum</Link></li>
                    <li><Link>Accumsan susoendisse</Link></li>
                    <li><Link>Eu varius vitae magna</Link></li>
                </ul>
                </div>
            

              
                <div className={Style.col1}>
                <ul>
                    <li><Link>Neque amet dapibus</Link></li>
                    <li><Link>Sed mattis quis rutrum</Link></li>
                    <li><Link>Accumsan susoendisse</Link></li>
                    <li><Link>Eu varius vitae magna</Link></li>
                </ul>
                </div>
              
                <div className={Style.footerDiv}>
                <div className={Style.text}>
                 <h1>An Informative Text Blurb</h1>
                 </div>
                 <div className={Style.textArea}>
                 <p>Duis neque nisi, dapibus sed mattis quis,rutrum accumsan sed. <br />
                  Suspendisse eu varius nibh. Suspendisse vitae magna eget odio <br />
                   amet mollis. Duis neque nisi, dapibus sed mattis quis, sed rutrum <br />
                   accumsan sed. Suspendisse eu varius nibh lorem ipsum amet <br />
                   dolor sit amet lorem ipsum consequat gravida justo mollis.</p>
                </div>
                </div>
                </div>
             </div>
               <div className={Style.lastFooter}>
                   <p>@Untitled. All rights reserved. | Design: <u>HTML5UP</u> | Demo Images: Unsplash</p>
               </div>
            </main>
        </article>
     </section>
     </footer>
  )
}

export default Footer