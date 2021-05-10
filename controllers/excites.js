const Excite = require('../models/Excite');

const ExcitesController = {
    index: async() => {
        const result = await Excite.find();
        return result
    }, 
    getExcite: async(id) => {
        const result = await Excite.findById(id);
        return result;
    }, 
    createExcite: async payload => {
        const excite = new Excite({
            title: payload.title, 
            sceneId: payload.sceneId, 
            sceneUrl: payload.sceneUrl, 
            sceneImage: payload.sceneImage, 
            users: [payload.users], 
            sounds: [payload.sounds]
        });
        const result = await excite.save();
        return result;
    }, 
    deleteExcite: async(id) => {
        const excite = await Excite.deleteOne({_id: id});
        return excite
    }
};

module.exports = ExcitesController;

