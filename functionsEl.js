const {remote} = require('electron');

document.getElementById('last').addEventListener('click', closeWindow);


/*
  getFocusedWindow() may return null.
  If a user uses global keyboard shortcut to trigger 
  minimizeWindow, there may not be any window that 
  is focused right now
*/ 

const getWindow = () => remote.BrowserWindow.getFocusedWindow();

function closeWindow () {
    getWindow().minimize();
}

function hoverNav(){
    getWindow().setSize(400,100)
}

