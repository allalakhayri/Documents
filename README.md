## Documents managment using React js and Nodejs 
### Project Initialization
The backend is initialized as a Node.js project using Express.js and TypeScript.

### Setup Steps:
Initialize the backend project using the following command:

### Document Entity Model
The application involves a single model for the following entity:

### Document Entity Attributes:
id: UUID
name: VARCHAR(48)
type: ENUM PDF | TXT | XDOC
description: STRING
### API Endpoints
The backend provides the following CRUD APIs for document management:

### Find API:

Endpoint: /api/documents
Description: Lists documents with pagination and filters by document type.
### Get API:

Endpoint: /api/documents/:id
Description: Retrieves a document by its ID.
### Update API:

Endpoint: /api/documents/:id
Description: Updates a document.
### Delete API:

Endpoint: /api/documents/:id
Description: Deletes a document.
Frontend
### The frontend implements CRUD interfaces to manage the Document entity.

### Setup and Development
The frontend is built using React.js to create interfaces for performing CRUD operations on Document entities.

### Setup Steps:
Initialize the frontend project using Create React App or your preferred setup method.

Implement interfaces for Create, Read, Update, and Delete operations on Document entities.
