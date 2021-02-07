
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

  clearPrevious("apology");
  clearPrevious("mainDescription");
  clearPrevious("clickStart")
  clearPrevious("miniDescription");
  clearPrevious("name");
  showNext("chooseOptions");
  showNext("mealType");

}

const breakfastChoiceFunction = () => {
  clearPrevious("mealType");
  showNext("time1Breakfast");
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


const soupFunction = () => {
  clearPrevious("lunchItems");
  showNext("time3");
}

const saladFunction = () => {
  clearPrevious("lunchItems");
  showNext("time2");
}


const sweetSnack = () => {
  clearPrevious("sweetSavorySnack");
  clearPrevious("chooseOptions");
  showNext("sweetSnackLink");
  //recipe here
}

const savorySnack = () => {
  clearPrevious("sweetSavorySnack");
  clearPrevious("chooseOptions");
  showNext("savorySnackLink");
  //recipe here
}

const under15Function = () => {
  clearPrevious("time2");
  clearPrevious("chooseOptions");
  showNext("under15Link");
  //recipe here
}

const over15Function = () => {
  clearPrevious("time2");
  clearPrevious("chooseOptions");
  showNext("over15Link");
  //recipe here
}


const under30Breakfast = () => {
  clearPrevious("time1Breakfast");
  clearPrevious("chooseOptions");
  showNext("under30Brek");
  //recipe here
}

const thirtysixtyBreakfast = () => {
  clearPrevious("time1Breakfast");
  clearPrevious("chooseOptions");
  showNext("3060Brek");
  //recipe here
}

const over60Breakfast = () => {
  clearPrevious("time1Breakfast");
  clearPrevious("chooseOptions");
  showNext("60Brek");
  //recipe here
}

const under30Dinner = () => {
  clearPrevious("time1Dinner");
  clearPrevious("chooseOptions");
  showNext("under30Dinner");
  //recipe here
}

const thirtysixtyDinner = () => {
  clearPrevious("time1Dinner");
  clearPrevious("chooseOptions");
  showNext("3060Dinner");
  //recipe here
}

const over60Dinner = () => {
  clearPrevious("time1Dinner");
  clearPrevious("chooseOptions");
  showNext("over60Dinner");
  //recipe here
}

const thirtysixtySoup = () => {
  clearPrevious("time3");
  clearPrevious("chooseOptions");
  showNext("3060soup");
  //recipe here 
}

const over60Soup = () => {
  clearPrevious("time3");
  clearPrevious("chooseOptions");
  showNext("over60soup");
  //recipe here
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="name">MyMealChoice</h1>
        <h2 className="miniDescription">Welcome to the MyMealChoice, a website that helps you decide on what recipe to make for your meal! </h2>

        <p className="mainDescription">This website was developed to help the user (you!) decide what to eat or cook based on your personal preferences.  
          The goal is to avoid unhealthy eating and snacking because you cannot think of something to make. This 
          website will allow you to choose a series of meal preferences and conditions, such as type of meal (breakfast, lunch, etc), 
          style of food (sweet, savory, etc), and how much time you have to make it. After you make your preference selections, 
          the website will recommend to you 2 recipes that you might try making! 
        </p>

        <p className="clickStart">Click the start button below to begin!</p>

        <button id="startButton" onClick={startFunction}>Start</button>

        <p className="apology">Apologies that more dietary options could not be included, but each recipe specifies whether 
          is it vegan, vegetarian, kosher, gluten free, or lactose free.
        </p>

        <p className="chooseOptions">Choose one of the options below:</p>
        
        <ul className="column">
        <button className="mealType" onClick={breakfastChoiceFunction}>Breakfast</button>
        <button className="mealType" onClick={lunchChoiceFunction}>Lunch</button>
        <button className="mealType" onClick={dinnerChoiceFunction}>Dinner</button>
        <button className="mealType" onClick={snackChoiceFunction}>Snack</button>
        </ul>
       
        <ul className="column">
        <button className="sweetSavorySnack" onClick={sweetSnack}>Sweet</button>
        <button className="sweetSavorySnack" onClick={savorySnack}>Savory</button>
        </ul>

        <ul className="column">
        <button className="lunchItems" onClick={soupFunction}>Soup</button>
        <button className="lunchItems" onClick={saladFunction}>Salad</button>
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
      
        <a id="recipe" className="savorySnackLink" href="https://www.tasteofhome.com/recipes/soft-beer-pretzel-nuggets/">Pretzels</a>
        <img id="recipe" className="savorySnackLink" src="https://www.tasteofhome.com/wp-content/uploads/2018/05/Based_On_Soft-Beer-Pretzels_EXPS_THSO18_114654_D01_25_7b-6.jpg?resize=696,696" alt="pretzels"></img>
        
        <a id="recipe" className="sweetSnackLink" href="https://www.gimmesomeoven.com/no-bake-energy-bites/">No-Bake Energy Bites</a>
        <img id="recipe" className="sweetSnackLink" src="https://www.gimmesomeoven.com/wp-content/uploads/2012/02/Easy-No-Bake-Energy-Bites-Recipe-1100x1643.jpg" alt="energyBites"></img>

        <a id="recipe" className="under15Link" href="https://www.loveandlemons.com/greek-salad/">Greek Salad</a>
        <img id="recipe" className="under15Link" src="https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2.jpg" alt="greekSalad"></img>

        <a id="recipe" className="over15Link" href="https://www.loveandlemons.com/pasta-salad/">Pasta Salad</a>
        <img id="recipe" className="over15Link" src="https://cdn.loveandlemons.com/wp-content/uploads/2019/05/pasta-salad.jpg" alt="pasta salad"></img>

        <a id="recipe" className="under30Brek" href="https://fitfoodiefinds.com/chia-yogurt-power-bowl/">Chia Yogurt Power Bowl</a>
        <img id="recipe" className="under30Brek" src="https://fitfoodiefinds.com/wp-content/uploads/2014/01/chia-yogurt-power-bowl.jpg" alt="chia"></img>

        <a id="recipe" className="3060Brek" href="http://immaeatthat.com/2015/07/30/almond-flour-crepes/">Almond Flour Crepes</a>
        <img id="recipe" className="3060Brek" src="http://immaeatthat.com/wp-content/uploads/2015/07/150728-almond-flour-crepes-11.jpg" alt="crepes"></img>

        <a id="recipe" className="60Brek" href="https://fitfoodiefinds.com/sweet-potato-crust-quiche/">Sweet Potato Crust Quiche</a>
        <img id="recipe" className="60Brek" src="https://fitfoodiefinds.com/wp-content/uploads/2018/04/sweet-potato-crust-quiche.jpg" alt="quiche"></img>

        <a id="recipe" className="under30Dinner" href="https://www.foodnetwork.com/recipes/food-network-kitchen/classic-shrimp-scampi-8849846">Shrimp Scampi</a>
        <img id="recipe" className="under30Dinner" src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/16/0/FNM_090120-Classic-Shrimp-Scampi_s4x3.jpg.rend.hgtvcom.826.620.suffix/1594915956100.jpeg" alt="scampi"></img>

        <a id="recipe" className="3060Dinner" href="https://www.tasteofhome.com/recipes/smoky-sweet-potato-and-black-bean-enchiladas/">Sweet Potato and Black Bean Enchiladas</a>
        <img id="recipe" className="3060Dinner" src="https://www.tasteofhome.com/wp-content/uploads/2018/12/Smoky-Sweet-Potato-and-Black-Bean-Enchiladas_EXPS_THFM19_189973_E09_28_6b.jpg?resize=696,696" alt="enchiladas"></img>

        <a id="recipe" className="over60Dinner" href="https://www.delish.com/cooking/recipe-ideas/recipes/a46066/slow-cooker-garlic-parmesan-chicken-recipe/">Slow Cooker Garlic Parmesan Chicken</a>
        <img id="recipe" className="over60Dinner" src="https://hips.hearstapps.com/del.h-cdn.co/assets/16/07/1455837174-delish-slow-cooker-chicken-1.jpg?crop=1xw:0.99975xh;center,top&resize=640:*" alt="chicken"></img>

        <a id="recipe" className="3060soup" href="https://www.tasteofhome.com/recipes/pasta-fagioli-soup/">Pasta Fagioli Soup</a>
        <img id="recipe" className="3060soup" src="https://www.dinneratthezoo.com/wp-content/uploads/2019/02/pasta-e-fagioli-5.jpg" alt="pastaSoup"></img>

        <a id="recipe" className="over60soup" href="https://www.allrecipes.com/recipe/23852/creamy-chicken-and-wild-rice-soup/">Chicken and Wild Rice Soup</a>
        <img id="recipe" className="over60soup" src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Chicken-Wild-Rice-Soup_EXPS_CHBZ19_16579_B10_24_9b.jpg" alt="chickenRiceSoup"></img>

      </header>
    </div>
  );
}

export default App;
