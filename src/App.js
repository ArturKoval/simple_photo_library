import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const LIMIT = 6;

const App = ({ url }) => {
  const [list, setList] = useState();
  const [viewBigItem, setViewBigItem] = useState(null);

  useEffect(() => {
    (async () => {
      let fetchList = await fetch(url)
        .then(res => res.json());

      fetchList = fetchList.slice(0, LIMIT);
      setList(fetchList);
    })();
  }, [url]);

  const closeModal = () => setViewBigItem(null);

  return (
    <>
      {
        list && list.length && list.map(item => (
          <img 
            style={{"width": "100px", "height": "100px"}} 
            src={item.url} 
            key={item.id}
            onClick={() => setViewBigItem(item)}
            alt={item.name}
          />
        ))
      }

      {viewBigItem  && <Modal picture={viewBigItem} close={closeModal}/>}
    </>
  )
}

export default App;