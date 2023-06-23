import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? ( //If it is a truthy value, for now, render a div with a short message. If selectedContactId is falsey, render the ContactList component. 
      <div>
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      </div>
    ) : (
      <ContactList setSelectedContactId = {setSelectedContactId}/>
    )}
    </>
  );
}