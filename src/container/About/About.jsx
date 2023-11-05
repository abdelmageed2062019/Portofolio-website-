import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion' 
import { AppWrap, MotionWrap } from '../../wrapper'

import './About.scss'

import {urlFor, client} from '../../cleint'

// const abouts = [
//   {title: 'Frontend Development',
//    description: 'I am a good Frontend Developer,I am good at HTML5, CSS3, SASS, JAVASCRIPT',
//   imageUrl: images.about01
//   },
//   {title: 'Backend Development',
//   description: 'I am a familair with Backend Technologies',
//  imageUrl: images.about02
//  },
//  {title: 'React Development',
//  description: 'I am a good at React Hocks, Redux and React liberaries',
// imageUrl: images.about03
// },
// ];

const About = () => {


  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => {
      setAbouts(data)
    })
  }, [])
  return (
    <>
      <h2 className='head-text' style={{ marginTop: 40}}>I Know That  <span>Good Development</span>  means <span>Good Apps</span>  </h2>
 
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div> 
    </>
  )
}

export default AppWrap(
   MotionWrap(About, 'app__about'),
   'about',
   "app__whitebg"
   );