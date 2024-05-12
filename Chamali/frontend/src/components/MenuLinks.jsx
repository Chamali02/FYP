import React from 'react'
import { Link } from "react-router-dom";

function MenuLinks(props) {
  return (
    <>
     <Link to={props.url} className='px-3 font-main '>{props.linkname}</Link>
    </>
  )
}

export default MenuLinks