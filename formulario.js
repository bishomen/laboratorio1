<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registro de Participantes</title>
  <style>
    /* Estilos */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    h1 {
      text-align: center;
    }

    form {
      max-width: 500px;
      margin: 0 auto;
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input[type="text"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
    }

    input[type="submit"] {
      padding: 10px 20px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <h1>Registro de Participantes</h1>

  <form action="procesar_registro.php" method="POST">
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required>

    <label for="email">Dirección de correo electrónico:</label>
    <input type="text" id="email" name="email" required>

    <label for="telefono">Número de teléfono:</label>
    <input type="text" id="telefono" name="telefono" required>

    <label for="ocupacion">Ocupación:</label>
    <input type="text" id="ocupacion" name="ocupacion" required>

    <input type="submit" value="Registrarse">
  </form>
</body>
</html>
