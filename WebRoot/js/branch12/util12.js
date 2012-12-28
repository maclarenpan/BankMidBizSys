//model start
//unit model
Ext.define('unitModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: "unit_id", type: 'int'
	}, {
		name: "unitName", type: 'string'
	}]
});
//unit2unit model
Ext.define('unit2unitModel', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id', type: 'int'
	}, {
		name: 'unit1_id', type: 'int'
	}, {
		name: 'unit2_id', type: 'int'
	}, {
		name: 'rate', type: 'float'
	}]
});
//model end
//store start
//unit combo store
var unitComboStore1 = Ext.create('Ext.data.Store', {
	fields: ['unit1_id', 'unit1Name'],
	data: [{
		"unit1_id": "1", "unit1Name": "分"
	}, {
		"unit1_id": "2", "unit1Name": "角"
	}, {
		"unit1_id": "3", "unit1Name": "元"
	}, {
		"unit1_id": "4", "unit1Name": "美分"
	}, {
		"unit1_id": "5", "unit1Name": "美元"
	}]
});

var unitComboStore2 = Ext.create('Ext.data.Store', {
	fields: ['unit2_id', 'unit2Name'],
	data: [{
		"unit2_id": "1", "unit2Name": "分"
	}, {
		"unit2_id": "2", "unit2Name": "角"
	}, {
		"unit2_id": "3", "unit2Name": "元"
	}, {
		"unit2_id": "4", "unit2Name": "美分"
	}, {
		"unit2_id": "5", "unit2Name": "美元"
	}]
});

var unitComboStore = Ext.create('Ext.data.Store', {
	autoLoad: true,
	model: 'unitComboModel',
	proxy: {
		type: 'ajax',
		url: 'util/unitCombo.action',
		reader: {
			type: 'json',
			root: 'unitCombos'
		}
	}
});
unitComboStore.load();
//unit store
var unitStore = Ext.create('Ext.data.Store', {
	model : 'unitModel',
	autoLoad : true,
	autoSync : false,
	totalProperty: 'totalCount',
	pageSize: 10,
	proxy : {
		type : 'ajax',
		api : {
			read : 'util/unit.action?method=getAll',
			create : 'util/unit.action?method=insert',
			update : 'util/unit.action?method=update',
			destroy : 'util/unit.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'units',
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

//unit2unit store
var unit2unitStore = Ext.create('Ext.data.Store', {
	model : 'unit2unitModel',
	autoLoad : true,
	autoSync : false,
	totalProperty: 'totalCount',
	pageSize: 10,
	proxy : {
		type : 'ajax',
		api : {
			read : 'util/unit2unit.action?method=getAll',
			create : 'util/unit2unit.action?method=insert',
			update : 'util/unit2unit.action?method=update',
			destroy : 'util/unit2unit.action?method=delete'
		},
		reader : {
			type : 'json',
			root : 'unit2units',
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
//store end

//component start

//unit grid
Ext.define('Unit.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.unitgrid',
	id: 'unitgrid',
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
					store :unitStore, 
					emptyMsg: '没有数据',
					pageSize: 10,
					dock : 'bottom',
					displayInfo : true
				}
			],
			columns : [{
					text : 'Unit_id',
					hidden : true,
					width : 40,
					sortable : true,
					dataIndex : 'unit_id'
				}, {
					header : 'UnitName',
					width : 100,
					sortable : true,
					dataIndex : 'unitName',
					field : {
						type : 'textfield'
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
		var rec = new unitStore({
				unit_id : '',
				unitName : ''
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
//unit query panel
var unitQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '单位查询',
	width: 1100,
	height: 250,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var unitName = Ext.getCmp('unitName_query').getValue();
			unitStore.load({url:'util/unit.action?method=getByConditions', params:{unitName: unitName}});
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
			fieldLabel: 'Unit',
			id: 'unitName_query',
			name: 'unitName_query',
			xtype: 'textfield',
			width: 240
		}]
	}, {
		
	}]
});

//unit2unit grid
Ext.define('Unit2unit.Grid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.unit2unitgrid',
	id: 'unit2unitgrid',
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
					store :unit2unitStore,
					totalProperty: 'totalCount',
					pageSize: 10,
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
				},  {
					header: 'Unit1',
					width: 100,
					dataIndex: 'unit1',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: unitComboStore,
						mode: 'local',
						valueField: 'unit_id',
						displayField: 'unitName',
						hiddenName: 'hunit1_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record){
						var index = unitComboStore.find('unit_id', value);
						if (index != -1)
						{
							return unitComboStore.getAt(index).data.unitName;
						}
						return value;
					}
				},  {
					header: 'Unit2',
					width: 100,
					dataIndex: 'unit2',
					editor: {
						xtype: 'combobox',
						typeAhead: true,
						triggerAction: 'all',
						selectOnTab: true,
						store: unitComboStore,
						mode: 'local',
						valueField: 'unit_id',
						displayField: 'unitName',
						hiddenName: 'hunit1_id',
						listClass: 'x-combo-list-small'
					},
					renderer: function(value, cellmeta, record){
						var index = unitComboStore.find('unit_id', value);
						if (index != -1)
						{
							return unitComboStore.getAt(index).data.unitName;
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
				unit1_id : '',
				unit2_id: '',
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


//unit2unit query panel
var unit2unitQueryPanel = Ext.create('Ext.form.Panel', {
	frame: true,
	title: '单位转换查询',
	width: 1100,
	height: 350,
	bodyPadding: 5,
	waitMsgTarget: true,
	bbar: [{
		text: '查询',
		handler: function(){
			var username = Ext.getCmp('unit1_id_query').getValue();
			var userType_id = Ext.getCmp('unit2_id_query').getValue();
			operatorStore.load({url:'util/unit2unit.action?method=getByConditions', params:{username:username,userType_id:userType_id,role_id:role_id,status_id:status_id,starttime:starttime,endtime:endtime}});
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
			fieldLabel : 'Unit1',
			id : 'unit1_id_query',//id不能少
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'unit_id',
			displayField: 'unitName',
			editable : false,
			name : 'unit1_id_query',
			hiddenName: 'hunit1_id_query',
			allowBlank : true,
			width : 240,
			store : unitComboStore
		}, {
			fieldLabel: 'Unit2',
			id: 'unit2_id_query',
			name: 'unit2_id_query',
			xtype: 'combo',
			queryMode: 'local',
			valueField: 'unit_id',
			displayField: 'unitName',
			hiddenName: 'hunit2_id_query',
			editable: false,
			allowBlank: true,
			width: 240,
			store: unitComboStore
		}]
	}, {
		
	}]
});

//component end