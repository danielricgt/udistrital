const axios = require("axios");

async function executeQuery(query){
    try {
        const result = await axios({
            url: process.env.GRAPHQL,
            method: "post",
            data: {
              query: query,
            },
          })
        return result;
    } catch (error) {
        return error
    }
}

module.exports = {
    executeQuery
};
