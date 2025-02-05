import React, { useEffect, useState } from "react";
import BtnContainer from "./component/BtnContainer";
import JobInfo from "./component/JobInfo";

const url = "https:/www.course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetching = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  if (loading) {
    return (
      <section>
        <div>Loading....</div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* but container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
 
      {/* job info  */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};

export default App;
