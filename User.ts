import { PhoneNumbers } from "./PhoneNumbers";
import { Profile } from "./Profile";
import { Settings } from "./Settings";

/**
 * Represents a user.
 */
export type User =
{
    /**
     * Represents a User's handle (e.g. "example@hotmail.com").
     */
    handle: string,

    /**
     * The user's ID.
     */
    id: string,

    /**
     * The user's phone numbers.
     */
    phone: PhoneNumbers,

    /**
     * The user's profile.
     */
    profile: Profile,

    /**
     * The user's settings.
     */
    settings: Settings,
}