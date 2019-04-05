
<?php
   //Reseteamos variables a 0.
   $name = $email  = $message = $para = $headers = $msjCorreo = NULL;

   if (isset($_POST['submit'])) {
      //Obtenemos valores input formulario
      $nombre = $_POST['name'];
      $email = $_POST['email'];
      $mensaje = $_POST['message'];
      $para = 'david.aguilo232@gmail.com';

      //Creamos cabecera.
      $headers = 'From' . " " . $email . "\r\n";

      //Componemos cuerpo correo.
      $msjCorreo = "Nombre: " . $nombre;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Email: " . $email;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Mensaje: " . $mensaje;
      $msjCorreo .= "\r\n";

    if (mail($para, $name, $msjCorreo, $headers)) {
         echo "<script language='javascript'>
            alert('Mensaje enviado, muchas gracias.');
         </script>";

    } else {
         echo "<script language='javascript'>
            alert('fallado');
         </script>";
    }
  }

?>
<script type="text/javascript">
    document.location = "index.html";
</script>
