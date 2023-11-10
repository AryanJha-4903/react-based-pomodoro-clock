import styled from "styled-components"
import CircularPorgress from "./CircularProgress/CircularPorgress"


const Timer = () => {
  return (
    <TimerContainer>
      <CircularPorgress/>
    </TimerContainer>
  )
}

export default Timer


const TimerContainer=styled.div`
   background-color:  ${props => props.theme.color.secondary};
   height: 45rem;
   width: 45rem;
   border-radius: 50%;
   margin: 2rem auto;
   align-items: center;
   text-align: center;
   display: grid;
   place-items: center;
`