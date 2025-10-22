import React, { useEffect, useState } from 'react';
import {usersMockdata} from './mockData'

function App() {
 const [customerRewards,setCustomerRewards] = useState({});
 const [loading,setLoading] = useState(false)
 const [error,setError] = useState("")
 const [months,setMonths] = useState([]);
 const monthOrder = [
  "Jan", "Feb", "Mar", "Apr", "May", 
  "Jun", "Jul", "Aug", "Sep", "Oct", 
  "Nov", "Dec"
];

 
 useEffect(() => {
     fetchUserRecords();
  },[]);
  
  const fetchUserRecords = async () => {
    let customerRewards = {};
    setLoading(true);
    setError("");
    try{
    const userTransacations = await usersMockdata();
    const months = new Set();
    userTransacations.forEach(({customerName,purchaseDate,amount}) => {
      if(!customerRewards[customerName]){
        customerRewards[customerName] = {total: 0}
      }
      
      const points = calculateRewardPoints(amount);
      customerRewards[customerName][purchaseDate] = (customerRewards[customerName][purchaseDate] || 0) + points
      customerRewards[customerName].total += points
      months.add(purchaseDate);
    });
    setCustomerRewards(customerRewards);
    setMonths([...months].sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)))
 
    }
    catch(error) {
      setError("Problem in fetching data");
    }
    finally {
      setLoading(false);
    }
  }

  
  const calculateRewardPoints = (amount) => {
    let rewardPoints = 0;
    if (amount > 100) {
      rewardPoints = (amount - 100) * 2 + 50;
    } else if (amount > 50 ) {
      rewardPoints = amount - 50;
    } 
    return Math.floor(rewardPoints);
  };
  
  if(loading) return <p>Data fetching... </p>
  if(error) return <p>{error} </p>

  return (
    <table>
      <thead>
        <tr>
        <th>Customer Name</th>
        {months.map((month) => (<th key={month}>{month}</th>))}
        <th>Total</th>
        </tr>
      </thead><tbody>
        {Object.entries(customerRewards).map(([customerName,monthsData]) => (
          <tr key={customerName}>
          <td>{customerName}</td>
          {months.map((month) => (<td key={month}>{monthsData[month] ||0}</td>))}
          <td>{monthsData.total}</td>
        </tr>
        ))}
        
      </tbody>
    </table>
  );
}

export default App;
