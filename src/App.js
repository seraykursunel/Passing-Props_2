import "./styles.css";

const App = () => {
  const state = {
    partyType: "birthday",
    entertainment: "clowns",
    venue: {
      name: "Polly's Party Palace",
      capacity: 120
    },
    location: "Moda Sahil"
  };

  return (
    <div>
      <Party
        partyType={state.partyType}
        entertainment={state.entertainment}
        venue={state.venue}
        location={state.location}
      />
    </div>
  );
};

const Party = (props) => {
  const { partyType, entertainment, venue, location } = props;
  return (
    <>
      <h3>Parti Zamanı!</h3>
      <p>
        Bu {partyType} parti, maksimum {venue.capacity} kapasite ile{" "}
        {venue.name}'da gerçekleştirilecektir
      </p>
      <p>Öne çıkan eğlence: {entertainment}!</p>
      <p> Adres: {location} </p>
    </>
  );
};

export default App;
