//引入其他的js
new1=document.createElement("script");  
new1.setAttribute("type","text/javascript");  
new1.setAttribute("src","store11.js");// 在这里引入了a.js  
var assertReportPanel = Ext.create('Ext.form.Panel', {
			 width: 800,
        height: 350,
        title: '银行资产表报',
        layout: 'fit',
        items: {
            xtype: 'chart',
            animate: false,
            store: assertReportStore,
            insetPadding: 30,
            gradients: [{
              angle: 90,
              id: 'bar-gradient',
              stops: {
                  0: {
                      color: '#99BBE8'
                  },
                  70: {
                      color: '#77AECE'
                  },
                  100: {
                      color: '#77AECE'
                  }
              }
            }],
            axes: [{
                type: 'Numeric',
                minimum: 0,
                maximum: 100,
                position: 'left',
                fields: ['data'],
                title: false,
                grid: true,
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0'),
                    font: '10px Arial'
                }
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: false,
                grid: true,
                label: {
                    font: '11px Arial',
                    renderer: function(name) {
                        return name.substr(0, 3);
                    }
                }
            }],
            series: [{
                type: 'column',
                axis: 'left',
                xField: 'name',
                yField: 'data',
                style: {
                    fill: 'url(#bar-gradient)',
                    'stroke-width': 3
                },
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0,
                    fill: '#38B8BF',
                    stroke: '#38B8BF'
                }
            }, {
                type: 'line',
                axis: 'left',
                xField: 'name',
                yField: 'data',
                tips: {
                    trackMouse: true,
                    width: 110,
                    height: 25,
                    renderer: function(storeItem, item) {
                        this.setTitle(storeItem.get('data') + ' visits in ' + storeItem.get('name').substr(0, 3));
                    }
                },
                style: {
                    fill: '#18428E',
                    stroke: '#18428E',
                    'stroke-width': 3
                },
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0,
                    fill: '#18428E',
                    stroke: '#18428E'
                }
            }]
        }
		});
		
		var assertReportQueryPanel = Ext.create('Ext.form.Panel', {
			frame: true,
			title: '银行资产表报查询',
			width: 400,
			height: 350,
			bodyPadding: 5,
			waitMsgTarget: true,
			bbar: [{
				text: '查询',
				handler: function(){
					var bank_id = Ext.getCmp('bank_id').getValue();
					var startdate = Ext.util.Format.date(Ext.getCmp('startdate').getValue(), 'Y-m');
					var enddate = Ext.util.Format.date(Ext.getCmp('enddate').getValue(), 'Y-m');
					assertReportStore.load({params:{bank_id:bank_id,startdata:startdate,enddate:enddate}});
				}
			}],
		/*	reader : {
				type : 'json',
				root : 'reportData',
				messageProperty : 'message'
			},
			*/
			items: [{
				xtype: 'fieldset',
				title: 'bankAssertReportQuery',
				defaultType: 'textfield',
				items: [{
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
					width : 290,
					store : bankComboStore
				}, {
					fieldLabel: 'startDate',
					id: 'startdate',
					name: 'enddate',
					xtype: 'datefield',
					format: 'Y-m',
					width: 240
				}, {
					fieldLabel: 'endDate',
					id: 'enddate',
					name: 'enddate',
					xtype: 'datefield',
					format: 'Y-m',
					width: 240
				}]
			}]
			
		})