import React, { useState } from 'react';
import GreenBox from './GreenBox';
import RedBox from './RedBox';


   
export default function BoxHolder() {
  const [count, setCount] = useState(0);
  
 function Add(){
  // setCount(count + 1)
  console.log("btn clicked  ")
 } 
  
  const obj = {skip: 'Skip',
  Play:'Play',
 count:count ,
 AddPlayNumberRed:{Add} };
  return (
    
   <>

   <div class="p-3 mb-2 ">
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <RedBox skip={obj.skip} Play={obj.Play} count={obj.count}  AddPlayNumberRed={obj.AddPlayNumberRed} />
    </div>
    <div class="col">
    <GreenBox skip={obj.skip} Play={obj.Play} count={obj.count} />
    </div>
    <div class="row">
    <div class="col bg-primary text-white">
    <p>now BOX Trun</p>
    </div>
  </div>
</div>
   </div>
   </div>

   
   </>
   
  )
}
