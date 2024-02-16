// 'use client';
// import { fetchAgent } from "@/utils";
// import { useRouter } from 'next/navigation';
// import { CarCard2, ShowMore, SearchBar2, OffCanvas } from "@/components";
// import { HomeProps2, AgentProps } from "@/types";
// import React, { useEffect, useState } from 'react';
// import ResultSearchBar from "@/components/ResultSearchBar";
// import { Pagination } from "flowbite-react";
// import Dropdown from "@/components/Dropdown";
// import { Container, DropdownButton, Nav, NavDropdown, Navbar } from "react-bootstrap";
// import { SearchLocationProps } from '@/types';
// import AgentCard2 from "@/components/AgentCard2";
// import { rating } from "@/constants";
// import AgentCard from "@/components/AgentCard";

// // ... (imports)

// const ResultPage = ({ searchParams }: HomeProps2) => {
//   const [location, setLocation] = useState('');
//   const router = useRouter();
//   const [allAgents, setAllAgents] = useState<AgentProps[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedAgent, setSelectedAgent] = useState<AgentProps | null>(null);

//   const onPageChange = (page: number) => setCurrentPage(page);

//   useEffect(() => {
//     const fetchAgentsData = async () => {
//       try {
//         const agents = await fetchAgent({
//           location: searchParams.location || "",
//           agentname: searchParams.agentname || "",
//           rating: searchParams.rating || 0,
//           price: searchParams.price || "",
//         });

//         setAllAgents(agents);
//       } catch (error) {
//         console.error('Error fetching agents:', error);
//       }
//     };

//     fetchAgentsData();
//   }, [searchParams]);

//   const isDataEmpty = !Array.isArray(allAgents) || allAgents.length < 1 || !allAgents;

//   return (
//     <main className="">
//       <div className="hero z-50">
//         <ResultSearchBar location={location} setLocation={setLocation} />
//         <p>
           
//         </p>
//       </div>

//       <div className="hero grid grid-cols-2 my-5 font-semibold text-xl px-5 gap-2">
//         <div className="flex flex-wrap">
//           {allAgents.length} agents found in
//           {selectedAgent && (
//             <p className="ml-2">{selectedAgent.full_name}</p>
//           )}
//           <span className="text-[#9300FF] ml-2">
//             {searchParams.location || "All Locations"}
//           </span>
//         </div>
//         <div className="ml-auto z-50 bg-white p-3 rounded-md ">
//           <Dropdown />
//         </div>
//       </div>

//       <section className="flex flex-wrap">
//         {!isDataEmpty ? (
//           <div className='home__cars-wrapper  hero grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-10 justify-items-center -z-50'>
//             {/* {allAgents?.slice((currentPage - 1) * 12, currentPage * 12).map((agent) => (
//                <AgentCard2 key={agent.full_name} agent={agent} />
//             ))} */}
 

// {allAgents.map((agent)=>(
//   <AgentCard agent={agent}/>
// ))}

//           </div>
//         ) : (
//           <div className='home__error-container'>
//             <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
//             <p>No Agents found based on the search.</p>
//             <p>
               
//             </p>
//           </div>
//         )}
//       </section>
//       {/* <div className="home__cars-wrapper">
// {allAgents.map((agent)=>(
//   <AgentCard agent={agent}/>
// ))}
//       </div> */}
//     </main>
//   );
// };

// export default ResultPage;

