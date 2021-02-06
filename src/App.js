
import './App.css';

const startFunction = () => {
  //cause dietary options buttons to show up and start button to go away 
  var start = document.getElementById("startButton");
  start.style.display = "none";

  var standard = document.getElementById("Standard");
  standard.style.display = "block";

  var veg = document.getElementById("Vegetarian");
  veg.style.display = "block";

  var kosher = document.getElementById("Kosher");
  kosher.style.display = "block";

  var gf = document.getElementById("GF");
  gf.style.display = "block";

}

const clearPrevious = (className) => {
  //clears the previous buttons (groupsed together by their class name) off the screen
  //can be called from within other functions for efficiency
  var previous = document.getElementsByClassName(className);
  var i;
  for (i = 0; i < previous.length; i++){
      previous[i].style.display = "none";
  }

}

const mealChoiceFunction = () => {
  console.log("meal choice function")
  //cause dietary options buttons to go away 
  clearPrevious("dietHidden");

  //cause meal types to show up
  var breakfast = document.getElementById("Breakfast");
  breakfast.style.display = "block";
  var lunch = document.getElementById("Lunch");
  lunch.style.display = "block";
  var dinner = document.getElementById("Dinner");
  dinner.style.display = "block";
  var snack = document.getElementById("Snack");
  snack.style.display = "block";
  
}

const breakfastChoiceFunction = () => {
  console.log("breakfast choice function");
  clearPrevious("mealTypeHidden");
}

const lunchChoiceFunction = () => {
  clearPrevious("mealTypeHidden");
}

const dinnerChoiceFunction = () => {
  clearPrevious("mealTypeHidden");
}

const snackChoiceFunction = () => {
  clearPrevious("mealTypeHidden");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button id="startButton" onClick={startFunction}>Start</button>

        
        <button id="Standard" className="dietHidden" onClick={mealChoiceFunction}>Standard</button>
        <button id="Vegetarian" className="dietHidden" onClick={mealChoiceFunction}>Vegan/Vegetarian</button>
        <button id="Kosher" className="dietHidden" onClick={mealChoiceFunction}>Kosher</button>
        <button id="GF" className="dietHidden" onClick={mealChoiceFunction}>Gluten Free / Lactose Free</button>
        
        <button id="Breakfast" className="mealTypeHidden" onClick={breakfastChoiceFunction}>Breakfast</button>
        <button id="Lunch" className="mealTypeHidden" onClick={lunchChoiceFunction}>Lunch</button>
        <button id="Dinner" className="mealTypeHidden" onClick={dinnerChoiceFunction}>Dinner</button>
        <button id="Snack" className="mealTypeHidden" onClick={snackChoiceFunction}>Snack</button>

      </header>
    </div>
  );
}

export default App;
