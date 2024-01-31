'use client';
import React, { useState, useEffect } from 'react';

import Home from './components/Home';
import AuthContext from '../context/AuthContext';

const Page = () => {
  const [showJumbotron, setShowJumbotron] = useState(false);

  useEffect(() => {
    // You might fetch data or handle any side effect here
    // For now, let's simulate showing the Jumbotron after a delay
    const timeoutId = setTimeout(() => {
      setShowJumbotron(true);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
   <>
   
     <Home/>
   
       
    </>
  );
};

export default Page;
