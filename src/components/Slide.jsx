import React from 'react';
import { motion } from "framer-motion";

const containerVariants = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
};

const Slide = ({ children }) => (
    <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={containerVariants}
        className="slide flex flex-col justify-center h-full"
    >
        {children}
    </motion.div>
);

export default Slide;