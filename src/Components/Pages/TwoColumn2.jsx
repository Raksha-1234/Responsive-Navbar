import React from 'react'
import Style from "./Two2.module.css";
import { Link } from "react-router-dom";
import Footer from './HomeSection/Footer';

const TwoColumn2 = () => {
  return (
    <section>
      <article>
        <main>
          <div className={Style.parent}>
            <div className={Style.parent2}>
            <div className={Style.col2}>
              <div className={Style.sec3}>
              <h1>Magna Phasellus</h1>
              <ul>
                  <li><Link>Sed dolore viverra</Link></li>
                  <li><Link>Ligula non varius</Link></li>
                  <li><Link>Nec sociis natoque</Link></li>
                  <li><Link>Penatibus et magnis</Link></li>
                  <li><Link>Dis parturient montes</Link></li>
                  <li><Link>Nascetur ridiculus</Link></li>
                </ul>
              </div>

              <div className={Style.sec4}>
              <h1>Ipsum Dolor</h1>
              <p>
                Vehicula fermentum ligula at pretium. Suspendisse semper iaculis eros, eu aliquam iaculis. Phasellus ultrices
                diam sit amet orci lacinia sed consequat.</p><br />
                <div className={Style.link}>
                <ul>
                    <li><Link>Sed dolore viverra</Link></li>
                    <li><Link>Ligula non varius</Link></li>
                    <li><Link>Dis parturient montes</Link></li>
                    <li><Link>Nascetur ridiculus</Link></li>
                   </ul>
              </div>
             
            </div>
          </div>
          <div className={Style.page}>
              <h1>Two Column # 1</h1>
              <h4>A generic two column layout</h4>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam metus, congue vel suscipit ut, dignissim non risus. 
                Vestibulum ante est, fringilla nec placerat eu, vestibulum vitae diam. Integer eget egestas eros. Duis enim erat, mollis quis 
                lacinia eget, blandit nec ipsum. Donec vitae turpis ipsum. Aliquam mauris libero, sagittis in eleifend at, mattis imperdiet velit.
                 Donec urna risus, rutrum molestie varius ac, lacinia sit amet augue. Nam ultrices elementum eros.</p><br />

              <p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis
                 natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing 
                 egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium. Suspendisse 
                 semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit. Suspendisse 
                 fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt. Proin eu mauris eu
                  tellus eleifend hendrerit.</p><br />

              <p>Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit.
                 Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula 
                 at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum
                  iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.</p><br />

              <p>Sed faucibus viverra ligula, non varius magna semper vitae. Donec eu justo ut ipsum hendrerit congue nec eu risus. Cum sociis
                 natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing
                  egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula at pretium.
                  Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum elit.
                  Suspendisse fermentum adipiscing nisi, a tempor libero malesuada at. Morbi lacinia dui adipiscing risus eleifend tincidunt.
                  Proin eu mauris eu tellus eleifend hendrerit.</p><br />

              <p>Mauris sit amet tellus urna. In facilisis, tortor vitae ultricies egestas, odio mi rhoncus arcu, quis euismod felis felis et velit.
                 Mauris varius consectetur erat egestas tempus. Cras convallis odio sit amet risus convallis porttitor. Integer vehicula fermentum ligula 
                 at pretium. Suspendisse semper iaculis eros, eu aliquam justo imperdiet vel. Proin nec dictum mi. Duis commodo enim non tellus interdum 
                 iaculis. Phasellus ultrices diam sit amet orci lacinia sed consequat dui auctor.</p><br />

            </div>

            </div>
          </div>
         
         <Footer/>
        </main>
      </article>
    </section>
  )
}

export default TwoColumn2