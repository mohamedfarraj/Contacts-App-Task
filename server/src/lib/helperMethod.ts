import fs = require('fs')

const uploadImage = (image, callback) => {
    const matches = image.substring(image.indexOf('base64,') + 7)
    const file = Date.now() + Date.now() + '.' +
        image.substring(image.indexOf('image/') + 6, image.indexOf(';base64,'))

    fs.writeFile('uploads/' + file, matches, (err) => {
        callback(file)
    })
}

export {
    uploadImage,
}
