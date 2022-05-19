import React, { useEffect, useState } from 'react';
import AuthNavigation from './AuthNavigation'
import DrawerNavigation from './DrawerNavigation'
import ResellerDrawerNavigation from './ResellerDrawerNavigation'
import { useSelector } from 'react-redux';

const AppNavigation = (props) => {
  
  const [ userType, setUserType ] = useState('')
  const updateUserType =(userTy)=>{
    setUserType(userTy)
  }
  useEffect(() => {
    
  }, [userType])
  return (
    userType === 'member' ? <DrawerNavigation /> : userType == 'reseller' ? <ResellerDrawerNavigation /> : <AuthNavigation updateUserType={updateUserType} />
  )
}

export default AppNavigation