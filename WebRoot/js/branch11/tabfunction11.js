//menu function start
		function onItemClick(item) {
			Ext.MessageBox.alert('Menu Click', 'You clicked the "{0}" menu item.', item.text);
		}
		
		function onItemCheck(item, checked) {
			Ext.MessageBox.alert('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked' : 'unchecked');
		}
		
		function addInnerStaffTab() {
			centerPanel.add({
				title: '内部客户信息管理',
				iconCls: 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		
		function addGuestTab() {
			centerPanel.add({
				title : '客户信息管理',
				iconCls : 'tabs',
				items: [
					//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
					Ext.create('Ext.form.Panel', {
						width: 1100,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [
							{
								itemId : 'grid',
								xtype : 'guestgrid',//这里是根据前面的widget.writegrid
								title : '客户信息列表',
								height : 400,
								store : guestStore,
								listeners : {
									selectionchange : function (selModel, selected) {
									Ext.getCmp('guestForm').setActiveRecord(selected[0] || null);
									}
								}
							}, {
								itemId : 'form',
								xtype : 'guestform',
								height : 200,
								listeners : {
									create : function (form, data) {
										guestStore.insert(0, data);
									}
								}
							}
						]
					})
				],
				closable: true
			}).show();
		};
		
		function addOperatorTab(){
			centerPanel.add({
				title: '操作员信息管理',
				iconCls: 'tabs',
				items: [
				//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
					Ext.create('Ext.form.Panel', {
						width: 1100,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [
							{
								itemId : 'grid',
								xtype : 'writergrid',//这里是根据前面的widget.writegrid
								title : '人员信息列表',
								height : 400,
								store : personStore,
								listeners : {
									selectionchange : function (selModel, selected) {
									//	Ext.Msg.alert("before");
									//	Ext.getCmp('operatorForm').test();
									Ext.getCmp('operatorForm').setActiveRecord(selected[0] || null);
									//	Ext.getCmp('operatorForm').setActiveRecord(selected[0] || null);
										//main.child('#form').setActiveRecord(selected[0] || null);
										//Ext.Msg.alert("after");
									}
								}
							}, {
								itemId : 'form',
								xtype : 'writerform',
								height : 200,
								listeners : {
									create : function (form, data) {
										personStore.insert(0, data);
									}
								}
							}
						]
					})
				],
				closable: true
			}).show();
		};
		
		function addProxyUserTab(){
			centerPanel.add({
				title: '代理用户信息管理',
				iconCls: 'tabs',
				items: [
					//一定要使用 Ext.form.Panel而不要使用Ext.grid.Panel
					Ext.create('Ext.form.Panel', {
						width: 1100,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'vbox',
							align : 'stretch'
						},
						items: [
							{
								itemId : 'grid',
								xtype : 'proxyUserGrid',
								title : '代理用户信息列表',
								height : 400,
								store : proxyUserStore,
								listeners : {
									selectionchange : function (selModel, selected) {
									Ext.getCmp('proxyUserForm').setActiveRecord(selected[0] || null);
									}
								}
							}, {
								itemId : 'form',
								xtype : 'proxyUserForm',
								height : 200,
								listeners : {
									create : function (form, data) {
										proxyUserStore.insert(0, data);
									}
								}
							}
						]
					})
				],
				closable: true
			}).show();
		};
		
		//tab:权限管理
		function addAuthMgmtTab() {
			centerPanel.add({
				title: '权限管理',
				iconCls: 'tabs',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1200,
						height: 800,
						margin: '0 30 30 0',
						layout : {
							type : 'table',
							columns: 2
						},
						items: [{
							items: authTab
						}, {
							items: roleSelGrid
						}, {
							itemId : 'grid',
							xtype : 'authgrid',
							title : '权限列表',
							flex : 1,
							height : 200,
							store : auth1Store,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('authform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'authform',
							height : 200,
							listeners : {
								create : function (form, data) {
									auth1Store.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		
		//tab:角色管理
		function addRoleMgmtTab() {
			centerPanel.add({
				title: '角色管理',
				iconCls: 'tabs',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1200,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'hbox',
							align: 'left'
						},
						items: [{
							itemId : 'grid',
							xtype : 'rolegrid',
							title : '角色列表',
							height : 300,
							width: 550,
							store : roleStore,
							listeners : {
								selectionchange : function (selModel, selected) {
									Ext.getCmp('roleform').setActiveRecord(selected[0] || null);
								}
							}
						}, {
							itemId : 'form',
							xtype : 'roleform',
							height : 300,
							width: 550,
							listeners : {
								create : function (form, data) {
									roleStore.insert(0, data);
								}
							}
						}]
					})
				],
				closable: true
			}).show();
		};
		
		function addOperatorAuthMgmtTab() {
			centerPanel.add({
				title: '个性化权限管理',
				iconCls: 'tabs',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1200,
						height: 800,
						margin: '0 30 30 0',
						layout : {
							type : 'table',
							columns: 2
						},
						items: [{
							items: authTab2
						}, {
							items: operatorSelGrid
						}]
					})
				],
				closable: true
			}).show();
		};
		
		//资产表报查询	
		function addAssertReportTab2() {
			centerPanel.add({
				title: '资产标保查询',
				iconCls: 'tabs',
				items: [
					Ext.create('Ext.form.Panel', {
						width: 1200,
						height: 800,
						margin: '0 0 0 0',
						layout : {
							type : 'hbox',
							align: 'left'
						},
						items: [{
							items: assertReportPanel
						}, {
							items: assertReportQueryPanel
						}]
					})
				],
				closable: true
			}).show();
		};
	
		function addAssertIncReportTab() {
			centerPanel.add({
				title: '银行资产增量表报',
				iconCls: 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		
		function addServiceReportTab() {
			centerPanel.add({
				title: '银行业务量表报',
				iconCls: 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		
		function addServiceIncReportTab() {
			centerPanel.add({
				title: '银行业务增量表报',
				iconCls: 'tabs',
				items: [
					
				],
				closable: true
			}).show();
		};
		//tabpanel end