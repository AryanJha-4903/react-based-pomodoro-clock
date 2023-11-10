import React from 'react'
import styled from 'styled-components';
import BackDrop from './BackDrop';
import ModelContainer from './ModelContainer';
import { AnimatePresence } from 'framer-motion';


const Model = ({isOpen, onClose}) => {
  return (
   <>
    <AnimatePresence>
    {isOpen &&
    (
      <>
      <BackDrop/>
      <ModelContainer  isOpen={isOpen} onClose={onClose}/>
      </>
    )}
    </AnimatePresence>
   </>
  )
}

export default Model