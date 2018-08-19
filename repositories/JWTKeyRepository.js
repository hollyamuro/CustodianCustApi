/**
 * @param  [Object] conditions 查詢條件，eg: [ {"key":"To_JwtKeyTable.SystemType","value":"system type"},},
 * @see /modules/To_JwtKeyTableModule
 */
module.exports.getJWTKey= (conditions) => {
	try
	{
		const ormDB = require("../helper/OrmDB");
		const To_JwtKeyTableModule = require("../modules/To_JwtKeyTableModule");

		return new Promise( (resolve, reject ) => {
			ormDB.BondGolDB.authenticate()
				.then(() => {    
					return To_JwtKeyTableModule.findAll({
						where: conditions,
						raw: true,
					});
				})
				.then((r) => {resolve(r);})
				.catch((err) => { reject(err); }); 
		});
	
	}
	catch(err){
		throw(err);
	}
};

/**
 * 更新JWT Key
 * @param  {Object} conditions 更新條件，eg: { "Id: groupId }。
 * @param  {Object} ModuleData 欲更新之群組資料。
 */
module.exports.updateJwtKey = (ModuleData, conditions) => {
	try
	{
		const ormDB = require("../helper/OrmDB");
		const To_JwtKeyTableModule = require("../modules/To_JwtKeyTableModule");

		
		return new Promise( (resolve, reject ) => {
			ormDB.BondGolDB.authenticate()
				.then(() => {  
					return ormDB.BondGolDB.transaction(function (t) {
						return To_JwtKeyTableModule.update( ModuleData, { where: conditions, transaction: t, })
							.then(() => { resolve(); })
							.catch((err) => { throw(err); }); 
					});
				})
				.catch((err) => { reject(err); }); 
		});
	}
	catch(err){
		throw(err);
	}
};