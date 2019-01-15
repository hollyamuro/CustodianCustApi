/**
 * 系統設定檔
 * @module Config
 */

"use strict";

module.exports = {

	production: {},
	development: {},
	debug: {
		version: "0.0.0",
		policy: "http",
		nginx_port: 3001,
		port: 3001,

		/* Database setting */
		database_config: {
			CustodianWeb: {
				database: "CustodianWeb",
				username: "apowner",
				password: "ok1234",
				options: {
					host: "128.110.5.43",
					dialect: "mssql",
					pool: { max: 5, min: 0, idle: 10000 },
					operatorsAliases: false
				}
			},
			BondGol: {
				database: "bond_gol_uat",
				username: "apowner",
				password: "ok1234",
				options: {
					host: "128.110.5.43",
					dialect: "mssql",
					pool: { max: 5, min: 0, idle: 10000 },
					operatorsAliases: false
				}
			},
		},
		IntegratedProxyService_api: {
			host: "localhost",
			port: "8008",
			policy: "http",
		},
		JwtService_api: {
			host: "localhost",
			port: "8086",
			policy: "http",
		},
		CustodianBackend: {
			//固收主機
			host: "128.110.5.45",
			port: "80",
			policy: "http",
		},
		CustodianCustWeb: {
			host: "localhost",    //for local dev
			port: "8084",
			policy: "http",
		},
		Cust_MailServer: {
			//對外mail server
			host: "localhost",
			port: "8008",
			policy: "http",
			api: "api/mail_controller/send/",
		},
		local_MailServer: {
			//對內mail server
			host: "localhost",
			port: "8008",
			policy: "http",
			api: "api/mail_controller/send",
		}
	},
};