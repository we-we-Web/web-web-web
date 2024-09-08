import Home from './home/home/Home';
import TitleName from './home/titleName/TitleName';
import MemberCard from './home/memberCard/MemberCard';
import ProjectReview from './home/projectReview/ProjectReview';

export default function page() {
  return (
    <>
      <Home />
      <TitleName />
      <MemberCard />
      <ProjectReview />
    </>
  );
}
