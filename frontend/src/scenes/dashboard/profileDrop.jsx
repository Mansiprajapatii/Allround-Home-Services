import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProfileDrop() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/uprofile");
  }
  const BookingPage = () => {
    navigate("/ubooks");
  }

  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className='flex flex-col dorpdown '>
      <ui className='flex flex-col gap-4 droplist'>
        <li className='list' onClick={handleProfile}>Profile</li>
        <li className='list' onClick={BookingPage}>Booking History</li>
        <li  className='list' onClick={handleLogout}>Logout</li>
      </ui>
    </div>
  );
}

export default ProfileDrop;
