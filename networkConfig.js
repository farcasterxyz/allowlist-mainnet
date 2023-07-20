/** Network config that will be fetched by each Hub instance */
config = {
    // The network that this applies to
    network: 1, 

    // Additional allowed peerIDs
    allowedPeers: [
        "12D3KooWEWMXM8faJFXsVt6RUPBopBVvWUbnmETNWD9Z1Uijr7PH", // @adityapk00 - Hub2
    ],
    
    // Deny these peers, even if they are in the allowList on the Hub. Deny list overrides allowlist
    deniedPeers: [], 

    // Minimum version of the Hub. 
    // WARNING: If a Hub is below this version, it will not be able to start. 
    // A running hub below this version WILL SHUT DOWN!
    minAppVersion: "1.3.3" 
};