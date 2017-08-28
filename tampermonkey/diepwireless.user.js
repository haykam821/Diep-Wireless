// ==UserScript==
// @name         Diep.io Wireless
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://diep.io/
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.onload = function() {
  const gamepad = new Gamepad();

  gamepad.on('press', 'stick_button_right', e => {
  	console.log('fire!');
    input.keyDown(32);
  });
  gamepad.on('release', 'stick_button_right', e => {
  	console.log('no more fire!');
    input.keyUp(32);
  });

  gamepad.on('press', 'button_2', e => {
  	console.log('toggle auto fire!');
    input.keyDown(69);
    input.keyUp(69);
  });
  gamepad.on('press', 'button_4', e => {
  	console.log('toggle auto spin!');
    input.keyDown(67);
    input.keyUp(67);
  });

  gamepad.on('press', 'd_pad_up', e => {
  	console.log('console!');
    input.keyDown(36);
    input.keyUp(36);
  });
};
script.src = 'https://cdn.rawgit.com/neogeek/gamepad.js/master/gamepad.js';

document.head.appendChild(script);
