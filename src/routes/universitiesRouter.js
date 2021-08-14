import { Router } from 'express';
import universityController from '../controllers/universityController';

const router = new Router(),
    {
        getAllUniversities,
        getOneUniversity,
        addUniversity,
        updateUniversity,
        deleteUniversity
    } = universityController;

// get all universties
router.get('/', getAllUniversities);

// get one universty
router.get('/:id', getOneUniversity);

// create a university
router.post('/', addUniversity);

// update a university
router.put('/:id', updateUniversity);

// delete a university
router.delete('/:id', deleteUniversity);

export default router;