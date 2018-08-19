module.exports.adminEmail = () => 
{
	let maillist="hollyamuro.lin@sinopac.com;jcarter.chang@sinopac.com;tac.chen@sinopac.com";
	return maillist;
};


module.exports.invitemail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"Letter of SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service Invitation.",
		"content":"<html><body>親愛的客戶，您好：<br><br>         感謝您申請永豐金證券國際證券業務分公司託管帳戶網路查詢服務。<br>請自系統寄發認證連結網址之通知時間起，於一個工作日內至以下網址完成認證："+"<br><br>"+url+
            "<br>如有任何問題，請與業務人員聯繫。<br>    感謝您 <br><br>                                                 永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>         Thanks for your application.  Please upload the information in accordance with application procedures <br>with  1 business day of receliving the system's verification code.<br>"+
            "Please click the following link to verify your account and password：<br><br>"+url+"<br>If you have any question, please contact with your sales.<br><br>Thank you<br><br><br>                                                 SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.resetpassmail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"Subject：Letter of SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service Verification.",
		"content":"<html><body>親愛的客戶，您好：<br><br>        感謝您申請永豐金證券國際證券業務分公司託管帳戶密碼重設服務。<br>請自系統寄發認證連結網址之通知時間起，於一個工作日內至以下網址完成重設密碼流程：<br>"+url+" <br>"+"	如有任何問題，請與業務人員聯繫。<br>						謝謝。<br>							永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>        Thank you for your application.Please upload the information in accordance with application procedures <br>with  1 business day of receliving the system's verification code.<br>Please click the following link to reset your password：<br>"+url+" <br>"+"	If you have any question, please contact with your sales.<br>						Thank you.<br>							SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.resetpassmail_service = (receivers,account,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"Subject：Letter of SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service Verification.",
		"content":"<html><body>客戶申請重設密碼通知：<br><br>       客戶:"+account+"取得下列url進行重設密碼流程：<br>"+url+" <br>"+"<br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.verifycodemail = (receivers,verifycode) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service verification code.",
		"content":"<body><html>親愛的客戶，您好：<br>         您的邀請驗證碼為： "+verifycode+"<br><br><br>請於五分鐘內完成驗證註冊，<br>感謝您<br>如有任何問題，請與業務人員聯繫。<br>    感謝您<br><br><br>							永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
                        "Dear Customer,<br>         Please enter verification code: "+verifycode+"<br><br><br>If you have any question, please contact with your sales.<br>Thank you.<br><br><br>							SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.resetverifycodemail = (receivers,verifycode) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service reset password verification code.",
		"content":"<body><html>親愛的客戶，您好：<br>         您的重設密碼驗證碼為："+verifycode+"<br><br><br>請於五分鐘內完成重設驗證，<br>感謝您<br>如有任何問題，請與業務人員聯繫。<br>    感謝您<br><br><br>							永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
                        "Dear Customer,<br>         Please enter verification code: "+verifycode+"<br><br><br>If you have any question, please contact with your sales.<br>Thank you.<br><br><br>							SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.lock_password_fail_mail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account locked notification.",
		"content":"<html><body>親愛的客戶，您好：<br><br>         您於永豐金證券國際證券業務分公司託管帳戶網路查詢服務的帳戶因登入密碼錯誤多次而被鎖定。<br><br>請與業務人員聯繫。<br>    感謝您 <br><br>                                                 永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>         Your SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry account had been locked because of too many password failure.<br><br>Please contact with your sales.<br><br>Thank you<br><br><br>                                                 SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};
module.exports.lock_password_fail_mail_service = (receivers,name,account) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>帳戶鎖定通知：<br><br>客戶帳號:"+name+"<br>帳戶:"+account+"<br>因為密碼錯誤過多次被鎖定。<br><br>永豐金證券股份有限公司　國際證券業務分公司<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};


module.exports.cancel_account_mail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account locked notification.",
		"content":"<html><body>親愛的客戶，您好：<br><br>         您於永豐金證券國際證券業務分公司託管帳戶網路查詢服務的帳戶因銷戶而被鎖定。<br><br>請與業務人員聯繫。<br>    感謝您 <br><br>                                                 永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>         Your SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry account had been locked because of account has been canceled.<br><br>Please contact with your sales.<br><br>Thank you<br><br><br>                                                 SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};
module.exports.cancel_account_mail_sevice = (receivers,name,account) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>帳戶鎖定通知：<br><br>客戶:"+name+"<br>帳戶:"+account+"<br>已經銷戶封鎖。<br><br>永豐金證券股份有限公司　國際證券業務分公司<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.account_active_mail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>親愛的客戶，您好：<br><br>         您於永豐金證券國際證券業務分公司託管帳戶網路查詢服務的帳戶已經啟用。<br><br>   感謝您 <br><br>                                                 永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>         Your SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry account had been activated.<br><br>Thank you<br><br><br>                                                 SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.account_active_mail_service = (receivers,name,account) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>開戶通知：<br><br>客戶:"+name+"<br>帳戶:"+account+"<br>已經啟用。<br><br>永豐金證券股份有限公司　國際證券業務分公司<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.password_reset_mail = (receivers,url) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service password reset successful notification.",
		"content":"<html><body>親愛的客戶，您好：<br><br>         您於永豐金證券國際證券業務分公司託管帳戶網路查詢服務的密碼重設驗證已經完成。<br><br>   感謝您 <br><br>                                                 永豐金證券股份有限公司　國際證券業務分公司<br><br><br>"+
            "Dear Customer,<br><br>         Your SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry password reset verify is success.<br><br>Thank you<br><br><br>                                                 SinoPac Securities Corportaion  Offshore Securities Unit<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.password_reset_mail_service = (receivers,name,account) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>客戶密碼更換通知：<br><br>客戶:"+name+"<br>帳戶:"+account+"<br>已經通過密碼重設驗證做密碼重置。<br><br>永豐金證券股份有限公司　國際證券業務分公司<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};

module.exports.malicious_mail_service = (receivers,ip,account) => 
{
	let mail_json={"receivers":receivers,
		"subject":"SinoPac Securities Corporation Offshore Securities Unit Custody Online Inquiry Service account activated notification.",
		"content":"<html><body>惡意攻擊通知：<br><br>網址:"+ip+"<br>嘗試多次使用帳戶或token:"+account+"<br><br>。永豐金證券股份有限公司　國際證券業務分公司<br><br><br><img src=\"logo.png\"/></body></html>"
		,"attachments": [
			{
				"filename": "logo.png",
				"path": "./CustodianData/logo.png"
			}
		]
	};
	return mail_json;
};