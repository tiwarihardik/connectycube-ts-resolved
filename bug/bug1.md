# Resolved following known bug
connectycube/lib/messaging/cubeChat.js:992:45
Ecmascript file had an error
  990 |           break;
  991 |         case 'unsubscribe':
> 992 |           contact ? (contact.ask = null) : (contact = { ask: null });
      |                                             ^^^^^^^
  993 |           contact.subscription = 'to';
  994 |
  995 |           break;

cannot reassign to a variable declared with `const`
This error occurred during the build process and can only be dismissed by fixing the error.
