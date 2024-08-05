import { CaretRight } from 'phosphor-react'
import React from 'react'

const Home = () => {
  return (
    <div className='styled-home'>
        <section className='section-one'>
              <div className='section-data'>
                  <h2>Vision Pro</h2>
                  <p>Welcome to the area of spacial computing</p>
                 <span>Pre-order starting 1.19 at 5:00 a.m PT
                  </span>
                  <span>Available starting 2.2</span>
                  <button>Learn More <CaretRight/> </button>
              </div>
        </section>

        <section className='section-two'>
              <div className='section-data'>
                  <h2>iPhone 15 Pro</h2>
                  <p>Titanium. So Strong. So light. So Pro</p>
                  <button>Learn More <CaretRight/> </button>
              </div>
        </section>

        <section className='section-three'>
              <div className='section-data'>
                  <p>New camera. New design. Newphoria</p>
                  <button>Learn More <CaretRight/> </button>
              </div>
        </section>

        <section className='section-four'>
              <div className='section-grid-1'>
                  <div className='section-data'>
                    <h2>WATCH</h2>
                    <span>Series 9</span>
                      <p>Smarter. Brighter. Mightier.</p>
                      <button>Learn More <CaretRight/> </button>
                  </div>
              </div>

              <div className='section-grid-2'>
                  <div className='section-data'>
                    <h2>Watch</h2>
                    <span>Ultra 2</span>
                      <p>Next level adventure</p>
                      <button>Learn More <CaretRight/> </button>
                  </div>
              </div>
        </section>

        <section className='section-five'>
              <div className='section-grid-1'>
                  <div className='section-data'>
                    <h2>MacBook Pro</h2>
                      <p>Mind-Blowing. Head-turning</p>
                      <button>Learn More <CaretRight/> </button>
                  </div>
              </div>

              <div className='section-grid-2'>
                  <div className='section-data'>
                    <h2>Fitness+</h2>
                      <p>From HIIT to Yoga. From 5 to 45 minutes.<br/>There's something for everyone</p>
                      <button>Learn More <CaretRight/> </button>
                  </div>
              </div>
        </section>
    </div>
  )
}

export default Home