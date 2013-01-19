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
					
			};
		});
	});
});