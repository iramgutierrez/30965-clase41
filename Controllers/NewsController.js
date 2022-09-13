class NewsController {
  constructor (service) {
    this.service = service
  }

  getAll (req, res) {
    return this.service.getAll()
      .then(news => res.json(news))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  create (req, res) {
    const body = req.body

    return this.service.create(body)
      .then(newsItem => res.status(201).json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  getOne (req, res) {
    const id = req.params.id

    return this.service.getOne(id)
      .then(newsItem => res.json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  update (req, res) {
    const id = req.params.id
    const body = req.body

    return this.service.update(id, body)
      .then(newsItem => res.json(newsItem))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }

  delete (req, res) {
    const id = req.params.id

    return this.service.delete(id)
      .then(response => res.status(204).json(response))
      .catch(e => res.status(500).json({
        error: e.message
      }))
  }
}

module.exports = NewsController