import React from 'react';
import Slide from '../components/Slide';
import { motion } from "framer-motion";

const itemVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 50, scale: 0.8 },
};

const OpeningSlide = () => (
    <Slide>
        <motion.h1
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mb-4 text-5xl font-bold"
        >
            Welcome to Our Presentation
        </motion.h1>
        <motion.p
            initial="hidden"
            animate="visible"
            variants={{
                ...itemVariants,
                visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.3 } }
            }}
            className="text-xl"
        >
            This is the opening slide.
        </motion.p>
    </Slide>
);

export default OpeningSlide;