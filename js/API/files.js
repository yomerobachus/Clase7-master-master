// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#archivos .rounded li').tap(function(){
			switch($(this).index()){
				case 0://Escribir (Crear) Archivos
					window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, null);
					function gotFS(fileSystem) {
        				fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
    				}

    				function gotFileEntry(fileEntry) {
        				fileEntry.createWriter(gotFileWriter, fail);
    				}

    				function gotFileWriter(writer) {
        				writer.onwriteend = function(evt) {  
            				alert("El archivo se escribio");
        				};
        				writer.write($('#archivosCamp').val());
					}
					
					break;
				case 1://Leer Archivo
					 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
					 
					function gotFS(fileSystem) {
        				fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
    				}

    				function gotFileEntry(fileEntry) {
        				fileEntry.file(gotFile, fail);
    				}

    				function gotFile(file){
        				readAsText(file);
    				}

    				function readAsText(file) {
        				var reader = new FileReader();
        				reader.onloadend = function(evt) {
            				alert('Archivo leido');
            				$('#archivosCamp').val(evt.target.result);
        				};
        				//$('#archivosCamp').val(reader.readAsText(file));
					};
			};
		});
	});
});

function fail(err){
	alert("error: "+err.code);
}