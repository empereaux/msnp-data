/**
 * Represent's a user's profile.
 */
export type Profile =
{
    /**
     * The user's birthday, in ISO-8601 format.
     */
    birthday: string,

    /**
     * The country code.
     */
    country: string,

    /**
     * The user's friendly name.
     */
    friendlyName: string,

    /**
     * The gender.
     */
    gender: "male" | "female" | "unspecified",

    /**
     * The preferred language code.
     */
    language: string,

    /**
     * The user's postal code.
     */
    postalCode: string,
}