import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const questions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className={styles.page}>
    <h1>Assignment 4</h1>
     {questions.map((item,id)=>(
      <li key={id}>
        <Link href = {`/question${item}`}>question {item}
        </Link>
      </li>
     ))}
     
    </div>
  );
}
