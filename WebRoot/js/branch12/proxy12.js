//model start
//代理用户限制model
Ext.define('proxyUserLimitModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	},{
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'proxyUserName', type: 'string'
	}, {
		name: 'minAmount', type: 'float'
	}, {
		name: 'maxAmount', type: 'float'
	}]
});
//代理用户类型限制model
Ext.define('proxyUserTypeLimitModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'proxyUserType_id', type: 'int'
	}, {
		name: 'proxyUserTypeName', type: 'string'
	}, {
		name: 'minAmount', type: 'float'
	}, {
		name: 'maxAmount', type: 'float'
	}]
});


//open proxy service model
Ext.define('OpenProxyServiceModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'account_id', type: 'int'
	}, {
		name: 'accountName', type: 'string'
	}, {
		name: 'guest_id', type: 'int'
	}, {
		name: 'guestName', type: 'string'
	}, {
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'proxyUserName', type: 'string'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'serviceName', type: 'string'
	}, {
		name: 'createtime', type: 'string'
	}]
});

//ProxyUserAndAcc model
Ext.define('ProxyUserAndAccModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'proxyUserName', type: 'string'
	}, {
		name: 'account_id', type: 'int'
	}, {
		name: 'accountName', type: 'string'
	}]
});

//ProxyUserAndService model
Ext.define('ProxyUserAndService', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'proxyUserName', type: 'string'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'serviceName', type: 'string'
	}]
});

//ProxyClientAndService model
Ext.define('ProxyClientAndService', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyClient_id', type: 'int'
	}, {
		name: 'proxyClientName', type: 'string'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'serviceName', type: 'string'
	}]
});

//GusetAndAcc model
Ext.define('GuestAndAccModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'guest_id', type: 'int'
	}, {
		name: 'guestName', type: 'string'
	}, {
		name: 'account_id', type: 'int'
	}, {
		name: 'accountName', type: 'string'
	}]
});

//GuestAndService model
Ext.define('GuestAndServiceModel', {
	extend: 'Ext.data.Model',
	field: [{
		name: 'guest_id', type: 'int'
	}, {
		name: 'guestName', type: 'string'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'serviceName', type: 'string'
	}]
});
//proxyuseraccountservice
Ext.define('ProxyUserAccountServiceModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'account_id', type: 'int'
	}, {
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'service_id', type: 'int'
	}]
});

Ext.define('ProxyUserTypeComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyUserType_id', type: 'int'
	}, {
		name: 'proxyUserTypeName', type: 'string'
	}]
});
Ext.define('ProxyUserComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyUser_id', type: 'int'
	}, {
		name: 'proxyUserName', type: 'string'
	}]
});

Ext.define('ProxyClientComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'proxyClient_id', type: 'int'
	}, {
		name: 'proxyClientName', type: 'string'
	}]
});
Ext.define('proxyUserAccountAmountModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'account_id', type: 'int'
	}, {
		name: 'service_id', type: 'subbank_id'
	}, {
		name: 'amount', type: 'float'
	}, {
		name: 'bank_id', type: 'int'
	}, {
		name: 'proxyUser_id', type: 'int'
	}]
});

Ext.define('proxyClientAccountAmountModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'account_id', type: 'int'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'amount', type: 'float'
	}, {
		name: 'bank_id', type: 'int'
	}, {
		name: 'proxyClient_id', type: 'int'
	}]
});

//model end
//代理用户combo
/*
var proxyUserComboStore = Ext.create('Ext.data.Store', {
	fields: ['proxyUser_id', 'proxyUserName'],
	data: [{
		"proxyUser_id": "1", "proxyUserName": "panjian"
	}, {
		"proxyUser_id": "2", "proxyUserName": "janice"
	}, {
		"proxyUser_id": "3", "proxyUserName": "lucas"
	}, {
		"proxyUser_id": "4", "proxyUserName": "jack"
	}]
});
*/
//代理用户类型combo
/*
var proxyUserTypeComboStore = Ext.create('Ext.data.Store', {
	fields: ['proxyUserType_id', 'proxyUserTypeName'],
	data: [{
		"proxyUserType_id": "1", "proxyUserTypeName": "vip"
	}, {
		"proxyUserType_id": "2", "proxyUserTypeName": "junior"
	}, {
		"proxyUserType_id": "3", "proxyUserTypeName": "senior"
	}, {
		"proxyUserType_id": "4", "proxyUserTypeName": "super"
	}]
});
*/
var proxyUserTypeComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'proxyUserTypeComboModel',
	proxy: {
		type: 'ajax',
		url: 'staff/proxyUserTypeCombo.action',
		reader: {
			type: 'json',
			root: 'proxyusertypecombos'
		}
	}
});
proxyUserTypeComboStore.load();
var proxyUserComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'ProxyUserComboModel',
	proxy: {
		type: 'ajax',
		url: 'proxy/proxyUserCombo.action',
		reader: {
			type: 'json',
			root: 'proxyusercombos'
		}
	}
});
proxyUserComboStore.load();
var proxyClientComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'ProxyClientComboModel',
	proxy: {
		type: 'ajax',
		url: 'proxy/proxyClientCombo.action',
		reader: {
			type: 'json',
			root: 'proxyclientcombos'
		}
	}
});
proxyClientComboStore.load();
//service combo store
/*
var serviceComboStore = new Ext.data.Store({
	fields: ['service_id', 'serviceName'],
	data: [{
		"service_id": "1", "serviceName": "医院费用代理业务"
	}, {
		"service_id": "2", "serviceName": "跨行转账业务"
	}, {
		"service_id": "3", "serviceName": "银行卡业务"
	}, {
		"service_id": "4", "serviceName": "银行信托业务"
	}, {
		"service_id": "5", "serviceName": "银行金融业务"
	}]
});
*/

