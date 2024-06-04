const getGroceriesFromAPI = require("./kassalappApi")

const test = async () => {
    const query = "Lettmelk"
    const items = await getGroceriesFromAPI(query)

    console.log(items)
}

test()