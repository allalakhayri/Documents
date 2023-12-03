import { DataTypes, Model, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

interface DocumentAttributes {
  id: string;
  name: string;
  type: 'PDF' | 'TXT' | 'XDOC';
  description: string;
}

interface DocumentCreationAttributes extends Omit<DocumentAttributes, 'id'> {
  id?: string | null;
}

class Document extends Model<DocumentAttributes, DocumentCreationAttributes> implements DocumentAttributes {
  public id!: string;
  public name!: string;
  public type!: 'PDF' | 'TXT' | 'XDOC';
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initDocument(sequelize: Sequelize): void {
  Document.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: true, 
      },
      name: {
        type: DataTypes.STRING(48),
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('PDF', 'TXT', 'XDOC'),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Document',
    }
  );
}

export default Document;
