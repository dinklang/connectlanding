import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import JobCard from "../components/job-card";
import ConnectForm from "../components/connect-form";
import jobsData from "../data/jobsData";
import { AutoComplete } from 'antd';

import { useEffect, useState } from "react";

const JobSearch: NextPage = () => {

  const [jobs, setJobs] = useState<any>();

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [locations, setLocations] = useState<{ value: string }[]>([]);

  function findJob(search: string) {
    const mySet = new Set<string>();
    const optList = []
    for (let i = 0; i < jobs.length; i++)
    {
      if (jobs[i]["title"].toLowerCase().includes(search.toLocaleLowerCase())) {
        if (!mySet.has(jobs[i]["title"])) {
          optList.push({ value: jobs[i]["title"] });
        }
      }
      mySet.add(jobs[i]["title"]);
    }
    return optList;
  }

  function findLocation(search: string) {
    const mySet = new Set<string>();
    const locs = [];
    for (let i = 0; i < jobs.length; i++)
    {
      if (jobs[i]["location"].toLowerCase().includes(search.toLocaleLowerCase())) {
        if (!mySet.has(jobs[i]["location"]))
        {
          locs.push({ value: jobs[i]["location"] })
        }
        mySet.add(jobs[i]["location"]);
      }
    }
    return locs;
  }
  
  useEffect(() => {
    setJobs(jobsData["jobs"]);
  }, []);
 
  if (!jobs) {
    return <div>Loading</div>
  }
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start text-left text-lg text-black font-body-large-400">
      <Header />
      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] md:flex-col">
        <div className="bg-gainsboro w-[350px] h-[700px] flex flex-col items-start justify-start p-5 box-border gap-[20px] mix-blend-normal sm:w-full sm:h-auto">
          <div className="flex flex-row items-center justify-start text-xl">
            <div className="flex flex-col items-start justify-start">
              <h3 className="m-0 relative text-inherit leading-[30px] font-semibold font-inherit">
                Your Job Search
              </h3>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <h3 className="m-0 relative text-inherit leading-[30px] font-semibold font-inherit">
              Profession
            </h3>
            <AutoComplete
              options={options}
              style={{ width: 300 }}
              onSearch={(text) => setOptions(findJob(text))}
              placeholder="Enter profession"
            />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start">
            <h3 className="m-0 relative text-inherit leading-[30px] font-semibold font-inherit">
              Location
            </h3>
            <AutoComplete
              options={locations}
              style={{ width: 300 }}
              onSearch={(text) =>  setLocations(findLocation(text))}
              placeholder="Enter profession"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-between text-center text-base text-gray-white">
            <a
              className="[text-decoration:none] rounded-3xs bg-mediumspringgreen-200 w-[250px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-6 box-border text-[inherit]"
              href="https://my.connectinternal.com/register"
            >
              <div className="relative leading-[24px] font-medium">Search</div>
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start max-w-[95%px] md:flex-[unset] md:self-stretch">
          <div className="w-full flex flex-col items-start justify-start gap-[20px] max-w-[1300px]">
            {jobs.map((data: any, index: any) => (
              <JobCard
              key={index}
              title={data["title"]}
              imageId={data["imageID"]}
              openingsCount={data["openings"]}
              weeklyEarningsRange={data["pay"]}
              schedule={data["schedule"]}
              location={data["location"]}
            />
            ))}
          </div>
        </div>
      </div>
      <ConnectForm />
    </div>
  );
};

export default JobSearch;
