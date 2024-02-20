"use client"
import React,{useState,useEffect} from 'react'

export default function Country() {
  const [country,setCountry]=useState('United states')
  useEffect(()=>{
const getCountry=async ()=>{
  const response= await fetch('https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}')
  .then((res)=> res.json())
  .then((data) =>data.country)
  if (!response) return;
  console.log(response)
  setCountry(response)

}
getCountry()
  },[])
  return (
    <div>{country}</div>
  )
}
