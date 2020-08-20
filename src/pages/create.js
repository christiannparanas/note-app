import React from 'react';
import { Link } from 'react-router-dom';

function Create() {
   return (
      <>
         <div className="header">
            <Link to="/" className="brand">Panoted</Link>
            <div className="create" id="save">Save</div>
         </div>
         <div className="content">
            <textarea name="content" id="" cols="30" rows="10"></textarea>
         </div>
      </>
   )
}

export default Create;