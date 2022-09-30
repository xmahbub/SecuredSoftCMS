import {React} from 'react'
import Services from '../components/Services'
import Contactus from '../components/Contactus'
import News from '../components/News'
import Blog from '../components/Blog'
import Achivements from '../components/Achivements'
import Carier from '../components/Carier'
import Partners from '../components/Partners'
import Projects from '../components/Projects'
import { motion } from "framer-motion"

function Index({ posts }) {
  //console.log(posts)
  return (
    <div className='grid place-items-center min-h-full'>
    <div className='grid max-w-7xl gap-x-16 grid-cols-8 pt-36 pb-44'>
          
          <motion.div className='pt-5'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}>
            <Services color={"#F47A3E"} />
          </motion.div>
          
          
          <motion.div className='pt-10'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}> <Contactus  color={"#F47A3E"}/></motion.div>
         
          
         <motion.div className='pt-5'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><News color={"#F47A3E"}/></motion.div>
          
          
          <motion.div className='pt-10'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><Blog color={"#F47A3E"}/></motion.div>
          
          
          <motion.div 
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><Achivements  color={"#F47A3E"}/></motion.div>
          
        
          <motion.div className='pt-5'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><Carier  color={"#F47A3E"}/></motion.div>
          
          
          <motion.div className='pt-16'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}> <Partners  color={"#F47A3E"}/></motion.div>
         
         <motion.div className='pt-5'
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}><Projects  color={"#F47A3E"}/></motion.div>

    </div>

    </div>
  )
}

export async function getStaticProps() {
   
  if(process.env.NODE_ENV_BUILD){
    return {
      props: {
        posts: []
      }
    }
  }
  
  const res = await fetch(`${process.env.SITE_URI}/api/globals/Site`)
  const posts = await res.json() 
  return {
    props: {
      posts,
      
    },
    revalidate: 10,
  }
}


export default Index