import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainSignup = () => {
       const navigate = useNavigate()
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ userData, setUserData ] = useState({})
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [vehicleColour, setVehicleColour] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
 
        
      const submitHandler = async (e) => {
        e.preventDefault()
        const captainData = {
          fullname: {
            firstname: firstName,
            lastname: lastName
          },
          email: email,
          password: password,
          vehicle: {
            color: vehicleColor,
            vehicleType: vehicleType,
            capacity: vehicleCapacity,
            plate: vehiclePlate
          }
        }
    
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)
    
        if (response.status === 201) {
          const data = response.data
          setCaptain(data.user)
          localStorage.setItem('token', data.token)
          navigate('/home')
        }
    
    
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
        setVehicleColor('')
        setVehicleType('')
        setVehicleCapacity('')
        setVehiclePlate('')
    
      }
      return (
        <div>
          <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
              <img className='w-16 mb-10' src="https://w7.pngwing.com/pngs/567/356/png-transparent-uber-logo-decal-lyft-business-text-people-logo-thumbnail.png" alt="" />
    
              <form onSubmit={(e) => {
                submitHandler(e)
              }}>
    
                <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
                <div className='flex gap-4 mb-7'>
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='First name'
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                    }}
                  />
                  <input
                    required
                    className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                    type="text"
                    placeholder='Last name'
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                    }}
                  />
                </div>
    
                <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                <input
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                  type="email"
                  placeholder='email@example.com'
                />
    
                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    
                <input
                  className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required type="password"
                  placeholder='password'
                />
                
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <h3 className='text-lg font-medium mb-2'>Vehicle Color</h3>
                    <input
                      required
                      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                      type="text"
                      placeholder='Vehicle Color'
                      value={vehicleColor}
                      onChange={(e) => setVehicleColor(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <h3 className='text-lg font-medium mb-2'>Vehicle Type</h3>
                    <select 
                      required
                      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg'
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                    >
                      <option value="">Select Vehicle Type</option>
                      <option value="car">Car</option>
                      <option value="auto">Auto</option>
                      <option value="moto">Moto</option>
                    </select>
                  </div>

                  <div>
                    <h3 className='text-lg font-medium mb-2'>Vehicle Capacity</h3>
                    <input
                      required
                      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                      type="number"
                      placeholder='Number of seats'
                      value={vehicleCapacity}
                      onChange={(e) => setVehicleCapacity(e.target.value)}
                    />
                  </div>

                  <div>
                    <h3 className='text-lg font-medium mb-2'>Vehicle Plate</h3>
                    <input
                      required
                      className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                      type="text"
                      placeholder='Vehicle Plate Number'
                      value={vehiclePlate}
                      onChange={(e) => setVehiclePlate(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                >Create account</button>
    
              </form>
              <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
            </div>
            <div>
              <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
          </div>
        </div >
      )
    }
    

export default CaptainSignup;