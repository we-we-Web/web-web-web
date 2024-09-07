import Home from './Home/Home'
import TitleName from './Home/TitleName';
import MemberCard from "./MemberCard/MemberCard";
import ProjectReview from './Home/ProjectReview';


export default function page() {
  return (
    <>
      <Home/>
      <TitleName/>
      <MemberCard/>
      <ProjectReview/>
    </>
  );
}
