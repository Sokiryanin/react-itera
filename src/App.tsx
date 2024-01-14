
import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './Button/Button';
import { ContactsList } from './ContactsList/ContactsList';
import {Header} from './Header/Header';
import { Welcome } from './Welcome';

import users from "./user.json"
import { Container } from './Container/Container';

/* 
type of Props
type Props: {
  userName: string;           //string
  userAge: number;            //number
  isAdmin: boolean;           //boolean
  bdages: strnig[];           //array
  contacts: {email: string};  //object
  callback: ()=>void;         //function
  icon: JSX.Element           //Even anothr element
}
*/

function App() {
  const [counter, setCounter] = useState(0);
  
  // 1. Після кожного монтування компоненту
useEffect(()=> {
  console.log('1');
})

// 2. Одноразово після того як компонент змонтовано
useEffect(()=> {
  console.log('2');
}, [])

// 3. Підписуємось на подію і хочемо щоб компонент було видалено
useEffect(()=> {
return () => console.log('3');
}, [])

  return (
<>
<Header copyright='page' />
<Container>
<Welcome content='Hi dudes!'/>
<ContactsList users={users}/>
<h3>Counter {counter} times</h3>
<Button onClick={()=> setCounter(counter +1) } content="Increment"/>
<Button onClick={()=> setCounter(counter -1) } content="Decrement"/>
</Container>
</>

  );
}

export default App;
