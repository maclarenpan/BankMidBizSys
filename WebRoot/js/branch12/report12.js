	//model start
		Ext.define('reportModel', {
			extend: 'Ext.data.Model',
			fields: [{
				name: 'name', type: 'string'
			}, {
				name: 'data', type: 'string'
			}]
		});
		

		//model end
		
		//store start		
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
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/assertReport.action?method=query',
			reader: {
				type: 'json',
				root: 'assertReport'
			}
		}
	});
	
	var assertIncReportStore = Ext.create('Ext.data.Store', {
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/assertIncReport.action?method=query',
			reader: {
				type: 'json',
				root: 'assertIncReport'
			}
		}
	});
	
	var assertTotalReportStore = Ext.create('Ext.data.Store', {
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/assertTotalReport.action?method=query',
			reader: {
				type: 'json',
				root: 'assertTotalReport'
			}
		}
		
	});
	
	var serviceReportStore = Ext.create('Ext.data.Store', {
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/serviceReport.action?method=query',
			reader: {
				type: 'json',
				root: 'serviceReport'
			}
		}
	});
	
	var serviceTotalReportStore = Ext.create('Ext.data.Store', {
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/serviceTotalReport.action?method=query',
			reader: {
				type: 'json',
				root: 'serviceTotalReport'
			}
		}
	});
	
	var serviceIncReportStore = Ext.create('Ext.data.Store', {
		autoLoad: true,
		model: 'reportModel',
		proxy: {
			type: 'ajax',
			url: 'report/serviceIncReport.action?method=query',
			reader: {
				type: 'json',
				root: 'serviceIncReport'
			}
		}
	});
	
	//store end
	
	//component start
	//资产量表报panel
	var assertReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行资产表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
         animate: true,
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
       }]
	}
	});
	
	//资产增量表报
	var assertIncReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行资产增量表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
        animate: true,
        store: assertIncReportStore,
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
      }]
	}
	});
	
	//资产总量表报panel
	var assertTotalReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行资产总量表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
        animate: false,
        store: assertTotalReportStore,
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
      }]
	}
	});
	
	//业务量表报panel
	var serviceReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行业务量表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
        animate: true,
        store: serviceReportStore,
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
      }]
	}
	});
	
	//银行业务增量表报
	var serviceIncReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行业务增量表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
        animate: true,
        store: serviceIncReportStore,
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
      }]
	}
	});
	
	//银行业务总量表报
	var serviceTotalReportPanel = Ext.create('Ext.form.Panel', {
		 width: 800,
		 height: 350,
		 title: '银行业务总量表报',
		 layout: 'fit',
		 items: {
		 xtype: 'chart',
        animate: true,
        store: serviceTotalReportStore,
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
      }]
	}
	});
	
	//银行资产表报查询panel
	var assertReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行资产表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_assert').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_assert').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_assert').getValue(), 'Y-m');
				var assertType_id = Ext.getCmp('assertType_id_assert').getValue();
				assertReportStore.load({params:{bank_id:bank_id,assertType_id:assertType_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_assert',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_assert',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'AssertType',
				id: 'assertType_id_assert',
				name: 'assertType_id_assert',
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'assertType_id',
				displayField: 'assertTypeName',
				hiddenName: 'hassertType_id',
				editable: false,
				allowBlank: true,
				width: 240,
				store: assertTypeComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_assert',
				name: 'startdate_assert',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_assert',
				name: 'enddate_assert',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//银行资产增量表报查询panel
	var assertIncReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行资产增量表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_assertInc').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_assertInc').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_assertInc').getValue(), 'Y-m');
				var assertType_id = Ext.getCmp('assertType_id_assertInc').getValue();
				assertIncReportStore.load({params:{bank_id:bank_id,assertType_id:assertType_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_assertInc',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_assertInc',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'AssertType',
				id: 'assertType_id_assertInc',
				name: 'assertType_id_assertInc',
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'assertType_id',
				displayField: 'assertTypeName',
				hiddenName: 'hassertType_id',
				editable: false,
				allowBlank: true,
				width: 240,
				store: assertTypeComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_assertInc',
				name: 'startdate_assertInc',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_assertInc',
				name: 'enddate_assertInc',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//银行资产总量表报查询
	var assertTotalReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行资产总量表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_assertTotal').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_assertTotal').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_assertTotal').getValue(), 'Y-m');
				assertTotalReportStore.load({params:{bank_id:bank_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_assertTotal',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_assertTotal',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_assertTotal',
				name: 'startdate_assertTotal',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_assertTotal',
				name: 'enddate_assertTotal',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//银行业务表报查询
	var serviceReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行业务表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_service').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_service').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_service').getValue(), 'Y-m');
				var serviceType_id = Ext.getCmp('serviceType_id_service').getValue();
				serviceReportStore.load({params:{bank_id:bank_id,serviceType_id:serviceType_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_service',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_service',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'Service',
				id: 'serviceType_id_service',
				name: 'serviceType_id_service',
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'serviceType_id',
				displayField: 'serviceTypeName',
				hiddenName: 'hserviceType_id',
				editable: false,
				allowBlank: true,
				width: 240,
				store: serviceTypeComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_service',
				name: 'startdate_service',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_service',
				name: 'enddate_service',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//银行业务增量表报查询panel
	var serviceIncReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行业务增量表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_serviceInc').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_serviceInc').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_serviceInc').getValue(), 'Y-m');
				var serviceType_id = Ext.getCmp('serviceType_id_serviceInc').getValue();
				serviceIncReportStore.load({params:{bank_id:bank_id,serviceType_id:serviceType_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_serviceInc',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_serviceInc',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'ServiceType',
				id: 'serviceType_id_serviceInc',
				name: 'serviceType_id_serviceInc',
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'serviceType_id',
				displayField: 'serviceTypeName',
				hiddenName: 'hserviceType_id',
				editable: false,
				allowBlank: true,
				width: 240,
				store: serviceTypeComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_serviceInc',
				name: 'startdate_serviceInc',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_serviceInc',
				name: 'enddate_serviceInc',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//银行业务总量表报查询panel
	var serviceTotalReportQueryPanel = Ext.create('Ext.form.Panel', {
		frame: true,
		title: '银行业务总量表报查询',
		width: 330,
		height: 350,
		bodyPadding: 5,
		waitMsgTarget: true,
		bbar: [{
			text: '查询',
			handler: function(){
				var bank_id = Ext.getCmp('bank_id_serviceTotal').getValue();
				var startdate = Ext.util.Format.date(Ext.getCmp('startdate_serviceTotal').getValue(), 'Y-m');
				var enddate = Ext.util.Format.date(Ext.getCmp('enddate_serviceTotal').getValue(), 'Y-m');
				serviceTotalReportStore.load({params:{bank_id:bank_id,startdate:startdate,enddate:enddate}});
			}
		}],
		items: [{
			xtype: 'fieldset',
			title: '查询条件',
			defaultType: 'textfield',
			items: [{
				fieldLabel : 'Bank',
				id : 'bank_id_serviceTotal',//id不能少
				xtype: 'combo',
				queryMode: 'local',
				valueField: 'bank_id',
				displayField: 'bankName',
				editable : false,
				name : 'bank_id_serviceTotal',
				hiddenName: 'hbank_id',
				allowBlank : true,
				width : 290,
				store : bankComboStore
			}, {
				fieldLabel: 'startDate',
				id: 'startdate_serviceTotal',
				name: 'startdate_serviceTotal',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}, {
				fieldLabel: 'endDate',
				id: 'enddate_serviceTotal',
				name: 'enddate_serviceTotal',
				xtype: 'datefield',
				format: 'Y-m',
				width: 240
			}]
		}]
	});
	
	//component end