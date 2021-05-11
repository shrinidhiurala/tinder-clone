import { useEffect, useState } from "react"
import TinderCard from "react-tinder-card"
import './Tindercards.css'
import db from "./firebase"

function Tindercards() {
    const [people, setPeople] = useState([])

    useEffect(() => {
        db
        .collection('people')
        .onSnapshot(snapshot => (
            setPeople( snapshot.docs.map(doc => doc.data()) )
        ))
    },[]);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {
                    people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={['up','down']}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})`}}
                                className="tinder__card"
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Tindercards
