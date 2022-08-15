import { Contact } from "./Contact";
import { ContactListType } from "./ContactListType";

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
    type: ContactListType,
}