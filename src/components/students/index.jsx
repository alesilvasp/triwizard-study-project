import StuCard from "../stuCard";
import "./styles.css";

function Students({ students, setStartBattle }) {
  const houses = [
    students
      .filter((stu) => stu.house === "Gryffindor")
      .sort(() => Math.random() - 0.5)
      .slice(0, 1),
    students
      .filter((stu) => stu.house === "Slytherin")
      .sort(() => Math.random() - 0.5)
      .slice(0, 1),
    students
      .filter((stu) => stu.house === "Hufflepuff")
      .sort(() => Math.random() - 0.5)
      .slice(0, 1),
    students
      .filter((stu) => stu.house === "Ravenclaw")
      .sort(() => Math.random() - 0.5)
      .slice(0, 1),
  ];

  function handleBattle() {
    setStartBattle(false);
  }

  return (
    <div className='container'>
      <div className="wizardsContainer">
        {houses
          .flat()
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((student, index) => (
            <StuCard key={index} student={student} />
          ))}
      </div>
      <button onClick={handleBattle} className='buttonBattleAgain'>Battle Again</button>
    </div>
  );
}

export default Students;
