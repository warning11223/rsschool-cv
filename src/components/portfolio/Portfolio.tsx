import React from 'react';


import pizza from '../../assets/pizza.png'
import contacts from '../../assets/contacts.png'
import ghSearch from '../../assets/gh-search.png'
import airports from '../../assets/airports.png'
import youtube from '../../assets/youtube.png'
import restaurant from '../../assets/restaurant.png'
import dashboard from '../../assets/dashboard.png'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <section id='portfolio' className='container'>
            <h5>My recent works</h5>
            <h2 className='portfolio__h2'>Portfolio</h2>

           <div className='flex'>
               <div className="portfolio__items">

                   <article className='portfolio__item'>
                       <img src={pizza} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Pizza Shop</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/react-pizza" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/react-pizza/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={youtube} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Youtube</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/react-youtube" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://gleeful-yeot-5cd2eb.netlify.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={restaurant} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Restaurant app</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/restaurant-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://regal-sundae-40261b.netlify.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={dashboard} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Dashboard</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/react-dashboard" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://calm-dragon-9f6428.netlify.app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={contacts} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Contact List</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/contacts-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/contacts-app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={ghSearch} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Github search</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/github-search" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/github-search/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <img src={airports} alt="image1" className='portfolio__img'/>
                       <h3 className='portfolio__title'>Airports app</h3>
                       <div className='portfolio__btns'>
                           <a href="https://github.com/warning11223/airports-app" className='portfolio__link btn ' target='_blank'>Github</a>
                           <a href="https://warning11223.github.io/airports-app/" className='portfolio__link btn btn-primary' target='_blank'>Take a look</a>
                       </div>
                   </article>

                   <article className='portfolio__item'>
                       <h3 className='portfolio__title' style={{marginTop: '15px'}}>Code example</h3>
                       <pre style={{width: '402px', textAlign: 'left'}}>
                           <code style={{display: 'block', marginLeft: '5%', fontSize: '20px'}}>
                               {" function factorial(n) { "} <br/>
                               <span>   if</span>
                               {" (n < "}
                               <span>0</span>
                               {") "}
                               <span>return </span>
                               <span>null</span>
                               {"; "} <br/>
                               <span>   if</span>
                               {" (n === "}
                               <span>0</span>
                               {") "}
                               <span>return </span>
                               <span>1</span>
                               {"; "} <br/>
                               <span>   return</span>
                               {" n * factorial(n - "}
                               <span>1</span>
                               {"); "} <br/>
                               {" } "}
                           </code>
                       </pre>
                       <h3 className='portfolio__title' style={{marginTop: '15px'}}>Languages</h3>
                       <div style={{marginLeft: '8%', fontSize: '20px'}}>
                           <p>English: pre-intermediate</p>
                       </div>
                       <h3 className='portfolio__title' style={{marginTop: '15px'}}>Education</h3>
                       <div style={{marginLeft: '8%', fontSize: '20px'}}>
                           <p>NUZP: Software engineering</p>
                       </div>
                   </article>

               </div>
           </div>

        </section>
    );
};

export default Portfolio;
