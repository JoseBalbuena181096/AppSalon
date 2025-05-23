import express from 'express';
import { createService ,getServices, getServiceById, updateService, deleteService} from '../controllers/servicesController.js';
 
const router = express.Router();

// Agrupacion de rutas de Services
router.route('/').get(getServices).post(createService);
router.route('/:id').get(getServiceById).put(updateService).delete(deleteService);

export default router; 

