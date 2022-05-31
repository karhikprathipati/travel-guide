export default function Card(prop) {
    return (
        <div className="card">
            <img src={prop.imageUrl} className="image" />
            <div className="card--location">
                <p>{prop.location}</p>
                <p><a href={prop.googleMapsUrl}>View on google maps</a></p>
            </div>
            <p className="card--place">{prop.title}</p>
            <p className="card--date">{prop.startDate} - {prop.endDate}</p>
            <p className="card--des">{prop.description}</p>
        </div>
    );
}