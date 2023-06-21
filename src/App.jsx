import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? ( //If it is a truthy value, for now, render a div with a short message. If selectedContactId is falsey, render the ContactList component.
      <div>Selected Contact View</div>
    ) : (
      <ContactList/>
    )}
    </>
  );
}