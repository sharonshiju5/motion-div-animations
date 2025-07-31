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
        



        // 1. Morph Scale Animation
        <motion.div 
          className="animation"
          initial={{ scale: 0, borderRadius: "50%" }}
          whileInView={{ scale: 1, borderRadius: "12px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Morph Scale</h2>
        </motion.div>

        // 2. Magnetic Pull Effect
        <motion.div 
          className="animation"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.05, x: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Magnetic Pull</h2>
        </motion.div>

        // 3. Liquid Bounce Animation
        <motion.div 
          className="animation"
          initial={{ y: 100, scaleY: 0.5, opacity: 0 }}
          whileInView={{ y: 0, scaleY: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 15, mass: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Liquid Bounce</h2>
        </motion.div>

        // 4. Glitch Reveal Effect
        <motion.div 
          className="animation"
          initial={{ x: [0, -5, 5, -5, 5, 0], opacity: 0, filter: "hue-rotate(0deg)" }}
          whileInView={{ x: 0, opacity: 1, filter: "hue-rotate(360deg)" }}
          transition={{ duration: 0.6, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Glitch Reveal</h2>
        </motion.div>

        // 5. Typewriter Reveal Animation
        <motion.div 
          className="animation"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Typewriter Reveal</h2>
        </motion.div>

        // 6. Particle Burst Effect
        <motion.div 
          className="animation"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Particle Burst</h2>
        </motion.div>

        // 7. Origami Fold Animation
        <motion.div 
          className="animation"
          initial={{ rotateY: 90, transformOrigin: "left", opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2>Origami Fold</h2>
        </motion.div>

        // 8. Neon Glow Effect
        <motion.div 
          className="animation"
          initial={{ opacity: 0, boxShadow: "0 0 0px #00ffff" }}
          whileInView={{ opacity: 1, boxShadow: "0 0 20px #00ffff, 0 0 40px #00ffff" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Neon Glow</h2>
        </motion.div>

        // 9. Spiral Entrance Animation
        <motion.div 
          className="animation"
          initial={{ scale: 0, rotate: -180, x: 100, y: 100, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 200, damping: 20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Spiral Entrance</h2>
        </motion.div>

        // 10. Hologram Effect
        <motion.div 
          className="animation"
          initial={{ opacity: 0, filter: "brightness(0.3) saturate(2)" }}
          whileInView={{ opacity: [0, 0.5, 1, 0.8, 1], filter: "brightness(1) saturate(1)" }}
          transition={{ duration: 1.5, times: [0, 0.2, 0.5, 0.8, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Hologram Effect</h2>
        </motion.div>

        // 11. Ripple Wave Animation
        <motion.div 
          className="animation"
          initial={{ scale: 0.3, opacity: 0 }}
          whileInView={{ scale: [0.3, 1.1, 1], opacity: [0, 0.8, 1] }}
          transition={{ duration: 0.8, times: [0, 0.6, 1], ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Ripple Wave</h2>
        </motion.div>

        // 12. Glass Shatter Effect
        <motion.div 
          className="animation"
          initial={{ opacity: 0, rotateX: 45, rotateY: 45, scale: 0.5 }}
          whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 150 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Glass Shatter</h2>
        </motion.div>

        // 13. Levitate Float Animation
        <motion.div 
          className="animation"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ 
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.6 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Levitate Float</h2>
        </motion.div>
        
        // 14. Shockwave Pulse Effect
        <motion.div 
          className="animation"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0, 1.2, 1], opacity: [0, 0.7, 1] }}
          transition={{ duration: 0.6, times: [0, 0.7, 1], ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Shockwave Pulse</h2>
        </motion.div>
        
        // 15. Quantum Phase Animation
        <motion.div 
          className="animation"
          initial={{ x: 0, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: [0, -20, 20, 0], opacity: [0, 0.3, 0.7, 1], filter: "blur(0px)" }}
          transition={{ duration: 1, times: [0, 0.3, 0.7, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Quantum Phase</h2>
        </motion.div>
        
        // 16. Dissolve Materialize
        <motion.div 
          className="animation"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Dissolve Materialize</h2>
        </motion.div>
        
        // 17. Prism Split Effect
        <motion.div 
          className="animation"
          initial={{ skewX: 20, skewY: 5, opacity: 0, x: -50 }}
          whileInView={{ skewX: 0, skewY: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Prism Split</h2>
        </motion.div>
        
        // 18. Accordion Expand
        <motion.div 
          className="animation"
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Accordion Expand</h2>
        </motion.div>
        
        // 19. Pendulum Swing
        <motion.div 
          className="animation"
          initial={{ rotate: -45, opacity: 0, transformOrigin: "top center" }}
          whileInView={{ rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Pendulum Swing</h2>
        </motion.div>
        
        // 20. Vortex Spin
        <motion.div 
          className="animation"
          initial={{ scale: 0, rotate: 360, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Vortex Spin</h2>
        </motion.div>
        
        // 21. Elastic Stretch
        <motion.div 
          className="animation"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Elastic Stretch</h2>
        </motion.div>
        
        // 22. Magnetic Field
        <motion.div 
          className="animation"
          initial={{ scale: 0.5, opacity: 0, filter: "brightness(2)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
          whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Magnetic Field</h2>
        </motion.div>
        
        // 23. Paper Unfold
        <motion.div 
          className="animation"
          initial={{ rotateX: -90, opacity: 0, transformOrigin: "bottom" }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Paper Unfold</h2>
        </motion.div>
        
        // 24. Cosmic Drift
        <motion.div 
          className="animation"
          initial={{ x: -100, y: 50, opacity: 0, rotate: -10 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Cosmic Drift</h2>
        </motion.div>
        
        // 25. Plasma Pulse
        <motion.div 
          className="animation"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ 
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Plasma Pulse</h2>
        </motion.div>
        
        // 26. Crystal Formation
        <motion.div 
          className="animation"
          initial={{ scale: 0.1, opacity: 0, rotate: 45 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 12 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Crystal Formation</h2>
        </motion.div>
        
        // 27. Lightning Strike
        <motion.div 
          className="animation"
          initial={{ opacity: 0, scaleY: 0, skewX: 45 }}
          whileInView={{ opacity: [0, 1, 0.7, 1], scaleY: 1, skewX: 0 }}
          transition={{ duration: 0.4, times: [0, 0.1, 0.3, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Lightning Strike</h2>
        </motion.div>
        
        // 28. Bubble Pop
        <motion.div 
          className="animation"
          initial={{ scale: 0, opacity: 0.3 }}
          whileInView={{ scale: [0, 1.3, 1], opacity: [0.3, 0.8, 1] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Bubble Pop</h2>
        </motion.div>
        
        // 29. Origami Bird
        <motion.div 
          className="animation"
          initial={{ rotateY: -90, rotateX: 45, opacity: 0 }}
          whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2>Origami Bird</h2>
        </motion.div>
        
        // 30. Wormhole Entry
        <motion.div 
          className="animation"
          initial={{ scale: 0, rotate: 720, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Wormhole Entry</h2>
        </motion.div>
        
        // 31. Smoke Dissipate
        <motion.div 
          className="animation"
          initial={{ opacity: 0, scale: 0.5, filter: "blur(15px)" }}
          whileInView={{ opacity: [0, 0.8, 0.6, 1], scale: [0.5, 1.2, 1], filter: "blur(0px)" }}
          transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Smoke Dissipate</h2>
        </motion.div>
        
        // 32. Mirror Reflection
        <motion.div 
          className="animation"
          initial={{ scaleX: -1, opacity: 0, x: 100 }}
          whileInView={{ scaleX: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Mirror Reflection</h2>
        </motion.div>
        
        // 33. Gravity Pull
        <motion.div 
          className="animation"
          initial={{ y: -200, opacity: 0, rotate: 10 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 8, mass: 2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Gravity Pull</h2>
        </motion.div>
        
        // 34. Kaleidoscope Twist
        <motion.div 
          className="animation"
          initial={{ rotate: 0, scale: 0.3, opacity: 0 }}
          whileInView={{ rotate: 180, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Kaleidoscope Twist</h2>
        </motion.div>
        
        // 35. Phantom Fade
        <motion.div 
          className="animation"
          initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
          whileInView={{ opacity: [0, 0.3, 0.7, 1], y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, times: [0, 0.3, 0.6, 1] }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Phantom Fade</h2>
        </motion.div>
        
        // 36. Elastic Rebound
        <motion.div 
          className="animation"
          initial={{ scaleX: 0.3, scaleY: 1.5, opacity: 0 }}
          whileInView={{ scaleX: 1, scaleY: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Elastic Rebound</h2>
        </motion.div>
        
        // 37. Portal Emerge
        <motion.div 
          className="animation"
          initial={{ scale: 0, rotateZ: 180, filter: "hue-rotate(180deg)" }}
          whileInView={{ scale: 1, rotateZ: 0, filter: "hue-rotate(0deg)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Portal Emerge</h2>
        </motion.div>
        
        // 38. Meteor Impact
        <motion.div 
          className="animation"
          initial={{ x: 200, y: -200, opacity: 0, rotate: 45, scale: 0.5 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Meteor Impact</h2>
        </motion.div>
        
        // 39. DNA Helix
        <motion.div 
          className="animation"
          initial={{ rotateY: 0, scaleY: 0, opacity: 0 }}
          whileInView={{ rotateY: 360, scaleY: 1, opacity: 1 }}
          animate={{ rotateY: [360, 720, 360] }}
          transition={{ 
            rotateY: { repeat: Infinity, duration: 4, ease: "linear" },
            scaleY: { duration: 0.8 },
            opacity: { duration: 0.5 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>DNA Helix</h2>
        </motion.div>
        
        // 40. Quantum Entanglement
        <motion.div 
          className="animation"
          initial={{ 
            opacity: 0, 
            scale: 0.5, 
            rotateX: 180, 
            rotateY: 180,
            filter: "blur(10px) brightness(2)"
          }}
          whileInView={{ 
            opacity: [0, 0.5, 1, 0.8, 1], 
            scale: [0.5, 1.1, 0.9, 1], 
            rotateX: 0, 
            rotateY: 0,
            filter: "blur(0px) brightness(1)"
          }}
          transition={{ 
            duration: 1.5, 
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: "easeInOut"
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Quantum Entanglement</h2>
        </motion.div>


        <div style={{ 
              padding: '40px', 
              // backgroundColor: '#0a0a0a', 
              minHeight: '100vh',
              fontFamily: 'Arial, sans-serif'
            }}>
              <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
                Unique Framer Motion Animations
              </h1>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '30px' 
              }}>
              
                {/* 1. Digital Rain */}
                <motion.div 
                  className="animation"
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ 
                    opacity: [0, 1, 0.7, 1], 
                    y: 0,
                    backgroundImage: [
                      "linear-gradient(0deg, transparent 0%, #00ff00 50%, transparent 100%)",
                      "linear-gradient(90deg, transparent 0%, #00ff00 50%, transparent 100%)",
                      "linear-gradient(180deg, transparent 0%, #00ff00 50%, transparent 100%)"
                    ]
                  }}
                  transition={{ duration: 2, times: [0, 0.3, 0.7, 1] }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#001100', 
                    color: '#00ff00',
                    borderRadius: '8px',
                    border: '1px solid #00ff00'
                  }}
                >
                  <h2>Digital Rain</h2>
                </motion.div>
                
                {/* 2. Fractal Zoom */}
                <motion.div 
                  className="animation"
                  initial={{ scale: 0.1, rotate: 0, opacity: 0 }}
                  whileInView={{ 
                    scale: [0.1, 2, 0.8, 1], 
                    rotate: [0, 180, 360, 0], 
                    opacity: 1 
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#2d1b69', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center'
                  }}
                >
                  <h2>Fractal Zoom</h2>
                </motion.div>
                
                {/* 3. Tessellation */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)",
                    opacity: 0
                  }}
                  whileInView={{ 
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    opacity: 1
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#ff6b6b', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Tessellation</h2>
                </motion.div>
                
                {/* 4. Orbit Revolution */}
                <motion.div 
                  className="animation"
                  initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
                  whileInView={{ rotate: 360, scale: 1, opacity: 1 }}
                  animate={{ rotate: [360, 720, 360] }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                    scale: { duration: 0.8 },
                    opacity: { duration: 0.6 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#4ecdc4', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center',
                    position: 'relative'
                  }}
                >
                  <h2>Orbit Revolution</h2>
                </motion.div>
                
                {/* 5. Melting Effect */}
                <motion.div 
                  className="animation"
                  initial={{ scaleY: 1, y: 0, opacity: 0 }}
                  whileInView={{ 
                    scaleY: [1, 0.3, 1.2, 1], 
                    y: [0, 20, -10, 0], 
                    opacity: 1 
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#ff9f43', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Melting Effect</h2>
                </motion.div>
                
                {/* 6. Chromatic Aberration */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    filter: "blur(10px)",
                    textShadow: "3px 0 #ff0000, -3px 0 #00ffff"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    filter: "blur(0px)",
                    textShadow: "0px 0 #ff0000, 0px 0 #00ffff"
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#2c2c54', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Chromatic Aberration</h2>
                </motion.div>
                
                {/* 7. Molecular Structure */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scale: 0,
                    rotateX: 0,
                    rotateY: 0,
                    opacity: 0
                  }}
                  whileInView={{ 
                    scale: 1,
                    rotateX: [0, 360],
                    rotateY: [0, 180],
                    opacity: 1
                  }}
                  animate={{
                    rotateX: [0, 360, 0],
                    rotateY: [0, 180, 360, 0]
                  }}
                  transition={{ 
                    scale: { duration: 0.8 },
                    opacity: { duration: 0.6 },
                    rotateX: { repeat: Infinity, duration: 4, ease: "linear" },
                    rotateY: { repeat: Infinity, duration: 6, ease: "linear" }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#45b7d1', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <h2>Molecular Structure</h2>
                </motion.div>
                
                {/* 8. Quantum Flicker */}
                <motion.div 
                  className="animation"
                  initial={{ opacity: 0, scale: 1 }}
                  whileInView={{ 
                    opacity: [0, 1, 0.2, 1, 0.5, 1],
                    scale: [1, 1.05, 0.95, 1.02, 0.98, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                    ease: "easeInOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#6c5ce7', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Quantum Flicker</h2>
                </motion.div>
                
                {/* 9. Dimensional Shift */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    perspective: "1000px",
                    rotateX: 90,
                    rotateY: 45,
                    z: -100,
                    opacity: 0
                  }}
                  whileInView={{ 
                    rotateX: 0,
                    rotateY: 0,
                    z: 0,
                    opacity: 1
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#fd79a8', 
                    color: '#fff',
                    borderRadius: '8px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <h2>Dimensional Shift</h2>
                </motion.div>
                
                {/* 10. Sonic Boom */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scale: 0,
                    opacity: 0,
                    boxShadow: "0 0 0px rgba(255,255,255,0)"
                  }}
                  whileInView={{ 
                    scale: [0, 1.5, 1],
                    opacity: [0, 0.8, 1],
                    boxShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 50px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.4)"
                    ]
                  }}
                  transition={{ duration: 0.8, times: [0, 0.6, 1] }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#00b894', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center'
                  }}
                >
                  <h2>Sonic Boom</h2>
                </motion.div>
                
                {/* 11. Elastic Jello */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scaleX: 0.1,
                    scaleY: 2,
                    opacity: 0
                  }}
                  whileInView={{ 
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 8
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#e17055', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Elastic Jello</h2>
                </motion.div>
                
                {/* 12. Holographic Glitch */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    x: 0,
                    filter: "hue-rotate(0deg) saturate(1)"
                  }}
                  whileInView={{ 
                    opacity: [0, 1, 0.8, 1],
                    x: [0, -5, 5, -2, 2, 0],
                    filter: [
                      "hue-rotate(0deg) saturate(1)",
                      "hue-rotate(90deg) saturate(2)",
                      "hue-rotate(180deg) saturate(1.5)",
                      "hue-rotate(270deg) saturate(1)",
                      "hue-rotate(360deg) saturate(1)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.5,
                    times: [0, 0.2, 0.4, 0.8, 1]
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#74b9ff', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Holographic Glitch</h2>
                </motion.div>
                
                {/* 13. Metamorphosis */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    borderRadius: "0%",
                    rotate: 0,
                    scale: 0.5,
                    opacity: 0
                  }}
                  whileInView={{ 
                    borderRadius: ["0%", "50%", "25%", "50%"],
                    rotate: [0, 180, 360],
                    scale: [0.5, 1.2, 0.8, 1],
                    opacity: 1
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#a29bfe', 
                    color: '#fff',
                    textAlign: 'center'
                  }}
                >
                  <h2>Metamorphosis</h2>
                </motion.div>
                
                {/* 14. Neural Network */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scale: 0,
                    filter: "brightness(0.3)"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scale: [0, 1.1, 0.9, 1],
                    filter: "brightness(1)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px #00ff88",
                      "0 0 20px #00ff88",
                      "0 0 40px #00ff88",
                      "0 0 20px #00ff88",
                      "0 0 0px #00ff88"
                    ]
                  }}
                  transition={{ 
                    scale: { duration: 1 },
                    opacity: { duration: 0.8 },
                    filter: { duration: 0.8 },
                    boxShadow: { repeat: Infinity, duration: 2 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#00b894', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Neural Network</h2>
                </motion.div>
                
                {/* 15. Prismatic Dispersion */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    skewX: 45,
                    skewY: 15,
                    scale: 0.3
                  }}
                  whileInView={{ 
                    opacity: 1,
                    skewX: [45, -15, 5, 0],
                    skewY: [15, -5, 2, 0],
                    scale: [0.3, 1.2, 0.9, 1],
                    background: [
                      "linear-gradient(45deg, #ff0000, #ff8800)",
                      "linear-gradient(45deg, #ff8800, #ffff00)",
                      "linear-gradient(45deg, #ffff00, #00ff00)",
                      "linear-gradient(45deg, #00ff00, #0088ff)",
                      "linear-gradient(45deg, #0088ff, #8800ff)"
                    ]
                  }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Prismatic Dispersion</h2>
                </motion.div>
                
                {/* 16. Gravity Wave */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    y: -100,
                    opacity: 0,
                    scaleY: 0.1
                  }}
                  whileInView={{ 
                    y: [0, 10, -5, 3, 0],
                    opacity: 1,
                    scaleY: [0.1, 0.8, 1.2, 0.9, 1]
                  }}
                  animate={{
                    y: [0, -8, 8, -4, 4, 0]
                  }}
                  transition={{ 
                    y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                    opacity: { duration: 0.8 },
                    scaleY: { duration: 1.2 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#0984e3', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Gravity Wave</h2>
                </motion.div>
                
                {/* 17. Temporal Distortion */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scale: 1,
                    filter: "blur(20px) sepia(1)"
                  }}
                  whileInView={{ 
                    opacity: [0, 0.3, 0.7, 1],
                    scale: [1, 0.8, 1.1, 0.95, 1],
                    filter: [
                      "blur(20px) sepia(1)",
                      "blur(10px) sepia(0.7)",
                      "blur(5px) sepia(0.3)",
                      "blur(0px) sepia(0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    times: [0, 0.3, 0.6, 1],
                    ease: "easeInOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#fdcb6e', 
                    color: '#2d3436',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Temporal Distortion</h2>
                </motion.div>
                
                {/* 18. Magnetic Levitation */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    y: 50,
                    opacity: 0,
                    boxShadow: "0 0px 0px rgba(108, 92, 231, 0)"
                  }}
                  whileInView={{ 
                    y: 0,
                    opacity: 1,
                    boxShadow: "0 10px 30px rgba(108, 92, 231, 0.3)"
                  }}
                  animate={{
                    y: [-3, 3, -3],
                    boxShadow: [
                      "0 10px 30px rgba(108, 92, 231, 0.3)",
                      "0 15px 40px rgba(108, 92, 231, 0.5)",
                      "0 10px 30px rgba(108, 92, 231, 0.3)"
                    ]
                  }}
                  transition={{ 
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    opacity: { duration: 0.8 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#6c5ce7', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Magnetic Levitation</h2>
                </motion.div>
                
                {/* 19. Crystalline Growth */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scale: 0,
                    opacity: 0,
                    rotate: 0,
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%)"
                  }}
                  whileInView={{ 
                    scale: [0, 0.5, 1.1, 1],
                    opacity: 1,
                    rotate: [0, 45, 90, 45, 0],
                    clipPath: [
                      "polygon(50% 50%, 50% 50%, 50% 50%)",
                      "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                    ]
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#55a3ff', 
                    color: '#fff',
                    textAlign: 'center'
                  }}
                >
                  <h2>Crystalline Growth</h2>
                </motion.div>
                
                {/* 20. Plasma Storm */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scale: 0.5,
                    filter: "brightness(0.2) contrast(2)"
                  }}
                  whileInView={{ 
                    opacity: [0, 1, 0.8, 1],
                    scale: [0.5, 1.2, 0.9, 1.05, 1],
                    filter: [
                      "brightness(0.2) contrast(2)",
                      "brightness(1.5) contrast(1.2)",
                      "brightness(0.8) contrast(1.5)",
                      "brightness(1) contrast(1)"
                    ]
                  }}
                  animate={{
                    boxShadow: [
                      "inset 0 0 0px #ff6b9d",
                      "inset 0 0 20px #ff6b9d",
                      "inset 0 0 40px #ff6b9d",
                      "inset 0 0 20px #ff6b9d",
                      "inset 0 0 0px #ff6b9d"
                    ]
                  }}
                  transition={{ 
                    scale: { duration: 1.2 },
                    opacity: { duration: 1 },
                    filter: { duration: 1.2 },
                    boxShadow: { repeat: Infinity, duration: 1.5 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#ff3867', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Plasma Storm</h2>
                </motion.div>
                
                {/* 21. Liquid Mercury */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    borderRadius: "50%",
                    scaleX: 0.3,
                    scaleY: 1.5,
                    opacity: 0
                  }}
                  whileInView={{ 
                    borderRadius: "8px",
                    scaleX: 1,
                    scaleY: 1,
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#636e72', 
                    color: '#fff'
                  }}
                >
                  <h2>Liquid Mercury</h2>
                </motion.div>
                
                {/* 22. Satellite Orbit */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    x: -150,
                    y: -150,
                    rotate: 0,
                    opacity: 0
                  }}
                  whileInView={{ 
                    x: 0,
                    y: 0,
                    rotate: 360,
                    opacity: 1
                  }}
                  animate={{
                    rotate: [360, 720, 360]
                  }}
                  transition={{ 
                    x: { duration: 1.2, ease: "easeOut" },
                    y: { duration: 1.2, ease: "easeOut" },
                    rotate: { repeat: Infinity, duration: 5, ease: "linear" },
                    opacity: { duration: 0.8 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#2d3436', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center'
                  }}
                >
                  <h2>Satellite Orbit</h2>
                </motion.div>
                
                {/* 23. Morphing Blob */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    borderRadius: "0%"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    borderRadius: "50%"
                  }}
                  animate={{
                    borderRadius: [
                      "50%",
                      "60% 40% 30% 70%",
                      "30% 60% 70% 40%",
                      "50%"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8 },
                    borderRadius: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#00cec9', 
                    color: '#fff',
                    textAlign: 'center'
                  }}
                >
                  <h2>Morphing Blob</h2>
                </motion.div>
                
                {/* 24. Steampunk Gear */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    rotate: 0,
                    scale: 0,
                    opacity: 0,
                    filter: "sepia(1) brightness(0.8)"
                  }}
                  whileInView={{ 
                    rotate: 180,
                    scale: 1,
                    opacity: 1,
                    filter: "sepia(0.7) brightness(1)"
                  }}
                  animate={{
                    rotate: [180, 360, 540, 360]
                  }}
                  transition={{ 
                    scale: { duration: 0.8 },
                    opacity: { duration: 0.6 },
                    filter: { duration: 1 },
                    rotate: { repeat: Infinity, duration: 4, ease: "linear" }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#8b4513', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center',
                    border: '3px solid #cd853f'
                  }}
                >
                  <h2>Steampunk Gear</h2>
                </motion.div>
                
                {/* 25. Origami Unfold */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    rotateX: 180,
                    rotateY: 90,
                    opacity: 0,
                    transformOrigin: "center bottom"
                  }}
                  whileInView={{ 
                    rotateX: 0,
                    rotateY: 0,
                    opacity: 1
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#fab1a0', 
                    color: '#2d3436',
                    borderRadius: '8px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <h2>Origami Unfold</h2>
                </motion.div>
                
                {/* 26. Electric Current */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    x: -100
                  }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 5px #00d2d3, 0 0 10px #00d2d3",
                      "0 0 20px #00d2d3, 0 0 30px #00d2d3",
                      "0 0 40px #00d2d3, 0 0 50px #00d2d3",
                      "0 0 20px #00d2d3, 0 0 30px #00d2d3",
                      "0 0 5px #00d2d3, 0 0 10px #00d2d3"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6 },
                    x: { duration: 1, ease: "easeOut" },
                    boxShadow: { repeat: Infinity, duration: 1.5 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#00b894', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Electric Current</h2>
                </motion.div>
                
                {/* 27. Photon Beam */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scaleX: 0,
                    background: "linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%)"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scaleX: 1,
                    background: "linear-gradient(90deg, #ff7675 0%, #74b9ff 50%, #00b894 100%)"
                  }}
                  transition={{ 
                    duration: 1.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    color: '#fff',
                    borderRadius: '8px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  <h2>Photon Beam</h2>
                </motion.div>
                
                {/* 28. Quantum Tunnel */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scale: 0.1,
                    opacity: 0,
                    filter: "blur(20px)"
                  }}
                  whileInView={{ 
                    scale: 1,
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  animate={{
                    scale: [1, 1.05, 0.95, 1],
                    filter: [
                      "blur(0px) brightness(1)",
                      "blur(2px) brightness(1.2)",
                      "blur(0px) brightness(0.9)",
                      "blur(0px) brightness(1)"
                    ]
                  }}
                  transition={{ 
                    scale: { duration: 1 },
                    opacity: { duration: 0.8 },
                    filter: { repeat: Infinity, duration: 2 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#fd79a8', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center'
                  }}
                >
                  <h2>Quantum Tunnel</h2>
                </motion.div>
                
                {/* 29. Digital Reconstruction */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    clipPath: "inset(0 100% 0 0)"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    clipPath: "inset(0 0% 0 0)"
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#2d3436', 
                    color: '#00ff00',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    border: '1px solid #00ff00'
                  }}
                >
                  <h2>Digital Reconstruction</h2>
                </motion.div>
                
                {/* 30. Cosmic Wind */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    x: 200,
                    rotateZ: 45,
                    opacity: 0,
                    filter: "blur(10px)"
                  }}
                  whileInView={{ 
                    x: 0,
                    rotateZ: 0,
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  animate={{
                    x: [-2, 2, -1, 1, 0]
                  }}
                  transition={{ 
                    x: { duration: 1.2, ease: "easeOut" },
                    rotateZ: { duration: 1 },
                    opacity: { duration: 0.8 },
                    filter: { duration: 1 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#6c5ce7', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Cosmic Wind</h2>
                </motion.div>
                
                {/* 31. Particle Accelerator */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    scale: 0,
                    rotate: 0,
                    opacity: 0
                  }}
                  whileInView={{ 
                    scale: 1,
                    rotate: 360,
                    opacity: 1
                  }}
                  animate={{
                    rotate: [360, 0, 360],
                    boxShadow: [
                      "0 0 0px #ff6b6b",
                      "0 0 30px #ff6b6b, inset 0 0 30px #ff6b6b",
                      "0 0 0px #ff6b6b"
                    ]
                  }}
                  transition={{ 
                    scale: { duration: 0.8 },
                    opacity: { duration: 0.6 },
                    rotate: { repeat: Infinity, duration: 3, ease: "linear" },
                    boxShadow: { repeat: Infinity, duration: 1.5 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#e84393', 
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center'
                  }}
                >
                  <h2>Particle Accelerator</h2>
                </motion.div>
                
                {/* 32. Holographic Interface */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    y: 50,
                    rotateX: 45
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    rotateX: 0
                  }}
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,255,255,0.1), rgba(255,0,255,0.1))",
                      "linear-gradient(45deg, rgba(255,0,255,0.1), rgba(255,255,0,0.1))",
                      "linear-gradient(45deg, rgba(255,255,0,0.1), rgba(0,255,255,0.1))"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8 },
                    y: { duration: 1 },
                    rotateX: { duration: 1 },
                    background: { repeat: Infinity, duration: 3 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#2d3436', 
                    color: '#fff',
                    borderRadius: '8px',
                    border: '1px solid rgba(0,255,255,0.3)'
                  }}
                >
                  <h2>Holographic Interface</h2>
                </motion.div>
                
                {/* 33. Subatomic Vibration */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scale: 0.8
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scale: 1
                  }}
                  animate={{
                    x: [-1, 1, -0.5, 0.5, 0],
                    y: [-0.5, 0.5, -1, 1, 0],
                    scale: [1, 1.01, 0.99, 1.005, 1]
                  }}
                  transition={{ 
                    opacity: { duration: 0.6 },
                    scale: { duration: 0.8 },
                    x: { repeat: Infinity, duration: 0.1 },
                    y: { repeat: Infinity, duration: 0.15 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#00b894', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Subatomic Vibration</h2>
                </motion.div>
                
                {/* 34. Temporal Rift */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    scaleX: 0,
                    skewX: 45
                  }}
                  whileInView={{ 
                    opacity: 1,
                    scaleX: 1,
                    skewX: 0
                  }}
                  animate={{
                    background: [
                      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                      "linear-gradient(90deg, #764ba2 0%, #f093fb 100%)",
                      "linear-gradient(90deg, #f093fb 0%, #f5576c 100%)",
                      "linear-gradient(90deg, #f5576c 0%, #667eea 100%)"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8 },
                    scaleX: { duration: 1.2, ease: "easeOut" },
                    skewX: { duration: 1 },
                    background: { repeat: Infinity, duration: 2 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Temporal Rift</h2>
                </motion.div>
                
                {/* 35. Neutrino Detection */}
                <motion.div 
                  className="animation"
                  initial={{ 
                    opacity: 0,
                    filter: "brightness(0.1)"
                  }}
                  whileInView={{ 
                    opacity: 1,
                    filter: "brightness(1)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px #4834d4",
                      "0 0 10px #4834d4, 0 0 20px #4834d4",
                      "0 0 30px #4834d4, 0 0 40px #4834d4",
                      "0 0 10px #4834d4, 0 0 20px #4834d4",
                      "0 0 0px #4834d4"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 1.5, ease: "easeOut" },
                    filter: { duration: 2, ease: "easeOut" },
                    boxShadow: { repeat: Infinity, duration: 2.5 }
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  style={{ 
                    padding: '20px', 
                    backgroundColor: '#4834d4', 
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  <h2>Neutrino Detection</h2>
                </motion.div>
                
            </div>
        </div>

        <>
        
        </>
        </>
    )
}
export default animation