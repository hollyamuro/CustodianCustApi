/**
 * Custs 相關之商業邏輯
 * @module services/CustService
 */

"use strict";

/**
 * 查詢客戶
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @see /api/staff/custs/read
 */
module.exports.updateJwtKey = async (req, res, next) => {

	try
	{
		const messageHandler = require("../helper/MessageHandler");
		const JWTKeyRepository = require("../repositories/JWTKeyRepository");
		const crypto = require("crypto");
		const debug = require("debug")("CustodianApi:JwtKeyService.updateJwtKey");

		let RandomStr1 = crypto.randomBytes(128).toString("base64").substr(0, 128);
		let RandomStr2 = crypto.randomBytes(128).toString("base64").substr(0, 128);
		debug(RandomStr1);
		debug(RandomStr2);

		await JWTKeyRepository.updateJwtKey(
			{ "JwtKey": 	RandomStr1, },
			{ "SystemType":	"CustodianCustWeb" ,});

		await JWTKeyRepository.updateJwtKey(
			{ "JwtKey": 	RandomStr2, },
			{ "SystemType":	"CustodianWeb" ,});
		
		res.send({	
			"code": messageHandler.infoHandler("INFO_READ_DATA_SUCCESS"),
		});
	}
	catch(err){ next(err); }
};

