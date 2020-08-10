import React from 'react'
import { Link } from 'gatsby'
import Typical from 'react-typical'
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Footer from '../components/footer'
import Particles from 'react-particles-js'

import '../components/layout.css'
import '../components/footer.css'
import './index.css'

const IndexPage = () => (
  <>
    <div className="hero">
      <div className="items">
        <Zoom left text cascade>
          <h1>Kabir Kuriyan</h1>
        </Zoom>
        <Fade delay={4000} cascade>
          <Typical
            steps={[' ', 2500, 'Software Nerd', 800, 'Software Engineer', 1500]}
            loop={1}
            wrapper="h5"
          />
          <Link className="button" to="/about/contact">Get in touch</Link>{' '}
        </Fade>
      </div>
      <Footer />
    </div>
    <div className="re-particles-js">
      <Particles
        width={'95vw'}
        height={'95vh'}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 2,
                size_min: 0.3,
                size_max: 2
              }
            },
            line_linked: {
              enable: true,
              color: '#dbe2ef'
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out'
            },
            color: '#3f72af'
          },
          polygon: {
            enable: true,
            scale: 0.5,
            type: 'inline',
            move: {
              radius: 10
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
    </div>
  </>
)

export default IndexPage
