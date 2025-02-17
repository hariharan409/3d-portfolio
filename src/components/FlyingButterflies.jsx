import { motion } from "framer-motion";
import { BirdAnimation } from "./lottie-animation/LottieComponent";

const FlyingButterflies = () => {
    // Generate multiple butterflies with random positions
    const butterflies = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        startX: window.innerWidth + Math.random() * 100, // Start position from the right
        delay: Math.random() * 10, // Random delay
        size: Math.random() * 100 + 50, // Random size (50px to 150px)
    }));

    return(
        <div style={{ position: "absolute", width: "100vw", height: "100vh", overflow: "hidden" }}>
            {
                butterflies.map((butterfly) => (
                    <motion.div
                    key={butterfly.id}
                    initial={{ x: butterfly.startX, y: Math.random() * window.innerHeight, opacity: 0 }}
                    animate={{
                        x: "-10vh", // Move from right to left, going off the left side of the screen
                        opacity: 1,
                        rotate: [0, 15, -15, 0], // Sway effect
                    }}
                    transition={{
                        duration: 15 + Math.random() * 3, // Varying flight durations
                        delay: butterfly.delay,
                        repeat: Infinity, // Keep flying
                        ease: "easeInOut",
                    }}
                    style={{ position: "absolute", width: butterfly.size, height: butterfly.size }}
                    >
                    <BirdAnimation  width={"50px"} height={"50px"}/>
                    </motion.div>
                ))
            }
        </div>
    )

}

export default FlyingButterflies;