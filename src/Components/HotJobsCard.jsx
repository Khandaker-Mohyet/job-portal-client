import { Link } from "react-router-dom";


const HotJobsCard = ({job}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-3 max-w-sm mx-auto mb-5">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.company} - {job.location}</p>
        </div>
      </div>
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
          {job.jobType}
        </span>
        <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {job.category}
        </span>
      </div>
      <p className="text-gray-700 text-sm mb-4">{job.description}</p>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-bold">
          {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()} / Month
        </p>
        <Link
          to={`/job/${job._id}`}
          href={`mailto:${job.hr_email}`}
          className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-600"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;