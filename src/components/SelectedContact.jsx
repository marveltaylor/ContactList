import {useState, useEffect} from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);

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
    }, [selectedContactId]);

    return (
        <>
        {contact && <p>{contact.email}</p>}
        </>
    );
}