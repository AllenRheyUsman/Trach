
'use client';

import { Avatar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineMail, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiStar, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { AgentDetailsProps } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
 
export default function SideBar() {
  const [agentDetails, setAgentDetails] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      // Get the current URL
      const url = new URL(window.location.href);
      // Extract the ID from the URL
      const id = url.searchParams.get('id');

      const options = {
        method: 'GET',
        url: `https://realtor16.p.rapidapi.com/agent?id=${id}`,
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
          'X-RapidAPI-Host':  process.env.NEXT_PUBLIC_RAPID_API_HOST || ""
        },
      };

      try {
        const response = await axios.request(options);
        setAgentDetails(response.data.agentDetails);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Get the first five keys from agentDetails
  const firstFiveKeys = agentDetails ? Object.keys(agentDetails).slice(0, 10) : [];
  
      
    const isListedOnOpen = true;
  return (
   

    <div>
        {/* <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agent Detailsd</h1>
      <ul className="list-disc pl-6">
        {firstFiveKeys.map((key) => (
          <li key={key}>
            <span className="font-bold">{key}:</span> {JSON.stringify(agentDetails[key])}
          </li>
        ))}
      </ul>
    </div> */}
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         <Avatar img={agentDetails?.photo?.href} rounded size={"xl"} className='my-5' bordered color="purple"  status="away" statusPosition="bottom-right"/>
          <Sidebar.Item>
        
            <div className='flex flex-col  mx-auto items-center gap-2'>
                <p className='text-gray-400 text-lg'>
                    {agentDetails?.full_name}
                </p>
                <p className='text-2xl font-extrabold text-purple-700'>
                {agentDetails?.full_name}
                </p>
                <div className='flex flex-1 gap- mb-2'>
                <HiStar className='text-yellow-400'/>
                <p className='text-gray-400 '>
                {agentDetails?.review_count}
                </p>
                <p className='text-gray-400 '>
                {agentDetails?.rating}
                </p>
                </div>
            </div>
            <div className='flex flex-col  mx-auto items-center gap-2 my-5 '>
                <button className='bg-purple-500 py-3 text-white rounded-lg px-8 flex gap-2 hover:bg-purple-700  '>
                <HiOutlineMail size={24}/>
                    Send a message
                </button>
            </div>
          </Sidebar.Item>
          <Sidebar.Collapse  className='text-lg font-extrabold text-purple-600' label="Services">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
            <Sidebar.Collapse  className='text-md font-bold text-purple-500' label="View More">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          </Sidebar.Collapse>
         
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
        <Sidebar.Collapse
          className="text-lg font-extrabold text-purple-600"
          label="Listed On"
        >

{isListedOnOpen ? (
            <>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
            <Sidebar.Collapse  className='text-md font-bold text-purple-500' label="View More">
            <Sidebar.Item href="#" icon={HiShoppingBag}>Products</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Sales</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Refunds</Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>Shipping</Sidebar.Item>
          </Sidebar.Collapse>
          </>
          ) : null}
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    </div>
  );
}
