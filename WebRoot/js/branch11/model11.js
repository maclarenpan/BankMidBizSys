//model define start
		Ext.define('Operator', {
			extend: 'Ext.data.Model',
			fields: [
				{
					name: 'id',
					mapping: 'id'
				},
				'username',
				'password',
				'userType',
				'address',
				'linker',
				'linkerPhone',
				'role_id',
				'status',
				'createtime'
			]
		});
		
		Ext.define('operatorModel', {
			extend : 'Ext.data.Model',
			fields : [{
					name : 'id',
					type : 'int',
					useNull : true
				},
				'username',
				'password',
				'userType_id',
				'userTypeName',
				'address',
				'linker',
				'linkerPhone',
				'role_id',
				'roleName',
				'status_id',
				'statusName',
				'createtime'],
			validations : [{
					type : 'length',
					field : 'password',
					min : 1
				}
			]
		});
		
		Ext.define('guestModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'id',
				type : 'int',
				useNull : true
			}, 
			'guestType_id',
			'guestTypeName',
			'username',
			'password',
			'phone',
			'gender_id',
			'genderName',
			'birthday',
			'linker',
			'linkerPhone',
			'address',
			'createtime',
			'remark'
			]
		});
		
		//代理用户model
		Ext.define('proxyUserModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id',
				type: 'int',
				useNull: true
			}, 
			'account_id',
			'proxyUserType_id',
			'proxyUserTypeName',
			'username',
			'password',
			'linker',
			'linkerPhone',
			'phone',
			'address',
			'creditLevel',
			'proxyUserStatus_id',
			'proxyUserStatusName',
			'createtime']
		});
		
		Ext.define('authModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'authName', type: 'string'
			}, {
				name: 'authCode', type: 'string'
			}]
		});
		
		Ext.define('reverseAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		
		Ext.define('customAuthModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'id', type: 'int'
			}, {
				name: 'auth_id', type: 'int'
			}, {
				name: 'operator_id', type: 'int'
			}]
		});
		
		Ext.define('userTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'userType_id', type:'int'
				}, {
				name: 'userTypeName', type: 'string'
			}]
		});
		
		Ext.define('roleModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		Ext.define('statusModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name: 'status_id', type: 'string'
			}, {
				name: 'statusName', type: 'string'
			}]
		});
		
		Ext.define('guestTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'guestType_id', type: 'int'
			}, {
				name : 'gusetTypeName', type: 'string'
			}]
		});
		
		Ext.define('genderTypeModel', {
			extend : 'Ext.data.Model',
			fields : [{
				name : 'gender_id', type: 'string'
			}, {
				name : 'genderName', type: 'string'
			}]
		});
		
		Ext.define('proxyUserType', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'proxyUserType_id', type: 'int'
			}, {
				name: 'proxyUserTypeName', type: 'string'
			}]
		});
		
		Ext.define('proxyUserStatus', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'proxyUserStatus_id', type: 'string'
			}, {
				name: 'proxyUserStatusName', type: 'string'
			}]
		});
		
		Ext.define('authModel', {
			extend : 'Ext.data.Model',
			fields : ['authType', 'authCode', 'authName']
		});
		
		Ext.define('Role', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'role_id', type: 'int'
			}, {
				name: 'roleName', type: 'string'
			}]
		});
		
		Ext.define('reportModel', {
			extends: 'Ext.data.Model',
			fields: [{
				name: 'name', type: 'string'
			}, {
				name: 'data', type: 'string'
			}]
		});
		//model define end