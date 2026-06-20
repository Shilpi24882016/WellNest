import React from 'react'

function DailyCheckIn() {
  return (
    <>
    <div>
        <h1>Daily Check-In</h1>
        <p>Log your wellness for Saturday, 20 Jun</p>
        <div>
            <h3>Sleep Hours</h3>
            <p>How many hours did you sleep</p>
        </div>
        
        <div>
            <h3>Water Intake</h3>
            <p>Tap to log glasses of water(target: 8)</p>
        </div>

        <div>
            <h3>Energy Level</h3>
            <p>How energetic do you feel today?</p>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>

        <div>
            <h3>Activity</h3>
            <div>
                <h5>Workout Done</h5>
                <p>Gym,run,sports, or any excercise</p>
            </div>
            <div>
                <h5>Yoga Done</h5>
                <p>Stretching, meditation, breathing</p>
            </div>
        </div>
        <button>Save Check-In</button>
    </div>
    </>
  )
}

export default DailyCheckIn