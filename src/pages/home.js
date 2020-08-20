import React from 'react';
import { Link } from 'react-router-dom';
import Notes from '../components/notes'

function Home() {
   return (
      <>
         <div className="header">
            <div className="brand">Panoted</div>
            <Link to="/create" className="create">create</Link>
         </div>
         <Notes />
      </>
   )
}

export default Home;