//guest combo store
var guestComboStore = new Ext.data.Store({
	fields: ['guest_id', 'guestName'],
	data: [{
		"guest_id": "1", "guestName": "jonana"
	}, {
		"guest_id": "2", "guestName": "felado"
	}, {
		"guest_id": "3", "guestName": "ferrali"
	}, {
		"guest_id": "4", "guestName": "skoda"
	}, {
		"guest_id": "5", "guestName": "bitch"
	}]
});
//model end
//store start
//代理用户限制限制store
var proxyUserLimitStore = Ext.create('Ext.data.Store', {
	model: 'proxyUserLimitModel',
	autoLoad: true,
	autoSync: false,
	proxy: {
		type: 'ajax',
		api: {
			read: 'proxy/proxyUserLimit.action?method=getAll',
			create: 'proxy/proxyUserLimit.action?method=insert',
			update: 'proxy/proxyUserLimit.action?method=update',
			destroy: 'proxy/proxyUserLimit.action?method=delete'
		},
		reader: {
			type: 'json',
			root: 'proxyUserLimits',
			totalProperty: 'totalCount',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			root: 'data'
		},
		listener: {
			exception : function (proxy, response, operation) {
				Ext.MessageBox.show({
					title : 'REMOTE EXCEPTION',
					msg : operation.getError(),
					icon : Ext.MessageBox.ERROR,
					buttons : Ext.Msg.OK
				});
			}
		}
	}	
});
//代理用户类型限制store
var proxyUserTypeLimitStore = Ext.create('Ext.data.Store', {
	model: 'proxyUserTypeLimitModel',
	autoLoad: true,
	autoSync: false,
	proxy: {
		type: 'ajax',
		api: {
			read: 'proxy/proxyUserTypeLimit.action?method=getAll',
			create: 'proxy/proxyUserTypeLimit.action?method=insert',
			update: 'proxy/proxyUserTypeLimit.action?method=update',
			destroy: 'proxy/proxyUserTypeLimit.action?method=delete'
		},
		reader: {
			type: 'json',
			root: 'proxyUserTypeLimits',
			totalProperty: 'totalCount',
			messageProperty: 'message'
		},
		writer: {
			type: 'json',
			writeAllFields: true,
			root: 'data'
		},
		listener: {
			exception : function (proxy, response, operation) {
				Ext.MessageBox.show({
					title : 'REMOTE EXCEPTION',
					msg : operation.getError(),
					icon : Ext.MessageBox.ERROR,
					buttons : Ext.Msg.OK
				});
			}
		}
	}	
});


//proxyuser and account store
var proxyUserAndAccStore = Ext.create('Ext.data.Store', {
	model : 'ProxyUserAndAccModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'proxy/proxyUserAndAcc.action?method=getAll',
			create : 'proxy/proxyUserAndAcc.action?method=insert',
			update : 'proxy/proxyUserAndAcc.action?method=update',
			destroy : 'proxy/proxyUserAndAcc.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyUserAndAccs',
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			root : 'proxyUserAndAccs'
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

//proxyuser and service store
var proxyUserAndServiceStore = Ext.create('Ext.data.Store', {
	model : 'ProxyUserAndServiceModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'proxy/proxyUserAndService.action?method=getAll',
			create : 'proxy/proxyUserAndService.action?method=insert',
			update : 'proxy/proxyUserAndService.action?method=update',
			destroy : 'proxy/proxyUserAndService.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyUserAndServices',
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			root : 'proxyUserAndServices'
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

//proxyclient and account store
var proxyClientAndAccStore = Ext.create('Ext.data.Store', {
	model : 'ProxyClientAndAccModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'proxy/proxyClientAndAcc.action?method=getAll',
			create : 'proxy/proxyClientAndAcc.action?method=insert',
			update : 'proxy/proxyClientAndAcc.action?method=update',
			destroy : 'proxy/proxyClientAndAcc.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyClientAndAccs',
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			root : 'proxyClientAndAccs'
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

//proxyclient and service store
var proxyClientAndServiceStore = Ext.create('Ext.data.Store', {
	model : 'ProxyClientAndServiceModel',
	autoLoad : true,
	autoSync : true,
	proxy : {
		type : 'ajax',
		api : {
			read : 'proxy/proxyClientAndService.action?method=getAll',
			create : 'proxy/proxyClientAndService.action?method=insert',
			update : 'proxy/proxyClientAndService.action?method=update',
			destroy : 'proxy/proxyClientAndService.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyClientAndServices',
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : false,
			root : 'proxyClientAndServices'
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

//proxyuser account service store
var ProxyUserAccountServiceStore = Ext.create('Ext.data.Store', {
	model : 'ProxyUserAccountServiceModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'proxy/proxyUserAccountService.action?method=getAll',
			create : 'proxy/proxyUserAccountService.action?method=insert',
			update : 'proxy/proxyUserAccountService.action?method=update',
			destroy : 'proxy/proxyUserAccountService.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyuseraccountservices',
			totalProperty: 'totalCount',
			pageSize: 10,
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : true,
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
			Ext.example.msg("提示", "删除成功");
		}
	}
});

//proxyUserAccountAmount store
var proxyUserAccountAmountStore = Ext.create('Ext.data.Store', {
	model : 'proxyUserAccountAmountModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/proxyUserAccountAmount.action?method=getAll',
			create : 'acc/proxyUserAccountAmount.action?method=insert',
			update : 'acc/proxyUserAccountAmount.action?method=update',
			destroy : 'acc/proxyUserAccountAmount.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyuseraccountamounts',
			totalProperty: 'totalCount',
			pageSize: 10,
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : true,
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
			Ext.example.msg("提示", "删除成功");
		}
	}
});

//proxyUserAccountAmount store
var proxyClientAccountAmountStore = Ext.create('Ext.data.Store', {
	model : 'proxyClientAccountAmountModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/proxyClientAccountAmount.action?method=getAll',
			create : 'acc/proxyClientAccountAmount.action?method=insert',
			update : 'acc/proxyClientAccountAmount.action?method=update',
			destroy : 'acc/proxyClientAccountAmount.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'proxyclientaccountamounts',
			totalProperty: 'totalCount',
			pageSize: 10,
			messageProperty : 'message'
		},
		writer : {
			type : 'json',
			writeAllFields : true,
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
			Ext.example.msg("提示", "删除成功");
		}
	}
});
//store end
//component start
//代理用户限制grid
Ext.define('ProxyUserLimit.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.proxyuserlimitgrid',
	id: 'proxyuserlimitgrid',
	requires : [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	
	initComponent : function () {
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls : 'icon-grid',
			frame : true,
			plugins : [this.editing],
			dockedItems : [{
					xtype : 'toolbar',
					items : [
					]
				}, {
					weight : 2,
					xtype : 'toolbar',
					dock : 'bottom',
					items : [{
							xtype : 'tbtext',
							text : '<b>@cfg</b>'
						}, '|', {
							text : '自动同步',
							enableToggle : true,
							pressed : false,
							tooltip : 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.autoSync = pressed;
							}
						}, {
							text : '批量提交',
							enableToggle : true,
							pressed : true,
							tooltip : 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.getProxy().batchActions = pressed;
							}
						}
					]
				}, {
					weight : 1,
					xtype : 'toolbar',
					dock : 'bottom',
					ui : 'footer',
					items : ['->', {
							iconCls : 'icon-save',
							text : '同步',
							scope : this,
							handler : this.onSync
						}
					]
				}, {
					xtype : 'pagingtoolbar',
					emptyMsg: '没有数据',
					store :proxyUserLimitStore,
					pageSize: 10,
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{
					text : 'Id',
					hidden: true,
					width: 200,
					sortable : true,
					dataIndex : 'id'
				}, {
					header: 'ProxyUser_id',
					width: 200,
					hidden: true,
					sortable: true,
					dataIndex: 'proxyUser_id'
				}, {
					header : 'proxyUserName',
					width: 200,
					sortable : true,
					dataIndex : 'proxyUserName',
					field : {
						type : 'textfield'
					}
				}, {
					header: 'minAmount',
					width: 200,
					sortable: true,
					dataIndex: 'minAmount',
					field: {
						type: 'textfield'
					}
				}, {
					header: 'maxAmount',
					width: 200,
					sortable: true,
					dataIndex: 'maxAmount',
					field: {
						type: 'textfield'
					}
				}
			]
		});
		this.callParent();
	},
	
	onSync : function () {
		this.store.sync();
		this.store.load();
	}
});

//proxyUserLimit query panel
var proxyUserLimitQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '代理用户限制查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var proxyUserName = Ext.getCmp('proxyUserName_query').getValue();
			proxyUserLimitStore.load({url:'proxy/proxyUserLimit.action?method=getByConditions', params:{proxyUserName: proxyUserName}});
		}
	}],
	items: [{
		xtype: 'fieldset',
		title: '查询条件',
		defaultType: {
			xtype: 'textfield',
			align: 'right'
		},
		layout: {
			type: 'table',
			columns: 4
		},
		items: [{
			fieldLabel: 'ProyUserName',
			id: 'proxyUserName_query',
			name: 'proxyUserName_query',
			xtype: 'textfield',
			width: 240
		}]
	}, {
		
	}]
});

