import './App.css';
import { useState } from 'react';
import Header from './components/Header.js'
import Photo from './components/Photo.js'

const App = () => {
  const [ photos, setPhotos ] = useState([])

  return (
    <div>
      <Header setPhotos={setPhotos} />
      <div className='container'>
        <div className='center'>
          {photos.map((photo) => 
            <Photo 
              photo={photo}
              key={photo.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
