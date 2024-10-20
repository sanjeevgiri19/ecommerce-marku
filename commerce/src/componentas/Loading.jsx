// import React from 'react'

// const Loading = () => {
//   return (
//     <div className='w-screen h-screen flex justify-center items-center'>
//         <h1 className='text-5xl'>Loading......</h1>
//     </div>
//   )
// }

// export default Loading

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
   <div className='w-full h-screen flex justify-center items-center'>
     <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
   </div>
  );
}
