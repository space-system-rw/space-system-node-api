import model from '../database/models';

const { University } = model;

export default class universityController {
    // get all universties
    static async getAllUniversities(req, res) {
        try {
            const allUniversities = await University.findAll({});

            return res.status(200).json({
                message: 'All universities found successfully!',
                allUniversities
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };

    // get one universty
    static async getOneUniversity(req, res) {
        try {
            const { id } = req.params,
                existingUniversity = await University.findOne({ where: { id } });

            if (!existingUniversity) res.status(404).json({ message: 'University Id does not exist!' });
            return res.status(200).json({
                message: 'University found successfully!',
                existingUniversity 
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };

    // create a university
    static async addUniversity(req, res) {
        try {
            const addedUniversity = await University.create(req.body);

            return res.status(201).json({
                message: 'University created successfully!',
                addedUniversity
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };

    // update a university
    static async updateUniversity(req, res) {
        try {
            const { id } = req.params,
                existingUniversity = await University.findOne({ where: { id } });
            
            if (!existingUniversity) res.status(404).json({ message: 'University Id does not exist!' });

            await University.update(req.body, { where: { id } });

            const updatedUniversity = await University.findOne({ where: { id } });
            
            return res.status(200).json({
                message: 'University updated successfully!',
                updatedUniversity
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };

    // delete a university
    static async deleteUniversity(req, res) {
        try {
            const { id } = req.params,
                existingUniversity = await University.findOne({ where: { id } });;

            if (!existingUniversity) res.status(404).json({ message: 'University Id does not exist!' });
            await University.destroy({
                where: { id }
            });

            return res.status(200).json({
                message: 'University deleted successfully!'
            });
        } catch (error) {
            return res.status(500).json({
                error: 'Internal server error!'
            });
        }
    };
};