import PlayingCards from './assets/PlayingCards.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={PlayingCards} alt="Playing Cards"/>
            <h2 className="card-title">Kyle Pillay</h2>
            <p className="card-text">I am A software developer.</p>
        </div>
    );
}

export default Card