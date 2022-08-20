import React, { useState } from 'react';
import GreenBox from './GreenBox';
import RedBox from './RedBox';


   
export default function BoxHolder() {
  const [Redcount, setredCount] = useState(0);
  const [Greencount, setGreenCount] = useState(0);
  const [trun, settrunCount] = useState(1);
  const obj = {
  skip: 'Skip',
  Play:'Play',

  };

  function GreenBoxFunctin()
  {
    if(trun===1)
    {

      setGreenCount(1+Redcount)
      settrunCount(2)
    }
   
  }
  function RedBoxFunctin()
  {
    if(trun===2)
    {
      
      setredCount(1+Greencount)
      settrunCount(1)
    }
  }
  return (
   <>
   <div class="p-3 mb-2 ">
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <RedBox skip={obj.skip} Play={obj.Play} Redcount={Redcount}  onClick={RedBoxFunctin}/>
    </div>
    <div class="col">
    <GreenBox skip={obj.skip} Play={obj.Play} Greencount={Greencount}  onClick={GreenBoxFunctin} />
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
