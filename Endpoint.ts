import { Capabilities } from "./Capabilities";

/**
 * Represents a User's endpoint.
 */
export type Endpoint =
{
    /**
     * The capabilities of the endpoint.
     */
    capabilities: Capabilities,

    /**
     * The ID of the endpoint.
     */
    id: string,
}