## Hubble Mainnet Network Config

Configuration for Hubble instances to determine which peers to connect to and ignore. Instances update their configuration from the repo every hour on the top of the hour. 

### Adding Peers

To add a new peer, make a pull request to this repo adding the peer's PeerID to the `allowedPeerIds` array in `networkConfig.js`. Setting `allowedPeerIds` to `undefined` will allow anyone to connect to the node, while setting it to `[]` will block everyone.

### Blocking Peers

To block a peer, make a pull request to this repo adding the peer's PeerID to the `deniedPeerIds` array in `networkConfig.js`. PeerIds in `deniedPeerIds` will be denied, even if they are also contained in `allowedPeerIds`.

### Version Killswitch

To stop all nodes below a certain version in case of an emergency, set the `minAppVersion` in `networkConfig.js` to the minimum version you want to allow. This functionality will be deprecated after the mainnet contract launch. 