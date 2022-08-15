/**
 * Represents the type of a ContactList.
 */
export enum ContactListType
{
    /**
     * A forward list.
     * 
     * This is the list of all contacts in a user's contact list.
     */
    forward = 0x01,

    /**
     * The allow list.
     * 
     * This is the list of all contacts allowed to message the user and see their presence.
     */
    allow = 0x02,

    /**
     * The block list.
     * 
     * This is the list of all contacts explicitly blocked from messaging the user or seeing their presence.
     */
    block = 0x04,

    /**
     * The reverse list.
     * 
     * This is the list of all contacts who have the user on their forward list.
     */
    reverse = 0x08,

    /**
     * The pending list.
     * 
     * This is the list of all contacts 
     */
    pending = 0x10,
}

/**
 * Gets the abbreviation used for a specific list (e.g. "FL" or "AL").
 */
export function getContactListTypeAbbreviation(type: ContactListType): string
{
    switch (type)
    {
        case ContactListType.forward:   return "FL";
        case ContactListType.allow:     return "AL";
        case ContactListType.block:     return "BL";
        case ContactListType.reverse:   return "RL";
        case ContactListType.pending:   return "PL";
    }
}

/**
 * Gets the ContactListType represented by the abbreviation.
 */
export function getContactListTypeFromAbbreviation(abbreviation: string): ContactListType | null
{
    switch (abbreviation)
    {
        case "FL": return ContactListType.forward;
        case "AL": return ContactListType.allow;
        case "BL": return ContactListType.block;
        case "RL": return ContactListType.reverse;
        case "PL": return ContactListType.pending;
    }

    return null;
}