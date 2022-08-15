/**
 * Represents the types of a ContactList.
 */
export enum ContactListTypes
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
export function getContactListTypeAbbreviation(type: ContactListTypes): string
{
    switch (type)
    {
        case ContactListTypes.forward:   return "FL";
        case ContactListTypes.allow:     return "AL";
        case ContactListTypes.block:     return "BL";
        case ContactListTypes.reverse:   return "RL";
        case ContactListTypes.pending:   return "PL";
    }
}

/**
 * Gets the ContactListTypes represented by the abbreviation.
 */
export function getContactListTypeFromAbbreviation(abbreviation: string): ContactListTypes | null
{
    switch (abbreviation)
    {
        case "FL": return ContactListTypes.forward;
        case "AL": return ContactListTypes.allow;
        case "BL": return ContactListTypes.block;
        case "RL": return ContactListTypes.reverse;
        case "PL": return ContactListTypes.pending;
    }

    return null;
}