// import React from "react";

// const Chart = (props) => {
//     return (
//         <>
//         <p>{props.name}</p>
//         <h1>{props.email}</h1>
//         <b>{props.children}</b>
//         </>
//     )
// }

// export default Chart;

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { date: 'Jun 1', pages: 10 },
  { date: 'Jun 2', pages: 20 },
  { date: 'Jun 3', pages: 10 },
  { date: 'Jun 4', pages: 15 },
  { date: 'Jun 5', pages: 20 },
  { date: 'Jun 6', pages: 10 },
  { date: 'Jun 7', pages: 10 },
  // ...
];

const Chart = () => {
  return (
    <>
      <div className='flex-1 mb-10'>
        
        <h1 className="text-2xl text-[#023766] font-medium mb-10">
          Your Last week Reading
        </h1>

        <LineChart width={500} height={300} data={data} >
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="pages" stroke="#8884d8" />
        </LineChart>

      </div>
    </>
  );
}

export default Chart;