import DataDAO from "../dao/dataDAO.js"

export default class DataController {
  static async apiGetData(req, res, next) {
    const dataPerPage = req.query.dataPerPage ? parseInt(req.query.dataPerPage, 10) : 20
    const page = req.query.page ? parseInt(req.query.page, 10) : 0

    //see dataDAO.js
    let filters = {}
    if (req.query.cuisine) {
      filters.cuisine = req.query.cuisine
    } else if (req.query.zipcode) {
      filters.zipcode = req.query.zipcode
    } else if (req.query.name) {
      filters.name = req.query.name
    }

    const { dataList, totalNumData } = await DataDAO.getData({
      filters,
      page,
      dataPerPage,
    })

    // what the API returns when its called
    let response = {
      data: dataList,
      page: page,
      filters: filters,
      entries_per_page: dataPerPage,
      total_results: totalNumData,
    }
    //sends JSON response with the above info
    res.json(response)
  }

  static async apiGetDataCuisines(req, res, next) {
    try {
      let cuisines = await DataDAO.getCuisines()
      res.json(cuisines)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}