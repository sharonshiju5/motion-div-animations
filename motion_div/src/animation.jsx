import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function animation() {

    const [text, setText] = useState("");
    const message = "Typewriter Effect";
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(message.substring(0, index));
        index++;
        if (index > message.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, []);
    return(
        <>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2>Fade In (Slow)</h2>
        </motion.div>


        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Fade Out</h2>
        </motion.div>


        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Scale In</h2>
        </motion.div>


        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Scale Out</h2>
        </motion.div>



        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2>Slide Up</h2>
        </motion.div>



        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2>Slide Down</h2>
        </motion.div>


        <motion.div
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ rotate: 360, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2>Rotate Clockwise</h2>
        </motion.div>


        <motion.div
          initial={{ rotate: 360, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2>Rotate Counter-Clockwise</h2>
        </motion.div>


        <motion.div
          initial={{ rotateX: 90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Flip X-Axis</h2>
        </motion.div>


        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Flip Y-Axis</h2>
        </motion.div>


        <motion.div
          initial={{ skewX: 30, opacity: 0 }}
          whileInView={{ skewX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skew Left</h2>
        </motion.div>


        <motion.div
          initial={{ skewX: -30, opacity: 0 }}
          whileInView={{ skewX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skew Right</h2>
        </motion.div>


        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Blur In</h2>
        </motion.div>


        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 5 }}
        >
          <h2>Elastic Bounce</h2>
        </motion.div>


        <motion.ul
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Item 1
          </motion.li>
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Item 2
          </motion.li>
        </motion.ul>


        <motion.div
          initial={{ background: "linear-gradient(to right, red, yellow)" }}
          whileInView={{ background: "linear-gradient(to right, blue, purple)" }}
          transition={{ duration: 1 }}
        >
          <h2>Gradient Shift</h2>
        </motion.div>


        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h2>Wave Effect</h2>
        </motion.div>

        <span>Typewriter Text Animation</span>
        <motion.h2>{text}</motion.h2>


        <motion.h2
          initial={{ color: "#000" }}
          whileInView={{ color: "#FF0000" }}
          transition={{ duration: 1 }}
        >
          Color Fade
        </motion.h2>


        <motion.div
          initial={{ x: 0 }}
          whileInView={{ x: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <h2>Shake Effect</h2>
        </motion.div>


        <>
        
        </>
        </>
    )
}
export default animation