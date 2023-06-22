import {useState, useEffect} from "react";

export default function SelectedContact({SelectedContact, setSelectedContact}) {
    const [contact, setContact] = useState(null);
    console.log(contact);

    useEffect(() => {
        async function testFunction() {
            try {
                const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.log(error);
            }
        }
        testFunction();
    }, []);

    return (
        <>
        {contact && <p>{contact.email}</p>}
        </>
    );
}