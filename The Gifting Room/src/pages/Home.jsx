import "../pageStyle/Home.css"

function Home() {
    return (
        <div>
            <div className='welcome-img'>
                <hr></hr>
                <p className='hometitle'>THE GIFTING ROOM</p>
                <p className='slogan'>Where there's a perfect present for everyone</p>
                <hr></hr>
            </div>
            <p>Welcome to The Gifting Room!</p>
            <p>Cruise through our suggested gifts or use PlanWithAI if you need help finding the right present or planning a party. 
                Set Reminders for birthdays, anniversaries, and more!</p>
            <div>
                <h4>For personal, occasional use</h4>
                <h2>Free</h2>
                <ul>
                    <li>Access gift recommendations with direct links to trusted retailers</li>
                    <li>Access to PlanWithAI</li>
                        <ul><li>Get personalized gift suggestions</li></ul>
                    <li>Access to Reminders</li>
                        <ul><li>Write down upcoming events in the calendar</li></ul>
                    <li>Access to general Customer Service</li>
                </ul>
                <h4>For teams and frequent use</h4>
                <h2>Premium</h2>
                <ul>
                    <li>Access gift recommendations with direct links to trusted retailers</li>
                    <li>Access to PlanWithAI</li>
                        <ul>
                            <li>Get personalized gift suggestions</li>
                            <li>Get help planning events</li>
                            <li>Find trusted event planners, locations, and other resources for your events</li>
                        </ul>
                    <li>Access to Reminders' calendar</li>
                        <ul>
                            <li>Write down upcoming events in the calendar</li>
                            <li>Receive SMS and/or email notifications</li>
                        </ul>
                    <li>Personal and dedicated Customer Service helpers</li>
                </ul>
            </div>
        </div>
    );
}

export default Home