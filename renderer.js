// const electron = require('electron');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submitted!!");
    
    const { path } = document.querySelector('input').files[0];
    ipcRenderer.submitVideo(path)

})

console.log(versions.node(), versions.chrome(), versions.electron())

ipcRenderer.receiveVideoData((metadata) => {
    console.log(metadata);
    document.querySelector('#result'). innerHTML = `Video is ${metadata.format.duration} seconds.`
})