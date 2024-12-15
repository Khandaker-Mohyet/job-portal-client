import { useContext, useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { AuthContext } from "../Provider/AuthProvider";


const MyApplication = () => {

  const { user } = UseAuth();
  // const { user } = useContext(AuthContext)
  const [jobs, setJobs] = useState([])
  console.log(user)

  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      setJobs(data)
    })
  },[user?.email])


  return (
    <div>
      <h1>My application {jobs?.length}</h1>
    </div>
  );
};

export default MyApplication;