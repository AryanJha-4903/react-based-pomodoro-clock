import React from 'react'
import styled from 'styled-components';

const BackDrop = () => {
  return (
    <KbackDrop/>
  )
}

export default BackDrop



const KbackDrop= styled.div`
   height: 100%;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   background-color: #000000b0;
`