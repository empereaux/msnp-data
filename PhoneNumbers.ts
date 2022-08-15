/**
 * Represents the phone numbers for a User or Contact.
 */
export type PhoneNumbers =
{
    /**
     * Whether the user has an MSN Mobile device.
     */
    hasMsnMobileDevice: boolean,

    /**
     * Whether the user has MSN Mobile messaging enabled.
     */
    hasMsnMobileMessagingEnabled: boolean,

    /**
     * The home number.
     */
    home: string | null,

    /**
     * The mobile number.
     */
    mobile: string | null,

    /**
     * The work number.
     */
    work: string | null,
}