import React from 'react'
import Foother from '../components/users/common/footer/foother';
import MainNavbar from '../components/users/common/header/main-navbar';
import TopBar from '../components/users/common/header/top-bar';

const UserTemplate = ({children}) => {
  return (
    <>
        <TopBar/>
        <MainNavbar/>
        {children}
        <Foother/>
    </>


  )
}

export default UserTemplate;