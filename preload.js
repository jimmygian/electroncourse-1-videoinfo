const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron
    // we can also expose variables, not just functions
  })


  contextBridge.exposeInMainWorld('ipcRenderer', {
    submitVideo: (path) => ipcRenderer.send('video:submit', path),
    receiveVideoData: (func) => ipcRenderer.on('video:metadata', (event, metadata) => func(metadata))
  })