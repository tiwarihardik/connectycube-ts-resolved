const Utils = require('./cubeInternalUtils');

let fetchImpl, formDataImpl;

let _adapter,
  _mediaDevices,
  _MediaStream,
  _MediaStreamTrack,
  _RTCPeerConnection,
  _RTCSessionDescription,
  _RTCIceCandidate,
  _RTCRtpReceiver,
  _RTCRtpSender,
  _navigator;

if (Utils.getEnv().browser) {
  fetchImpl = fetch;
  formDataImpl = FormData;

  _adapter = window.adapter;
  _navigator = navigator;
  _mediaDevices = navigator.mediaDevices;
  _MediaStream = window.MediaStream;
  _MediaStreamTrack = window.MediaStreamTrack;
  _RTCIceCandidate = window.RTCIceCandidate;
  _RTCPeerConnection = window.RTCPeerConnection;
  _RTCSessionDescription = window.RTCSessionDescription;
  _RTCRtpReceiver = window.RTCRtpReceiver;
  _RTCRtpSender = window.RTCRtpSender;
} else if (Utils.getEnv().node) {
  fetchImpl = require('node-fetch');
  formDataImpl = require('form-data');
}

module.exports = {
  fetchImpl: fetchImpl,
  formDataImpl: formDataImpl,
  // WebRTC
  adapter: _adapter,
  mediaDevices: _mediaDevices,
  MediaStream: _MediaStream,
  MediaStreamTrack: _MediaStreamTrack,
  RTCIceCandidate: _RTCIceCandidate,
  RTCPeerConnection: _RTCPeerConnection,
  RTCRtpReceiver: _RTCRtpReceiver,
  RTCRtpSender: _RTCRtpSender,
  RTCSessionDescription: _RTCSessionDescription,
  navigator: _navigator,
};
