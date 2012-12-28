//引用其他的js
new1=document.createElement("script");  
new1.setAttribute("type","text/javascript");  
new1.setAttribute("src","store11.js");// 在这里引入了a.js  

  
 document.body.appendChild(new_element);  

//角色grid
		Ext.define('Role.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.rolegrid',
			id: 'rolegrid',
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
							store : personStore, 
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'Id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'role_id'
						}, {
							header : 'RoleName',
							width : 100,
							sortable : true,
							dataIndex : 'roleName',
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
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new roleModel({
						role_id : '',
						roleName : ''
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
		
		//权限form
		Ext.define('Auth.Form', {
			extend : 'Ext.form.Panel',
			alias : 'widget.authform',
			requires : ['Ext.form.field.Text'],
			id : 'roleform',
			initComponent : function () {
				this.addEvents('create');
				Ext.apply(this, {
					activeRecord : null,
					iconCls : 'icon-user',
					frame : true,
					title : '添加权限',
					defaultType : 'textfield',
					bodyPadding : 2,
					fieldDefaults : {
						anchor : '100%',
						labelAlign : 'right'
					},
					layout : {
						type : 'table',
						columns: 2
					},
					items : [ {
							fieldLabel : 'AuthCode',
							name : 'authCode',
							allowBlank : false, 
							width : 240
						}, {
							fieldLabel: 'AuthName',
							name: 'authName',
							allowBlank: false,
							width: 240
						}, {
							fieldLabel: 'Auth_id',
							name: 'auth_id',
							hidden: true
						}
					],
					dockedItems : [{
							xtype : 'toolbar',
							dock : 'bottom',
							ui : 'footer',
							items : ['->', {
									iconCls : 'icon-save',
									itemId : 'save',
									text : '保存',
									disabled : true,
									scope : this,
									handler : this.onSave
								}, {
									iconCls : 'icon-user-add',
									text : '新建',
									scope : this,
									handler : this.onCreate
								}, {
									iconCls : 'icon-reset',
									text : '重置',
									scope : this,
									handler : this.onReset
								}
							]
						}
					]
				});
				this.callParent();
			},
			
			setActiveRecord : function (record) {
				this.activeRecord = record;
				if (record) {
					this.down('#save').enable();
					this.getForm().loadRecord(record);
				} else {
					this.down('#save').disable();
					this.getForm().reset();
				}
			},
			
			onSave : function () {
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
			
			onCreate : function () {
				var form = this.getForm();
				if (form.isValid()) {
					this.fireEvent('create', this, form.getValues());
					form.reset();
				}
			},
			
			onReset : function () {
				this.setActiveRecord(null);
				this.getForm().reset();
			}
		});
		
		//权限grid
		Ext.define('Auth.Grid', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.authgrid',
			id: 'rolegrid',
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
							store :authStore, 
							dock : 'bottom',
							displayInfo : true
						}
					],
					columns : [{
							text : 'Auth_id',
							hidden : true,
							width : 40,
							sortable : true,
							dataIndex : 'auth_id'
						}, {
							header : 'AuthCode',
							width : 100,
							sortable : true,
							dataIndex : 'authCode',
							field : {
								type : 'textfield'
							}
						}, {
							header: 'AuthName',
							width: 100,
							sortable: true,
							dataIndex: 'authName',
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
			},
			
			onDeleteClick : function () {
				var selection = this.getView().getSelectionModel().getSelection()[0];
				if (selection) {
					this.store.remove(selection);
				}
			},
			
			onAddClick : function () {
				var rec = new authModel({
						auth_id : '',
						authCode : '',
						authName : ''
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
		
		
		var forwardAuthGrid = Ext.create('Ext.grid.Panel', {
			store: authStore,
			selModel: sm2,
			columns: [{
				text: 'authCode',
				dataIndex : 'authCode'
            }, {
            	text : 'authName',
            	flex: 1,
            	dataIndex : 'authName'
            }],
            fbar : ['->',{
            	text:'Add',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					alert("add forwardAuth");
            	}
        	}],
			columnLines: true,
			width: 500,
			height: 475,
			frame: true,
			iconCls: 'icon-grid',
		});
		

		
		var reverseAuthGrid = Ext.create('Ext.grid.Panel', {
			store: authStore,
			selModel: sm3,
			columns: [{
				text: 'authCode',
				dataIndex : 'authCode'
            }, {
            	text : 'authName',
            	flex : 1,
            	dataIndex : 'authName'
            }],
           	fbar : ['->',{
            	text:'Add',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					alert("add ReverseAuth");
            	}
        	}],
			width: 500,
			height: 475,
			frame: true,
			iconCls: 'icon-grid',
		});	
		
		
		var authTab = Ext.create('Ext.tab.Panel', {
			alias: 'widget.authTab',
			width: 500,
			height: 400,
			boder: false,
			bodyBorder: false,
			defaults: {
				anchor: '100%'
			},
			items:[{
				title: '添加正向权限',
				items:forwardAuthGrid
			}, {
				title: '添加反向权限',
				items:reverseAuthGrid
			}]
		});
		
		var authTab2 = Ext.create('Ext.tab.Panel', {
			alias: 'widget.authTab',
			width: 500,
			height: 500,
			boder: false,
			bodyBorder: false,
			defaults: {
				anchor: '100%'
			},
			items:[{
				title: '添加正向权限',
				items:forwardAuthGrid
			}]
		});


		var groupingFeature = Ext.create('Ext.grid.feature.Grouping',{
			groupHeaderTpl: '{name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
		});
		
		var roleSelGrid = Ext.create('Ext.grid.Panel', {
        	collapsible: true,
        	iconCls: 'icon-grid',
        	frame: true,
			selModel: sm1,
        	store: authStore,
        	width: 600,
        	height: 400,
        	title: 'roleSelection',
        	features: [groupingFeature],
        	columns: [{
        	    text: 'authCode',
        	    flex: 1,
        	    dataIndex: 'authCode'
       	 	},{
         	   text: 'authName',
         	   flex: 1,
         	   dataIndex: 'authName'
        	}],
        	tbar: [{
        		fieldLabel: '角色',
        		xtype: 'textfield',
        		width: 300
        	}, {
        		text: '查询'
        	}],
        	fbar  : ['->',{
            	text:'Delete',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					var selModel = roleSelGrid.getSelectionModel()
					if (selModel.hasSelection()){
						var selections = selModel.getSelection();
						Ext.each(selections, function(item){
							authStore.remove(item);
						});
					}
            	}
        	}]
    	});
    	
    	var operatorSelGrid = Ext.create('Ext.grid.Panel', {
        	collapsible: true,
        	iconCls: 'icon-grid',
        	frame: true,
			selModel: sm4,
        	store: authStore,
        	width: 600,
        	height: 400,
        	title: 'roleSelection',
        	features: [groupingFeature],
        	columns: [{
        	    text: 'authCode',
        	    flex: 1,
        	    dataIndex: 'authCode'
       	 	},{
         	   text: 'authName',
         	   flex: 1,
         	   dataIndex: 'authName'
        	}],
        	tbar: [{
        		fieldLabel: '操作员',
        		xtype: 'textfield',
        		width: 300
        	}, {
        		text: '查询'
        	}],
        	fbar  : ['->',{
            	text:'Delete',
            	iconCls: 'icon-clear-group',
            	handler : function(){
					var selModel = roleSelGrid.getSelectionModel()
					if (selModel.hasSelection()){
						var selections = selModel.getSelection();
						Ext.each(selections, function(item){
							authStore.remove(item);
						});
					}
            	}
        	}]
    	});