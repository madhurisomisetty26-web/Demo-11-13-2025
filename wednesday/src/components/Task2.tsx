import React from 'react'

export default function Task2() {
   
    let abc=["lmn","opw","uyt"];
  return (

    <div>
           {abc.map((abc)=>(
                <div>
                {abc}
                <br></br>
                </div>
                )
              )
            
            }  
        </div>
  );
            
}

