import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import { StateContext } from "../../../StateProvider";
const Clock = () => {
   const {time, setTime, isActive, setIsActive, initTime}=useContext(StateContext);
   useEffect(()=>{
      if(isActive&&time>0){
         const interval=setInterval(()=>{
            setTime((time)=>time-1);
         },1000);
   
         return ()=>clearInterval(interval);
      }
   },[time, isActive])

   const toggleClock=()=>{
      setIsActive(!isActive);
   };

   const getTime=(time)=>{
      const min=Math.floor(time/60);
      const sec= time%60;
      return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`
   }

   const resetTime=()=>{
      setTime(initTime);
      setIsActive(false);
   }


  return (
   <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StartPauseButton onClick={toggleClock}>{isActive? "PAUSE":"START"}</StartPauseButton>
      {time ===0 && <ResetButton onClick={resetTime}>RESET</ResetButton>}
   </ClockContainer>
  )
}

export default Clock

const ClockContainer= styled.div`
   display: grid;
   align-items: center;
`
const TimerText = styled.h3`
  font-size: 8rem;
  color: #fff;`

const StartPauseButton=styled.button`
   all: unset;
   background-color: transparent;
   border: none;
   font-size: 3rem;
   cursor: pointer;
   letter-spacing: .5rem;
`

const ResetButton=styled(StartPauseButton)`
   color: red;
`