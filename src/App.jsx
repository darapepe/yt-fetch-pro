import { Suspense } from 'react';
import './App.css'
import { fetchData } from './fetchData';

const apiData = fetchData("https://jsonplaceholder.typicode.com/users")

function App() {

  const data = apiData.read();

  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className='card'>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </div>
  )
}

export default App
