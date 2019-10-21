import async from 'async'
import * as helperMethod from '../helperMethod'

export default class BaseServices {

    public Model: any

    constructor(schema) {
        this.Model = schema
    }

    public find(query, option, callback) {
        const queryBody = query || {}
        for (const key in query) {
            if (query[key] !== '' && query[key] != null) {
                if (key === 'name') {
                    queryBody[key] = new RegExp(query[key], 'i')
                } else {
                    queryBody[key] = query[key]
                }
            } else {
                delete queryBody[key]
            }
        }
        this.Model.paginate(queryBody, option, (err, docs) => {
            callback(err, docs)
        })
    }

    public findById(id, callback) {
        this.Model.findById(id, (err, doc) => {
            callback(err, doc)
        })
    }

    public findOne(query, callback) {
        this.Model.findOne(query, (err, doc) => {
            callback(err, doc)
        })
    }

    public create(data, callback) {
        async.series([
            (done) => {
                if (data.image) {
                    helperMethod.uploadImage(data.image, (name) => {
                        data.image = name
                        done()
                    })
                } else done()
            },
            () => {
                this.Model.create(data, (err, doc) => {
                    callback(err, doc)
                })
            },
        ])
    }

    public update( id , data, callback) {
        async.series([
            (done) => {
                if (data.image) {
                    helperMethod.uploadImage(data.image, (name) => {
                        data.image = name
                        done()
                    })
                } else done()
            },
            () => {
                this.Model.updateOne({ _id: id }, data, (err, doc) => {
                    callback(err, data)
                })
            },
        ])
    }

    public delete(id, callback) {
        this.Model.deleteOne({ _id: id }, (err, doc) => {
            callback(err, doc)
        })
    }

    // this.Model.deleteMany()
    // this.Model.findOne()
    // this.Model.findOneAndDelete()
    // this.Model.findOneAndRemove()
    // this.Model.findOneAndReplace()
    // this.Model.findOneAndUpdate()
    // this.Model.replaceOne()
    // this.Model.updateMany()

}
