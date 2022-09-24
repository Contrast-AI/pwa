import mongodb from "mongodb"
const ObjectId = mongodb.ObjectId
let data

export default class DataDAO {
    //called on server start to give reference to database
    static async injectDB(conn) {
        if (data) {
            return
        } try {
            //getting data collection (currently sample_restaurants.restaurants)
            data = await conn.db(process.env.PWACONTRASTAI_NS).collection("restaurants")
        } catch (e) {
            console.error(
                `Unable to establish a collectino handle in dataDAO: ${e}`, 
            )
        }
    }

    // get request the database using different filters
    static async getData({
        filters = null,
        page = 0,
        dataPerPage = 50,
    } = {}) {
        let query
        // does one of the types of queries based on filter
        if (filters) {
            if ("name" in filters) {
                /* no database field so has to be specified in MongoDB 
                Atlas which fields from database are searched when a 
                the text is done */
                query = {$text: { $search: filters["name"]}}
            } else if ("cuisine" in filters) {
                query = {"cuisine": { $eq: filters["cuisine"]}}
            } else if ("zipcode" in filters) {
                query = {"address.zipcode": { $eq: filters["zipcode"]}}
            }
        }

        let cursor

        // this is the code that actually uses the query to search the database
        try {
            cursor = await data
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { dataList: [], totalNumData: 0 }
        }

        // the section of the results you'd like to display
        const displayCursor = cursor.limit(dataPerPage).skip(dataPerPage * page)
    
        try {
            const dataList = await displayCursor.toArray()
            const totalNumData = await data.countDocuments(query)

            return {dataList, totalNumData}
        } catch (e) {
            console.error(`Unable to convert cursor to array or preoblem counting docuemnts, ${e}`)
        }
        return {dataList: [], totalNumData: 0}
    }

    static async getCuisines() {
        let cuisines = []
        try {
            cuisines = await data.distinct("cuisine")
            return cuisines
        } catch (e) {
            console.error(`Unable to get cuisines, ${e}`)
            return cuisines
        }
    }
}
