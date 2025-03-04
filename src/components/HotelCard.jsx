export function HotelCard({ name, location, onClick }) {
    return (
      <div className="cursor-pointer" style={styles.card} onClick={onClick}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.location}>{location}</p>
      </div>
    );
}
  
const styles = {
    card: {
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '16px',
      margin: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      maxWidth: '300px',
    },
    name: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    location: {
      fontSize: '16px',
      color: '#555',
    },
  };
  