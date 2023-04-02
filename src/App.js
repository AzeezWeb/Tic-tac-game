import React, { useState } from 'react';
import './App.css';

function App() {

  let elArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, setState] = useState(false)
  const [players, setPlayers] = useState(0)
  
  let list = elArr.map((item, index) => {
    return <div className='item' key={index} id={index} onClick={add}> </div>
  })

  function add(e) {
      if(!state) {  
      let element= document.createElement('i')
      element.classList='bx bx-x'
      e.target.appendChild(element)
      e.target.classList.add('player1')
      setState(true)
    }

    if(state) {
      let element= document.createElement('i')
      element.classList='bx bx-radio-circle'
      e.target.appendChild(element)
      e.target.classList.add('player2')
      setState(false)
      }
  
      
      let element = document.querySelectorAll('.item')

      if((element[0].classList.contains('player1') && element[1].classList.contains('player1') && element[2].classList.contains('player1')) ||
        (element[3].classList.contains('player1') && element[4].classList.contains('player1') && element[5].classList.contains('player1')) ||
        (element[6].classList.contains('player1') && element[7].classList.contains('player1') && element[8].classList.contains('player1')) ||
        (element[0].classList.contains('player1') && element[4].classList.contains('player1') && element[8].classList.contains('player1')) ||
        (element[2].classList.contains('player1') && element[4].classList.contains('player1') && element[6].classList.contains('player1')) ||
        (element[0].classList.contains('player1') && element[3].classList.contains('player1') && element[6].classList.contains('player1')) ||
        (element[1].classList.contains('player1') && element[4].classList.contains('player1') && element[7].classList.contains('player1')) ||
        (element[2].classList.contains('player1') && element[5].classList.contains('player1') && element[8].classList.contains('player1'))
        ) { console.log('player1 yutdi');
        setPlayers(1)
      }
      if((element[0].classList.contains('player2') && element[1].classList.contains('player2') && element[2].classList.contains('player2')) ||
        (element[3].classList.contains('player2') && element[4].classList.contains('player2') && element[5].classList.contains('player2')) ||
        (element[6].classList.contains('player2') && element[7].classList.contains('player2') && element[8].classList.contains('player2')) ||
        (element[0].classList.contains('player2') && element[4].classList.contains('player2') && element[8].classList.contains('player2')) ||
        (element[2].classList.contains('player2') && element[4].classList.contains('player2') && element[6].classList.contains('player2')) ||
        (element[0].classList.contains('player2') && element[3].classList.contains('player2') && element[6].classList.contains('player2')) ||
        (element[1].classList.contains('player2') && element[4].classList.contains('player2') && element[7].classList.contains('player2')) ||
        (element[2].classList.contains('player2') && element[5].classList.contains('player2') && element[8].classList.contains('player2'))
        ) { console.log('player2 yutdi');
        setPlayers(2)
      }
  }

  let Restart = () => {
    setPlayers(0)
    setState(false)
  }


  const project = () => {
    switch(players) {
      case 0: return list;
      case 1:return (<div className='winner'>
                      <h1>Player 1 wins!</h1>
                      <button onClick={Restart}> Restart</button>
                    </div>)
      case 2:return (<div className='winner'>
                      <h1>Player 2 wins!</h1>
                      <button onClick={Restart}> Restart</button>
                  </div>)
      default:return <h1>No project match</h1>
    }
  }

 

  return (
    <div className="App">
      {project()}
    </div>
  );
}

export default App;
