import React from 'react'

export default function Task1() {

  {/* IF WE CAN TAKE ONE ELEMENT 
    IF WE TAKE ONR OR MORE ELEMENT USE"[]" SQuare bracket*/}
    
  let student=[{
    name:"madhuri",
    rollnumber:"12345",
    lastname:"somisetty",
  },
  {
    name:"somisetty",
    rollnumber:"4567",
    lastname:"madhuri",
  }]

  return (
    <div>
       <h1>name: {student[0].name}</h1><br></br>
       <p> rollnumber:{student[0].rollnumber}</p><br></br>
        <p>lastname:{student[0].lastname}</p><br></br>

       


    </div>
  )
}
