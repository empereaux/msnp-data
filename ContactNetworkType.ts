/**
 * Represents a network type of a Contact.
 */
export enum ContactNetworkType
{
    /**
     * The Windows Live network.
     */
    windowsLive = 0x01,

    /**
     * The Office Communicator network.
     */
    officeCommunicator = 0x02,

    /**
     * A telephone.
     */
    telephone = 0x04,

    /**
     * A mobile network.
     */
    mobileNetwork = 0x08,

    /**
     * An SMTP network.
     */
    smtp = 0x10,

    /**
     * The Yahoo! network.
     */
    yahoo = 0x20,
}