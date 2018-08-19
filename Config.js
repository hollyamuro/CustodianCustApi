/**
 * 系統設定檔
 * @module Config
 */

"use strict";

module.exports = {

	production:{
		/* Communication policy http/https */
		policy: "https",
		/* Port */
		port: 8084,
		/* Database setting */
		database_config: {
			CustodianWeb:{

			},
			BondGol:{

			},
		},
		IntegratedProxyService_api: {
			// host: 
			// port: 
			// policy: 
		},
		JwtService_api: {
			// host: 
			// port: 
			// policy: 
		},
		CustodianBackend:{
			// host: 
			// port: 
			// policy: 
		},
		CustodianCustWeb:{
			// host: 
			// port: 
			// policy: 
		},
		MailServer:{
			// host: 
			// port: 
			// policy: 
		}
	},
	development: {
		/* Communication policy http/https */
		policy: "https",
		/* Port */
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
			BondGol:{
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
			host: "128.110.5.43",
			port: "8008",
			policy: "https",
		},
		JwtService_api: {
			host: "128.110.5.43",
			// host: "localhost",    //for local dev
			port: "8086",
			policy: "https",
		},
		CustodianBackend:{
			host: "128.110.5.45",
			port: "80",
			policy: "http",
		},
		CustodianCustWeb:{
			host: "128.110.5.9",
			//host: "localhost",    //for local dev
			port: "8084",
			policy: "https",
		},
		Cust_MailServer:{
			//對外mail server
			//host: "128.110.24.66",
			host: "128.110.5.43",
			//port: "8081",
			port: "8008",
			policy: "https",
			api:"api/mail_controller/send",
		},
		local_MailServer:{
			//對內mail server
			//host: "128.110.24.66",
			host: "128.110.5.43",
			//port: "8081",
			port: "8008",
			policy: "https",
			api:"api/mail_controller/send",
		}
	},
};