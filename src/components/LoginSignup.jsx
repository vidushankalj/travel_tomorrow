import React, { useState } from 'react';

const LoginSignup = (props) => {
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

  // handle signup
  const handleSignup = async (e) => {
    e.preventDefault();

    const user = {firstName, lastName, email, phone, gender, password}

    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }

    const response = await fetch('http://localhost:8000/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      alert('signup failed')
      return
    }

    if (response.ok) {
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setGender('')
      setPassword('')
      setConfirmPassword('')
      alert('new user added')
      return
    }
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setGender('')
    setPassword('')
    setConfirmPassword('')
    return
  }

  return (
    <div className="w-96 mx-auto mt-10 absolute top-1/2 left-1/2 -translate-x-1/2 bg-white z-50 -translate-y-60 ">
      <div className="flex border-b border-gray-200">
        <button
          className={`px-4 py-2 w-1/2 text-center text-black ${
            tab === 'login' ? 'bg-gray-200' : 'bg-white'
          }`}
          onClick={() => handleTabChange('login')}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 w-1/2 text-center text-black ${
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
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <select
                className="w-full p-2 border border-gray-300 rounded text-black"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" className="text-black">Select Gender</option>
                <option value="male" className="text-black">Male</option>
                <option value="female" className="text-black">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="mb-4 flex gap-2">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
              >
                Sign Up
              </button>
              {/* cancle */}
              <button
                type="cancel"
                className="w-full py-2 bg-blue-500 text-white rounded"
                onClick={handleCancel}
              >
                Cancel
              </button>
              {/* Cancel */}
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Password"
              />
            </div>
            <div className="mb-4 flex gap-2">
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded"
              >
                Login
              </button>
              {/* cancle */}
              <button
                type="cancel"
                className="w-full py-2 bg-blue-500 text-white rounded"
                onClick={props.setShowSignUp}
              >
                Cancel
              </button>
              {/* Cancel */}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