//代理用户类型限制grid
Ext.define('ProxyUserTypeLimit.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.proxyusertypelimitgrid',
	id: 'proxyusertypelimitgrid',
	requires : [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	
	initComponent : function () {
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls : 'icon-grid',
			frame : true,
			plugins : [this.editing],
			dockedItems : [{
					xtype : 'toolbar',
					items : [
					]
				}, {
					weight : 2,
					xtype : 'toolbar',
					dock : 'bottom',
					items : [{
							xtype : 'tbtext',
							text : '<b>@cfg</b>'
						}, '|', {
							text : '自动同步',
							enableToggle : true,
							pressed : false,
							tooltip : 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.autoSync = pressed;
							}
						}, {
							text : '批量提交',
							enableToggle : true,
							pressed : false,
							tooltip : 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.getProxy().batchActions = pressed;
							}
						}, {
							text : '提交全部数据',
							enableToggle : true,
							pressed : false,
							tooltip : 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.getProxy().getWriter().writeAllFields = pressed;
							}
						}
					]
				}, {
					weight : 1,
					xtype : 'toolbar',
					dock : 'bottom',
					ui : 'footer',
					items : ['->', {
							iconCls : 'icon-save',
							text : '同步',
							scope : this,
							handler : this.onSync
						}
					]
				}, {
					xtype : 'pagingtoolbar',
					store :proxyUserTypeLimitStore, 
					pageSize: 10,
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{
					text: 'id',
					width: 0,
					hidden: true,
					sortable: true,
					dataIndex: 'id'
				}, {
					text : 'proxyUserType_id',
					width : 0,
					hidden: true,
					sortable : true,
					dataIndex : 'proxyUserType_id'
				}, {
					header : 'proxyUserTypeName',
					width : 100,
					sortable : true,
					dataIndex : 'proxyUserTypeName',
					field : {
						type : 'textfield'
					}
				}, {
					header: 'minAmount',
					width: 100,
					sortable: true,
					dataIndex: 'minAmount',
					field: {
						type: 'textfield'
					}
				}, {
					header: 'maxAmount',
					width: 100,
					sortable: true,
					dataIndex: 'maxAmount',
					field: {
						type: 'textfield'
					}
				}
			]
		});
		this.callParent();
	},
	
	onSync : function () {
		this.store.sync();
		this.store.load();
	}
});

//proxyUserTypeLimit query panel
var proxyUserTypeLimitQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '代理用户类型限制查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var proxyUserTypeName = Ext.getCmp('proxyUserTypeName_query').getValue();
			proxyUserTypeLimitStore.load({url:'proxy/proxyUserTypeLimit.action?method=getByConditions', params:{proxyUserTypeName: proxyUserTypeName}});
		}
	}],
	items: [{
		xtype: 'fieldset',
		title: '查询条件',
		defaultType: {
			xtype: 'textfield',
			align: 'right'
		},
		layout: {
			type: 'table',
			columns: 4
		},
		items: [{
			fieldLabel: 'ProxyUserTypeName',
			id: 'proxyUserTypeName_query',
			name: 'proxyUserTypeName_query',
			xtype: 'textfield',
			width: 300
		}]
	}, {
		
	}]
});


