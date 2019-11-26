document.addEventListener('deviceready', function(){
    // aqui va todo el codigo
    // !! Assumes variable fileURL contains a valid URL to a path on the device,
    //    for example, cdvfile://localhost/persistent/path/to/downloads/

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("https://oneclicksoftwaresolutions.com/assets/meme.png");//lo que queremos descargar
    // https://oneclicksoftwaresolutions.com/assets/meme.png
    var androidVersion = parseInt(device.version);
    var dataPath = (androidVersion == 5) ? 'file:///storage/sdcard0/Android/data/' : 'file:///storage/emulated/0/Android/data/';
    fileTransfer.download(
        uri,
        dataPath + '/prueba.png',
        function(entry) {
            alert("success");
            console.log("download complete: " + entry.toURL());
            var img = document.createElement("img");
            img.src =  entry.toURL();
            document.body.appendChild(img);
        },
        function(error) {
            alert("error");
            alert(androidVersion);
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
        }
    );
}, false);
