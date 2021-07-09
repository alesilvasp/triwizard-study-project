import "./styles.css";

function StuCard({ student }) {
  return (
    <div className="wizardsCards">
      {student.house === "Gryffindor" ? (
        <div className="wizardAvatar wizardAvatarRed">
          <span className="wizardName wizardNameGryffindor">
            {student.name}
          </span>
          <img
            src={student.image}
            alt={student.name}
            className="wizardImageRed wizardImage"
          />
          <span className="info">House: {student.house}</span>
          <span className="info">Wand: {student.wand.core}</span>
        </div>
      ) : student.house === "Slytherin" ? (
        <div className="wizardAvatar wizardAvatarGreen">
          <span className="wizardName wizardNameSlytherin">{student.name}</span>
          <img
            src={student.image}
            alt={student.name}
            className="wizardImageGreen wizardImage"
          />
          <span className="info">House: {student.house}</span>
          <span className="info">Wand: {student.wand.core}</span>
        </div>
      ) : student.house === "Hufflepuff" ? (
        <div className="wizardAvatar wizardAvatarYellow">
          <span className="wizardName wizardNameHufflepuff">
            {student.name}
          </span>
          <img
            src={student.image}
            alt={student.name}
            className="wizardImageYellow wizardImage"
          />
          <span className="info">House: {student.house}</span>
          <span className="info">Wand: {student.wand.core}</span>
        </div>
      ) : (
        <div className="wizardAvatar wizardAvatarBlue">
          <span className="wizardName wizardNameRavenclaw">{student.name}</span>
          <img
            src={student.image}
            alt={student.name}
            className="wizardImageBlue wizardImage"
          />
          <span className="info">House: {student.house}</span>
          <span className="info">Wand: {student.wand.core}</span>
        </div>
      )}
    </div>
  );
}

export default StuCard;
