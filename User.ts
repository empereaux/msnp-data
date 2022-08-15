import { Capabilities } from "./Capabilities";
import { ContactListType } from "./ContactListType";
import { PhoneNumbers } from "./PhoneNumbers";
import { Profile } from "./Profile";

/**
 * Represents a user.
 */
export type User =
{
    /**
     * Whether to automatically add new contacts to the allow list.
     */
    automaticallyAllowNewContacts: boolean,

    /**
     * The user's capabilities.
     */
    capabilities: Capabilities,

    /**
     * The default visibility of the user if the contact has not been explicitly added to the allow or block list.
     */
    defaultVisibility: ContactListType.allow | ContactListType.block,

    /**
     * Represents a User's handle (e.g. "example@hotmail.com").
     */
    handle: string,

    /**
     * The user's phone numbers.
     */
    phone: PhoneNumbers,

    /**
     * The user's profile.
     */
    profile: Profile,
}