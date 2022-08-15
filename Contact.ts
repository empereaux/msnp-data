import { ContactListTypes } from "./ContactListTypes";
import { ContactNetworkType } from "./ContactNetworkType";
import { PhoneNumbers } from "./PhoneNumbers";
import { Status } from "./Status";

/**
 * Represents a single contact.
 */
export type Contact =
{
    /**
     * The handle of the contact (e.g. "example@hotmail.com").
     */
    handle: string,

    /**
     * The ID of the contact.
     */
    id: string,

    /**
     * The lists the contact is on.
     */
    lists: ContactListTypes,

    /**
     * The network of the contact.
     */
    network: ContactNetworkType,

    /**
     * The contact's phone numbers.
     */
    phone: PhoneNumbers,

    /**
     * The contacts's status.
     */
    status: Status,
}