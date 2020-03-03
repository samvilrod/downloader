document.addEventListener('deviceready', function(){
    // aqui va todo el codigo
    // !! Assumes variable fileURL contains a valid URL to a path on the device,
    //    for example, cdvfile://localhost/persistent/path/to/downloads/

    var fileTransfer = new FileTransfer();
    var uri = encodeURI("http://fantastikapps.com/puiki/x.zip");//lo que queremos descargar
    // https://oneclicksoftwaresolutions.com/assets/meme.png
    // file:///storage/emulated/0/Android/data/prueba.zip
    var androidVersion = parseInt(device.version);
    var dataPath = (androidVersion == 5) ? 'file:///storage/sdcard0/Android/data/' : 'file:///storage/emulated/0/Android/data/';
    fileTransfer.download(
        uri,
        dataPath + '/prueba.zip',
        function(entry) {
            alert("success");
            alert(androidVersion);
            console.log("download complete: " + entry.toURL());
            var PathToFileInString  = cordova.file.externalRootDirectory+"prueba.zip",
                PathToResultZip = cordova.file.externalRootDirectory;
                JJzip.unzip(PathToFileInString, {target:PathToResultZip},function(data){
                /* Wow everything goes good, but just in case verify data.success */
                alert("success para descomprimir archivo y mostrar imagen");
                var img = document.createElement("img");
                img.src =  entry.toURL();
                document.body.appendChild(img);
            },function(error){
                /* Wow something goes wrong, check the error.message */
                alert("error el archivo no se pudo descomprimir");
                console.log(error);
            })
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