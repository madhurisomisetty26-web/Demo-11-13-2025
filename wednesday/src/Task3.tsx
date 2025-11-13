import React from 'react'

export default function Task3() {

     let cities=[{
        name:"lmn",
        lastname:"opw",
        middlename:"uyt",
    },
        {
        name:"abc",
        lastname:"edc",
        middlename:"ijb",
        }];
let mad="----------"
  return (
    <div>
        {
            cities.map(
                (cities)=>(
                    <div>
                        {mad}<br></br>
                        {cities.lastname}<br></br>
                        {cities.middlename}<br></br>
                        {cities.name}
                        <br></br>
                        {mad}
                        </div>

                )
            )
        }
        

    </div>
  );
}
