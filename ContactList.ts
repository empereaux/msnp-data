import { Contact } from "./Contact";
import { ContactListTypes } from "./ContactListTypes";

/**
 * Represents a contact list.
 */
export type ContactList =
{
    /**
     * The contacts.
     */
    contacts: Array<Contact>,

    /**
     * The type of the buddy list.
     */
    type: ContactListTypes,
}