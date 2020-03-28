import React, { useEffect } from 'react';
import Router from 'next/router';
import { getCookie, setCookie } from '../../../../utils/cookie';


const ProtectedPage = (props) => {
  const [ ong, setOng ] = React.useState({})
  React.useEffect(() => {
    let ong = getCookie('currentOng');
    if(ong) {
      ong = JSON.parse(ong)
      setOng(ong)
    } else {
      Router.push('/')
    }
  }, [ ])

  if (!ong) return null;
  return props.children;
};

export default ProtectedPage;
