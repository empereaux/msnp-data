/**
 * Represents a set of capabilities.
 */
export enum Capabilities
{
    /**
     * No capabilities.
     */
    none                        = 0,

    /**
     * Indicates the user is online via a Windows Mobile device.
     */
    onlineViaWindowsMobile      = 0x00_00_00_01,

    /**
     * Indicates the user is online via MSN Explorer.
     */
    onlineViaMsnExplorer        = 0x00_00_00_02,

    /**
     * Indicates the user is capable of receiving GIF-based Ink messages.
     */
    supportsInkGif              = 0x00_00_00_04,

    /**
     * Indicates the user is capable of receiving ISF-based Ink messages.
     */
    supportsInkIsf              = 0x00_00_00_08,

    /**
     * Indicates the user has a webcam.
     */
    supportsWebcam              = 0x00_00_00_10,

    /**
     * Indicates the user supports chunking a message payload.
     */
    supportsChunking            = 0x00_00_00_20,

    /**
     * Indicates the user is online via MSN Mobile.
     */
    onlineViaMsnMobile          = 0x00_00_00_40,

    /**
     * Indicates the user is online via MSN Direct.
     */
    onlineViaMsnDirect          = 0x00_00_00_80,

    /**
     * Indicates the user supports activities.
     */
    supportsActivities          = 0x00_00_01_00,

    /**
     * Indicates the user is online via a web-based client.
     */
    onlineViaWeb                = 0x00_00_02_00,

    /**
     * Indicates the user is online via an Office client.
     */
    onlineViaOffice             = 0x00_00_08_00,

    /**
     * Indicates the user has an MSN Space.
     */
    hasMsnSpace                 = 0x00_00_10_00,

    /**
     * Indictes the user is online via Media Center.
     */
    onlineViaMediaCenter        = 0x00_00_20_00,

    /**
     * Indicates the user supports direct messaging.
     */
    supportsDirectMessage       = 0x00_00_40_00,

    /**
     * Indicates the user supports winks.
     */
    supportsWinks               = 0x00_00_80_00,

    /**
     * Indicates the user supports shared search.
     */
    supportsSharedSearch        = 0x00_01_00_00,

    /**
     * Indicates the user is an officially provisioned chatbot.
     */
    isBot                       = 0x00_02_00_00,

    /**
     * Indicates the user supports voice messages.
     */
    supportsVoiceMessage        = 0x00_04_00_00,

    /**
     * Indicates the user supports secure channels.
     */
    supportsSecureChannel       = 0x00_08_00_00,

    /**
     * Indicates the user supports SIP invites.
     */
    supportsSipInvite           = 0x00_10_00_00,

    /**
     * Indicates the user supports shared folders.
     */
    supportsSharedFolders       = 0x00_40_00_00,

    /**
     * Indicates the user has OneCare installed.
     */
    hasOneCare                  = 0x01_00_00_00,

    /**
     * Indicates the user supports P2P TURN messages.
     */
    supportsP2pTurn             = 0x02_00_00_00,

    /**
     * Indicates the user supports P2P bootstrapping.
     */
    supportsP2pBootstrap        = 0x04_00_00_00,
}

/**
 * Represents the extended set of capabilities of a User or Contact.
 */
export enum ExtendedCapabilities
{
    /**
     * Whether the user only supports SMS.
     */
    isSmsOnly                       = 0x00_00_00_01,

    /**
     * Indicates the user supports Voice-Over-MSNP.
     */
    supportsVoiceOverMsnp           = 0x00_00_00_02,

    /**
     * Indicates the user supports the UUCP SIP stack.
     */
    supportsUucpSipStack            = 0x00_00_00_04,

    /**
     * Indicates the user supports application messages.
     */
    supportsApplicationMessages     = 0x00_00_00_08,

    /**
     * Indicates the user supports RTC video.
     */
    supportsRtcVideo                = 0x00_00_00_10,

    /**
     * Indicates the user supports P2P V2.
     */
    supportsPeerToPeerV2            = 0x00_00_00_20,

    /**
     * Indicates the user is an authenticated web user.
     */
    isAuthenticatedWebUser          = 0x00_00_00_40,

    /**
     * Indicates the user supports 1:1 group messages.
     */
    supportsOneOnOne                = 0x00_00_00_80,

    /**
     * Indicates the user supports offline messages.
     */
    supportsOfflineMessages         = 0x00_00_01_00,

    /**
     * Indicates the user supports video sharing.
     */
    supportsVideoSharing            = 0x00_00_02_00,

    /**
     * Indicates the user supports nudges.
     */
    supportsNudges                  = 0x00_00_04_00,

    /**
     * Indicates the user supports Circle voice messages.
     */
    supportsCircleVoiceMessages     = 0x00_00_08_00,

    /**
     * Indicates the user supports sharing.
     */
    supportsSharing                 = 0x00_00_10_00,

    /**
     * Indicates the user supports P2P mixer relay.
     */
    supportsPeerToPeerMixerRelay    = 0x00_00_80_00,

    /**
     * Indicates the user supports 16x9 ratio video calls.
     */
    supports16x9VideoCall           = 0x00_04_00_00,

    /**
     * Indicates the user supports P2P envelopes.
     */
    supportsPeerToPeerEnvelope      = 0x00_08_00_00,
    
    /**
     * Indicates Yahoo! messaging is disabled.
     */
    yahooMessagingDisabled          = 0x00_04_00_00,

    /**
     * Indicates the user supports SIP Tunnel V2.
     */
    supportsSipTunnelV2             = 0x00_10_00_00,
    
    /**
     * Indicates VMA-format voice clips.
     */
    supportsWmaVoiceClips           = 0x01_00_00_00,

    /**
     * Indicates the user supports Circle voice clips.
     */
    supportsCircleVoiceClips        = 0x02_00_00_00,

    /**
     * Indicates the user supports social news object types.
     */
    supportsSocialNewsObjectTypes   = 0x04_00_00_00,

    /**
     * Indicates the user supports custom emoticons.
     */
    supportsCustomEmoticons         = 0x08_00_00_00,
    
    /**
     * Indicates the user supports mood messages.
     */
    supportsMoodMessages            = 0x10_00_00_00,
    
    /**
     * Indicates the user supports FTURN.
     */
    supportsFTurn                   = 0x20_00_00_00,
    
    /**
     * Indicates the user supports P4 activities.
     */
    supportsP4Activities            = 0x40_00_00_00,
    
    /**
     * Indicates the user supports multi-party group messages.
     */
    supportsMultiParty              = 0x80_00_00_00,
}

/**
 * Gets the application version, also known as "MSNC" from the capabilities.
 */
export function getApplicationVersionFromCapabilities(capabilities: Capabilities): number
{
    return (capabilities >>> 7) & 0x0F;
}

/**
 * Gets the capabilities from the application version (also known as "MSNC").
 */
export function getCapabilitiesFromVersionNumber(version: number): Capabilities
{
    if (version < 1 || version > 15 || !Number.isInteger(version))
    {
        throw new RangeError(`The version '${version} is invalid.`);
    }

    return version << 7;
}