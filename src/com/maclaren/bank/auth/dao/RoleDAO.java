package com.maclaren.bank.auth.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.auth.bean.Role;
import com.maclaren.bank.auth.bean.RoleCombo;
import com.maclaren.bank.util.Constants;
public class RoleDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(RoleDAO.class);
	
	public List<Role> getAllRole()
	{
		List<Role> list = new ArrayList<Role>();
		try
		{
			list = sqlMapClient.queryForList("queryAllRole");
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
	
	public List<Role> queryRoleByConditions(Map map)
	{
		List<Role> list = new ArrayList<Role>();
		try
		{
			list = sqlMapClient.queryForList("queryRoleByConditions", map);
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
	
	public String insertRole(Map map)
	{
		try
		{
			sqlMapClient.insert("insertRole", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String deleteRole(String role_id)
	{
		try
		{
			sqlMapClient.insert("deleteRole", role_id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateRole(Map map)
	{
		try
		{
			sqlMapClient.insert("updateRole", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	/**
	 * 为操作员添加、更新角色
	 * @param operator_id
	 * @param role_id
	 * @return
	 */
	public int updateRole2Operator(String operator_id, String role_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("role_id", role_id);
		try
		{
			sqlMapClient.update("updateRole2Operator", map);
			return Constants.OPERATOR_ROLE_ADD_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.OPERATOR_ROLE_ADD_FAIL;
		}
	}
	
	/**
	 * 为操作员删除角色
	 * @param operator_id
	 * @param role_id
	 * @return
	 */
	public int delRole4Operator(String operator_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		try
		{
			sqlMapClient.delete("updateRole2Operator", map);
			return Constants.OPERATOR_ROLE_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.OPERATOR_ROLE_DEL_FAIL;
		}
	}
	
	public List<RoleCombo> getRoleCombo()
	{
		List<RoleCombo> list = new ArrayList<RoleCombo>();
		try
		{
			list = sqlMapClient.queryForList("getRoleCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
}
