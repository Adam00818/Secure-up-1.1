// Obtener el botón de ubicación y el de emergencia
document.getElementById('sendLocationBtn').addEventListener('click', function() {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            // Crear el enlace para enviar la ubicación a WhatsApp
            const message = `Hola, aquí está mi ubicación: https://www.google.com/maps?q=${lat},${lon}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

            // Redirigir a WhatsApp
            window.open(whatsappUrl, '_blank');
        }, function(error) {
            alert('No se pudo obtener la ubicación. Por favor, asegúrate de que los permisos de geolocalización estén habilitados.');
        });
    } else {
        alert('Tu navegador no soporta la geolocalización.');
    }
});

// Funcionalidad para llamar a emergencias (número de emergencia estándar)
document.getElementById('emergencyBtn').addEventListener('click', function() {
    // Este es el número de emergencias estándar. Puedes cambiarlo según el país.
    const emergencyNumber = "112";  // En muchos países es el número de emergencias europeo
    window.location.href = `tel:${emergencyNumber}`;
});
