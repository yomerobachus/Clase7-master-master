//Contactos
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		//Leer Contactos
		navigator.contacts.find(["name"], function(contactos){
			for(i=0;i<contactos.length;i++){
				$('#contactos .plastic').append('<li>'+contactos[i].name.givenName+'</li>');
			}
		}, function(err){
			alert('Error: '+err.code);	
		}, { filter: "", multiple: true });
		//Crear Contactos
		$('#nuevoCont .individual li').eq(0).tap(function(){
			var nueContacto = navigator.contacts.create();
			
			nueContacto.displayName = $('#nuevoCont .rounded li').eq(0).children('input').val();
			
			nueContacto.nickname = $('#nuevoCont .rounded li').eq(0).children('input').val();
			
			var nombre = new ContactName();
			nombre.givenName = $('#nuevoCont .rounded li').eq(0).children('input').val();
			
			nueContacto.name = nombre;
			
			var telefono = [];
			telefono[0] = new ContactField("home",$('#nuevoCont .rounded li').eq(1).children('input').val(),true);
			telefono[1] = new ContactField("mobile","123-456-7890", false);
			nueContacto.phoneNumbers = telefono;
			
			nueContacto.save(function(){
				alert('Guardado');
				window.location = "#contactos";
			}, function(err){
				alert('Error: '+err.code);
			});
		});
	});
});