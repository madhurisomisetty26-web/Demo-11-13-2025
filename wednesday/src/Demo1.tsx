import React from 'react'

export default function Demo1() {

    const data=[
  {
    "Title": "The Lion King",
    "Year": "2019",
    "Runtime": "118 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
  },
  {
    "Title": "Mowgli: Legend of the Jungle",
    "Year": "2018",
    "Runtime": "104 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
  },
  {
    "Title": "Doctor Strange",
    "Year": "2016",
    "Runtime": "115 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
  },
  {
    "Title": "John Wick",
    "Year": "2014",
    "Runtime": "101 min",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
  },
  {
    "Title": "The Notebook",
    "Year": "2004",
    "Runtime": "123 min"
  }
]
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">  RowNumber</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John</td>
      <td>Doe</td>
      <td>@social</td>
    </tr>
  </tbody>
  {data.map(
    (data)=>(
        <tr>
            <td>{data.Title}</td>
            <td><img src={data.Poster}></img></td>
            <td>{data.Runtime}</td>
            <td>{data.Title}</td>

        </tr>
    )
  )}
</table>
    </div>
  )
}
