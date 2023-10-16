import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../images/search.png'
import { Spinner } from './Spinner';
import humid from '../images/humidity.png'
import windy from '../images/wind.png'
import mist from '../images/mist.png'

export const Weather = () => {
  const apiKey = "0bbbb41f4c0008694670306b429107e6"; 
  const [city, setCity] = useState("");
  const units = "metric";
  const [temp, setTemp] = useState("");
  const [humidity,setHumidity] = useState("");
  const [windSpeed,setWindSpeed] = useState("");
  const [spinner,setSpinner] = useState('false');

  async function fetchData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    try {
      setSpinner(true);
      const response = await axios.get(url);
      const output = response.data;
      setTemp(Math.round(output.main.temp));
      setHumidity(output.main.humidity)
      setWindSpeed(output.wind.speed);
      setSpinner(false)
    } catch (error) {
      toast.error("Failed to fetch weather data.");
    }
  }

  function cityHandler() {
    fetchData();
    if(city !== "") {
      toast.success(`Showing Weathor in  ${city}` ,{
        position: "top-center",
        autoClose: 1099,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else {

    }
  }


  return (
    <div  className='flex justify-center bg-[#474747] h-screen'>
      <div className='border-2 border-black mt-[90px] h-2/3 items-center w-1/2 bg-[#f5b0b0] rounded-xl'>
      <h1 className='text-3xl mt-[15px] mb-[15px] font-semibold border-b-1'>Weather App</h1>
      <div className='flex items-center justify-center mb-[10px] gap-5 '>
        <button className='bg-yellow-300 border-2 border-black rounded-lg px-1'
        onClick={() => {
          setCity("Jaipur")
          fetchData()
          toast.success(`Showing Weathor in  ${city}` ,{
            position: "top-center",
            autoClose: 1099,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }}
        >Jaipur</button>
        <button className='bg-yellow-300 border-2 border-black rounded-lg px-1'
        onClick={() => {
          setCity("Delhi")
          fetchData();
          toast.success(`Showing Weathor in  ${city}` ,{
            position: "top-center",
            autoClose: 1099,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }}
        >Delhi</button>
        <button className='bg-yellow-300 border-2 border-black rounded-lg px-1'
        onClick={() => {
          setCity("Mumbai")
          fetchData();
          toast.success(`Showing Weathor in  ${city}` ,{
            position: "top-center",
            autoClose: 1099,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }}
        >Mumbai</button>
        <button className='bg-yellow-300 border-2 border-black rounded-lg px-1'
        onClick={() => {
          toast.success(`Showing Weathor in  ${city}` ,{
            position: "top-center",
            autoClose: 1099,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            setCity("Kolkata")
            fetchData();
        }}
        >Kolkata</button>
      </div>
      <div className='flex  justify-center gap-1'>
        <input
          onChange={(event) => {setCity(event.target.value)}}
          value={city} placeholder='Enter a city name'
          className='text-center border-2 border-black focus:scale-x-110 bg-[#f5b0b0] placeholder:text-black outline-none'
        />
        <button
          className=' text-white px-2 rounded-xl'
          onClick={cityHandler}
        >
          <img src={logo} alt="" className='rounded-full  w-[40px]  '/>
        </button>
        
      </div>
      {
        spinner ? (<Spinner />) : (
          <div>
            <p className='text-2xl flex flex-col items-center'>Temperature : {temp} °C <img src={mist} alt="" width={175}  /></p>      
            <div className='flex pr-[20px] pl-[20px] justify-between '>
              <p className='text-xl flex flex-col items-center'>Humidity : {humidity} % <img src={humid} width={80} alt=""/></p>      
              <p className='text-xl flex flex-col items-center'>Windspeed : {windSpeed} Kmph <img src={windy} width={80} alt=""/></p> 
            </div>
          </div>
        )  
      }

      <ToastContainer/>
      </div>
    </div>
  );
};
