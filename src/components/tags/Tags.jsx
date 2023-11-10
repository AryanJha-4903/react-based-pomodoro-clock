import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "../StateProvider";
const Tags = () => {
  const {activetag, setActiveTag} = useContext(StateContext);

  const handleTagClick=(index)=>{
    setActiveTag(index);
  }

  return (
    <TagContainer>{["Work","Short Break","Long Break"].map((tag,i)=>
      <Tag  onClick={()=>handleTagClick(i)} activetag={activetag===i} key={i}>{tag}</Tag>)}</TagContainer>
  )
};

export default Tags

const TagContainer=styled.div`
   background: ${props => props.theme.color.secondary};
   border-radius: 5rem;
   height: 5rem;
   width: 40rem;
   margin: 0 auto;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   gap: .5rem;
`;

const Tag=styled.button`
  all: unset;
  font-size: 1.2rem;
  flex: 1;
  text-align: center;
  border-radius: 5rem;
  height: 4rem;
  font-size: 1.8rem;
  cursor: pointer;
 


  ${({activetag})=>activetag && css`
  background-color: ${props => props.theme.color.primary};`}
`;