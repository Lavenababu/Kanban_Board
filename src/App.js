import React, { useEffect, useState} from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Dropdown from "./Components/Dropdown/Dropdown";

function App() {

  const [tickets,setTickets]=useState([]); 
  // const [users,setUsers]=useState([]);
  const [selectedOption2, setSelectedOption2] = useState('');

  useEffect(()=>{
    fetch("https://apimocha.com/quicksell/data")
      .then((result)=>{result.json()
      .then((resp)=>{
        try {
          const ticketsArray = resp.tickets;
          // const usersArray = resp.users;
          setTickets(ticketsArray)
          // setUsers(usersArray)
        }catch (error) {
          console.error('Error fetching data:', error);
        }
      })
    })
  },[]) // blank array is passed so that it runs only once
  // console.warn(tickets)
  // console.warn(users)

// const [target,setTarget]=useState({
//   cid: "",
//   bid:"",
// });

// const handleDragEnd=(cid,bid)=>{
//   setTarget({
//     let s_bIndex, s_cIndex, t_bIndex, t_cIndex

//     s_bIndex=tickets
//   })
// }

// const handleDragEnter=(cid,bid)=>{
//   setTarget({
//     cid,
//     bid,
//   })
// }

  return (
    <div className="App">
      <div className='app_navbar'>
      < h2>Kanban Board</h2><br/>
      <Dropdown />
      </div>
      <div className='app_outer'>
        <div className='app_boards'>

          {/* {tickets.map((tickets)=>( */}
            <Board 
            tickets={tickets}
            selectedOption2={selectedOption2}
            // handleDragEnd={handleDragEnd}
            // handleDragEnter={handleDragEnter}
              />

             {/* ))}   */}

        </div>
      </div>
    </div>
  ); 
}

export default App;
