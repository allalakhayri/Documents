import express, { Request, Response } from 'express';
import { Op } from 'sequelize';
import Document from './Document';

const router = express.Router();

router.get('api/documents', async (req: Request, res: Response) => {
    let { page = '1', pageSize = '10', documentType } = req.query;
  
    const parsedPage = parseInt(page as string, 10);
    const parsedPageSize = parseInt(pageSize as string, 10);
  
    const pageNumber = isNaN(parsedPage) || parsedPage <= 0 ? 1 : parsedPage;
    const pageSizeNumber = isNaN(parsedPageSize) || parsedPageSize <= 0 ? 10 : parsedPageSize;
  
    const filter: any = {};
    if (documentType) {
      filter.type = documentType;
    }
  
    const documents = await Document.findAll({
      where: filter,
      limit: pageSizeNumber,
      offset: (pageNumber - 1) * pageSizeNumber,
    });
  
    res.json(documents);
  });

router.get('api/documents/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const document = await Document.findByPk(id);

  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }

  res.json(document);
});

router.put('api/documents/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const document = await Document.findByPk(id);

  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }

  const { name, type, description } = req.body;

  await document.update({ name, type, description });

  res.json(document);
});

router.delete('api/documents/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const document = await Document.findByPk(id);

  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }

  await document.destroy();

  res.status(204).send();
});

export default router;
