// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html";
import store from './store';
import api from './api';
import socket from './socket.js';

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import ccmonitor_init from './ccmonitor';
$(function() {
  let channel = socket.channel("prices:node", {});
  api.request_users();
  if(window.no_email) {
    swal({
      title: "Login failed",
      text: "Please make sure you have a public email from provider",
      icon: "warning",
    });
    window.no_email = false;
  }
  ccmonitor_init(store, channel);
})
