/** Network config that will be fetched by each Hub instance */
config = {
    // The network that this applies to
    network: 1, 

    // Additional allowed peerIDs.
    // WARNING: Setting this to `[]` will BLOCK ALL PeerIDs, causing the nodes to disconnect from all peers. 
    // To disable the allowList, set allowedPeers to `undefined` 
    allowedPeers: undefined, // Mainnet is permissionless
    
    // allowedPeers: [
    //     "12D3KooWEWMXM8faJFXsVt6RUPBopBVvWUbnmETNWD9Z1Uijr7PH", // @adityapk00 - Hub2
    //     "12D3KooWRnSZUxjVJjbSHhVKpXtvibMarSfLSKDBeMpfVaNm1Joo", // hoyt.farcaster.xyz
    //     "12D3KooWJECuSHn5edaorpufE9ceAoqR5zcAuD4ThoyDzVaz77GV", // lamia.farcaster.xyz
    //     "12D3KooWMQrf6unpGJfLBmTGy3eKTo4cGcXktWRbgMnfbZLXqBbn", // nemes.farcaster.xyz
    //     "12D3KooWApEV85oe2T9mdDLFJMsM4PZchcYYMxAS3cosAxPp2GaS", // @asverty
    //     "12D3KooWN9ztVoHYi26NwTDDLNjgBozz479br3pwBuy3oLQVQmhz", // @cassie
    //     "12D3KooWBJnUaDeM1bm5CYQSKqBN7yKJZoF5E85SDYDiMKHr9UwA", // @roadz
    //     "12D3KooWHiyvASqvhGn9kqsLBemPTAF6UYEaFGaLUpPxnM54KFbG", // @deodad
    //     "12D3KooWFbnaXtbD5fwbMGq2JRjPaj7C6EpZRgaxC8jdtcX7FJbZ", // @v
    //     "12D3KooWHL4wFVz2gysrYLJvSmnLP7A3vKT2bxUyUPbSKPhfpUz2", // @wijuwiju
    //     "12D3KooWDYihZomibY21nh3hLRWBF6ExLLQ8xaBRaFBVwATHDsuG", // @woj
    //     "12D3KooWNr294AH1fviDQxRmQ4K79iFSGoRCWzGspVxPprJUKN47", // @adityapk
    //     "12D3KooWKwUpms7tgUoVsjQ2uV9g93hS2UiMRUfR8f4xjMtsk1Kq", // @pfh
    //     "12D3KooWATZKmurjSqWHfcLBgD4oYbNYiAHZ5VPq8W2kNid5TEuL", // @df
    //     "12D3KooWMnmYq2BDGKJ76w5pFyz2c1ZsK8pMvu6wxyg747j3p679", // @eddy
    //     "12D3KooWFoPsstYWVH3a4uFpmxksF6nDEsgYizHnPpd9Atw9DRbH", // @gavi
    //     "12D3KooWKYqmj1bQJChn4hCAhsneg9sRKRd6Zzp3DkVMUL2pjyAB", // @16
    //     "12D3KooWReH654LePzAE4shSw6wuWqP3i9jSN2jBNswWJu2kiPQ5", // @vern
    //     "12D3KooWRxgeFVLTAxeVgj4QHPzuT6HaV3Hj93LNZQeRi7gAwUVk", // @stout 
    //     "12D3KooWSii9GJheDmFRBzii43fpzvb3WkmPn62QSoJ8MjvGKMxr", // @mp
    //     "12D3KooWQ76P8kBUvjNx2Q8EpYDL1BsqXdqZmAkHzTxE1uruuwRd", // @brianjckim
    //     "12D3KooWMZFw3bxWbU3RghVfr4yWHFZc8p5gymTkTaJqgqJ2EJ4r", // @rafi
    //     "12D3KooWRrFF356RALgsPwQQpg68reJL2y94VwKZFogUkM9der1V", // @lndnnft
    //     "12D3KooWAr5LEwhSU1vNsgBQhkrLxZUKspag2CrwH5AYWu451Auj", // @withportals Shared Hub 1 (@lndnnft)
    //     "12D3KooWAPgyKfRPYXfJvUa2YmW1ZnFCs4Sx1m9WmEKxNn8mEXkJ", // @withportals Shared Hub 2 (@lndnnft)
    //     "12D3KooWCx2XRmiMoQKFRALhbet21ezvgChbJ9PtVSFatYfUpUhX", // @withportals Dedicated Hub 1 (@lndnnft)
    //     "12D3KooWATFp6YuGXGZrCMcm9JWCsnZxeYSJZ7ExzENFn3S4MExG", // @withportals Dedicated Hub 2 (@lndnnft)
    //     "12D3KooWKxHRB3K9JSpRba9hPd2e1zzmdgPH35qcf7yKMjFBcBuE", // @withportals Dedicated Hub 3 (@lndnnft)
    //     "12D3KooWELbuEmksKMfNsKQhf8q4LpjdvskcUK4wM5hjoi1KbUYz", // @craigbrentz.eth
    //     "12D3KooWPNDmUeNiGdCdoHp8iAf8Uay3c2C9n5QVygd3J1hfv65w", // @sanjay
    //     "12D3KooWFZwTP5bUZbQViTk79i2DZujHBBjPpAZyDwyrkPb79eAL", // @molo
    //     "12D3KooWHK4EXZ33nVFLSCLRuFNUK74v72eZEcRKoHTPbX9Nove7", // @neynar Hub 1
    //     "12D3KooWB17LnSuiMuRAfGbsEky1JV2cdN2FnafdPtz2C5sdE991", // @neynar Hub 2
    //     "12D3KooWDWmbsoWZf3edTqJHbx3sZStbgoARKXVQ2zBDUL1BcVLw", // @neynar Hub 3
    //     "12D3KooWC9b3iLvwHDHc9bqX8KUv5ickevCZ8LKLsrgrVkRqyE9W", // @bingo
    //     "12D3KooWDMXc4uVXr8zWGujaRuzhDnTBBHkTsJ58WimB8QU4cgos", // @nj
    //     "12D3KooWCZBZAirRXA2cecgud2zC7T5iN4hwr9nf7VAn9d8u9px2", // @rss3
    //     "12D3KooWRrjFGdSpCE3fZszNFj18TbQNFa28sjdq5KEybdYT29Ed", // @bradgao
    //     "12D3KooWJwBPFDdCkxWqVE6tCWPs4sDx2t4Pgy2cCewqKzLTRHgr", // @cryptobenkei
    //     "12D3KooWErFRoVgMHwShjDUjVGBFUGRfyCC1dHSix4HoEsxjmMvA", // @les
    //     "12D3KooWEr4WoKduAQg8VJSgwcNsqptbdkSQLw1ceEr8oSBQurJX", // @yanisme
    //     "12D3KooWMZK4VeMX3ZARugTuGexXFHNiGHgNFq6XE2vzi88fMgwC", // @event
    //     "12D3KooWEs1QcvJcoVv3ihHqqa3yxh4gijegrjyyVkvso2qayUdj", // @colin / @paragraph
    //     "12D3KooWBhm9XdafZiBWPncDVcvMhcmV3kLFLnBiS83CjY833sWN", // @pjc (fc.bus.events)
    //     "12D3KooWFHsw17MsY9eSbYLhkemUYcAwAjPPA7D6g3wTuhnLgAbT", // @sds
    //     "12D3KooWKEuT74vxNfhGJh5XGUURaenDj1qokjA811Wv78tFo5WV", // @blanker
    //     "12D3KooWCeDDcnpiwRMTGJjxsMayYuUuhRY71QxHxsLtx1ZP2Eq8", // @myz1237
    //     "12D3KooWMcDyq1KwcEgSjLixYLEPUZPYwDVFpWcyr8sp9nXCx6Dv", // Jam.so Hub 1
    //     "12D3KooWBP4DbXcJrjpwTAsWbLfEXAcWKLQhZoP9HpXrWbbNiogC", // Jam.so Hub 2
    //     "12D3KooWNXZSmpCLKBtkS9QyzEqG3qTZARLtKUkShxkTWV2EqsaK", // Jam.so Hub 3
    //     "12D3KooWSJj9pDSX5sEFoZum1fsdHuCJnoxwgHKhCg5rrLU7Gepe", // @pfista
    //     "12D3KooWDXSemEhSAidFCZT1HyRhTHayunCokg68VSuwStf8UEU5", // @98967eth
    //     "12D3KooWHcViME8KUZXo1wStoRF2jmg4edWidexGy5utVyoxNNnn", // @parthkohli
    //     "12D3KooWJtEEh7Bcx9T2oKUpcMb9K8xuMFFk5BQNNdJ63Rsx853C", // Jam.so Hub 4
    //     "12D3KooWH3FAGri9Ki4j7xBBjghav9nRTyu8jVVBsRh55odGxraM", // @kencodes
    //     "12D3KooWQ8fFUMipLC4Fm6DLN9vWQLX5XBbiewM1N5Vt6QxsPVxn", // @thezluf
    //     "12D3KooWPsSJu7jPS2UcroV4R1Ed1VJKVBxBkuNs4haDTEUnYBvm", // @sheldon
    //     "12D3KooWR5qBN6GraBd4DzAJVaGzVk9TZgUYFusoPhxt5suPFtqH", // @silent
    //     "12D3KooWNLshuXk4x2gacFTMEJjMGGFxPjpHg5KcV88KoqJP7dDR", // @bhgomes
    //     "12D3KooWS39hrt41rMuD5ZfPFMxUVycxVwz7w15CxZVhxP4AZDGr", // @rozhnovskiyigor
    //     "12D3KooWHXZkdEYWb5RCajv7YbffasjYNSEP1U68DMR1JeZ4QiXH", // @fedecastelli
    //     "12D3KooWCPdo8CNq3pu7oyJQYFzV6d4GbHUH8HTUbtHM6jpv6buy", // @cameron
    //     "12D3KooWHguasQqxAK9px8i5NDMFSG7VYhHRt4C7d2brpjakh5Sk", // @mboyle
    //     "12D3KooWDfxjnmTTk2nb89dBZZrCQ7g71BoJELKnVpUQUTt4YcL4", // @razzle
    //     "12D3KooWEoXRpLMjiRo9KxVHqg8Ng5gJxkJdd9uDotSNfYy8jFNv", // @pseudobun
    //     "12D3KooWPcrf4XYUQrxsLniTJR4u4roQJre2T6ev14JeJcAFzZZv", // airstack.xyz
    //     "12D3KooWLCAqhHempm8C8ZCLMMnK4pBPAyjS3HM2BMBopsC2HZDS", // airstack.xyz
    //     "12D3KooWCDxDVkirzdV6Ze8zgDq2i1X3tQLGgwTGRxwuYeHD6XDE", // @wrdwccz
    //     "12D3KooWHkYUwM3PeRqdYniuxAGXWhPYx6EzPhDY39J3cyNciQhE", // @naratech-eng
    //     "12D3KooWGU1ebBRwdTBrfb2jQniip7FsWfr22PJhZQwwAf4d8jgX", // Gvozdaryova43654.telegram
    //     "12D3KooWCtnQs9jm1z5HQK3pdEQTSZKptzQUycxPNirkj34yWhFC", // @web3dave
    //     "12D3KooWDKAtgRaxkCtAs1FiEu1X2XYEUetnL7wMqHRCFAACHCRR", // @christopher / @unofficial Hub 1
    //     "12D3KooWNyPgvhRmy1GV6s6krPmAZaJBo3AGkisgzrBivMPMZhPn", // @christopher / @unofficial Hub 2
    //     "12D3KooWQeY5FbjepJwzPAzBZyfLpaKAijx447WmuCwkd3qwxpPP", // @wslyvh
    //     "12D3KooWD2rboHTtYHSSHQ45g9eZjvJWtHWF5E8SzmAjB8qCFARK", // @fly
    //     "12D3KooWPqgfTRAiQ1fzKGJ8G3V2vhwmPJBk1WGzB8XgGHKwyQZU", // @kayaomer
    //     "12D3KooWKmseUorx4sY5rjbtrjCv8SkvGxC8NnjaU1aD2qsxKKio", // @fffilimonov
    //     "12D3KooWJEGQp3k3Zv87shripoWRcQUAMZmyWR5HoWzdEE1aKrXF", // @franceschina
    //     /*
    //      * Add a new entry by adding your peerId and a comment with your farcaster username. To ensure a
    //      * fast merge, add your name randomly in the middle of the list, since adding at the end creates
    //      * merge conflicts with everyone else updating this file
    //      */
    // ],
    
    // Deny these peers, even if they are in the allowList on the Hub. Deny list overrides allowlist
    deniedPeers: [],

    // Allowlist these peers for app-specific peer scoring, even if their score would otherwise remove
    allowlistedImmunePeers: [
        // hoyt.farcaster.xyz
        "12D3KooWRnSZUxjVJjbSHhVKpXtvibMarSfLSKDBeMpfVaNm1Joo",
        // lamia.farcaster.xyz
        "12D3KooWJECuSHn5edaorpufE9ceAoqR5zcAuD4ThoyDzVaz77GV",
        // nemes.farcaster.xyz
        "12D3KooWMQrf6unpGJfLBmTGy3eKTo4cGcXktWRbgMnfbZLXqBbn",
        // keats.farcaster.xyz
        "12D3KooWBPXFPS656B76tCmbbX6PB4vunmQcd8F38MZjkR88ofBx",
        // @v
        "12D3KooWFbnaXtbD5fwbMGq2JRjPaj7C6EpZRgaxC8jdtcX7FJbZ",
        // @sanjay
        "12D3KooWPNDmUeNiGdCdoHp8iAf8Uay3c2C9n5QVygd3J1hfv65w",
        // @deodad
        "12D3KooWNMAd358HmUe7HgkLYasGmZDfLM9iEEthE4VhqBFEr8dv",
        // @neynar
        "12D3KooWNsC2vzuHdKDfSM6xnMZwMjWK8zZCYHyLXuhRMeVRebGK",
        // @neynar
        "12D3KooWH9ojvuodLfc6bVyWArFaVAPgaKFiLFqH4Em48KQpSfwL",
    ],

    // Minimum version of the Hub. 
    // WARNING: If a Hub is below this version, it will not be able to start. 
    // A running hub below this version WILL SHUT DOWN!
    minAppVersion: "1.6.3",
    keyRegistryV2Address: "0x00000000fc1237824fb747abde0ff18990e59b7e",
    idRegistryV2Address: "0x00000000fc6c5f01fc30151999387bb99a9f489b",
};