Ext.define('ProxyUserAccountService.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.proxyuseraccountservicegrid',
	
	requires : [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	
	initComponent : function () {
		
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls : 'icon-grid',
			frame : true,
			plugins : [this.editing],
			dockedItems : [{
					xtype : 'toolbar',
					items : [{
							iconCls : 'icon-add',
							text : '添加',
							scope : this,
							handler : this.onAddClick
						}, {
							iconCls : 'icon-delete',
							text : '删除',
							disabled : false,
							itemId : 'delete',
							scope : this,
							handler : this.onDeleteClick
						}
					]
				}, {
					weight : 2,
					xtype : 'toolbar',
					dock : 'bottom',
					items : [{
							xtype : 'tbtext',
							text : '<b>@cfg</b>'
						}, '|', {
							text : '自动同步',
							enableToggle : true,
							pressed : false,
							tooltip : 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.autoSync = pressed;
							}
						}, {
							text : '批量提交',
							enableToggle : true,
							pressed : true,
							tooltip : 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
							scope : this,
							toggleHandler : function (btn, pressed) {
								this.store.getProxy().batchActions = pressed;
							}
						}
					]
				}, {
					weight : 1,
					xtype : 'toolbar',
					dock : 'bottom',
					ui : 'footer',
					items : ['->', {
							iconCls : 'icon-save',
							text : '同步',
							scope : this,
							handler : this.onSync
						}
					]
				}, {
					xtype : 'pagingtoolbar',
					emptyMsg: '没有数据',
					pageSize: 10,
					store : ProxyUserAccountServiceStore, 
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{
					text : 'Id',
					hidden : true,
					width : 40,
					sortable : true,
					dataIndex : 'id'
				}, {
					header: 'ProxyUser',
					width: 100,
					dataIndex: 'proxyUser_id',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: proxyUserComboStore,
						mode: 'local',
						valueField: 'proxyUser_id',
						displayField: 'proxyUserName',
						hiddenName: 'hproxyUser_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record){
						var index = proxyUserComboStore.find('proxyUser_id', value);
						if (index != -1)
						{
							return proxyUserComboStore.getAt(index).data.proxyUserName;
						}
						return value;
					}
				}, {
					header: 'Account',
					width: 100,
					dataIndex: 'account_id',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: accountComboStore,
						mode: 'local',
						valueField: 'account_id',
						displayField: 'accountName',
						hiddenName: 'haccount_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record){
						var index = accountComboStore.find('account_id', value);
						if (index != -1)
						{
							return accountComboStore.getAt(index).data.accountName;
						}
						return value;
					}
				}, {
					header: 'Service',
					width: 100,
					dataIndex: 'service_id',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: serviceComboStore,
						mode: 'local',
						valueField: 'service_id',
						displayField: 'serviceName',
						hiddenName: 'hservice_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record){
						var index = serviceComboStore.find('service_id', value);
						if (index != -1)
						{
							return serviceComboStore.getAt(index).data.serviceName;
						}
						return value;
					}
				}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange : function (selModel, selections) {
		this.down('#delete').setDisabled(selections.length === 0);
	},
	
	onSync : function () {
		this.store.sync();
		this.store.load();
	},
	
	onDeleteClick : function () {
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection) {
			this.store.remove(selection);
		}
	},
	
	onAddClick : function () {
		var rec = new ProxyUserAccountServiceModel({
				id : '',
				proxyUser_id: '',
				account_id: '',
				service_id: ''
			}),
		edit = this.editing;
		edit.cancelEdit();
		this.store.insert(0, rec);
		edit.startEditByPosition({
			row : 0,
			column : 1
		});
	}
});

//proxyuser account service panel
var proxyUserAccountServiceQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '代理用户账户业务关联查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var proxyUser_id = Ext.getCmp('proxyUser_id_proxyUserAccountService_query').getValue();
			var account_id = Ext.getCmp('account_id_proxyUserAccountService_query').getValue();
			var service_id = Ext.getCmp('service_id_proxyUserAccountService_query').getValue();
			ProxyUserAccountServiceStore.load({url:'proxy/proxyUserAccountService.action?method=getByConditions', params:{proxyUser_id: proxyUser_id, account_id: account_id, service_id: service_id}});
		}
	}],
	items: [{
		xtype: 'fieldset',
		title: '查询条件',
		defaultType: {
			xtype: 'textfield',
			align: 'right'
		},
		layout: {
			type: 'table',
			columns: 4
		},
		items: [{
			fieldLabel : 'ProxyUser',
			id : 'proxyUser_id_proxyUserAccountService_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'proxyUser_id',
			displayField: 'proxyUserName',
			editable : false,
			name : 'proxyUser_id_proxyUserAccountService_query',
			hiddenName: 'hproxyUser_id_proxyUserAccountService_query',
			allowBlank : true,
			width : 240,
			store : proxyUserComboStore
		}, {
			fieldLabel: 'Account',
			id: 'account_id_proxyUserAccountService_query',
			name: 'account_id_proxyUserAccountService_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'account_id',
			displayField: 'accountName',
			hiddenName: 'haccount_id_proxyUserAccountService_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: accountComboStore
		}, {
			fieldLabel: 'Service',
			id: 'service_id_proxyUserAccountService_query',
			name: 'service_id_proxyUserAccountService_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'service_id',
			displayField: 'serviceName',
			hiddenName: 'hservice_id_proxyUserAccountService_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: serviceComboStore
		}]
	}, {
		
	}]
});


//ProxyUserAccountAmount grid
Ext.define('ProxyUserAccountAmount.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyuseraccountamountgrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: []
			}, {
				xtype: 'pagingtoolbar',
				store: proxyUserAccountAmountStore,
				emptyMsg: '没有数据',
				pageSize: 10,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				header: 'ProxyUser',
				width: 100,
				dataIndex: 'proxyUser_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: proxyUserComboStore,
					mode: 'local',
					valueField: 'proxyUser_id',
					displayField: 'proxyUserName',
					hiddenName: 'hproxyUser_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = proxyUserComboStore.find('proxyUser_id', value);
					if (index != -1)
					{
						return proxyUserComboStore.getAt(index).data.proxyUserName;
					}
					return value;
				}
			}, {
				header: 'Account',
				width: 100,
				dataIndex: 'account_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: accountComboStore,
					mode: 'local',
					valueField: 'account_id',
					displayField: 'accountName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = accountComboStore.find('account_id', value);
					if (index != -1)
					{
						return accountComboStore.getAt(index).data.accountName;
					}
					return value;
				}
			}, {
				header: 'Service',
				width: 100,
				dataIndex: 'service_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: serviceComboStore,
					mode: 'local',
					valueField: 'service_id',
					displayField: 'serviceName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = serviceComboStore.find('service_id', value);
					if (index != -1)
					{
						return serviceComboStore.getAt(index).data.serviceName;
					}
					return value;
				}
			}, {
				header: 'Bank',
				width: 100,
				dataIndex: 'bank_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: bankComboStore,
					mode: 'local',
					valueField: 'bank_id',
					displayField: 'bankName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = bankComboStore.find('bank_id', value);
					if (index != -1)
					{
						return bankComboStore.getAt(index).data.bankName;
					}
					return value;
				}
			}, {
				text: 'Amount',
				width: 100,
				sortable: true,
				dataIndex: 'amount',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
	},	
	onSync : function(){
		this.store.sync();
		this.store.load();
	}
});

