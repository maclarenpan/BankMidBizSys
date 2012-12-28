<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" type="text/css" href="${ctx}/ext-4.0.0/resources/css/ext-all.css"></link>
	<script type="text/javascript" src="${ctx}/ext-4.0.0/ext-all.js"></script>
	<script type="text/javascript">
		Ext.require([
			'Ext.form.*',
			'Ext.layout.container.Column',
			'Ext.tab.Panel'
		]);
		Ext.onReady(function(){
			Ext.QuickTips.init();
			var bd = Ext.getBody();
			var loginPanel = Ext.create('Ext.form.Panel', {
				url: '${ctx}/login/check.action',
				frame: true,
				title: 'Login',
				bodyStyle: 'padding:5px 5px 0',
				width: 400,
				height: 150,
				fieldDefaults: {
					msgTarget: 'side',
					labelWidth: 75
				},
				defaultType: 'textfield',
				defaults: {
					anchor: '100%'
				},
				items: [{
					fieldLabel: 'Username',
					name: 'username',
					allowBlank: false,
					blankText: 'ÓÃ»§Ãû²»ÄÜÎª¿Õ',
					maxLength: 10,
					maxLengthText: '×î´ó³¤¶È²»ÄÜ³¬¹ý10Î»',
					minLength: 3,
					minLengthText: '×îÐ¡³¤¶È²»ÄÜÉÙÓÚ3Î»'
				}, {
					fieldLabel: 'Password',
					name: 'password',
					inputType: 'password',
					allowBlank: false,
					blankText: 'ÃÜÂë²»ÄÜÎª¿Õ',
					maxLength: 10,
					maxLengthText: '×î´ó³¤¶È²»ÄÜ³¬¹ý10Î»',
					minLength: 3,
					minLengthText: '×îÐ¡³¤¶È²»ÄÜÉÙÓÚ3Î»'
				}, {
					fieldLabel: 'ValidateType',
					name: 'validateType',
					allowBlank: false,
					anchor: false,
					width: 200
				}],
				buttons: [{
					text: 'Login',
					formBind: true,
					listeners: {
						'click': function(){
							if (loginPanel.getForm().isValid()){
								loginPanel.getForm().submit({
									url: '${ctx}/login/check.action',
									waitTitle: 'Login',
									waitMsg: 'System is validating your infomation, plx wait...',
									success: function(loginPanel, action){
										window.location.href="pages/main/main.jsp";
									},
									failure: function(loginPanel, action){
										window.location.href="pages/login/login.jsp";
									}
								});
							}
						}
					}
				}, {
					text: 'Reset',
					listeners: {
						'click' : function(){
							loginPanel.getForm().reset();
						}
					}
				}]
			});
			loginPanel.render(Ext.get("loginPanel"));
		})
	</script>
	<style>
           #loginPanel{
	            width:480px;/*(Ò»¶¨ÒªÉèÖÃÕâ¸öÖµ)*/
	            height:320px;/*(Ò»¶¨ÒªÉèÖÃÕâ¸öÖµ)*/
	            margin-left: auto; 
	            margin-right: auto;	
		    text-align:center;
		    vertical-align:middle;
	            /*ÏëÒªÁ½¸ö¹ö¶¯ÌõµÄ»°¾Í°ÑÏÂÃæµÄÈ¥µô*/
	            left:50%;/*FF IE7*/
	            top: 50%;/*FF IE7*/
	            margin-left:-240px!important;/*FF IE7 ¸ÃÖµÎª±¾Éí¿íµÄÒ»°ë(Ò»¶¨ÒªÉèÖÃÕâ¸öÖµ)*/
	            margin-top:-160px!important;/*FF IE7 ¸ÃÖµÎª±¾Éí¸ßµÄÒ»°ë(Ò»¶¨ÒªÉèÖÃÕâ¸öÖµ)*/	
	            margin-top:0px;	        
	            position:fixed!important;/*FF IE7*/
	            position:absolute;/*IE6*/
	            _top:       expression(eval(document.compatMode &&
				document.compatMode=='CSS1Compat') ?
				documentElement.scrollTop + (document.documentElement.clientHeight-this.offsetHeight)/2 :/*IE6*/
				document.body.scrollTop + (document.body.clientHeight - this.clientHeight)/2);/*IE5 IE5.5*/
	          } 
		  form{margin-top:25%!important}
        </style>
</head>
<body>
	<div id="loginPanel"></div>
</body>
</html>