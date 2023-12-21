import './components/NameCard.css';

const NameCard = ({ name, age, gender }) => {
    const color = gender === 'male' ? 'blue' : 'red';

    return (
        <div className={`name-card ${ color }`}>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </div>
    )
}

export default NameCard;