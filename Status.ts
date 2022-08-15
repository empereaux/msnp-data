/**
 * Represents the status of the User or a Contact.
 */
export enum Status
{
    /**
     * Indicates the user is online.
     */
    online = 1,

    /**
     * Indicates the user is busy.
     */
    busy = 2,

    /**
     * Indicates the user is idle.
     */
    idle = 3,

    /**
     * Indicates the user will be right back.
     */
    beRightBack = 4,

    /**
     * Indicates the user is away.
     */
    away = 5,

    /**
     * Indicates the user is on the phone.
     */
    onThePhone = 6,

    /**
     * Indicates the user is out for lunch.
     */
    outForLunch = 7,

    /**
     * Indicates the user is hidden.
     */
    hidden = 8,

    /**
     * Indicates the user is offline.
     */
    offline = 9,
}

/**
 * Gets the abbreviation used for a specific status (e.g. "NLN" or "AWY").
 */
export function getStatusAbbreviation(status: Status): string
{
    switch (status)
    {
        case Status.away:
            return "AWY";
        case Status.beRightBack:
            return "BRB";
        case Status.busy:
            return "BSY";
        case Status.hidden:
            return "HDN";
        case Status.idle:
            return "IDL";
        case Status.offline:
            return "FLN";
        case Status.onThePhone:
            return "PHN";
        case Status.online:
            return "NLN";
        case Status.outForLunch:
            return "LUN";
    }
}

/**
 * Gets the Status represented by the abbreviation.
 */
export function getStatusFromAbbreviation(abbreviation: string): Status | null
{
    switch (abbreviation)
    {
        case "AWY":
            return Status.away;
        case "BRB":
            return Status.beRightBack;
        case "BSY":
            return Status.busy;
        case "HDN":
            return Status.hidden;
        case "IDL":
            return Status.idle;
        case "FLN":
            return Status.offline;
        case "PHN":
            return Status.onThePhone;
        case "NLN":
            return Status.online;
        case "LUN":
            return Status.outForLunch;
    }

    return null;
}