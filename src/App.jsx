import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <ContactList/>
    </>
  )
}