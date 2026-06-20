import React from "react";

function FoodLog() {
  return (
    <>
      <div>
        <h1>Food Log</h1>
        <p>Track your meals for Saturday, 20 Jun</p>
        <div>
          <div>
            <h3>Breakfast</h3>
            <input type="text" placeholder="eg. Oats with banana and milk" />
          </div>
          <div>
            <h3>Lunch</h3>
            <input
              type="text"
              placeholder="eg. Dal and Rice with salad and papad"
            />
          </div>
          <div>
            <h3>Snacks</h3>
            <input type="text" placeholder="eg. Almond, fruits, chai" />
          </div>
          <div>
            <h3>Dinner</h3>
            <input type="text" placeholder="eg. Roti, sabji and curd" />
          </div>
          <button>Save Food log</button>
        </div>
      </div>
    </>
  );
}

export default FoodLog;
