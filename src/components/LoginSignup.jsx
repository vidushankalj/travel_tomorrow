import React, { useState } from 'react';

const LoginSignup = () => {
  const [tab, setTab] = useState('login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle signup logic
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="w-96 mx-auto mt-10">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 w-1/2 text-center ${
            tab === 'login' ? 'bg-gray-200' : 'bg-white'
          }`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 w-1/2 text-center ${
            tab === 'signup' ? 'bg-gray-200' : 'bg-white'
          }`}
          onClick={() => handleTabChange('signup')}
        >
          Sign Up
        </button>
      </div>
      <div className="p-4 border">
        {tab === 'signup' ? (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
              >
                Sign Up
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
