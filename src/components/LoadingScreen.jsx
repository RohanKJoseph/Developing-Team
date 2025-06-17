import { motion } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <h1 className="text-5xl text-purple-500 font-techno animate-pulse">SHASTRA 2025</h1>
    </motion.div>
  );
};

export default LoadingScreen;
