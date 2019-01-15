/**
 * 客戶用路由
 * @module routes/CustRoute
 */

"use strict";

/**
 * 客戶帳戶驗證、密碼設定等等路由
 * @param  {} app
 */
module.exports = (app) => {
	const CustAccountService = require("../services/CustAccountService");
	app.route("/api/cust/login").post(CustAccountService.login);
	app.route("/api/cust/jwtverify").post(CustAccountService.jwtverify);
	app.route("/api/cust/matching").post(CustAccountService.matching);
	app.route("/api/cust/verify").post(CustAccountService.verify);
	app.route("/api/cust/reset_password").post(CustAccountService.resetpassword);
	app.route("/api/cust/verify_password").post(CustAccountService.verifypassword);
	app.route("/api/cust/url_check").post(CustAccountService.url_check);

	const custodianCustWebService = require("../services/CustodianCustWebService");
	app.route("/api/cust/dashboard").post(custodianCustWebService.getDashboard);
	app.route("/api/cust/custodian/position").post(custodianCustWebService.getCustodianPosition);
	app.route("/api/cust/custodian/charge_off_history").post(custodianCustWebService.getCustodianChargeOffHistory);
	app.route("/api/cust/custodian/not_charge_off_history").post(custodianCustWebService.getCustodianNotChargeOffHistory);
	app.route("/api/cust/custodian/statement_report").post(custodianCustWebService.getStatementReport);

	const custodianBankWebService = require("../services/CustodianBankWebService")
	app.route("/api/bank/custodian/safekeeping/holding").post(custodianBankWebService.getSafekeepingHolding);
	app.route("/api/bank/custodian/safekeeping/balance").post(custodianBankWebService.getSafekeepingBalance);

	const JwtKeyService = require("../services/JwtKeyService");
	app.route("/api/cust/jwt_key_create").post(JwtKeyService.updateJwtKey);
	
};
