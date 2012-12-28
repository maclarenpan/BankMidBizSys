//model start		
Ext.define('assertTypeModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'assertType_id', type: 'string'
	}, {
		name: 'assertTypeName', type: 'string'
	}]
});

//serviceyield model
Ext.define('serviceYieldModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'bank_id', type: 'int'
	}, {
		name: 'bankName', type: 'string'
	}, {
		name: 'service_id', type: 'int'
	}, {
		name: 'serviceName', type: 'string'
	}, {
		name: 'percent', type: 'float'
	}, {
		name: 'amount', type: 'float'
	}]
});

//exchange rate model
Ext.define('exchangeRateModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'currencyType1_id', type: 'int'
	}, {
		name: 'currencyType2_id', type: 'int'
	}, {
		name: 'rate', type: 'float'
	}]
});
//account model
Ext.define('AccountModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'accountType_id', type: 'int'
	}, {
		name: 'username', type: 'string'
	}, {
		name: 'password', type: 'string'
	}, {
		name: 'bank_id', type: 'int'
	}, {
		name: 'modifytime', type: 'string'
	}]
});
Ext.define('BankTotalAmountModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'currencyType_id', type: 'int'
	}, {
		name: 'bank_id', type: 'int'
	}, {
		name: 'amount', type: 'int'
	}, {
		name: 'modifytime', type: 'string'
	}]
});


Ext.define('currencyTypeComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'currencyType_id', type: 'int'
	}, {
		name: 'currencyTypeName', type: 'string'
	}]
});



//model end
//store start
var assertTypeComboStore = new Ext.data.Store({
	fields: ['assertType_id', 'assertTypeName'],
	data: [{
		"assertType_id": "1", "assertTypeName": "抵押资产"
	}, {
		"assertType_id": "2", "assertTypeName": "固定资产"
	}, {
		"assertType_id": "3", "assertTypeName": "风险资产"
	}, {
		"assertType_id": "4", "assertTypeName": "控股资产"
	}]
});

//currency type combo store
var currencyTypeComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'currencyTypeComboModel',
	proxy: {
		type: 'ajax',
		url: 'acc/currencyTypeCombo.action',
		reader: {
			type: 'json',
			root: 'currencyTypeCombos'
		}
	}
});
currencyTypeComboStore.load();
/*
var currencyTypeComboStore = new Ext.data.Store({
	fields: ['currencyType_id', 'currencyTypeName'],
	data: [{
		"currencyTypeid": "1", "currencyTypeName": "人民币"
	}, {
		"currencyType_id": "2", "currencyTypeName": "美元"
	}, {
		"currencyType_id": "3", "currencyTypeName": "英镑"
	}, {
		"currencyType_id": "4", "currencyTypeName": "日元"
	}, {
		"currencyType_id": "5", "currencyTypeName": "欧元"
	}]
});
*/
Ext.define('accountComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'account_id', type: 'int'
	}, {
		name: 'accountName', type: 'string'
	}]
});
Ext.define('accountTypeComboModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'accountType_id', type: 'int'
	}, {
		name: 'accountTypeName', type: 'string'
	}]
});
var accountTypeComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'accountTypeComboModel',
	proxy: {
		type: 'ajax',
		url: 'acc/accountTypeCombo.action',
		reader: {
			type: 'json',
			root: 'accountTypeCombos'
		}
	}
});
accountTypeComboStore.load();
var accountComboStore = new Ext.data.Store({
	autoLoad: true,
	model: 'accountComboModel',
	proxy: {
		type: 'ajax',
		url: 'acc/accountCombo.action',
		reader: {
			type: 'json',
			root: 'accountcombos'
		}
	}
});
accountComboStore.load();
/*
var accountTypeComboStore = new Ext.data.Store({
	fields: ['accountType_id', 'accountTypeName'],
	data: [{
		"accountType_id": "1", "accountTypeName": "common"
	}, {
		"accountType_id": "2", "accountTypeName": "senior"
	}, {
		"accountType_id": "3", "accountTypeName": "jonior"
	}, {
		"accountType_id": "4", "accountTypeName": "super"
	}]
});

//account combo store
var accountComboStore = new Ext.data.Store({
	fields: ['account_id', 'accountName'],
	data: [{
		"account_id": "1", "accountName": "davinch"
	}, {
		"account_id": "2", "accountName": "benduovi"
	}, {
		"account_id": "3", "accountName": "bruno"
	}, {
		"account_id": "4", "accountName": "gosla"
	}, {
		"account_id": "5", "accountName": "engos"
	}]
});
*/
//proxyuser combo store
/*
var proxyUserComboStore = new Ext.data.Store({
	fields: ['proxyUser_id', 'proxyUserName'],
	data: [{
		"proxyUser_id": "1", "proxyUserName": "lenardo"
	}, {
		"proxyUser_id": "2", "proxyUserName": "bruno"
	}, {
		"proxyUser_id": "3", "proxyUserName": "meisi"
	}, {
		"proxyUser_id": "4", "proxyUserName": "burce"
	}, {
		"proxyUser_id": "5", "proxyUserName": "apache"
	}]
});
*/

