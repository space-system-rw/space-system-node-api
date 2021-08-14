
export default class universityController {
    // get all universties
    static async getAllUniversities(req, res) {
        try {
            return res.status(200).json({
                message: 'All universities found successfully!',
                data: [
                    'University of Rwanda', 'Canergie Mellon University', 'Africa Institute of Mathematical Sciences'
                ]
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
            return res.status(200).json({
                message: 'University found successfully!',
                data: {
                    id: 1,
                    name: 'University of Rwanda',
                    location: 'Rwanda - Kigali',
                    fees: 2000
                }
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
            return res.status(201).json({
                message: 'University created successfully!',
                data: req.body
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
            return res.status(200).json({
                message: 'University updated successfully!',
                data: req.body
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