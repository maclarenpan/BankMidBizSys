//store define start
		//操作员store
		var personStore = Ext.create('Ext.data.Store', {
				model : 'operatorModel',
				autoLoad : true,
				autoSync : true,
				proxy : {
					type : 'ajax',
					api : {
						read : 'staff/operator.action?method=getAll',
						create : 'staff/operator.action?method=insert',
						update : 'staff/operator.action?method=update',
						destroy : 'staff/operator.action?method=delete'
					},
					reader : {
						type : 'json',
						root : 'operators',
						messageProperty : 'message'
					},
					writer : {
						type : 'json',
						writeAllFields : false,
						root : 'data'
					},
					listeners : {
						exception : function (proxy, response, operation) {
							Ext.MessageBox.show({
								title : 'REMOTE EXCEPTION',
								msg : operation.getError(),
								icon : Ext.MessageBox.ERROR,
								buttons : Ext.Msg.OK
							});
						}
					}
				},
				listeners : {
					write : function (proxy, operation) {
						if (operation.action == 'destroy') {
							Ext.Msg.alert("destroy operation");
						}
						Ext.example.msg(operation.action, operation.resultSet.message);
					}
				}
		});
		
		//客户store
		var guestStore = Ext.create('Ext.data.Store', {
			model : 'guestModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'staff/guest.action?method=getAll',
					create : 'staff/guest.action?method=insert',
					update : 'staff/guest.action?method=update',
					destroy : 'staff/guest.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'guests',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'guests'
				},
				listeners : {
					exception : function(proxy, response, operation) {
						Ext.MessageBox.show({
							title : 'REMOTE EXCEPTION',
							msg : operation.getError(),
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			},
			listeners : {
				write : function(proxy, operation) {
					if (operation.action == 'destroy') {
						Ext.Msg.alert("destroy operation");
					}
					Ext.example.msg(operation.action, operation.resultSet.message);
				}
			}
		});
		
		//代理用户store
		var proxyUserStore = Ext.create('Ext.data.Store', {
			model : 'proxyUserModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'staff/proxyUser.action?method=getAll',
					create : 'staff/proxyUser.action?method=insert',
					update : 'staff/proxyUser.action?method=update',
					destroy : 'staff/proxyUser.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'proxyUsers',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'proxyUsers'
				},
				listeners : {
					exception : function (proxy, response, operation) {
						Ext.MessageBox.show({
							title : 'REMOTE EXCEPTION',
							msg : operation.getError(),
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			},
			listeners : {
				write : function (proxy, operation) {
					if (operation.action == 'destroy') {
						Ext.Msg.alert("destroy operation");
					}
					Ext.example.msg(operation.action, operation.resultSet.message);
				}
			}
		});
		
		var roleStore = Ext.create('Ext.data.Store', {
			model : 'roleModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/role.action?method=getAll',
					create : 'auth/role.action?method=insert',
					update : 'auth/role.action?method=update',
					destroy : 'auth/role.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'roles',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'roles'
				},
				listeners : {
					exception : function (proxy, response, operation) {
						Ext.MessageBox.show({
							title : 'REMOTE EXCEPTION',
							msg : operation.getError(),
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			},
			listeners : {
				write : function (proxy, operation) {
					if (operation.action == 'destroy') {
						Ext.Msg.alert("destroy operation");
					}
					Ext.example.msg(operation.action, operation.resultSet.message);
				}
			}
		});
		
		var auth1Store = Ext.create('Ext.data.Store', {
			model : 'authModel',
			autoLoad : true,
			autoSync : true,
			proxy : {
				type : 'ajax',
				api : {
					read : 'auth/auth.action?method=getAll',
					create : 'auth/auth.action?method=insert',
					update : 'auth/auth.action?method=update',
					destroy : 'auth/auth.action?method=delete'
				},
				reader : {
					type : 'json',
					root : 'auths',
					messageProperty : 'message'
				},
				writer : {
					type : 'json',
					writeAllFields : false,
					root : 'auths'
				},
				listeners : {
					exception : function (proxy, response, operation) {
						Ext.MessageBox.show({
							title : 'REMOTE EXCEPTION',
							msg : operation.getError(),
							icon : Ext.MessageBox.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			},
			listeners : {
				write : function (proxy, operation) {
					if (operation.action == 'destroy') {
						Ext.Msg.alert("destroy operation");
					}
					Ext.example.msg(operation.action, operation.resultSet.message);
				}
			}
		});
		
		var authStore = Ext.create('Ext.data.Store', {
				model : 'authModel',
				sorters : ['auth_id', 'authType', 'authCode', 'authName'],
				groupField : 'authType',
				data : [{
						auth_id: 1,
						authType: '正向权限',
						authCode: 'SuperAdmin',
						authName: '超级管理员'
					}, {
						auth_id: 2,
						authType: '正向权限',
						authCode: 'QueryGuestInfo',
						authName: '查看客户信息'
					}, {
						auth_id: 3,
						authType: '正向权限',
						authCode: 'QueryProxyUserInfo',
						authName: '查看代理用户信息'
					}, {
						auth_id: 4,
						authType : '反向权限',
						authCode : 'QueryReport',
						authName : '报表查询'
					}, {
						auth_id: 5,
						authType : '反向权限',
						authCode : 'InsertOperator',
						authName : '人员添加'
					}
				]
		});
		//store define start
		//用户类型下拉框
		
		var userTypeComboStore = new Ext.data.Store({
			fields: ['userType_id', 'userTypeName'],
			data: [{
				"userType_id": '1', "userTypeName": "big boss"
			}, {
				"userType_id": '2', "userTypeName": "middle boss"
			}, {
				"userType_id": '3', "userTypeName": "small boss"
			}]
		});
		
		//角色类型下拉框
		var roleComboStore = new Ext.data.Store({
			fields: ['role_id', 'roleName'],
			data: [{
				"role_id": '1', "roleName": "admin"
			}, {
				"role_id": '2', "roleName": "ceo"
			}, {
				"role_id": '3', "roleName": "developer"
			}]
		});
		
		//角色下拉框
		var statusComboStore = new Ext.data.Store({
			fields: ['status_id', 'statusName'],
			data: [{
				"status_id": 'injob', "statusName":"在职"
			}, {
				"status_id": 'outjob', "statusName":"离职"
			}]
		});
		
		//客户类型下拉框
		var guestTypeComboStore = new Ext.data.Store({
			fields : ['guestType_id', 'guestTypeName'],
			data : [{
				"guestType_id": "1", "guestTypeName" : "vip"
			}, {
				"guestType_id": "2", "guestTypeName" : "common"
			}]
		});
		
		//性别下拉框
		var genderComboStore = new Ext.data.Store({
			fields : ['gender_id', 'genderName'],
			data : [{
				"gender_id": "male", "genderName": "男"
			}, {
				"gender_id": "female", "genderName": "女"
			}]
		});
		
		//代理类型下拉框
		var proxyUserTypeComboStore = new Ext.data.Store({
			fields: ['proxyUserType_id', 'proxyUserTypeName'],
			data: [{
				"proxyUserType_id": "1", "proxyUserTypeName": "vip"
			}, {
				"proxyUserType_id": "2", "proxyUserTypeName": "common"
			}]
		});
		
		//代理用户状态下拉框
		var proxyUserStatusComboStore = new Ext.data.Store({
			fields: ['proxyUserStatus_id', 'proxyUserStatusName'],
			data: [{
				"proxyUserStatus_id": "actived", "proxyUserStatusName": "已激活"
			}, {
				"proxyUserStatus_id": "canceled", "proxyUserStatusName": "已注销"
			}, {
				"proxyUserStatsu_id": "haultd", "proxyUserStatsuName": "已挂起"
			}]
		});
		
		var bankComboStore = new Ext.data.Store({
			fields: ['bank_id', 'bankName'],
			data: [{
				"bank_id": "1", "bankName": "中国银行广州越秀支行"
			}, {
				"bank_id": "2", "bankName": "中国银行广州天河支行"
			}, {
				"bank_id": "3", "bankName": "中国银行广州荔枝分行"
			}, {
				"bank_id": "4", "bankName": "中国银行广州小北支行"
			}]
		});
		
		/*var reportData = new Ext.data.Store({
			fields: ['name', 'data'],
			data: [{
				"name": Ext.Date.monthNames[0], "data": "10"
			}, {
				"name": Ext.Date.monthNames[1], "data": "20"
			}, {
				"name": Ext.Date.monthNames[2], "data": "30"
			}, {
				"name": Ext.Date.monthNames[3], "data": "20"
			}, {
				"name": Ext.Date.monthNames[4], "data": "10"
			}, {
				"name": Ext.Date.monthNames[5], "data": "20"
			}, {
				"name": Ext.Date.monthNames[6], "data": "30"
			}, {
				"name": Ext.Date.monthNames[7], "data": "20"
			}, {
				"name": Ext.Date.monthNames[8], "data": "10"
			}, {
				"name": Ext.Date.monthNames[9], "data": "20"
			}, {
				"name": Ext.Date.monthNames[10], "data": "30"
			}, {
				"name": Ext.Date.monthNames[11], "data": "20"
			}]
		})
		*/
		var assertReportStore = Ext.create('Ext.data.Store', {
			model: 'reportModel',
			proxy: {
				type: 'ajax',
				url: 'report/assert.action?method=query'
			}
		});
		//store define end