import express from 'express'
import { handleCreateResource } from '../controllers/Resources';


const ResourceRouter = express.Router();

ResourceRouter.post("/new", handleCreateResource)

export default ResourceRouter;