//account query panel
var ProxyUserAccountAmountQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '代理用户账户查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var proxyUser_id = Ext.getCmp('proxyUser_id_proxyUserAccountAmount_query').getValue();
			proxyUserAccountAmountStore.load({url:'acc/proxyUserAccountAmount.action?method=getByConditions', params:{proxyUser_id: proxyUser_id}});
		}
	}, {
		text: '全部查询',
		handler: function(){
			var proxyUser_id = Ext.getCmp('proxyUser_id_proxyUserAccountAmount_query').getValue();
			proxyUserAccountAmountStore.load({url:'acc/proxyUserAccountAmount.action?method=getAll'});
		}
	}],
	items: [{
		xtype: 'fieldset',
		title: '查询条件',
		defaultType: {
			xtype: 'textfield',
			align: 'right'
		},
		layout: {
			type: 'table',
			columns: 4
		},
		items: [{
			fieldLabel : 'ProxyUser',
			id : 'proxyUser_id_proxyUserAccountAmount_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'proxyUser_id',
			displayField: 'proxyUserName',
			editable : false,
			name : 'proxyUser_id_proxyUserAccountAmount_query',
			hiddenName: 'hproxyUser_id_proxyUserAccountAmount_query',
			allowBlank : true,
			width : 240,
			store : proxyUserComboStore
		}]
	}, {
		
	}]
});

//ProxyClientAccountAmount grid
Ext.define('ProxyClientAccountAmount.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyclientaccountamountgrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: []
			}, {
				xtype: 'pagingtoolbar',
				store: proxyClientAccountAmountStore,
				emptyMsg: '没有数据',
				pageSize: 10,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				header: 'ProxyClient',
				width: 100,
				dataIndex: 'proxyClient_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: proxyClientComboStore,
					mode: 'local',
					valueField: 'proxyClient_id',
					displayField: 'proxyClientName',
					hiddenName: 'hproxyUser_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = proxyClientComboStore.find('proxyClient_id', value);
					if (index != -1)
					{
						return proxyClientComboStore.getAt(index).data.proxyClientName;
					}
					return value;
				}
			}, {
				header: 'Account',
				width: 100,
				dataIndex: 'account_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: accountComboStore,
					mode: 'local',
					valueField: 'account_id',
					displayField: 'accountName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = accountComboStore.find('account_id', value);
					if (index != -1)
					{
						return accountComboStore.getAt(index).data.accountName;
					}
					return value;
				}
			}, {
				header: 'Service',
				width: 100,
				dataIndex: 'service_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: serviceComboStore,
					mode: 'local',
					valueField: 'service_id',
					displayField: 'serviceName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = serviceComboStore.find('service_id', value);
					if (index != -1)
					{
						return serviceComboStore.getAt(index).data.serviceName;
					}
					return value;
				}
			}, {
				header: 'Bank',
				width: 100,
				dataIndex: 'bank_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: bankComboStore,
					mode: 'local',
					valueField: 'bank_id',
					displayField: 'bankName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = bankComboStore.find('bank_id', value);
					if (index != -1)
					{
						return bankComboStore.getAt(index).data.bankName;
					}
					return value;
				}
			}, {
				text: 'Amount',
				width: 100,
				sortable: true,
				dataIndex: 'amount',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
	},	
	onSync : function(){
		this.store.sync();
		this.store.load();
	}
});

//proxy client query panel
var ProxyClientAccountAmountQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '代理客户账户查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var proxyClient_id = Ext.getCmp('proxyClient_id_proxyClientAccountAmount_query').getValue();
			proxyClientAccountAmountStore.load({url:'acc/proxyClientAccountAmount.action?method=getByConditions', params:{proxyClient_id: proxyClient_id}});
		}
	}, {
		text: '全部查询',
		handler: function(){
			proxyClientAccountAmountStore.load({url:'acc/proxyClientAccountAmount.action?method=getAll'});
		}
	}],
	items: [{
		xtype: 'fieldset',
		title: '查询条件',
		defaultType: {
			xtype: 'textfield',
			align: 'right'
		},
		layout: {
			type: 'table',
			columns: 4
		},
		items: [{
			fieldLabel : 'ProxyClient',
			id : 'proxyClient_id_proxyClientAccountAmount_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'proxyClient_id',
			displayField: 'proxyClientName',
			editable : false,
			name : 'proxyUser_id_proxyClientAccountAmount_query',
			hiddenName: 'hproxyClient_id_proxyClientAccountAmount_query',
			allowBlank : true,
			width : 240,
			store : proxyClientComboStore
		}]
	}, {
		
	}]
});

