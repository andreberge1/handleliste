const token = "MVUSUm6Pdz96Dk0TUKsOAKcPf6vPRWwAnfmfkgGD"

const getGroceriesFromAPI = async (query) => {
    try {
        const response = await fetch(`https://kassal.app/api/v1/products?search=${query}&size=10`, {
            headers: {Authorization: `Bearer ${token}`}
        })
        const json = await response.json()
        const itemList = []

        if(Array.isArray(json.data) && json.data.length > 0) {
            json.data.forEach(item => {
                itemList.push({
                    product: item.name,
                    vendor: item.vendor
                })
            })
        } else {
            console.log("No items found")
        }

        return itemList
    } catch (error) {
        console.log("Problems with finding items from API", error)
        return []
    }
}

module.exports = getGroceriesFromAPI;