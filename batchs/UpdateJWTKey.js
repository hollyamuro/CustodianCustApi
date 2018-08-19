
/**
 * @param  
 */
module.exports = async () => {
	const axios = require("axios");
	const config = require("../Config");
	const local = config[process.env.NODE_ENV].policy + "://localhost:" + config[process.env.NODE_ENV].port;
	const result = await axios.post(local+"/api/cust/jwt_key_create",{"data":{}});
	if(result.data.code.type ==="ERROR") throw Error(result.data.code.message);
};