/*
//proxyuserandacc grid
Ext.define('ProxyUserAndAcc.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyuserandaccgrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					iconCls: 'icon-add',
					text: '添加',
					scope: this,
					handler: this.onAddClick
				}, {
					iconCls: 'icon-delete',
					text: '删除',
					disabled: false,
					itemId: 'delete',
					scope: this,
					handler: this.onDeleteClick
				}]
			}, {
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					xtype: 'tbtext',
					text: '<b>@cfg</b>'
				}, '|', {
					text: '自动同步',
					enableToggle: true,
					pressed: true,
					tooltip: 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.autoSync = pressed;
					}
				}, {
					text: '批量提交',
					enableToggle: true,
					pressed: true,
					tooltipo: 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().batchActions = pressed;	
					}
				}, {
					text: '提交全部数据',
					enableToggle: true,
					pressed: false,
					tooltip: 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().getWriter.writeAllFields = pressed;
					}
				}]
			}, {
				weight: 1,
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconCls: 'icon-save',
					text: '同步',
					scope: this,
					handler: this.onSync
				}]
			}, {
				xtype: 'pagingtoolbar',
				store: proxyUserAndAccStore,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				text: 'Account_id',
				width: 100,
				sortable: true,
				dataIndex: 'account_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'AccountName',
				width: 100,
				sortable: true,
				dataIndex: 'accountName',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'ProxyUser_id',
				width: 100,
				sortable: true,
				dataIndex: 'proxyUser_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'ProxyUserName',
				width: 100,
				sortable: true,
				dataIndex: 'proxyUserName',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange: function(selModel, selections){
		this.down('#deleteGuest').setDisabled(selections.length === 0);
	},
	
	onSync : function(){
		this.store.sync();
	},
	
	onDeleteClick : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.store.remove(selection);
		}
	},
	
	onAddClick : function(){
		var rec = new guestModel({
			id: '',
			account_id: '',
			accountName: '',
			proxyUser_id: '',
			proxyUserName: ''
		}),
		edit = this.editing;
		edit.cancelEdit();
		this.store.insert(0, rec);
		edit.startEditByPosition({
			row: 0,
			column: 1
		});
	}
});

*/
//proxyuserandacc form
/*
Ext.define('ProxyUserAndAcc.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.proxyuserandaccform',
	requires : ['Ext.form.field.Text'],
	id : 'proxyuserandaccform',
	initComponent : function() {
		this.addEvents('create');
		Ext.apply(this, {
			activeRecord : null,
			iconCls : 'icon-user',
			frame : true,
			title : '关联代理用户和账户',
			defaultType : 'textfield',
			bodyPadding : 2,
			fieldDefaults : {
				anchor : '100%',
				labelAlign : 'right'
			},
			layout : {
				type : 'table',
				columns : 4
			},
			items : [{
				fieldLabel : 'id',
				name : 'id',
				allowBlank : false,
				width : 240
			}, {
				fieldLabel : 'Account_id',
				xtype : 'combo',
				queryMode : 'local',
				valueField: 'account_id',
				displayField: 'accountName',
				editable: false,
				id: 'account_id',
				name: 'account_id',
				hiddenName: 'haccount_id',
				width: 240,
				store: accountComboStore,
				listeners : {
					select : function(combo, record, index) {
						var val = accountComboStore.getAt(accountComboStore.find('account_id', Ext.getCmp('account_id').value)).get('accountName');
						Ext.getCmp('hiddenAccountName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'AccountName',
				id: 'hiddenAccountName',
				name: 'accountName',
				allowBlank: false,
				width: 240
			}, {
				fieldLabel : 'ProxyUser_id',
				id : 'proxyUser_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'proxyUser_id',
				displayField: 'proxyUserName',
				editable : false,
				name : 'proxyUser_id',
				hiddenName: 'hproxyUser_id',
				allowBlank : false,
				width : 240,
				store : proxyUserComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = proxyUserComboStore.getAt(proxyUserComboStore.find('proxyUser_id', Ext.getCmp('proxyUser_id').value)).get('proxyUserName');
						Ext.getCmp('hiddenProxyUserName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'ProxyUserName',
				id: 'hiddenProxyUserName',
				name: 'proxyUserName',
				allowBlank:  false,
				width: 240
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconlCls: 'icon-save',
					itemId: 'saveGuest',
					text: '保存',
					disabled: true,
					scope: this,
					handler: this.onSave
				}, {
					iconCls: 'icon-user-add',
					text: '新建',
					scope: this,
					handler: this.onCreate
				}, {
					iconCls: 'icon-reset',
					text: '重置',
					scope: this,
					handler: this.onReset
				}]
			}]
		});
		this.callParent();
	},
	setActiveRecord: function(record){
		this.activeRecord = record;
		if (record) {
			this.down('#saveGuest').enable();
			this.getForm().loadRecord(record);
		}
		else { 
			this.down('#saveGuest').disable();
			this.getForm().reset();
		}
	},
	onSave: function() {
		var active = this.activeRecord,
		form = this.getForm();
		if (!active) {
			return;
		}
		if (form.isValid()) {
			form.updateRecord(active);
			this.onReset();
		}
	},
	onCreate: function(){
		var form = this.getForm();
		if (form.isValid()){
			this.fireEvent('create', this, form.getValues());
			form.reset();
		}
	},
	onReset: function() {
		this.setActiveRecord(null);
		this.getForm().reset();
	}
});

//proxyuserandservice grid
Ext.define('ProxyUserAndService.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyuserandservicegrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					iconCls: 'icon-add',
					text: '添加',
					scope: this,
					handler: this.onAddClick
				}, {
					iconCls: 'icon-delete',
					text: '删除',
					disabled: false,
					itemId: 'delete',
					scope: this,
					handler: this.onDeleteClick
				}]
			}, {
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					xtype: 'tbtext',
					text: '<b>@cfg</b>'
				}, '|', {
					text: '自动同步',
					enableToggle: true,
					pressed: true,
					tooltip: 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.autoSync = pressed;
					}
				}, {
					text: '批量提交',
					enableToggle: true,
					pressed: true,
					tooltipo: 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().batchActions = pressed;	
					}
				}, {
					text: '提交全部数据',
					enableToggle: true,
					pressed: false,
					tooltip: 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().getWriter.writeAllFields = pressed;
					}
				}]
			}, {
				weight: 1,
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconCls: 'icon-save',
					text: '同步',
					scope: this,
					handler: this.onSync
				}]
			}, {
				xtype: 'pagingtoolbar',
				store: guestStore,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				text: 'Account_id',
				width: 100,
				sortable: true,
				dataIndex: 'account_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'AccountName',
				width: 100,
				sortable: true,
				dataIndex: 'accountName',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'Service_id',
				width: 100,
				sortable: true,
				dataIndex: 'service_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'ServiceName',
				width: 100,
				sortable: true,
				dataIndex: 'serviceName',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange: function(selModel, selections){
		this.down('#deleteGuest').setDisabled(selections.length === 0);
	},
	
	onSync : function(){
		this.store.sync();
	},
	
	onDeleteClick : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.store.remove(selection);
		}
	},
	
	onAddClick : function(){
		var rec = new guestModel({
			id: '',
			account_id: '',
			accountName: '',
			service_id: '',
			serviceName: ''
		}),
		edit = this.editing;
		edit.cancelEdit();
		this.store.insert(0, rec);
		edit.startEditByPosition({
			row: 0,
			column: 1
		});
	}
});


//proxyuserandservice form
Ext.define('ProxyUserAndService.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.proxyuserandserviceform',
	requires : ['Ext.form.field.Text'],
	id : 'proxyuserandserviceform',
	initComponent : function() {
		this.addEvents('create');
		Ext.apply(this, {
			activeRecord : null,
			iconCls : 'icon-user',
			frame : true,
			title : '关联代理用户和业务',
			defaultType : 'textfield',
			bodyPadding : 2,
			fieldDefaults : {
				anchor : '100%',
				labelAlign : 'right'
			},
			layout : {
				type : 'table',
				columns : 4
			},
			items : [{
				fieldLabel : 'id',
				name : 'id',
				allowBlank : false,
				width : 240
			}, {
				fieldLabel : 'ProxyUser_id',
				id : 'proxyUser_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'proxyUser_id',
				displayField: 'proxyUserName',
				editable : false,
				name : 'proxyUser_id',
				hiddenName: 'hproxyUser_id',
				allowBlank : false,
				width : 240,
				store : proxyUserComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = proxyUserComboStore.getAt(proxyUserComboStore.find('proxyUser_id', Ext.getCmp('proxyUser_id').value)).get('proxyUserName');
						Ext.getCmp('hiddenProxyUserName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'ProxyUserName',
				id: 'hiddenProxyUserName',
				name: 'proxyUserName',
				allowBlank:  false,
				width: 240
			}, {
				fieldLabel : 'Service',
				id : 'service_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'service_id',
				displayField: 'serviceName',
				editable : false,
				name : 'service_id',
				hiddenName: 'hservice_id',
				allowBlank : false,
				width : 240,
				store : serviceComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = serviceComboStore.getAt(serviceComboStore.find('service_id', Ext.getCmp('service_id').value)).get('serviceName');
						Ext.getCmp('hiddenServiceName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'ServiceName',
				id: 'hiddenServiceName',
				name: 'hiddenServiceName',
				allowBlank:  false,
				width: 240
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconlCls: 'icon-save',
					itemId: 'saveGuest',
					text: '保存',
					disabled: true,
					scope: this,
					handler: this.onSave
				}, {
					iconCls: 'icon-user-add',
					text: '新建',
					scope: this,
					handler: this.onCreate
				}, {
					iconCls: 'icon-reset',
					text: '重置',
					scope: this,
					handler: this.onReset
				}]
			}]
		});
		this.callParent();
	},
	setActiveRecord: function(record){
		this.activeRecord = record;
		if (record) {
			this.down('#saveGuest').enable();
			this.getForm().loadRecord(record);
		}
		else { 
			this.down('#saveGuest').disable();
			this.getForm().reset();
		}
	},
	onSave: function() {
		var active = this.activeRecord,
		form = this.getForm();
		if (!active) {
			return;
		}
		if (form.isValid()) {
			form.updateRecord(active);
			this.onReset();
		}
	},
	onCreate: function(){
		var form = this.getForm();
		if (form.isValid()){
			this.fireEvent('create', this, form.getValues());
			form.reset();
		}
	},
	onReset: function() {
		this.setActiveRecord(null);
		this.getForm().reset();
	}
});

//proxyclientandservice grid
Ext.define('ProxyClientAndService.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyclientandservicegrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					iconCls: 'icon-add',
					text: '添加',
					scope: this,
					handler: this.onAddClick
				}, {
					iconCls: 'icon-delete',
					text: '删除',
					disabled: false,
					itemId: 'delete',
					scope: this,
					handler: this.onDeleteClick
				}]
			}, {
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					xtype: 'tbtext',
					text: '<b>@cfg</b>'
				}, '|', {
					text: '自动同步',
					enableToggle: true,
					pressed: true,
					tooltip: 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.autoSync = pressed;
					}
				}, {
					text: '批量提交',
					enableToggle: true,
					pressed: true,
					tooltipo: 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().batchActions = pressed;	
					}
				}, {
					text: '提交全部数据',
					enableToggle: true,
					pressed: false,
					tooltip: 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().getWriter.writeAllFields = pressed;
					}
				}]
			}, {
				weight: 1,
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconCls: 'icon-save',
					text: '同步',
					scope: this,
					handler: this.onSync
				}]
			}, {
				xtype: 'pagingtoolbar',
				store: guestStore,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				text: 'Guest_id',
				width: 100,
				sortable: true,
				dataIndex: 'guest_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'GuestName',
				width: 100,
				sortable: true,
				dataIndex: 'guestName',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'Service_id',
				width: 100,
				sortable: true,
				dataIndex: 'service_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'ServiceName',
				width: 100,
				sortable: true,
				dataIndex: 'serviceName',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange: function(selModel, selections){
		this.down('#deleteGuest').setDisabled(selections.length === 0);
	},
	
	onSync : function(){
		this.store.sync();
	},
	
	onDeleteClick : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.store.remove(selection);
		}
	},
	
	onAddClick : function(){
		var rec = new guestModel({
			id: '',
			guest_id: '',
			guestName: '',
			service_id: '',
			serviceName: ''
		}),
		edit = this.editing;
		edit.cancelEdit();
		this.store.insert(0, rec);
		edit.startEditByPosition({
			row: 0,
			column: 1
		});
	}
});


//proxyclientandservice form
Ext.define('ProxyClientAndService.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.proxyclientandserviceform',
	requires : ['Ext.form.field.Text'],
	id : 'proxyclientandserviceform',
	initComponent : function() {
		this.addEvents('create');
		Ext.apply(this, {
			activeRecord : null,
			iconCls : 'icon-user',
			frame : true,
			title : '关联代理客户和业务',
			defaultType : 'textfield',
			bodyPadding : 2,
			fieldDefaults : {
				anchor : '100%',
				labelAlign : 'right'
			},
			layout : {
				type : 'table',
				columns : 4
			},
			items : [{
				fieldLabel : 'id',
				name : 'id',
				allowBlank : false,
				width : 240
			}, {
				fieldLabel : 'Guest_id',
				id : 'guest_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'guest_id',
				displayField: 'guestName',
				editable : false,
				name : 'guest_id',
				hiddenName: 'hguest_id',
				allowBlank : false,
				width : 240,
				store : guestComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = guestComboStore.getAt(guestComboStore.find('guest_id', Ext.getCmp('guest_id').value)).get('guestName');
						Ext.getCmp('hiddenGuestName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'GuestName',
				id: 'hiddenGuestName',
				name: 'guestName',
				allowBlank:  false,
				width: 240
			}, {
				fieldLabel : 'Service',
				id : 'service_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'service_id',
				displayField: 'serviceName',
				editable : false,
				name : 'service_id',
				hiddenName: 'hservice_id',
				allowBlank : false,
				width : 240,
				store : serviceComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = serviceComboStore.getAt(serviceComboStore.find('service_id', Ext.getCmp('service_id').value)).get('serviceName');
						Ext.getCmp('hiddenServiceName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'ServiceName',
				id: 'hiddenServiceName',
				name: 'hiddenServiceName',
				allowBlank:  false,
				width: 240
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconlCls: 'icon-save',
					itemId: 'saveGuest',
					text: '保存',
					disabled: true,
					scope: this,
					handler: this.onSave
				}, {
					iconCls: 'icon-user-add',
					text: '新建',
					scope: this,
					handler: this.onCreate
				}, {
					iconCls: 'icon-reset',
					text: '重置',
					scope: this,
					handler: this.onReset
				}]
			}]
		});
		this.callParent();
	},
	setActiveRecord: function(record){
		this.activeRecord = record;
		if (record) {
			this.down('#saveGuest').enable();
			this.getForm().loadRecord(record);
		}
		else { 
			this.down('#saveGuest').disable();
			this.getForm().reset();
		}
	},
	onSave: function() {
		var active = this.activeRecord,
		form = this.getForm();
		if (!active) {
			return;
		}
		if (form.isValid()) {
			form.updateRecord(active);
			this.onReset();
		}
	},
	onCreate: function(){
		var form = this.getForm();
		if (form.isValid()){
			this.fireEvent('create', this, form.getValues());
			form.reset();
		}
	},
	onReset: function() {
		this.setActiveRecord(null);
		this.getForm().reset();
	}
});

//proxyclientandacc grid
Ext.define('ProxyClientAndAcc.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.proxyclientandaccgrid',
	requires: [
		'Ext.grid.plugin.CellEditing',
		'Ext.form.field.Text',
		'Ext.toolbar.TextItem'
	],
	initComponent: function(){
		this.editing = Ext.create('Ext.grid.plugin.CellEditing');
		Ext.apply(this, {
			iconCls: 'icon-grid',
			frame: true,
			plugins: [this.editing],
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					iconCls: 'icon-add',
					text: '添加',
					scope: this,
					handler: this.onAddClick
				}, {
					iconCls: 'icon-delete',
					text: '删除',
					disabled: false,
					itemId: 'delete',
					scope: this,
					handler: this.onDeleteClick
				}]
			}, {
				weight: 2,
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					xtype: 'tbtext',
					text: '<b>@cfg</b>'
				}, '|', {
					text: '自动同步',
					enableToggle: true,
					pressed: true,
					tooltip: 'When enabled, Store will execute Ajax requests as soon as a Record becomes dirty.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.autoSync = pressed;
					}
				}, {
					text: '批量提交',
					enableToggle: true,
					pressed: true,
					tooltipo: 'When enabled, Store will batch all records for each type of CRUD verb into a single Ajax request.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().batchActions = pressed;	
					}
				}, {
					text: '提交全部数据',
					enableToggle: true,
					pressed: false,
					tooltip: 'When enabled, Writer will write *all* fields to the server -- not just those that changed.',
					scope: this,
					toggleHandler: function(btn, pressed){
						this.store.getProxy().getWriter.writeAllFields = pressed;
					}
				}]
			}, {
				weight: 1,
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconCls: 'icon-save',
					text: '同步',
					scope: this,
					handler: this.onSync
				}]
			}, {
				xtype: 'pagingtoolbar',
				store: guestStore,
				dock: 'bottom',
				displayInfo: true
			}],
			columns: [{
				text: 'Id',
				hidden: true,
				sortable: true,
				dataIndex: 'id'
			}, {
				text: 'Guest_id',
				width: 100,
				sortable: true,
				dataIndex: 'guest_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'GuestName',
				width: 100,
				sortable: true,
				dataIndex: 'guestName',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'Account_id',
				width: 100,
				sortable: true,
				dataIndex: 'account_id',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'AccountName',
				width: 100,
				sortable: true,
				dataIndex: 'accountName',
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange: function(selModel, selections){
		this.down('#deleteGuest').setDisabled(selections.length === 0);
	},
	
	onSync : function(){
		this.store.sync();
	},
	
	onDeleteClick : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.store.remove(selection);
		}
	},
	
	onAddClick : function(){
		var rec = new guestModel({
			id: '',
			guest_id: '',
			guestName: '',
			account_id: '',
			accountName: ''
		}),
		edit = this.editing;
		edit.cancelEdit();
		this.store.insert(0, rec);
		edit.startEditByPosition({
			row: 0,
			column: 1
		});
	}
});


//proxyclientandacc form
Ext.define('ProxyClientAndAcc.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.proxyclientandaccform',
	requires : ['Ext.form.field.Text'],
	id : 'proxyclientandaccform',
	initComponent : function() {
		this.addEvents('create');
		Ext.apply(this, {
			activeRecord : null,
			iconCls : 'icon-user',
			frame : true,
			title : '关联代理客户和账户',
			defaultType : 'textfield',
			bodyPadding : 2,
			fieldDefaults : {
				anchor : '100%',
				labelAlign : 'right'
			},
			layout : {
				type : 'table',
				columns : 4
			},
			items : [{
				fieldLabel : 'id',
				name : 'id',
				allowBlank : false,
				width : 240
			}, {
				fieldLabel : 'Account_id',
				xtype : 'combo',
				queryMode : 'local',
				valueField: 'account_id',
				displayField: 'accountName',
				editable: false,
				id: 'account_id',
				name: 'account_id',
				hiddenName: 'haccount_id',
				width: 240,
				store: accountComboStore,
				listeners : {
					select : function(combo, record, index) {
						var val = accountComboStore.getAt(accountComboStore.find('account_id', Ext.getCmp('account_id').value)).get('accountName');
						Ext.getCmp('hiddenAccountName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'AccountName',
				id: 'hiddenAccountName',
				name: 'accountName',
				allowBlank: false,
				width: 240
			}, {
				fieldLabel : 'Guest_id',
				id : 'guest_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'guest_id',
				displayField: 'guestName',
				editable : false,
				name : 'guest_id',
				hiddenName: 'hguest_id',
				allowBlank : false,
				width : 240,
				store : guestComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = guestComboStore.getAt(guestComboStore.find('guest_id', Ext.getCmp('guest_id').value)).get('guestName');
						Ext.getCmp('hiddenGuestName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'GuestName',
				id: 'hiddenGuestName',
				name: 'guestName',
				allowBlank:  false,
				width: 240
			}],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				ui: 'footer',
				items: ['->', {
					iconlCls: 'icon-save',
					itemId: 'saveGuest',
					text: '保存',
					disabled: true,
					scope: this,
					handler: this.onSave
				}, {
					iconCls: 'icon-user-add',
					text: '新建',
					scope: this,
					handler: this.onCreate
				}, {
					iconCls: 'icon-reset',
					text: '重置',
					scope: this,
					handler: this.onReset
				}]
			}]
		});
		this.callParent();
	},
	setActiveRecord: function(record){
		this.activeRecord = record;
		if (record) {
			this.down('#saveGuest').enable();
			this.getForm().loadRecord(record);
		}
		else { 
			this.down('#saveGuest').disable();
			this.getForm().reset();
		}
	},
	onSave: function() {
		var active = this.activeRecord,
		form = this.getForm();
		if (!active) {
			return;
		}
		if (form.isValid()) {
			form.updateRecord(active);
			this.onReset();
		}
	},
	onCreate: function(){
		var form = this.getForm();
		if (form.isValid()){
			this.fireEvent('create', this, form.getValues());
			form.reset();
		}
	},
	onReset: function() {
		this.setActiveRecord(null);
		this.getForm().reset();
	}
});
*/
//component end

