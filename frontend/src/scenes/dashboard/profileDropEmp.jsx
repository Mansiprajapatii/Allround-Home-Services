import React from 'react';
import { useNavigate } from 'react-router-dom';


function ProfileDropEmp() {

  const navigate = useNavigate();

  // const handleProfile = () => {
  //   navigate("/uprofile");
  // }

  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/");
  }
  
  return (
    <div className='flex flex-col dorpdown '>
      <ui className='flex flex-col gap-4 droplist'>
        <li  className='list' onClick={handleLogout}>logout</li>
      </ui>
    </div>
  );
}

export default ProfileDropEmp;
