import { Capabilities } from "./Capabilities";
import { ContactNetworkType } from "./ContactNetworkType";
import { PhoneNumbers } from "./PhoneNumbers";
import { Status } from "./Status";

/**
 * Represents a single contact.
 */
export type Contact =
{
    /**
     * The contact's capabilities.
     */
    capabilities: Capabilities,

    /**
     * The handle of the contact (e.g. "example@hotmail.com").
     */
    handle: string,

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