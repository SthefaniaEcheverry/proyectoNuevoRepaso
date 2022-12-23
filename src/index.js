import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
import usersRoutes from './routes/usersRoutes.js'; 
const app = express();


// Habilita la lectura de datos del ejs
// Actualizando el dirname para trabajar con modulos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar que la carpeta public es estática
app.use(express.static('public'));

// Habilitar vista con módulos y ejs
app.set('view engine', 'ejs');
app.set('views', 'src/views');

//
app.use('/', usersRoutes);

// Configurar el puerto
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`servidor corriendo en el puerto ${port}`));