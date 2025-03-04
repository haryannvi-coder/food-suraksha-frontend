// import { useParams } from 'react-router-dom';

// export function Hotel1() {
//   const { id } = useParams();

//   const media = [
//     { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
//     { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
//     {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'}
//   ];

//   return (
//     <div style={styles.container}>
//       <h1>Hotel {id} - Media Gallery</h1>
//       <div style={styles.gallery}>
//         {media.map((item, index) => (
//           <div key={index} style={styles.card}>
//             {item.type === 'image' ? (
//               <img src={item.url} alt={`Hotel ${id}`} style={styles.media} />
//             ) : (
//               <video controls style={styles.media}>
//                 <source src={item.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//   },
//   gallery: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gap: '20px',
//   },
//   card: {
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     borderRadius: '12px',
//     overflow: 'hidden',
//   },
//   media: {
//     width: '100%',
//     borderRadius: '12px',
//   },
// };


import { useParams } from 'react-router-dom';

export function Hotel1() {
  const { id } = useParams();

  // Dynamic media for different hotels
  const hotelMedia = {
    0: [
        { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen+1+water.jpg`, type: 'image' },
        { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1+video.mp4`, type: 'video' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen1dining.jpeg`, type : 'image'}
    ],
    1: [
        { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen2+hygine.jpg`, type: 'image' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen2+oil.jpg`, type : 'image'}
    ],
    2: [
        { url: `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen3+hygine.jpg`, type: 'image' },
        {url : `https://foodsuraksha247.s3.eu-north-1.amazonaws.com/pics+%26+videos/kitchen3oil.jpg`, type : 'image'}
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

// Inline styles for media gallery
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
    borderRadius: '12px',
  },
};
