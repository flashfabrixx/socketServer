socketServer
============

Example Meteor Server with UI and API to be used by [client app](https://github.com/flashfabrixx/socketClient).

======================
#### Installation

````sh
# If not already installed, install Meteor first. 
curl https://install.meteor.com/ | sh

# Clone the server
git clone https://github.com/flashfabrixx/socketServer.git
cd socketServer
meteor

# Clone the app
git clone https://github.com/flashfabrixx/socketClient.git
cd socketClient
pod install
open socketClient.xcworkspace/
````

Open the webapp at [http://localhost:3000](http://localhost:3000) and run the iOS app in the simulator. If you want to test the app on your device, make sure to update the server path in ``MeteorAgent.m`` with your hostname.

======================
#### Features

- Creating, updating and deleting simple posts
- Native iOS app ([App Repository](https://github.com/flashfabrixx/socketClient))
- [ObjectiveDDP](https://github.com/boundsj/ObjectiveDDP) to communicate with websocket
- Offline storage with Core Data and synchronisation

======================
#### Licensing

MIT License.
