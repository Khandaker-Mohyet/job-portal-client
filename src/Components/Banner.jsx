import { motion } from "framer-motion";
import office from '../assets/Progrmaing.JPG'
import progrmaing from '../assets/Office.JPG'

const Banner = () => {
  return (
    <div className="hero bg-base-200 w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
           <motion.img
          src={office}
          animate={{ y: [0, 50, 0] }}
          transition={{duration:10, repeat:Infinity}}
          className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-4 border-b-4 border-blue-500 w-64 shadow-2xl" />
        <motion.img
          src={progrmaing}
          animate={{ x: [100, 150, 100] }}
          transition={{duration:10, repeat:Infinity}}
          className="max-w-sm rounded-t-2xl rounded-br-2xl border-l-4 border-b-4 border-blue-500 w-64 shadow-2xl" />
       </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50 }}
            transition={{ duration: 3, delay: 1, ease: "easeInOut", repeat: Infinity }}
            className="text-5xl font-bold">Lets <motion.span
              animate={{ color: ['#229954', '#ffe92f'] }}
              transition={{duration: 1.5, delay: 1, repeat: Infinity}}
            >Jobs</motion.span> For You!</motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;