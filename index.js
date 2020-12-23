const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
     width: 20,
    height: 100,
    frame: false,
    transparent:true,
    alwaysOnTop:true,
    x: 0,
    y: 110,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
