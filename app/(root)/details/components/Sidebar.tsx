
'use client';

import { Avatar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineMail, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiStar, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BiBuoy } from 'react-icons/bi';
import { AgentDetailsProps } from '@/types';
 
interface AgentCardProps {
    agent: AgentDetailsProps;
  }
export default function SideBar({agent}:AgentCardProps) {
  
      
    const isListedOnOpen = true;
  return (
   

    
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
         <Avatar img={agent.agentDetails?.photo.href} rounded size={"xl"} className='my-5' bordered color="purple"  status="away" statusPosition="bottom-right"/>
          <Sidebar.Item>
            <div className='flex flex-col  mx-auto items-center gap-2'>
                <p className='text-gray-400 text-lg'>
                    {agent.agentDetails?.full_name}
                </p>
                <p className='text-2xl font-extrabold text-purple-700'>
                {agent.agentDetails?.full_name}
                </p>
                <div className='flex flex-1 gap- mb-2'>
                <HiStar className='text-yellow-400'/>
                <p className='text-gray-400 '>
                {agent.agentDetails?.review_count}
                </p>
                <p className='text-gray-400 '>
                {agent.agentDetails?.rating}
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
    
  );
}