//serviceyield store
var serviceYieldStore = Ext.create('Ext.data.Store', {
	model : 'serviceYieldModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/serviceYield.action?method=getAll',
			create : 'acc/serviceYield.action?method=insert',
			update : 'acc/serviceYield.action?method=update',
			destroy : 'acc/serviceYield.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'serviceyields',
			totalProperty: 'totalCount',
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
			Ext.example.msg(operation.action, operation.resultSet.message);
		}
	}
});

//汇率store
var exchangeRateStore = Ext.create('Ext.data.Store', {
	model : 'exchangeRateModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/exchangeRate.action?method=getAll',
			create : 'acc/exchangeRate.action?method=insert',
			update : 'acc/exchangeRate.action?method=update',
			destroy : 'acc/exchangeRate.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'exchangerates',
			totalProperty: 'totalCount',
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
				Ext.Msg.alert("提示", "删除成功");
			}
			Ext.example.msg(operation.action, operation.resultSet.message);
		}
	}
});

//account store
var accountStore = Ext.create('Ext.data.Store', {
	model : 'AccountModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/account.action?method=getAll',
			create : 'acc/account.action?method=insert',
			update : 'acc/account.action?method=update',
			destroy : 'acc/account.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'accounts',
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



//account store
var bankTotalAmountStore = Ext.create('Ext.data.Store', {
	model : 'BankTotalAmountModel',
	autoLoad : true,
	autoSync : false,
	proxy : {
		type : 'ajax',
		api : {
			read : 'acc/bankTotalAmount.action?method=getAll',
			create : 'acc/bankTotalAmount.action?method=insert',
			update : 'acc/bankTotalAmount.action?method=update',
			destroy : 'acc/bankTotalAmount.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'banktotalamounts',
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
//service yield grid

Ext.define('ServiceYield.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.serviceyieldgrid',
	id: 'serviceyieldgrid',
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
					store :serviceYieldStore, 
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{
					text : 'id',
					hidden : true,
					width : 40,
					sortable : true,
					dataIndex : 'id'
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
						hiddenName: 'hbank_id',
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
				}, {
					header: 'Percent',
					width: 100,
					sortable: true,
					dataIndex: 'percent',
					field: {
						type: 'textfield'
					}
				}, {
					header: 'Amount',
					width: 100,
					sortable: true,
					dataIndex: 'amount',
					field: {
						type: 'textfield'
					}
				}
			]
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
		var rec = new serviceYieldStore({
				id : '',
				bank_id : '',
				service_id: '',
				percent: '',
				amount: ''
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

//service yield query panel

var serviceYieldQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '业务费率查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var bank_id = Ext.getCmp('bank_id_query').getValue();
			var service_id = Ext.getCmp('service_id_query').getValue();
			serviceYieldStore.load({url:'acc/serviceYield.action?method=getByConditions', params:{bank_id:bank_id,service_id:service_id}});
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
			fieldLabel : 'Bank',
			id : 'bank_id_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'bank_id',
			displayField: 'bankName',
			editable : false,
			name : 'bank_id_query',
			hiddenName: 'hbank_id_query',
			allowBlank : true,
			width : 240,
			store : bankComboStore
		}, {
			fieldLabel : 'Service',
			id : 'service_id_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'service_id',
			displayField: 'serviceName',
			editable : false,
			name : 'service_id_query',
			hiddenName: 'hservice_id_query',
			allowBlank : true,
			width : 240,
			store : serviceComboStore
		}]
	}, {
		
	}]
});

//exchange rate grid
Ext.define('ExchangeRate.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.exchangerategrid',
	id: 'exchangerategrid',
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
							pressed : true,
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
					store :authStore, 
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{//currencyTypeComboStore
					text : 'id',
					hidden : true,
					width : 40,
					sortable : true,
					dataIndex : 'id'
				}, {
					header : 'CurrencyType1',
					width : 100,
					sortable : true,
					dataIndex : 'currencyType1_id',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: currencyTypeComboStore,
						mode: 'local',
						valueField: 'currencyType_id',
						displayField: 'currencyTypeName',
						hiddenName: 'hcurrencyType1_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record) {
						var index = currencyTypeComboStore.find('currencyType_id', value);
						if (index != -1) {
							return currencyTypeComboStore.getAt(index).data.currencyTypeName;
						}
						return value;
					}
				}, {
					header : 'CurrencyType2',
					width : 100,
					sortable : true,
					dataIndex : 'currencyType2_id',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: currencyTypeComboStore,
						mode: 'local',
						valueField: 'currencyType_id',
						displayField: 'currencyTypeName',
						hiddenName: 'hcurrencyType2_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record) {
						var index = currencyTypeComboStore.find('currencyType_id', value);
						if (index != -1) {
							return currencyTypeComboStore.getAt(index).data.currencyTypeName;
						}
						return value;
					}
				}, {
					header: 'Rate',
					width: 100,
					sortable: true,
					dataIndex: 'rate',
					field: {
						type: 'textfield'
					}
				}
			]
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
		var rec = new authModel({
				id : '',
				currencyType1_id : '',
				currencyType2_id: '',
				rate: ''
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
//exchange rate query panel
var exchangeRateQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '汇率查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var currencyType1_id = Ext.getCmp('currencyType1_id_query').getValue();
			var currencyType2_id = Ext.getCmp('currencyType2_id_query').getValue();
			exchangeRateStore.load({url:'acc/exchangeRate.action?method=getByConditions', params:{currencyType1_id:currencyType1_id,currencyType2_id:currencyType2_id}});
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
			columns: 2
		},
		items: [{
			fieldLabel: 'CurrencyType1',
			id: 'currencyType1_id_query',
			name: 'currencyType1_id_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'id',
			displayField: 'currencyName',
			hiddenName: 'hcurrencyType1_id_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: currencyTypeComboStore,
			mode: 'local'
		}, {
			fieldLabel: 'CurrencyType2',
			id: 'currencyType2_id_query',
			name: 'currencyType2_id_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'id',
			displayField: 'currencyName',
			hiddenName: 'hcurrencyType2_id_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: currencyTypeComboStore,
			mode: 'local'
		}]
	}]
});
//account grid
Ext.define('Account.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.accountgrid',
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
					pressed: false,
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
				store: accountStore,
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
				header: 'AccountType',
				width: 100,
				dataIndex: 'accountType_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: accountTypeComboStore,
					mode: 'local',
					valueField: 'accountType_id',
					displayField: 'accountTypeName',
					hiddenName: 'haccountType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = accountTypeComboStore.find('accountType_id', value);
					if (index != -1)
					{
						return accountTypeComboStore.getAt(index).data.accountTypeName;
					}
					return value;
				}
			}, {
				text: 'Username',
				width: 100,
				sortable: true,
				dataIndex: 'username',
				field: {
					type: 'textfield'
				}
			}, {
				text: 'Password',
				width: 100,
				sortable: true,
				dataIndex: 'password',
				field: {
					type: 'textfield'
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
					hiddenName: 'hbank_id',
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
				text: 'ModifyTime',
				width: 100,
				sortable: true,
				dataIndex: 'modifytime',
				renderer: Ext.util.Format.dateRenderer('Y-m-d'),
				field: {
					type: 'textfield'
				}
			}]
		});
		this.callParent();
		this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
	},
	
	onSelectChange: function(selModel, selections){
		this.down('#delete').setDisabled(selections.length === 0);
	},
	
	onSync : function(){
		this.store.sync();
		this.store.load();
	},
	
	onDeleteClick : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.store.remove(selection);
		}
	},
	
	onAddClick : function(){
		var rec = new AccountModel({
			id: '',
			accountType_id: '',
			username: '',
			password: '',
			bank_id: '',
			modifytime: new Date()
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

//account query panel
var accountQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '账户查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var bank_id = Ext.getCmp('bank_id_account_query').getValue();
			var accountType_id = Ext.getCmp('accountType_id_account_query').getValue();
			var username = Ext.getCmp("username_account_query").getValue();
			accountStore.load({url:'acc/account.action?method=getByConditions', params:{bank_id: bank_id, accountType_id: accountType_id, username: username}});
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
			fieldLabel : 'Bank',
			id : 'bank_id_account_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'bank_id',
			displayField: 'bankName',
			editable : false,
			name : 'bank_id_account_query',
			hiddenName: 'hbank_id_account_query',
			allowBlank : true,
			width : 240,
			store : bankComboStore
		}, {
			fieldLabel: 'AccountType',
			id: 'accountType_id_account_query',
			name: 'accountType_id_account_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'accountType_id',
			displayField: 'accountTypeName',
			hiddenName: 'haccountType_id_account_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: accountTypeComboStore
		}, {
			fieldLabel: 'Username',
			id: 'username_account_query',
			name: 'username_account_query',
			xtype: 'textfield',
			width: 240
		}]
	}, {
		
	}]
});




