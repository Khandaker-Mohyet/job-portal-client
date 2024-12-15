import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {

  const {_id, title, company, applicationDeadline} = useLoaderData()
  
  return (
    <div className="p-10">
      <h2 className="text-3xl">Job details for: {title}</h2>
      <p>apply for: {company}</p>
      <p>deadline: {applicationDeadline}</p>
      <Link to={`/aplayJob/${_id}`}><button className="btn btn-success">Apply Now</button></Link>
    </div>
  );
};

export default JobDetails;