module.exports = {
    createdDate: {
        default: new Date(),
        type: String,
    },
    image: String,
    isActive: {
        default: true,
        type: Boolean,
    },
    isDeleted: {
        default: false,
        type: Boolean,
    },
    modifiedDate: String,
}
