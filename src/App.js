
import './App.css';


const clearPrevious = (className) => {
  //clears the previous buttons (groupsed together by their class name) off the screen
  //can be called from within other functions for efficiency
  var previous = document.getElementsByClassName(className);
  var i;
  for (i = 0; i < previous.length; i++){
      previous[i].style.display = "none";
  }
}

const showNext = (className) => {
  //shows the next set of buttons
  var next = document.getElementsByClassName(className);
  var i;
  for (i = 0; i < next.length; i++){
      next[i].style.display = "block";
  }
}


const startFunction = () => {
  //cause dietary options buttons to show up and start button to go away 
  var start = document.getElementById("startButton");
  start.style.display = "none";
  showNext("diet");

}


const mealChoiceFunction = () => {
  console.log("meal choice function")
  //cause dietary options buttons to go away 
  clearPrevious("diet");
  //cause meal types to show up
  showNext("mealType");
}

const breakfastChoiceFunction = () => {
  clearPrevious("mealType");
  showNext("sweetSavoryBreakfast");
}

const lunchChoiceFunction = () => {
  clearPrevious("mealType");
  showNext("lunchItems");
}

const dinnerChoiceFunction = () => {
  clearPrevious("mealType");
  showNext("time1Dinner");
}

const snackChoiceFunction = () => {
  clearPrevious("mealType");
  showNext("sweetSavorySnack");
}

const sweetSavoryBreakfast = () => {
  clearPrevious("sweetSavoryBreakfast");
  showNext("time1Breakfast");
}


const sweetSnack = () => {
  clearPrevious("sweetSavorySnack");
  //recipe here
}

const savorySnack = () => {
  clearPrevious("sweetSavorySnack");
  //recipe here
}


const soupFunction = () => {
  clearPrevious("lunchItems");
  showNext("time3");
  //recipe here
}

const saladFunction = () => {
  clearPrevious("lunchItems");
  showNext("time2");
  //recipe here
}

const sandwhichFunction = () => {
  clearPrevious("lunchItems");
  showNext("time2");
  //recipe here
}

const under15Function = () => {
  clearPrevious("time2");
  //recipe here
}

const over15Function = () => {
  clearPrevious("time2");
  //recipe here
}


const under30Breakfast = () => {
  clearPrevious("time1Breakfast");
  //recipe here
}

const thirtysixtyBreakfast = () => {
  clearPrevious("time1Breakfast");
  //recipe here
}

const over60Breakfast = () => {
  clearPrevious("time1Breakfast");
  //recipe here
}

const under30Dinner = () => {
  clearPrevious("time1Dinner");
  //recipe here
}

const thirtysixtyDinner = () => {
  clearPrevious("time1Dinner");
  //recipe here
}

const over60Dinner = () => {
  clearPrevious("time1Dinner");
  //recipe here
}

const thirtysixtySoup = () => {
  clearPrevious("time3");
  //recipe here 
}

const over60Soup = () => {
  clearPrevious("time3");
  //recipe here
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

      
        <button id="startButton" onClick={startFunction}>Start</button>

        <ul className="column">
        <button className="diet" onClick={mealChoiceFunction}>Standard</button>
        <button className="diet" onClick={mealChoiceFunction}>Vegan/Vegetarian</button>
        <button className="diet" onClick={mealChoiceFunction}>Kosher</button>
        <button className="diet" onClick={mealChoiceFunction}>Gluten Free / Lactose Free</button>
        </ul>
        
        <ul className="column">
        <button className="mealType" onClick={breakfastChoiceFunction}>Breakfast</button>
        <button className="mealType" onClick={lunchChoiceFunction}>Lunch</button>
        <button className="mealType" onClick={dinnerChoiceFunction}>Dinner</button>
        <button className="mealType" onClick={snackChoiceFunction}>Snack</button>
        </ul>

        <ul className="column">
        <button className="sweetSavoryBreakfast" onClick={sweetSavoryBreakfast}>Sweet</button>
        <button className="sweetSavoryBreakfast" onClick={sweetSavoryBreakfast}>Savory</button>
        </ul>
       
        <ul className="column">
        <button className="sweetSavorySnack" onClick={sweetSnack}>Sweet</button>
        <button className="sweetSavorySnack" onClick={savorySnack}>Savory</button>
        </ul>

        <ul className="column">
        <button className="lunchItems" onClick={soupFunction}>Soup</button>
        <button className="lunchItems" onClick={saladFunction}>Salad</button>
        <button className="lunchItems" onClick={sandwhichFunction}>Sandwhich</button>
        </ul>

        <ul className="column">
        <button className="time2" onClick={under15Function}>Under 15 minutes</button>
        <button className="time2" onClick={over15Function}>Over 15 minutes</button>
        </ul>

        <ul className="column">
        <button className="time1Breakfast" onClick={under30Breakfast}>Under 30 minutes</button>
        <button className="time1Breakfast" onClick={thirtysixtyBreakfast}>30-60 minutes</button>
        <button className="time1Breakfast" onClick={over60Breakfast}>Over 60 minutes</button>
        </ul>

        <ul className="column">
        <button className="time1Dinner" onClick={under30Dinner}>Under 30 minutes</button>
        <button className="time1Dinner" onClick={thirtysixtyDinner}>30-60 minutes</button>
        <button className="time1Dinner" onClick={over60Dinner}>Over 60 minutes</button>
        </ul>

        <ul className="column">
        <button className="time3" onClick={thirtysixtySoup}>30-60 minutes</button>
        <button className="time3" onClick={over60Soup}>Over 60 minutes</button>
        </ul>
      
        
      </header>
    </div>
  );
}

export default App;
