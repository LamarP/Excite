const Scene = require('../models/Scene');

const ScenesController = {
    index: async() => {
        const result = await Scene.find();
        return result
    },
    getScene: async(id) => {
        const result = await Scene.findById(id)
        return result;
    }
}

module.exports = ScenesController;