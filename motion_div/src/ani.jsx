1️⃣ Fade In + Slide Up (Default Smooth Scroll)
jsx
Copy
Edit
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
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
<motion.div
  initial={{ opacity: 0, backgroundColor: "#000000" }}
  whileInView={{ opacity: 1, backgroundColor: "#ff00ff" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.3 }}
>
  <h2>Color Fade In</h2>
</motion.div>
1️⃣5️⃣ Text Typing Effect
jsx
Copy
Edit
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const message = "Typing Animation";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
};

export default TypingEffect;