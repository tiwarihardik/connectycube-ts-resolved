# Overview

[ConnectyCube](https://connectycube.com) JavaScript SDK.

ConnectyCube is a messaging and video calling platform for iOS, Android and JavaScript apps.

Check our [comprehensive guide](https://developers.connectycube.com/js/) for JavaScript SDK.

## Features

- Messaging - first-class messaging API to build 1-1 and group chats, broadcast channels and so on. Different chat attachments are supported in the cloud.
- Video calling - peer-to-peer and group video calling up to 10 people based on modern WebRTC technologies. Various quality settings and audio/video codecs supported.
- Push notifications - never miss your chat messages with automatic push notifications to offline users. Also receive a push to all your devices when somebody calls you in a video chat.
- Authentication & Users - manage all the things related to user accounts handling, authentication, account data, password reminding etc. Integration with your own user base via external auth mechanisms.
- Chat bots - use chat bots to enable users to conversationally interact with your service or your product. Bots are fully automated services.

For more details check the [ConnectyCube features page](https://connectycube.com/features)

## Connect SDK

Simply connect the JS file as a normal script:

```html
<script src="https://cdn.jsdelivr.net/npm/connectycube@x.x.x/dist/connectycube.min.js"></script>
```

where **x.x.x** is the desired JS SDK version (check for [Releases page](https://github.com/ConnectyCube/connectycube-js-sdk-releases/releases) for all available versions).

Then a window scoped variable called `ConnectyCube` is created.

Or install the package as node_module:

```bash
npm install connectycube --save
```

And add script to HTML file from the 'node_modules' folder (as a relative path):

```html
<script src="~/node_modules/connectycube/dist/connectycube.min.js"></script>
```

```javascript
const ConnectyCube = require('connectycube');
```

or

```javascript
import * as ConnectyCube from 'connectycube';
```

## Initialize the ConnectyCube SDK

```javascript
const credentials = {
  appId: 21,
  authKey: 'hhf87hfushuiwef',
  authSecret: 'jjsdf898hfsdfk',
};

const config = {
  debug: { mode: 1 },
};

ConnectyCube.init(credentials, config);
```

You be able to create more then one client instance:

```javascript
const cubeSender = new ConnectyCube.ConnectyCube();
const cubeReceiver = new ConnectyCube.ConnectyCube();

cubeSender.init(credentials, config);
cubeReceiver.init(credentials, config);
```

See [an example of simple application based on Webpack build](https://github.com/ConnectyCube/connectycube-js-samples/tree/master/sample-webpack-build-app)

# Supported platforms

- Browser
- Node.js
- React Native
- NativeScript
- Apache Cordova
- Electron

# Contribution

See more information at [CONTRIBUTING.md](.github/CONTRIBUTING.md)

# License

Apache 2.0
#   c o n n e c t y c u b e - t s - r e s o l v e d  
 