import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SeparateTextButtonAnimations = () => {
  const [clickStates, setClickStates] = useState({});

  const handleClick = (id) => {
    setClickStates(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
    <Link to={"/div"}>
    <button>animation of div</button>
    </Link>
    <>
    <div style={{ 
      padding: '40px', 
      minHeight: '100vh',
      width: "90vw", 
      fontFamily: 'Arial, sans-serif', 
    //   backgroundColor: '#0a0a0a',
      color: 'white'
    }}>
      <h1 style={{ 
        color: 'white', 
        textAlign: 'center', 
        marginBottom: '60px', 
        fontSize: '2.5rem',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Ultimate Animation Showcase
      </h1>
      
      {/* TEXT ANIMATIONS SECTION */}
      <h2 style={{ 
        color: '#4ecdc4', 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '2rem',
        textShadow: '0 0 10px #4ecdc4'
      }}>
        Text Animations Collection
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px', 
        marginBottom: '60px' 
      }}>
        
        {/* 1. Fade In Up Text */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px #00ff00",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            color: '#00ff00', 
            borderRadius: '12px',
            border: '2px solid #00ff00',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Fade In Up</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Standard fade with upward motion</p>
        </motion.div>

        {/* 2. Typewriter Effect */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ 
            backgroundColor: '#2a2a2a',
            boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'left',
            cursor: 'pointer',
            fontFamily: 'monospace',
            border: '2px solid #333'
          }}
        >
          <motion.h3 
            style={{ margin: 0, fontSize: '1.8rem' }}
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Typewriter Effect
          </motion.h3>
          <motion.p 
            style={{ margin: '10px 0 0 0', opacity: 0.8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Text appears like typing...
          </motion.p>
        </motion.div>

        {/* 3. Spiral In */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, scale: 0, rotate: -360 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ 
            rotate: 10,
            scale: 1.08,
            backgroundImage: 'linear-gradient(45deg, #ff6b6b, #ff8e53)',
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#ff6b6b', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Spiral In</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Rotating scale animation</p>
        </motion.div>

        {/* 4. Elastic Bounce */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ 
            opacity: 1, 
            y: [0, -20, 10, -5, 0],
          }}
          whileHover={{ 
            y: [0, -10, 5, 0],
            backgroundColor: '#5dade2',
            transition: { duration: 0.4, repeat: 1 }
          }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.3, 0.6, 0.8, 1]
          }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#3498db', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Elastic Bounce</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Multi-stage bounce effect</p>
        </motion.div>

        {/* 5. Wave Motion */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, x: -100, skewX: -20 }}
          whileInView={{ opacity: 1, x: 0, skewX: 0 }}
          whileHover={{ 
            skew: [0, 5, -5, 0],
            x: [0, 5, -5, 0],
            backgroundColor: '#e74c3c',
            transition: { duration: 0.6 }
          }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#c0392b', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Wave Motion</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Skewed slide animation</p>
        </motion.div>

        {/* 6. Zoom Blur */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          whileHover={{ 
            scale: 1.1,
            filter: "blur(1px) brightness(1.2)",
            backgroundColor: '#16a085',
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#1abc9c', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Zoom Blur</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Scale with blur effect</p>
        </motion.div>

        {/* 7. Slide Rotate */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, x: 200, rotate: 90 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          whileHover={{ 
            rotate: -5,
            x: -10,
            backgroundColor: '#d63031',
            boxShadow: "10px 0 20px rgba(214, 48, 49, 0.3)",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#e17055', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Slide Rotate</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Combined slide and rotation</p>
        </motion.div>

        {/* 8. Morphing Scale */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, scaleX: 0, scaleY: 2 }}
          whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
          whileHover={{ 
            scaleX: [1, 1.2, 1],
            scaleY: [1, 0.8, 1],
            backgroundColor: '#6c5ce7',
            transition: { duration: 0.5 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#a29bfe', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Morphing Scale</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Asymmetric scaling effect</p>
        </motion.div>

        {/* 9. Pendulum Swing */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, rotate: -45, y: -50 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          whileHover={{ 
            rotate: [0, 10, -10, 5, -5, 0],
            transformOrigin: "top center",
            transition: { duration: 0.8 }
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#fd79a8', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            transformOrigin: 'top center'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Pendulum Swing</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Swinging motion effect</p>
        </motion.div>

        {/* 10. Glitch Effect */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ 
            x: [0, -2, 2, -1, 1, 0],
            filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(180deg)", "hue-rotate(0deg)"],
            textShadow: ["0 0 0px #ff0000", "2px 0 0px #ff0000, -2px 0 0px #00ffff", "0 0 0px #ff0000"],
            transition: { duration: 0.4 }
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#2d3436', 
            color: '#00ff00', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '2px solid #00ff00',
            fontFamily: 'monospace'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Glitch Effect</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Digital distortion animation</p>
        </motion.div>

        {/* 11. Magnetic Pull */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, scale: 0.1, x: -200, y: -200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, 0],
            boxShadow: "0 0 40px rgba(255, 193, 7, 0.6)",
            backgroundColor: '#f39c12',
            transition: { duration: 0.4 }
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#ffc107', 
            color: '#333', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Magnetic Pull</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Diagonal attraction effect</p>
        </motion.div>

        {/* 12. Liquid Morph */}
        <motion.div 
          className="animation2"
          initial={{ opacity: 0, borderRadius: "50%", scale: 0.3 }}
          whileInView={{ opacity: 1, borderRadius: "12px", scale: 1 }}
          whileHover={{ 
            borderRadius: ["12px", "50px", "20px", "12px"],
            scale: [1, 1.1, 0.95, 1.02, 1],
            backgroundColor: '#55a3ff',
            transition: { duration: 0.8 }
          }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ 
            padding: '30px', 
            backgroundColor: '#74b9ff', 
            color: '#fff', 
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Liquid Morph</h3>
          <p style={{ margin: '10px 0 0 0', opacity: 0.8 }}>Shape morphing animation</p>
        </motion.div>

      </div>

      {/* BUTTON ANIMATIONS SECTION */}
      <h2 style={{ 
        color: '#ff6b6b', 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '2rem',
        textShadow: '0 0 10px #ff6b6b'
      }}>
        Interactive Button Showcase
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        
        {/* 1. Scale Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Scale Button</h3>
          <motion.button
            className="animation2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#00ff00',
              boxShadow: "0 0 20px rgba(0, 255, 0, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick('scale')}
            transition={{ duration: 0.3 }}
            style={{
              padding: '15px 30px',
              backgroundColor: '#007700',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['scale'] ? 'SCALED!' : 'SCALE ME'}
          </motion.button>
        </motion.div>

        {/* 2. Neon Glow Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Neon Glow</h3>
          <motion.button
            className="animation2"
            initial={{ opacity: 0, boxShadow: "0 0 0px rgba(255, 20, 147, 0)" }}
            whileInView={{ opacity: 1 }}
            whileHover={{ 
              boxShadow: [
                "0 0 5px rgba(255, 20, 147, 0.5)",
                "0 0 25px rgba(255, 20, 147, 0.8)",
                "0 0 35px rgba(255, 20, 147, 1)",
                "0 0 50px rgba(255, 20, 147, 0.8)"
              ],
              backgroundColor: '#ff1493',
              color: '#fff',
              textShadow: "0 0 10px #fff",
              transition: { duration: 0.6 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick('neon')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#8b008b',
              color: 'white',
              border: '2px solid #ff1493',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['neon'] ? 'GLOWING!' : 'GLOW ME'}
          </motion.button>
        </motion.div>

        {/* 3. Magnetic Hover */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Magnetic Hover</h3>
          <motion.button
            className="animation2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ 
              y: -10,
              x: [0, -3, 3, -2, 2, 0],
              backgroundColor: '#ff6348',
              boxShadow: "0 15px 25px rgba(255, 99, 72, 0.4)",
              transition: { duration: 0.4 }
            }}
            whileTap={{ y: 0, x: 0 }}
            onClick={() => handleClick('magnetic')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#ff4757',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['magnetic'] ? 'ATTRACTED!' : 'ATTRACT ME'}
          </motion.button>
        </motion.div>

        {/* 4. Liquid Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Liquid Morph</h3>
          <motion.button
            className="animation2"
            initial={{ borderRadius: "50px", scale: 0.5, opacity: 0 }}
            whileInView={{ borderRadius: "8px", scale: 1, opacity: 1 }}
            whileHover={{ 
              borderRadius: ["8px", "25px", "40px", "15px", "8px"],
              scale: [1, 1.1, 0.9, 1.05, 1],
              backgroundColor: '#00cec9',
              transition: { duration: 0.8 }
            }}
            whileTap={{ borderRadius: "50px", scale: 0.9 }}
            onClick={() => handleClick('liquid')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#00b894',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['liquid'] ? 'MORPHED!' : 'MORPH ME'}
          </motion.button>
        </motion.div>

        {/* 5. Explode Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Explode Effect</h3>
          <motion.button
            className="animation2"
            initial={{ scale: 0.1, rotate: -180, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            whileHover={{ 
              scale: [1, 1.3, 0.8, 1.1, 1],
              rotate: [0, 180, 360],
              backgroundColor: '#fd79a8',
              boxShadow: "0 0 30px rgba(253, 121, 168, 0.6)",
              transition: { duration: 0.6 }
            }}
            whileTap={{ scale: 0.7, rotate: 180 }}
            onClick={() => handleClick('explode')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#e84393',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['explode'] ? 'EXPLODED!' : 'EXPLODE ME'}
          </motion.button>
        </motion.div>

        {/* 6. Ripple Effect */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Ripple Effect</h3>
          <motion.button
            className="animation2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ 
              scale: [1, 1.1, 1.2, 1.1, 1],
              boxShadow: [
                "0 0 0 0px rgba(52, 152, 219, 0.4)",
                "0 0 0 10px rgba(52, 152, 219, 0.3)",
                "0 0 0 20px rgba(52, 152, 219, 0.2)",
                "0 0 0 30px rgba(52, 152, 219, 0.1)",
                "0 0 0 0px rgba(52, 152, 219, 0)"
              ],
              backgroundColor: '#74b9ff',
              transition: { duration: 0.8 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick('ripple')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['ripple'] ? 'RIPPLED!' : 'RIPPLE ME'}
          </motion.button>
        </motion.div>

        {/* 7. Matrix Style */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Matrix Style</h3>
          <motion.button
            className="animation2"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            whileHover={{ 
              backgroundColor: '#27ae60',
              color: '#000',
              textShadow: "0 0 10px #00ff00",
              boxShadow: "inset 0 0 20px rgba(0, 255, 0, 0.3)",
              filter: "brightness(1.2)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              filter: "brightness(2) contrast(2)",
              textShadow: "0 0 20px #00ff00"
            }}
            onClick={() => handleClick('matrix')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#2d3436',
              color: '#00ff00',
              border: '2px solid #00ff00',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              fontFamily: 'monospace'
            }}
          >
            {clickStates['matrix'] ? 'ACCESSED!' : 'HACK ME'}
          </motion.button>
        </motion.div>

        {/* 8. Particle Burst */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Particle Burst</h3>
          <motion.button
            className="animation2"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: 1.1,
              backgroundColor: '#ffeaa7',
              color: '#2d3436',
              boxShadow: [
                "0 0 20px rgba(255, 234, 167, 0.6)",
                "5px 5px 15px rgba(255, 234, 167, 0.4)",
                "-5px -5px 15px rgba(255, 234, 167, 0.4)",
                "10px -10px 20px rgba(255, 234, 167, 0.3)",
                "-10px 10px 20px rgba(255, 234, 167, 0.3)"
              ],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick('particle')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#fdcb6e',
              color: '#2d3436',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['particle'] ? 'BURST!' : 'BURST ME'}
          </motion.button>
        </motion.div>

        {/* 9. Levitate Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Levitate</h3>
          <motion.button
            className="animation2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ 
              y: [0, -15, -10, -15, -10],
              backgroundColor: '#a29bfe',
              boxShadow: "0 25px 50px rgba(162, 155, 254, 0.4)",
              transition: { 
                y: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                backgroundColor: { duration: 0.3 },
                boxShadow: { duration: 0.3 }
              }
            }}
            whileTap={{ y: 5 }}
            onClick={() => handleClick('levitate')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#6c5ce7',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['levitate'] ? 'FLOATING!' : 'LEVITATE ME'}
          </motion.button>
        </motion.div>

        {/* 10. Hologram Effect */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Hologram</h3>
          <motion.button
            className="animation2"
            initial={{ opacity: 0.5, filter: "brightness(0.5)" }}
            whileInView={{ opacity: 1, filter: "brightness(1)" }}
            whileHover={{ 
              opacity: [1, 0.8, 1, 0.9, 1],
              filter: [
                "brightness(1) hue-rotate(0deg)",
                "brightness(1.5) hue-rotate(90deg)",
                "brightness(1.2) hue-rotate(180deg)",
                "brightness(1.8) hue-rotate(270deg)",
                "brightness(1) hue-rotate(360deg)"
              ],
              textShadow: [
                "0 0 5px #00ffff",
                "0 0 10px #ff00ff", 
                "0 0 15px #ffff00",
                "0 0 10px #00ffff"
              ],
              transition: { duration: 0.8 }
            }}
            whileTap={{ opacity: 0.6, filter: "brightness(2)" }}
            onClick={() => handleClick('hologram')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#00cec9',
              color: 'white',
              border: '2px solid #74b9ff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['hologram'] ? 'PROJECTED!' : 'PROJECT ME'}
          </motion.button>
        </motion.div>

        {/* 11. Earthquake Shake */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Earthquake</h3>
          <motion.button
            className="animation2"
            initial={{ x: 0, y: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ 
              x: [0, -3, 3, -2, 2, -1, 1, 0],
              y: [0, -2, 2, -1, 1, -2, 2, 0],
              backgroundColor: '#d63031',
              transition: { 
                x: { duration: 0.1, repeat: Infinity },
                y: { duration: 0.15, repeat: Infinity },
                backgroundColor: { duration: 0.3 }
              }
            }}
            whileTap={{ 
              x: [0, -5, 5, -3, 3, 0],
              y: [0, -3, 3, -2, 2, 0]
            }}
            onClick={() => handleClick('earthquake')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#e17055',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['earthquake'] ? 'SHAKING!' : 'SHAKE ME'}
          </motion.button>
        </motion.div>

        {/* 12. Teleport Button */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Teleport</h3>
          <motion.button
            className="animation2"
            initial={{ scale: 1, opacity: 1 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: [1, 0.1, 1.3, 1],
              opacity: [1, 0, 0.5, 1],
              backgroundColor: '#00b894',
              filter: "blur(0px)",
              transition: { duration: 0.6 }
            }}
            whileTap={{ 
              scale: [1, 0, 1.2, 1],
              opacity: [1, 0, 1]
            }}
            onClick={() => handleClick('teleport')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#00cec9',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['teleport'] ? 'TELEPORTED!' : 'TELEPORT ME'}
          </motion.button>
        </motion.div>

        {/* 13. Pulse Wave */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Pulse Wave</h3>
          <motion.button
            className="animation2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ 
              scale: [1, 1.1, 1.2, 1.1, 1],
              backgroundColor: '#fd79a8',
              boxShadow: [
                "0 0 0 0px rgba(253, 121, 168, 0.7)",
                "0 0 0 10px rgba(253, 121, 168, 0.5)",
                "0 0 0 20px rgba(253, 121, 168, 0.3)",
                "0 0 0 30px rgba(253, 121, 168, 0.1)",
                "0 0 0 40px rgba(253, 121, 168, 0)"
              ],
              transition: { 
                scale: { duration: 0.6 },
                boxShadow: { duration: 1, repeat: Infinity },
                backgroundColor: { duration: 0.3 }
              }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick('pulse')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#e84393',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['pulse'] ? 'PULSING!' : 'PULSE ME'}
          </motion.button>
        </motion.div>

        {/* 14. Crystal Shatter */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Crystal Shatter</h3>
          <motion.button
            className="animation2"
            initial={{ opacity: 0, filter: "brightness(0.5)" }}
            whileInView={{ opacity: 1, filter: "brightness(1)" }}
            whileHover={{ 
              backgroundColor: '#74b9ff',
              filter: "brightness(1.5) contrast(1.2)",
              textShadow: "0 0 10px #ffffff",
              boxShadow: [
                "inset 0 0 20px rgba(255, 255, 255, 0.1)",
                "inset 5px 5px 10px rgba(255, 255, 255, 0.2)",
                "inset -5px -5px 10px rgba(255, 255, 255, 0.2)",
                "0 0 30px rgba(116, 185, 255, 0.5)"
              ],
              transition: { duration: 0.4 }
            }}
            whileTap={{ 
              filter: "brightness(2) contrast(2)",
              scale: [1, 0.9, 1.1, 1]
            }}
            onClick={() => handleClick('crystal')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#0984e3',
              color: 'white',
              border: '2px solid #74b9ff',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['crystal'] ? 'SHATTERED!' : 'SHATTER ME'}
          </motion.button>
        </motion.div>

        {/* 15. Time Warp */}
        <motion.div 
          className="animation2"
          style={{ 
            padding: '30px', 
            backgroundColor: '#1a1a1a', 
            borderRadius: '12px',
            textAlign: 'center',
            border: '2px solid #333'
          }}
        >
          <h3 style={{ color: 'white', margin: '0 0 20px 0' }}>Time Warp</h3>
          <motion.button
            className="animation2"
            initial={{ scaleX: 1, scaleY: 1, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ 
              scaleX: [1, 2, 0.5, 1.5, 1],
              scaleY: [1, 0.5, 2, 0.8, 1],
              backgroundColor: '#a29bfe',
              filter: "hue-rotate(180deg)",
              transition: { duration: 0.8 }
            }}
            whileTap={{ 
              scaleX: 0.1,
              scaleY: 3,
              transition: { duration: 0.2 }
            }}
            onClick={() => handleClick('timewarp')}
            style={{
              padding: '15px 30px',
              backgroundColor: '#6c5ce7',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {clickStates['timewarp'] ? 'WARPED!' : 'WARP ME'}
          </motion.button>
        </motion.div>

      </div>

      {/* Footer */}
      <motion.div
        className="animation2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '20px',
          borderTop: '2px solid #333',
          color: '#888'
        }}
      >
        <p style={{ margin: 0, fontSize: '1.1rem' }}>
          🎨 Ultimate Animation Showcase - Interactive Elements with Framer Motion
        </p>
      </motion.div>
    </div>
    </>
    
    </>
  );
};

export default SeparateTextButtonAnimations;