const Scene = require('../models/Scene');

const ScenesController = {
    index: async() => {
        const result = await Scene.find();
        return result
    },
    getScene: async(pexelId) => {
        const result = await Scene.findOne( {pexelId: pexelId})
        return result;
    }
}

module.exports = ScenesController;