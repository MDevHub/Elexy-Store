import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { FiEdit, FiSave, FiX } from 'react-icons/fi';

const Profile = () => {
  const { user, logout, login } = useAuth();
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [profilePic, setProfilePic] = useState(user?.photo || null);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSave = () => {
    const updatedUser = {
      ...user,
      firstName,
      lastName,
      photo: profilePic
    };
    updatedUser.name = `${firstName} ${lastName}`;
    localStorage.setItem('user', JSON.stringify(updatedUser));
    login(updatedUser.email); // simulate login with updated info
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFirstName(user?.firstName || '');
    setLastName(user?.lastName || '');
    setProfilePic(user?.photo || null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50 font-serif">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            src={profilePic || `https://ui-avatars.com/api/?name=${user?.email}&background=0D8ABC&color=fff&rounded=true&size=100`}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover"
          />
          {editMode && (
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 text-sm"
            />
          )}
        </div>

        {!editMode ? (
          <>
            <h2 className="text-xl font-semibold text-center mb-1">
              {user?.firstName || 'First'} {user?.lastName || 'Last'}
            </h2>
            <p className="text-center text-gray-500 mb-4">{user?.email}</p>
          </>
        ) : (
          <div className="space-y-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        )}

        <div className="flex justify-center gap-3 mt-4">
          {!editMode ? (
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-2 py-2 px-4 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FiEdit /> Edit Profile
            </button>
          ) : (
            <>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 py-2 px-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
              >
                <FiSave /> Save
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 py-2 px-4 bg-gray-300 text-black rounded-full hover:bg-gray-400 transition"
              >
                <FiX /> Cancel
              </button>
            </>
          )}
        </div>

        <hr className="my-6" />

        <button
          onClick={handleLogout}
          className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
