/**
 * 系統設定檔
 * @module Config
 */

"use strict";

module.exports = {

	production: {
		version: "1.0.0",
		policy: "https",
		nginx_port: 3051,
		port: 3001,

		/* Database setting */
		database_config: {
			CustodianWeb: {
				database: "CustodianWeb",
				username: "apowner",
				password: "runsys",
				options: {
					host: "128.110.24.30",
					dialect: "mssql",
					pool: { max: 5, min: 0, idle: 10000 },
					operatorsAliases: false
				}
			},
			BondGol: {
				database: "bond_gol",
				username: "apowner",
				password: "runsys",
				options: {
					host: "128.110.24.30",
					dialect: "mssql",
					pool: { max: 5, min: 0, idle: 10000 },
					operatorsAliases: false
				}
			},
		},
		IntegratedProxyService_api: {
			host: "128.110.232.66",
			port: "8018",
			policy: "https",
		},
		JwtService_api: {
			host: "128.110.232.66",
			port: "8016",
			policy: "https",
		},
		CustodianBackend: {
			//固收主機
			host: "128.110.13.18",
			port: "80",
			policy: "http",
		},
		CustodianCustWeb: {
			domain:"custodian.sinotrade.com.tw",
			host: "172.17.6.25",
			port: "8086",
			policy: "https",
		},
		Cust_MailServer: {
			//對外mail server
			from:"SinoPac Securities Custody Service <custodian_service@sinopac.com>",
			host: "128.110.232.66",
			port: "8018",
			policy: "https",
			api: "api/mail_controller/external_send",
		},
		local_MailServer: {
			//對內mail server
			from:"SinoPac Securities Custody Service <custodian_service@sinopac.com>",
			host: "128.110.232.66",
			port: "8018",
			policy: "https",
			api: "api/mail_controller/send",
		}
	},
	development: {},
	debug: {},
};