
/**
 * @param  {Object} logger 寫batch log用
 */
module.exports = async (logger) => {
	const axios = require("axios");
	const config = require("../Config");
	const local = config[process.env.NODE_ENV].policy + "://localhost:" + config[process.env.NODE_ENV].port;
	const result = await axios.post(local+"/api/staff/custs/import",{"data":{}});
	if(result.data.code.type ==="ERROR") throw Error(result.data.code.message);
};