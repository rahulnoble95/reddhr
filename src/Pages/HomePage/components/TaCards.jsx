

export const TaCards = ({job_list, job_platforms, hiring_stages, offer_stages}) => {
  return (
    <div className="flex pt-20 justify-center">
    <div className="flex flex-row justify-center items-center gap-20">
      <ul className="flex flex-col justify-center items-center gap-10 w-[250px] h-[500px] bg-[--logo-color] opacity-75   rounded-2xl text-[--font-roboto] text-[18px] ">
        <li> <span className="font-bold text-white"> Create New Job </span></li>
        {job_list.map((job) => (
          <li className="" key={job.id}>{job.name}</li>
        ))}
      </ul>
      <ul className="flex flex-col justify-center items-center gap-10 w-[250px] h-[500px] bg-[--logo-color] opacity-75   rounded-2xl text-[--font-roboto] text-[18px] ">
      <span className="font-bold text-white">Post Job </span>
        {job_platforms.map((jobP) => (
          <li className="" key={jobP.id}>{jobP.name}</li>
        ))}
      </ul>

      <ul className="flex flex-col justify-center items-center gap-10 w-[250px] h-[500px] bg-[--logo-color] opacity-75   rounded-2xl text-[--font-roboto] text-[18px] ">
      <span className="font-bold text-white">Interview & Evaluation</span>
        {hiring_stages.map((hiring) => (
          <li className="" key={hiring.id}>{hiring.name}</li>
        ))}
      </ul>
      <ul className="flex flex-col justify-center items-center gap-10 w-[250px] h-[500px] bg-[--logo-color] opacity-75   rounded-2xl text-[--font-roboto] text-[18px] ">
      <span className="font-bold text-white">Generate Offer </span>
        {offer_stages.map((offer) => (
          <li className="" key={offer.id}>{offer.name}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}
