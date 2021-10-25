import React, { useState, useEffect } from 'react';
import Title from './Title';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import Modal from './Modal';
import './home.css';
import { auth } from '../../firebase/config';

function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user)
      else setUser(null)
    })
  }, []);

  return (
    <div className="home">
            <Title />
            {
              !user ? null : <UploadForm />
            }
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
              <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
            )}
    </div>
  );
}

export default Home;

export function signOut() {
  throw new Error('Function not implemented.');
}