//banktotalamount grid
Ext.define('BankTotalAmount.Grid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.banktotalamountgrid',
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
				store: bankTotalAmountStore,
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
				header: 'CurrencyType',
				width: 100,
				dataIndex: 'currencyType_id',
				editor: {
					xtype: 'combobox',
					typeAhead: true,
					triggerAction: 'all',
					selectOnTab: true,
					store: currencyTypeComboStore,
					mode: 'local',
					valueField: 'currencyType_id',
					displayField: 'currencyTypeName',
					hiddenName: 'hcurrencyType_id',
					listClass: 'x-combo-list-small'
				},
				renderer: function(value, cellmeta, record){
					var index = currencyTypeComboStore.find('currencyType_id', value);
					if (index != -1)
					{
						return currencyTypeComboStore.getAt(index).data.currencyTypeName;
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
			}, {
				text: 'ModifyTime',
				width: 100,
				sortable: true,
				dataIndex: 'modifytime',
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

//bank total amount query panel
var BankTotalAmountQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '银行金额查询',
	width: 1100,
	height: 150,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var bank_id = Ext.getCmp('bank_id_bankTotalAmount_query').getValue();
			bankTotalAmountStore.load({url:'acc/bankTotalAmount.action?method=getByConditions', params:{bank_id: bank_id}});
		}
	}, {
		text: '全部查询',
		handler: function(){
		bankTotalAmountStore.load({url:'acc/bankTotalAmount.action?method=getAll'});
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
			fieldLabel : 'Bank',
			id : 'bank_id_bankTotalAmount_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'bank_id',
			displayField: 'bankName',
			editable : false,
			name : 'bank_id_bankTotalAmount_query',
			hiddenName: 'hbank_id_bankTotalAmount_query',
			allowBlank : true,
			width : 240,
			store : bankComboStore
		}]
	}, {
		
	}]
});

