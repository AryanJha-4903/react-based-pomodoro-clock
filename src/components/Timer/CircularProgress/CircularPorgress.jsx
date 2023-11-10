import styled from "styled-components"
import { useContext, useEffect } from "react"
import Clock from "./Clock/Clock";
import { StateContext } from "../../StateProvider";
const CircularPorgress = () => {
   const {progress, setProgress, time, initTime}=useContext(StateContext);

   useEffect(()=>{
      setProgress(time/(initTime/100))
   },[setProgress,time]);


  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
         <Clock/>
      </InnerCircle>
    </OuterCircle>
  )
}

export default CircularPorgress


const OuterCircle= styled.div`
   background: conic-gradient( ${props => props.theme.color.primary} ${({progress})=>progress}%,transparent  ${({progress})=>progress}%);
   height: 35rem;
   width: 35rem;
   border-radius: 50%;
   align-items: center;
   text-align: center;
   display: grid;
   place-items: center;
`

const InnerCircle= styled.div`
   background-color: ${props => props.theme.color.secondary};
   height: 33rem;
   width: 33rem;
   border-radius: 50%;
   align-items: center;
   text-align: center;
   display: grid;
   place-items: center;
`