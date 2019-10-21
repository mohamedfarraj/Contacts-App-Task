import async from 'async'
import { Request, Response } from 'express'

export default class BaseController {

  public service: any
  public async = async

  constructor(service) {
    this.service = service
  }

  public getAllData = function(req: Request, res: Response) {
    this.service.find({}, req.query, (err, docs) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(docs)
      }
    })
  }

  public getSearch = function(req: Request, res: Response) {

    this.service.find(req.body, req.query, (err, docs) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(docs)
      }
    })
  }

  public getById = function(req: Request, res: Response) {
    this.service.findById(req.params.id, (err, doc) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(doc)
      }
    })
  }

  public create = function(req: Request, res: Response) {
    this.service.create(req.body, (err, doc) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(doc)
      }
    })
  }

  public update = function(req: Request, res: Response) {
    this.service.update(req.params.id, req.body, (err, doc) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(doc)
      }
    })
  }

  public delete = function(req: Request, res: Response) {
    this.service.delete(req.params.id, (err, doc) => {
      if (err != null) {
        res.status(403).send(err)
      } else {
        res.send(doc)
      }
    })
  }

}