/*

//account form
Ext.define('Account.Form', {
	extend : 'Ext.form.Panel',
	alias : 'widget.accountform',
	requires : ['Ext.form.field.Text'],
	id : 'accountform',
	initComponent : function() {
		this.addEvents('create');
		Ext.apply(this, {
			activeRecord : null,
			iconCls : 'icon-user',
			frame : true,
			title : '添加账户',
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
				fieldLabel : 'AccountType_id',
				xtype : 'combo',
				queryMode : 'local',
				valueField: 'accountType_id',
				displayField: 'accountTypeName',
				editable: false,
				id: 'accountType_id',
				name: 'accountType_id',
				hiddenName: 'haccountType_id',
				width: 240,
				store: accountTypeComboStore,
				listeners : {
					select : function(combo, record, index) {
						var val = accountTypeComboStore.getAt(accountTypeComboStore.find('accountType_id', Ext.getCmp('accountType_id').value)).get('accountTypeName');
						Ext.getCmp('hiddenAccountTypeName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'AccountType',
				id: 'hiddenAccountTypeName',
				name: 'accountTypeName',
				allowBlank: false,
				width: 240
			}, {
				fieldLabel: 'Username',
				name: 'username',
				allowBlank: true,
				width: 240
			}, {
				fieldLabel: 'Password',
				name: 'password',
				allowBlank: true,
				width: 240
			}, {
				fieldLabel : 'Bank',
				id : 'bank_id',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id',
				hiddenName: 'hbank_id',
				allowBlank : false,
				width : 240,
				store : bankComboStore,
				//联动根据下拉框设置隐藏域
				listeners : {
					select : function(combo, record, index){
						var val = bankComboStore.getAt(bankComboStore.find('bank_id', Ext.getCmp('bank_id').value)).get('bankName');
						Ext.getCmp('hiddenBankName').setValue(val);
					}
				}
			}, {
				fieldLabel: 'BankName',
				id: 'hiddenBankName',
				name: 'bankName',
				allowBlank:  false,
				width: 240
			}, {
				fieldLabel : 'ModifyTime',
				hidden : true,
				format: 'Y-m-d H:i:s',
				editable : false,
				name : 'modifytime',
				renderer: Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
				allowBlank : true,
				value : new Date(),
				width : 0		
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