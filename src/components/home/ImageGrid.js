import React from 'react';
import useFirestore from '../hooks/useFireStore';
import { motion } from 'framer-motion';
import styled from 'styled-components';



const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <MainContainer>
          <div>
            <motion.div className="img-wrap" key={doc.id}
              layout
              whileHover={{ opacity: 1 }} s
              onClick={() => setSelectedImg(doc.url)}
            >
              <motion.img src={doc.url} alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          </div>
        </MainContainer>
      ))}
    </div>
  )
}

export default ImageGrid;