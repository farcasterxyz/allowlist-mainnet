## Hubble Mainnet Network Config

This repo contains the hubble mainnet's network config. It can be updated to:

1. Add PeerIDs to the mainnet allow list
2. Remove/Deny PeerIDs from the mainnet allow list
3. Set a minimum App Version for Hubble

### Usage

Add PeerIDs to `networkConfig.js` as needed. Hubble will re-download the network config every hour.
Note:
  - Setting `allowedPeerIds` to `undefined` will remove the allowlist, allowing anyone to connect to the node
  - Setting `allowedPeerIds` to `[]` will BLOCK ALL peers, allowing NO ONE to connect to the node
  - PeerIds in `deniedPeerIds` will be denied, even if they are also contained in `allowedPeerIds`
