import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import "./animation.css"
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

         1️⃣ Fade In + Slide Up (Default Smooth Scroll)
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Fade In + Slide Up</h2>
        </motion.div>
            
            
        2️⃣ Fade In + Slide Down
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Fade In + Slide Down</h2>
        </motion.div>
            
            
        3️⃣ Fade In + Scale Up
        jsx
        Copy
        Edit 
        <motion.div className="animation"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Fade In + Scale Up</h2>
        </motion.div>
            
            
        4️⃣ Rotate In
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, rotate: -15 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Rotate In</h2>
        </motion.div>
            
            
        5️⃣ Skew In
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, skewX: 15 }}
          whileInView={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Skew In</h2>
        </motion.div>
            
            
        6️⃣ Slide In From Left
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Slide In From Left</h2>
        </motion.div>
            
            
        7️⃣ Slide In From Right
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Slide In From Right</h2>
        </motion.div>
            
            
        8️⃣ Blur In
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Blur In</h2>
        </motion.div>
            
            
        9️⃣ Zoom In
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Zoom In</h2>
        </motion.div>
            
            
        🔟 Elastic Bounce In
        jsx
        Copy
        Edit
        <motion.div  className="animation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Elastic Bounce In</h2>
        </motion.div>
            
            
        1️⃣1️⃣ Flip In X-Axis
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, rotateX: 90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Flip In X-Axis</h2>
        </motion.div>
            
            
        1️⃣2️⃣ Flip In Y-Axis
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, rotateY: 90 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Flip In Y-Axis</h2>
        </motion.div>
            
            
        1️⃣3️⃣ Staggered Letter Appearance
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Staggered Letters</h2>
        </motion.div>
            
            
        1️⃣4️⃣ Color Fade In
        jsx
        Copy
        Edit
        <motion.div className="animation"
          initial={{ opacity: 0, backgroundColor: "#000000" }}
          whileInView={{ opacity: 1, backgroundColor: "#ff00ff" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Color Fade In</h2>
        </motion.div>

        <motion.div className="animation"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2>Fade In (Slow)</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Fade Out</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Scale In</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ scale: 1 }}
          whileInView={{ scale: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Scale Out</h2>
        </motion.div>



        <motion.div className="animation"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2>Slide Up</h2>
        </motion.div>



        <motion.div className="animation"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h2>Slide Down</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ rotate: 0, opacity: 0 }}
          whileInView={{ rotate: 360, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2>Rotate Clockwise</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ rotate: 360, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2>Rotate Counter-Clockwise</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ rotateX: 90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Flip X-Axis</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ rotateY: 90, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Flip Y-Axis</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ skewX: 30, opacity: 0 }}
          whileInView={{ skewX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skew Left</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ skewX: -30, opacity: 0 }}
          whileInView={{ skewX: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skew Right</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Blur In</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 5 }}
        >
          <h2>Elastic Bounce</h2>
        </motion.div>


        <motion.ul className="animation"
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


        <motion.div className="animation"
          initial={{ background: "linear-gradient(to right, red, yellow)" }}
          whileInView={{ background: "linear-gradient(to right, blue, purple)" }}
          transition={{ duration: 1 }}
        >
          <h2>Gradient Shift</h2>
        </motion.div>


        <motion.div className="animation"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <h2>Wave Effect</h2>
        </motion.div>

        <span>Typewriter Text Animation</span>
        <motion.h2>{text}</motion.h2>


        <motion.h2 className="animation"
          initial={{ color: "#000" }}
          whileInView={{ color: "#FF0000" }}
          transition={{ duration: 1 }}
        >
          Color Fade
        </motion.h2>


        <motion.div className="animation"
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