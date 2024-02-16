"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page: React.FC = () => {
  const [agentDetails, setAgentDetails] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      // Get the current URL
      const url = new URL(window.location.href);
      // Extract the ID from the URL
      const id = url.searchParams.get('id');

      const options = {
        method: 'GET',
        url: `https://us-realtor.p.rapidapi.com/api/v1/agents/profile?nrds_id=232016189&advertiser_id=1721302`,
        headers: {
          'X-RapidAPI-Key': '5b6f78a67amsh6f2a00f4d18cbd5p137997jsnc9b5f136fc30',
          'X-RapidAPI-Host': 'us-realtor.p.rapidapi.com',
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Agent Details</h1>
      <ul className="list-disc pl-6">
        {firstFiveKeys.map((key) => (
          <li key={key}>
            <span className="font-bold">{key}:</span> {JSON.stringify(agentDetails[key])}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;



