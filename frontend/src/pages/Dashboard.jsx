import React from "react";

function Dashboard() {
  return (
    <>
      <div>
        <div>
          <p>Saturday, 20 June 2026</p>
          <h1>Your Wellsness Hub</h1>
          <p>Don't forget today's check-in</p>
        </div>

        <div>
          <p>day streak</p>
        </div>

        <div>
          <h5>Complete today's check-in</h5>
          <p>Log your sleep, water, workout $ more</p>
          <button>Check in</button>
        </div>

        <div>
          <p>Total check-ins</p>
        </div>
        <div>
          <p>Workouts done</p>
        </div>
        <div>
          <p>Yoga Sessions</p>
        </div>
        <div>
          <p>Food Logs</p>
        </div>

        <div>
          <h3>Weekly Summary</h3>
          <div>
            <h6>Workouts</h6>
            <p>You completed workouts on 4 of the last 7 days.</p>
          </div>
          <div>
            <h6>Yoga</h6>
            <p>You practiced Yoga 3 of the last 7 days.</p>
          </div>
          <div>
            <h6>Average Sleep</h6>
            <p>6.9 hrs average this week.</p>
          </div>
          <div>
            <h6>Food Logging</h6>
            <p>Food logs saved on 2 of the last 7 days.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
