import { useEffect } from "react";
import { useState } from "react";
import JobsInfo from "./CourseComponents/JobInfo";
import BtnContainer from "./CourseComponents/BtnContainer";

const App = () => {
  const url = 'https://course-api.com/react-tabs-project';
  const [isloading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs = async () => {
    try {
      const resp = await fetch(url);
      const newJobs = await resp.json();
      setJobs(newJobs)
      setIsLoading(false)
    } catch (error) {
      alert(error)
    }

  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (isloading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <JobsInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}

export default App



// my code

// import { useEffect, useState } from "react";
// import UserTabs from "./Components/UserTabs";
// import About from "./Components/About";
// import Duties from "./Components/Duties";
// import DutiesDefault from "./Components/DutiesDefalut";
// import AboutDefault from "./Components/AboutDefault";

// const App = () => {
//   const [isloading, setIsLoading] = useState(false)
//   const [dataList, setDataList] = useState()
//   const [about, setAbout] = useState()

//   const response = async () => {
//     const url = 'https://course-api.com/react-tabs-project';
//     try {
//       const resp = await fetch(url)
//       const data = await resp.json()
//       setDataList(data);
//       setIsLoading(true)

//     } catch (error) {
//       alert(error)
//     }
//   }

//   const changeUI = (info) => {
//     setAbout(info);
//   }

//   useEffect(() => {
//     response()
//   }, [])


//   return <div className="main-container">

//     {isloading && <>
//       <UserTabs dataList={dataList} changingUi={changeUI} />

//       <div className="content">
//         {about ? <About about={about} />
//           : <AboutDefault dataList={dataList} />}

//         {about ? <Duties aboutDuties={about.duties} />
//           : <DutiesDefault data={dataList} />}

//       </div>
//     </>
//     }

//   </div>
// };
// export default App;
