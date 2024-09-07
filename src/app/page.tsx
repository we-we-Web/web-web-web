import Image from "next/image";
import styles from "./page.module.css";
import Home from './Home/Home'
import TitleName from './Home/TitleName';
import ProjectReview from './Home/ProjectReview';


export default function page() {
  return (
    <div>
      <Home/>
      <TitleName/>
      <ProjectReview/>
    </div>
  );
}
