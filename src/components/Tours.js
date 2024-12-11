import Card from "./Card";

function Tours({ tour, removeTour }) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plane With Love</h2>
            </div>
            <div className="cards">
                {tour.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </div>
    );
}

export default Tours;
