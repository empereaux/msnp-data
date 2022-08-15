import { Endpoint } from "./Endpoint";
import { Status } from "./Status";
import { User } from "./User";

/**
 * Represents a single User session.
 */
export type Session =
{
    /**
     * The endpoints associated with the user.
     */
    endpoints: Array<Endpoint>,

    /**
     * The status of the user.
     */
    status: Status,

    /**
     * The user.
     */
    user: User,
}