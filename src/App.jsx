import styled from 'styled-components';
import Tags from './components/tags/Tags';
import Timer from './components/Timer/Timer';
import Model from './components/Model/Model';
import { useState } from 'react';
import  {FaCog} from 'react-icons/fa';


function App() {

  const[isOpen,setIsOpen]=useState(false);


  const onClose=()=>{
    setIsOpen(false);
  }

  const onOpen=()=>{
    setIsOpen(true);
  }



  return (
    <>
    <Model isOpen={isOpen} onClose={onClose}/>
    <Title>Pomodoro Clock</Title>
    <Tags/>
    <Timer/>
    <CogIcon onClick={onOpen}>
      <FaCog/>
    </CogIcon>
    </>
  )
}

export default App

const Title=styled.h1`
  color: #fff;
  font-size: 6rem;
  text-align: center;
  padding: 2rem 0;
`;

const CogIcon=styled.div`
display: flex;
justify-content:center;
align-items: center;
font-size: 4rem;
`;