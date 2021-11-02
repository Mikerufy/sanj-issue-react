import React, {Fragment} from 'react'
import NewPart1 from '../Part1/NewPart1';
import Part2 from '../Part2/Part2';
import Part3 from '../Part3/Part3';
const Parent = () => {
    const URL = 'https://instadapp.io/images/circles.svg'
    return ( 
    <Fragment>
        <div style={{
            backgroundImage: "url('https://instadapp.io/images/circles.svg')",
            backgroundRepeat:'no-repeat',
            display:"flex",
            flexDirection:"column",
            justifyContent: "center",
        }}>
            
        <NewPart1/>
        <Part2/>
        <Part3/>
        </div>
    </Fragment> );
}
 
export default Parent;