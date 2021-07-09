import "./styles.css";

function StartPage({ setStartBattle }) {

  
  

  function handleBattle() {
    setStartBattle(true);
  }



  return (
    <div className="welcomeContainer">
      <h1>Triwizard Tournament</h1>
      <p>
        All Wizard & Witches are invited to paticipate.<br></br>
        Are you ready?
      </p>
      <button onClick={handleBattle} className="startBattleButton">
        Start Battle
      </button>
    </div>
  );
}

export default StartPage;
