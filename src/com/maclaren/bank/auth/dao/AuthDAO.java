package com.maclaren.bank.auth.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.auth.bean.Auth;
import com.maclaren.bank.auth.bean.AuthCombo;
import com.maclaren.bank.auth.bean.MenuAuth;
import com.maclaren.bank.util.Constants;
public class AuthDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(AuthDAO.class);
	
	public List<MenuAuth> getMenuForwardAuth(Map map)
	{
		List<MenuAuth> list = new ArrayList<MenuAuth>();
		try
		{
			list = sqlMapClient.queryForList("getMenuForwardAuth", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<MenuAuth> getMenuReverseAuth(Map map)
	{
		List<MenuAuth> list = new ArrayList<MenuAuth>();
		try
		{
			list = sqlMapClient.queryForList("getMenuReverseAuth", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<MenuAuth> getMenuCustomAuth(Map map)
	{
		List<MenuAuth> list = new ArrayList<MenuAuth>();
		try
		{
			list = sqlMapClient.queryForList("getMenuCustomAuth", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<Auth> getAllAuth()
	{
		List<Auth> list = new ArrayList<Auth>();
		try
		{
			list = sqlMapClient.queryForList("queryAllAuth");
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<AuthCombo> queryAuthCombo()
	{
		List<AuthCombo> list = new ArrayList<AuthCombo>();
		try
		{
			list = sqlMapClient.queryForList("queryAuthCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public int addAuth(Auth auth)
	{
		try
		{
			sqlMapClient.insert("addAuth", auth);
			return Constants.AUTH_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_ADD_FAIL;
		}
	}
	
	public int updateAuth(Auth auth)
	{
		try
		{
			sqlMapClient.insert("updateAuth", auth);
			return Constants.AUTH_UPDATE_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_UPDATE_FAIL;
		}
	}
	
	public int delAuth(Auth auth)
	{
		try
		{
			sqlMapClient.insert("delAuth", auth);
			return Constants.AUTH_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_DEL_FAIL;
		}
	}
	
	public boolean queryIfExistAuth4Role(String auth_id, String role_id)
	{
		Map map = new HashMap();
		map.put("auth_id", auth_id);
		map.put("role_id", role_id);
		try
		{
			//返回的list不能通过判断是否为null来判断db中没有这条记录，而是通过size是否为0
			if (0 != sqlMapClient.queryForList("queryAuth4Role", map).size())
			{
				return true;
			}
			else
			{
				return false;
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return false;
	}
	public int addAuth2Role(String auth_id, String role_id)
	{
		Map map = new HashMap();
		map.put("auth_id", auth_id);
		map.put("role_id", role_id);
		try
		{
			sqlMapClient.insert("addAuth2Role", map);
			return Constants.AUTH_ROLE_UPDATE_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_ROLE_UPDATE_FAIL;
		}
	}
	
	public int delAuth4Role(String auth_id, String role_id)
	{
		Map map = new HashMap();
		map.put("auth_id", auth_id);
		map.put("role_id", role_id);
		try
		{
			sqlMapClient.delete("delAuth4Role", map);
			return Constants.AUTH_ROLE_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_DEL_FAIL;
		}
	}
	
	public int addCustomAuth2Operator(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			sqlMapClient.insert("addCustomAuth2Operator", map);
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_FAIL;
		}
	}
	
	public int delCustomAuth4Operator(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			sqlMapClient.insert("delCustomAuth4Operator", map);
			return Constants.AUTH_OPERATOR_CUSTOM_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_OPERATOR_CUSTOM_DEL_FAIL;
		}
	}
	
	public boolean queryIfExistCustomAuth(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			if (0 != sqlMapClient.queryForList("queryIfExistCustomAuth", map).size())
			{
				return true;
			}
			else
			{
				return false;				
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}
	
	public int addReverseAuth2Operator(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			sqlMapClient.insert("addReverseAuth2Operator", map);
			return Constants.AUTH_OPERATOR_REVERSE_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_OPERATOR_CUSTOM_ADD_FAIL;
		}
	}
	
	public int delReverseAuth4Operator(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			sqlMapClient.insert("delReverseAuth4Operator", map);
			return Constants.AUTH_OPERATOR_REVERSE_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.AUTH_OPERATOR_REVERSE_DEL_FAIL;
		}
	}
	
	public boolean queryIfExistReverseAuth(String auth_id, String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("auth_id", auth_id);
		try
		{
			if (0 != sqlMapClient.queryForList("queryIfExistReverseAuth", map).size())
			{
				return true;
			}
			else
			{
				return false;				
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return false;
		}
	}

}
