import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {
  // const hiddenAnimationState = { opacity: 0, y: 30 }
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: {opacity: 0, y: 30},
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" //set the starting state of this element because we have no indicator if the element is just added to the screen now or added 2 min later (talking about the modal in this case)
        animate='visible'
        exit='hidden'
        // exit={{ opacity: 0, y: 30 }}
        open
        className="modal">
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
