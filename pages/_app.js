import '../styles/globals.css'
import { motion } from 'framer-motion'

function App({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0,
          },
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default App
