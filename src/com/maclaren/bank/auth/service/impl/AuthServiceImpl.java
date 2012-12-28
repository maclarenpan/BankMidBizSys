package com.maclaren.bank.auth.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.auth.dao.AuthDAO;
import com.maclaren.bank.auth.service.AuthService;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;

@Service
public class AuthServiceImpl implements AuthService
{
	
	private AuthDAO authDao;
	
	@Autowired
	public void setAuthDao(AuthDAO authDao)
	{
		this.authDao = authDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public String queryAllAuth() 
	{
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(authDao.getAllAuth()), 
				"auth");
	}

	public int delAuth4Role(String authIds, String role_id) 
	{
		// TODO Auto-generated method stub
		for (int i = 0; i < authIds.split("@_@").length; i++)
		{
			authDao.delAuth4Role(authIds.split("@_@")[i], role_id);
		}
		return Constants.AUTH_ROLE_DEL_SUCC;
	}

	public int addAuth2Role(String authIds, String role_id) 
	{
		// TODO Auto-generated method stub
		for (int i = 0; i < authIds.split("@_@").length; i++)
		{
			String auth_id = authIds.split("@_@")[i];
			if (authDao.queryIfExistAuth4Role(auth_id, role_id))
			{
				return Constants.AUTH_ROLE_EXIST_FAIL;
			}
			else
			{
				authDao.addAuth2Role(auth_id, role_id);
			}
		}
		return Constants.AUTH_ROLE_UPDATE_SUCC;
	}
	
	//使用2B模式处理个性化权限、反向权限配置操作
	public int dealAuthOperator2(String authIds,String operator_id, int method)
	{
		if (Constants.AUTH_CUSTOMAUTH_METHODADD == method)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				if (authDao.queryIfExistCustomAuth(operator_id, auth_id))
				{
					return Constants.AUTH_OPERATOR_CUSTOM_EXIST_FAIL;
				}
				else
				{
					authDao.addCustomAuth2Operator(auth_id, operator_id);
				}
			}
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_SUCC;
		}
		else if (Constants.AUTH_CUSTOMAUTH_METHODDEL == method)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				authDao.delCustomAuth4Operator(auth_id, operator_id);
			}
			return Constants.AUTH_OPERATOR_CUSTOM_DEL_SUCC;
		}
		else if (Constants.AUTH_REVERSEAUTH_METHODADD == method)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				if (authDao.queryIfExistCustomAuth(operator_id, auth_id))
				{
					return Constants.AUTH_OPERATOR_REVERSE_EXIST_FAIL;
				}
				else
				{
					authDao.addCustomAuth2Operator(auth_id, operator_id);
				}
			}
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_SUCC;
		}
		else if (Constants.AUTH_REVERSEAUTH_METHODDEL == method)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				authDao.delReverseAuth4Operator(auth_id, operator_id);
			}
			return Constants.AUTH_OPERATOR_REVERSE_DEL_SUCC;
		}
		return -1;

	}
	
	//使用策略模式处理个性化权限、反向权限配置操作
	public int dealAuthOperator(String authIds, String operator_id, int method)
	{
		AuthOperatorCaller caller;
		
		if (Constants.AUTH_CUSTOMAUTH_METHODADD == method)
		{
			StrategyAuthOperator strategy = new CustomAuth2Operator();
			caller = new AuthOperatorCaller(strategy);
			return caller.add(authIds, operator_id);
		}
		else if (Constants.AUTH_CUSTOMAUTH_METHODDEL == method)
		{
			StrategyAuthOperator strategy = new CustomAuth2Operator();
			caller = new AuthOperatorCaller(strategy);
			return caller.del(authIds, operator_id);
		}
		else if (Constants.AUTH_REVERSEAUTH_METHODADD == method)
		{
			StrategyAuthOperator strategy = new ReverseAuth2Operator();
			caller = new AuthOperatorCaller(strategy);
			return caller.add(authIds, operator_id);
		}
		else if (Constants.AUTH_REVERSEAUTH_METHODDEL == method)
		{
			StrategyAuthOperator strategy = new ReverseAuth2Operator();
			caller = new AuthOperatorCaller(strategy);
			return caller.del(authIds, operator_id);
		}
		return -1;
		
	}
	
	//使用策略模式 START
	interface StrategyAuthOperator
	{
		public int add(String operator_id, String auth_id);
		public int del(String operator_id, String auth_id);
	}
	
	class CustomAuth2Operator implements StrategyAuthOperator
	{
		public int add(String authIds, String operator_id){
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				if (authDao.queryIfExistCustomAuth(auth_id, operator_id))
				{
					return Constants.AUTH_OPERATOR_CUSTOM_EXIST_FAIL;
				}
				else
				{
					authDao.addCustomAuth2Operator(auth_id, operator_id);
				}
			}
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_SUCC;
		}
		
		public int del(String authIds, String operator_id)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				authDao.delCustomAuth4Operator(auth_id, operator_id);
			}
			return Constants.AUTH_OPERATOR_CUSTOM_DEL_SUCC;
		}
	}
	
	class ReverseAuth2Operator implements StrategyAuthOperator
	{
		public int add(String authIds, String operator_id)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				if (authDao.queryIfExistReverseAuth(auth_id, operator_id))
				{
					return Constants.AUTH_OPERATOR_REVERSE_EXIST_FAIL;
				}
				else
				{
					authDao.addReverseAuth2Operator(auth_id, operator_id);
				}
			}
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_SUCC;
		}
		
		public int del(String authIds, String operator_id)
		{
			for (int i = 0; i < authIds.split("@_@").length; i++)
			{
				String auth_id = authIds.split("@_@")[i];
				authDao.delReverseAuth4Operator(auth_id, operator_id);
			}
			return Constants.AUTH_OPERATOR_REVERSE_DEL_SUCC;
		}
	}

	class AuthOperatorCaller
	{
		private StrategyAuthOperator strategyAuthOperator;
		
		public AuthOperatorCaller(StrategyAuthOperator strategyAuthOperator)
		{
			this.strategyAuthOperator = strategyAuthOperator;
		}
		
		public int add(String authIds, String operator_id)
		{
			return strategyAuthOperator.add(authIds, operator_id);
		}
		
		public int del(String authIds, String operator_id)
		{
			return strategyAuthOperator.del(authIds, operator_id);
		}
	}
	//END

	public String queryAuthCombo(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(authDao.queryAuthCombo()), root);
	}

	public String getMenuCustomAuth(String operator_id, String root) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		return Util.buildExtJsonData(Util.list2Json(authDao.getMenuCustomAuth(map)), root);
	}

	public String getMenuForwardAuth(String operator_id, String root) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		return Util.buildExtJsonData(Util.list2Json(authDao.getMenuForwardAuth(map)), root);
	}

	public String getMenuReverseAuth(String operator_id, String root) {
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		return Util.buildExtJsonData(Util.list2Json(authDao.getMenuReverseAuth(map)), root);
	}



}
