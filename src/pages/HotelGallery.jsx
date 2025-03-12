import { useParams } from 'react-router-dom';

export function HotelGallery() {
  const { id } = useParams();

  // Dynamic media for different hotels
  const hotelMedia = {
    0: [
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
    ],
    1: [
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
        {url  : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Utensil_clean/utensil_c2+1.webm`, type : 'video'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Utensil_clean/utensil_c2.webm`, type : 'video'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Utensil_clean/utensil_c3.webm`, type : 'video'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Utensil_clean/utensils2.jpg`, type : 'image'},

    ],
    2: [
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
        {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
        
    ],  
    3: [
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
    ],
    4: [
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
    ],
    5: [
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
    ],
    6 : [
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/utensils2.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/moth-control-west-london-archers-pest-control.jpeg`, type: 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/cockroach-eating-1024x683.jpg`, type: 'image' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/commercial-kitchen-pests.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/dirty-fly-on-food-carrier-insect-RJCRDY.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/Pest-control-3.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/no_gloves1.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/ants-in-the-kitchen-NoBroker-blog.jpg`, type : 'image'},
      {url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/Clean+Kitchen/kitechenvd2.webm`, type: 'video' },
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/oe1.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/PEST/pantrypests2-1200x630.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil3.jpg`, type : 'image'},
      {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/oil_unclean/oil1.jpeg`, type : 'image'}
    ],
  };

  // Get the media for the current hotel, or use an empty array if not found
  const media = hotelMedia[id ?? '1'] || [];

  return (
    <div style={styles.container}>
      <h1>Hotel {id} - Media Gallery</h1>
      <div style={styles.gallery}>
        {media.length > 0 ? (
          media.map((item, index) => (
            <div key={index} style={styles.card}>
              {item.type === 'image' ? (
                <img src={item.url} alt={`Hotel ${id}`} style={styles.media} />
              ) : (
                <video controls style={styles.media}>
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))
        ) : (
          <p>No media available for this hotel.</p>
        )}
      </div>
    </div>
  );
}


const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  },
  media: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
};

