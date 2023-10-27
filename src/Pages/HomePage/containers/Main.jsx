import { TaCards } from "../components/TaCards";
import { TalentButton } from "../components/TalentButton";
import {
  job_list,
  job_platforms,
  hiring_stages,
  offer_stages,
} from "../../../constants/index"



const Main = () => {
  return (
   <div className="flex flex-col justify-center items-center pt-48">
  <TalentButton />   
  <TaCards job_list={job_list} job_platforms={job_platforms} hiring_stages={hiring_stages} offer_stages={offer_stages} />
   </div>
  );
};

export default Main;
/*

*/
