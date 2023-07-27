//constantes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

/**
 * cette partie importe les modules requis en utilisant la fonction require de Node.js. Les modules importés sont :
 * -express qui est un framework web utilisé pour créer des applications web et des API.
 * -cors est un middleware permettant l'activation du partage de ressources entre origines (CORS), autorisant les ressources à être demandées depuis un autre domaine.
 * -body-parser est un autre un middleware permettant de parser le corps de la requête dans différents formats et le rendant accessible via req.body.
 * -dotenv est un module permettant de charger les variables d'environnement depuis un fichier .env dans l'objet process.env.
 */

//fichier de route
const etudiantRoutes = require('./src/routes/etudiantRoutes');
const intervenantRoutes = require('./src/routes/intervenantRoutes');
const attachePromRoutes = require('./src/routes/attachePromRoutes');
const responsablePedaRoutes = require('./src/routes/responsablePedaRoutes');
const directionRoutes = require('./src/routes/directionRoutes');
const ecoleRoutes = require('./src/routes/ecoleRoutes');
const creneauRoutes = require('./src/routes/creneauRoutes');
const droitRoutes = require('./src/routes/droitRoutes');
const matiereRoutes = require('./src/routes/matiereRoutes');
const postbacRoutes = require('./src/routes/postbacRoutes');
const promotionRoutes = require('./src/routes/promotionRoutes');
const roleRoutes = require('./src/routes/roleRoutes');
const salleRoutes = require('./src/routes/salleRoutes');
const specialiteRoutes = require('./src/routes/specialiteRoutes');
const typeSalleRoutes = require('./src/routes/typeSalleRoutes');

/**
 * Ces lignes importent différents fichiers de routes à partir d'emplacements différents dans le projet.
 */

//fichier variable d env
dotenv.config({ path: './.local-env' });

/**
 * Cette ligne charge les variables d'environnement à partir du fichier .local-env 
 * dans process.env. Cela permet à l'application d'accéder aux variables d'environnement définies dans ce fichier.
 */

//autres constantes
const PORT = process.env.PORT || '3001';
const app = express();

/**
 * Ici, le code définit la constante PORT avec soit la valeur de la variable d'environnement PORT, soit '3001' comme port par défaut. 
 * Ensuite, il crée une instance de l'application Express et l'attribue à la variable app.
 */

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

/**
 * ici les lignes configurent les middleware pour l'application Express.
 * -express.json() va analyse les requêtes entrantes avec des corps JSON et rend les données analysées disponibles via req.body.
 * -bodyParser.json() 
 * -cors()va activer le partage de ressources entre origines (CORS) pour toutes les routes, autorisant les requêtes depuis n'importe quel domaine.
 */

//passage des routes
//signRoutes(app);
//app.use('/', signRoutes);
app.use('/etudiant', etudiantRoutes);
app.use('/intervenant', intervenantRoutes);
app.use('/attacheProm', attachePromRoutes);
app.use('/responsablePeda', responsablePedaRoutes);
app.use('/direction', directionRoutes);
app.use('/ecole', ecoleRoutes);
app.use('/creneau', creneauRoutes);
app.use('/droit', droitRoutes);
app.use('/matiere', matiereRoutes);
app.use('/postbac', postbacRoutes);
app.use('/promotion', promotionRoutes);
app.use('/role', roleRoutes);
app.use('/salle', salleRoutes);
app.use('/specialite', specialiteRoutes);
app.use('/typeSalle', typeSalleRoutes);

/**
 * Ces lignes spécifient les routes pour différents passages (par exemple, étudiant, intervenant, attacheProm, etc.) 
 */

app.use('/', (req, res, next) => {
    res.status(200).json({ serverPort: `${PORT}`, status: 'running' });
    return;
    //res.send(`<h1>Server du projet Signature sur le port ${PORT}</h1>`)
})

/**
 * Cette ligne configure une route de dernier recours à la racine de l'application ('/'). 
 * Lorsqu'une requête est faite vers cette racine, elle répond avec un objet JSON contenant le port du serveur et son état de fonctionnement. 
 * La ligne mise en commentaire est une alternative pour répondre avec un message HTML.
 */

//ecoute du port
app.listen(PORT, () =>
    console.log(`server started on port ${PORT}`)
);

/**
 * cette ligne démarre le serveur Express et l'écoute sur le port spécifié par PORT. Lorsque le serveur démarre avec succès, 
 * il affiche un message dans la console indiquant le port sur lequel il écoute.
 */

/**
 * En résumé, ce code configure un serveur Express avec des middlewares pour gérer les requêtes, déclare des routes 
 * pour différentes fonctionnalités, charge des variables d'environnement à partir d'un fichier .local-env, et met le serveur en écoute 
 * sur un port spécifié (ou sur le port 3001 par défaut)
 *  pour accepter les requêtes entrantes.
 */