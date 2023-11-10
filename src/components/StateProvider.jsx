import React, {useState, createContext, useEffect} from 'react'
export const StateContext=createContext();

const StateProvider = ({children}) => {
   const[workTime,setWorkTime]=useState(25*60);
   const[shortBreakTime,setshortBreak]=useState(5*60);
   const[longBreakTime,setlongBreak]=useState(30*60);

   const[initTime,setInitTime]=useState(0);

   const [activetag, setActiveTag] = useState(0);
   const [progress, setProgress]=useState(60);
   const [time, setTime]=useState(600);
   const [isActive, setIsActive]=useState(false);

   useEffect(()=>{
      switch (activetag) {
         case 0:
            setTime(workTime);
            setInitTime(workTime);
            break;
         case 1:
            setTime(shortBreakTime);
            setInitTime(shortBreakTime);
            break;
         case 2:
            setTime(longBreakTime);
            setInitTime(longBreakTime);
            break;
         default:
            break;
      }
   },[activetag, workTime, shortBreakTime, longBreakTime]);

  return (
    <StateContext.Provider value={{activetag, setActiveTag, progress, setProgress, time, setTime, isActive, setIsActive, workTime, setWorkTime ,shortBreakTime, setshortBreak, longBreakTime, setlongBreak, initTime, setInitTime}}>{children}</StateContext.Provider>
  )
}

export default StateProvider