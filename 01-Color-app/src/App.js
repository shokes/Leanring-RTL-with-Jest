import './App.css';

function App() {
  function oddNumbers(l, r) {
    // Write your code here
    let arr = [];

    for (let i = l; i <= r; i / 2 !== 0) {
      arr.push(i);
    }

    console.log(arr);
  }

  oddNumbers(5, 11);
  return (
    <div>
      <button style={{ backgroundColor: 'red' }}>Change to blue</button>
    </div>
  );
}

export default App;

// function findNumber(arr, k) {
//   // Write your code here
//   if (arr.includes(k)) {
//     return 'yes';
//   } else {
//     return 'no';
//   }
// }
