import { Sequelize } from 'sequelize';
import Document, { initDocument } from './Document';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite', // Chemin vers votre fichier SQLite
});

initDocument(sequelize);

export default sequelize;
