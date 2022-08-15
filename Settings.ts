import { ContactListTypes } from "./ContactListTypes";

/**
 * Represents user settings.
 */
export type Settings =
{
    /**
     * Whether to automatically add new contacts to the allow list.
     */
    automaticallyAllowNewContacts: boolean,

     /**
      * The default visibility of the user if the contact has not been explicitly added to the allow or block list.
      */
    defaultVisibility: ContactListTypes.allow | ContactListTypes.block, 
}