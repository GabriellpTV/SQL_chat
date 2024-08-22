import { ContactsContext } from "../contexts/contacts";
import { useContext } from "react";

export default function useContacts() {
    const context = useContext(ContactsContext);
    return context
} 