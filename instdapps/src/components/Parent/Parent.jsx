import React, {Fragment} from 'react'
import NewPart1 from '../Part1/NewPart1';
import Part2 from '../Part2/Part2';
import Part3 from '../Part3/Part3';
import './parent.css'
const Parent = () => {
    const URL = 'https://instadapp.io/images/circles.svg'
    return ( 
        <div className = "parent">
            
        <NewPart1/>
        <Part2/>
        <Part3/>
        </div> );
}
 
export default Parent;