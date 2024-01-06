import { useState } from 'react';
import './App.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>
    );

    return (
      <ul>{listItems}</ul>
    );
}

function Profile() {
  return(
    <>
    <h1>{user.name}</h1>
    <img
    className='avatar'
    src='{user.imageUrl}'
    alt={'Photo of ' + user.name}
    style={{width: user.imageSize,
    height: user.imageSize
  }}
  />
    </>
  )
}

function MyButton() {
  return (
    <button>
      I am a button
    </button>
  )
}

function Button({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

function SeperateButton() {
  const [myCount, setMyCount] = useState(0);

  function handleMyClick() {
    setMyCount(myCount + 1);
  }

  return (
    <button onClick={handleMyClick}>
      clicked {myCount} times
    </button>
  )
}

function App() {
   const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <h1>Welcome to my app</h1>
    <hr />
    <MyButton />
    <hr />
    <Profile />
    <hr />
    <ShoppingList />
    <hr />
    <h1>Counters that share data and update together</h1>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
      <hr />
      <h1>Counters that update seperately</h1>
      <SeperateButton />
      <SeperateButton />
    </>
  )
  
}



export default App
