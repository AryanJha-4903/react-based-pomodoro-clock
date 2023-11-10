import React, { useContext } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import {Formik, Form, Field} from 'formik';
import { StateContext } from '../StateProvider';

const ModelContainer = ({isOpen, onClose}) => {
   const{ workTime, setWorkTime ,shortBreakTime, setshortBreak, longBreakTime, setlongBreak}=useContext(StateContext); 



  return (
    <Container>
      <ModelContent
      initial={{y:"-100vh",scale:0}}
      animate={{y:0,scale:1}}
      exit={{y:"-100vh",scale:0}}
      >
         <ModelHeader>
            <ModelTitle>Settings</ModelTitle>
            <ModelButton onClick={onClose}><FaWindowClose fontSize='5rem'/></ModelButton>
         </ModelHeader>
         <ModelBody>
            <Formik
             initialValues={{work:workTime/60 , short:shortBreakTime/60 ,long:longBreakTime/60}}
             onSubmit={(values)=>{
               setWorkTime(values.work*60);
               setshortBreak(values.short*60);
               setlongBreak(values.long*60);
               onClose();
             }}
             >
               <Form>
                  <InputWrapper>
                  <FormControl>
                     <label htmlFor="work">Work</label>
                     <Field name="work" min='1' max='60'/>
                  </FormControl>
                  <FormControl>
                     <label htmlFor="short">Short Break</label>
                     <Field name="short" min='1' max='60'/>
                  </FormControl>
                  <FormControl>
                     <label htmlFor="long">Long Break</label>
                     <Field name="long" min='1' max='60'/>
                  </FormControl>
                  </InputWrapper>
                  <ButtonWrapper>
                  <ApplyButton type='submit'>Apply</ApplyButton>
                  </ButtonWrapper>
               </Form>
             </Formik>
         </ModelBody>
      </ModelContent>
    </Container>
  )
}

export default ModelContainer


const ButtonWrapper=styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 2rem;
`

const ApplyButton=styled.button`
   all: unset;
   background: ${props => props.theme.color.primary};
   color: white;
   padding: .8rem 2rem;
   border-radius: 3px;
`



const InputWrapper= styled.div`
display: flex;
padding: 1rem;
gap: 2rem;
`;

const FormControl=styled.div`
flex:1;
display:flex;
flex-direction: column;
color: black;
gap: 0.7rem;
label{
   font-size: 2rem;
}
input{
   height: 3rem;
   width: 100%;
   border-radius:1rem;
   border: 1px solid black;
   padding: 1rem;
   font-size: 2rem;
   background-color: #ead8fc;
}
`;

const Container=styled.div`
position: absolute;
height: 100vh;
width: 100vw;
display: grid;
place-items: center;
z-index: 150;
 `;
const ModelContent=styled(motion.div)`
width: 60rem;
height: 40rem;
background-color: white;

@media (max-width: 600px) {
   width:90%;
   padding: 1rem;
}
`;
const ModelHeader=styled.header`
color: black;
padding: 2rem;
display: flex;
justify-content: space-between;
border-bottom: solid .3px #060606;

`;
const ModelTitle=styled.h3`
font-size:5rem;
`;
const ModelButton=styled.button`all:unset`;
const ModelBody=styled.div``

   
   