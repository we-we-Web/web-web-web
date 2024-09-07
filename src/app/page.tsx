import Image from "next/image";
import styles from "./page.module.css";
import Home from './Home/Home'
import TitleName from './Home/TitleName';
import MemberCard from "./MemberCard/MemberCard";

export default function page() {
  return (
    <div>
      <Home/>
      <TitleName/>
      <MemberCard/>
    </div>
  );
}
