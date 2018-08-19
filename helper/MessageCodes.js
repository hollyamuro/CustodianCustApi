/**
 * 系統訊息代碼列表
 * @module helper/MessageHandler
 * log: 2018/07/02 增加帳號相關 Message.
 */

"use strict";

module.exports = {
	"ERROR" : {
        
		/* general */
		"ERROR_BAD_REQUEST":                { "type": "ERROR", "message":  "ERROR_BAD_REQUEST", },
		"ERROR_UNAUTHORIZED":               { "type": "ERROR", "message":  "ERROR_UNAUTHORIZED", },
		"ERROR_FORBIDDEN":                  { "type": "ERROR", "message":  "ERROR_FORBIDDEN", },
		"ERROR_NOT_FOUND":                  { "type": "ERROR", "message":  "ERROR_NOT_FOUND", },
		"ERROR_INTERNAL_SERVER_ERROR":      { "type": "ERROR", "message":  "ERROR_INTERNAL_SERVER_ERROR", },
		"ERROR_NOT_IMPLEMENTED":            { "type": "ERROR", "message":  "ERROR_NOT_IMPLEMENTED", },
		"ERROR_SERVICE_UNAVAILABLE":        { "type": "ERROR", "message":  "ERROR_SERVICE_UNAVAILABLE", },
		"ERROR_TIMEOUT":                    { "type": "ERROR", "message":  "ERROR_TIMEOUT", },
		"ERROR_TOKEN":                    	{ "type": "ERROR", "message":  "ERROR_TOKEN", },
		"ERROR_NOT_EXISTED_USER":			{ "type": "ERROR", "message":  "使用者不存在。", },
    
		/* data */
		"ERROR_CREATE_DATA_FAIL":           { "type": "ERROR", "message":  "新增資料發生錯誤。", },
		"ERROR_READ_DATA_FAIL":             { "type": "ERROR", "message":  "查詢資料發生錯誤。", },
		"ERROR_UPDATE_DATA_FAIL":           { "type": "ERROR", "message":  "修改資料發生錯誤。", },
		"ERROR_DELETE_DATA_FAIL":           { "type": "ERROR", "message":  "刪除資料發生錯誤。", },
		"ERROR_ACTION_Fail":                { "type": "ERROR", "message":  "作業發生錯誤。", },
		"ERROR_IMPORT_DATA_Fail":           { "type": "ERROR", "message":  "匯入資料發生錯誤。", },
		"ERROR_NOT_EXISTED_DATA":           { "type": "ERROR", "message":  "查無對應的帳號信箱配置，可能輸入錯誤。", },
		"ERROR_ACCOUNT_NOT_EXISTED":   		{ "type": "ERROR", "message":  "無此帳號資料。", },
		"ERROR_ACCOUNT_NOT_EXISTED_DATA":   { "type": "ERROR", "message":  "帳號未開通。", },
		"ERROR_ACCOUNT_EMAIL_INVALID":   	{ "type": "ERROR", "message":  "帳號或Email錯誤。", },
		"ERROR_DUPLICATE_DATA":             { "type": "ERROR", "message":  "重複之資料。", },
		"ERROR_LACK_OF_PARAMETER":          { "type": "ERROR", "message":  "缺少必要參數，請檢查必填之欄位是否皆有填寫。", },
		"ERROR_INVAID_DATA":				{ "type": "ERROR", "message":  "輸入資料含特殊字元。",},

		/* customized data error */
		"ERROR_OVERFLOW_DATE":				{ "type": "ERROR", "message":  "超出可查詢日期範圍，請重新選擇日期。", },

		/*Verify */
		"ERROR_TOKEN_NOT_FOUND":            { "type": "ERROR", "message":  "UUID不匹配。", },
		"ERROR_TOKEN_EXPIRED":              { "type": "ERROR", "message":  "所提供的URL已經過期，請與客服聯繫重新發送邀請。", },
		"ERROR_TOKEN_INVALID":              { "type": "ERROR", "message":  "UUID錯誤次數累計三次以上。", },
		"ERROR_EMAIL_INVALID":              { "type": "ERROR", "message":  "Email驗證失敗。", },
		"ERROR_EMAIL_UNMATCH":              { "type": "ERROR", "message":  "所輸入信箱不匹配。", },
		"ERROR_EMAIL_UNMATCH_MUCH":         { "type": "ERROR", "message":  "查到多筆相同URL信箱，請與客服聯繫重新發送邀請。", },
		"ERROR_EMAIL_URL_MATCH_THREE_TIME":	{ "type": "ERROR", "message":  "所提供的URL/Mail已經匹配三次以上而失效，需要重寄邀請。", },
		"ERROR_URL_NOT_FOUND":            	{ "type": "ERROR", "message":  "URL不存在或輸入錯誤。", },
		"ERROR_URL_EXPIRED_FAIL":           { "type": "ERROR", "message":  "URL到期日轉換判定錯誤，請重寄邀請信。", },

		"ERROR_WRONG_VERIFY_CODE":        { "type": "ERROR", "message":  "驗證碼錯誤。", },
		"ERROR_VERIFY_CODE_INVALID":      { "type": "ERROR", "message":  "所提供的信箱驗證碼錯誤次數累計三次以上，需要重寄邀請信。",},
		"ERROR_VERIFY_CODE_EXPIRED":      { "type": "ERROR", "message":  "驗證碼過期。",},

		/*Reset Password */
		"ERROR_TOO_FREQUENTLY":            	{ "type": "ERROR", "message":  "過度頻繁操作，請聯繫客服人員。", },
		"ERROR_PASSWORD_INVALID":			{ "type": "ERROR", "message":  "密碼錯誤次數累計三次以上，該帳號目前已經鎖定，請申請忘記密碼。", },	
		"ERROR_INPUT_DATA":              	{ "type": "ERROR", "message":  "輸入資料錯誤。", },	
		"ERROR_PASSWORD_TOO_SHORT":         { "type": "ERROR", "message":  "密碼格式錯誤，或密碼過短。", },	
		"ERROR_ACCOUNT_STATUS":          	{ "type": "ERROR", "message":  "帳號狀態錯誤。", },
		"ERROR_ACCOUNT_STATUS_N":          	{ "type": "ERROR", "message":  "帳號尚未開通。", },	
		"ERROR_ACCOUNT_STATUS_U":          	{ "type": "ERROR", "message":  "帳號尚未開通。", },	
		"ERROR_ACCOUNT_STATUS_V":          	{ "type": "ERROR", "message":  "該帳號已申請忘記密碼，禁止重置密碼。", },			
		"ERROR_ACCOUNT_STATUS_L":          	{ "type": "ERROR", "message":  "該帳號目前已經鎖定，請申請忘記密碼。", },
		"ERROR_ACCOUNT_STATUS_0":          	{ "type": "ERROR", "message":  "該帳號目前已經註銷，請聯繫客服人員", },
		"ERROR_ACCOUNT_STATUS_default":     { "type": "ERROR", "message":  "帳號狀態錯誤。", },	
		"ERROR_WRONG_ACCOUNT_OR_PASSWORD":  { "type": "ERROR", "message":  "帳號或密碼錯誤。", },
		"ERROR_WRONG_ACCOUNT":  			{ "type": "ERROR", "message":  "帳號錯誤。", },	
		"ERROR_USER_NOT_ENABLE":            { "type": "ERROR", "message":  "該帳號目前停用中。", },	
		"ERROR_ROBORT_CHECK":            	{ "type": "ERROR", "message":  "機器人認證未通過。", },	

	},
	"WARN": {

	},
	"INFO": {
		/* general */
		"INFO_SERVICE_ALIVE":				{ "type": "INFO", "message":  "INFO_SERVICE_ALIVE", },
		"INFO_SERVICE_DEAD":				{ "type": "INFO", "message":  "INFO_SERVICE_DEAD", },

		/* account */
		"INFO_LOGIN_SUCCESS":               { "type": "INFO", "message":  "登入成功。", },
		"INFO_LOGOUT_SUCCESS":              { "type": "INFO", "message":  "登出成功。", },
		"INFO_TOKEN_SUCCESS":              	{ "type": "INFO", "message":  "INFO_TOKEN_SUCCESS", },
        
		/* data */
		"INFO_NO_DATA":						{ "type": "INFO", "message":  "查無資料。", },
		"INFO_CREATE_DATA_SUCCESS":         { "type": "INFO", "message":  "新增資料成功。", },
		"INFO_READ_DATA_SUCCESS":           { "type": "INFO", "message":  "查詢資料成功。", },
		"INFO_READ_EMAIL_SUCCESS":          { "type": "INFO", "message":  "Email 驗證成功。", },
		"INFO_READ_VERIFY_CODE_SUCCESS":    { "type": "INFO", "message":  "驗證碼正確。", },
		"INFO_UPDATE_DATA_SUCCESS":         { "type": "INFO", "message":  "修改資料成功。", },
		"INFO_DELETE_DATA_SUCCESS":         { "type": "INFO", "message":  "刪除資料成功。", },
		"INFO_ACTION_SUCCESS":       		{ "type": "INFO", "message":  "作業成功。", },
		"INFO_IMPORT_DATA_SUCCESS":         { "type": "INFO", "message":  "匯入資料成功。", },
		"INFO_RESET_PASSWORD_SUCCESS":      { "type": "INFO", "message":  "密碼設定成功，請重新登入。", },
		"INFO_SET_PASSWORD_SUCCESS":      	{ "type": "INFO", "message":  "密碼變更成功，請重新登入。", },

		/* account */
		"INFO_NOT_EXISTED_USER":           { "type": "INFO", "message":  "帳號不存在，請聯絡帳號管理人員建置帳號。", },
		"INFO_NO_EMAIL":                   { "type": "INFO", "message":  "帳號不存在信箱定義。", },
		"INFO_USER_NOT_ENABLE":            { "type": "INFO", "message":  "該帳號目前停用中。", },
		"INFO_USER_ALREADY_ACTIVATED":     { "type": "INFO", "message":  "該帳號已經邀請並開通過。", },
		"INFO_WRONG_ACCOUNT_OR_PASSWORD":  { "type": "INFO", "message":  "帳號或密碼錯誤。", },			
		
	},
	/*Add other defined codes here ...*/
};