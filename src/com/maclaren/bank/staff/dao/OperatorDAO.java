package com.maclaren.bank.staff.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.report.dao.ReportDAO;
import com.maclaren.bank.staff.bean.Operator;
import com.maclaren.bank.staff.bean.OperatorCombo;
import com.maclaren.bank.staff.bean.Status;
import com.maclaren.bank.staff.bean.UserType;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;
public class OperatorDAO 
{
	private SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private Util util;
	
	private static final Log log = LogFactory.getLog(ReportDAO.class);
	
	public Operator checkOperator(String username, String password)
	{

		Map map = new HashMap();
		map.put("username", username);
		map.put("password", password);
		try
		{
			if (0 != sqlMapClient.queryForList("checkOperator", map).size())
			{
				return (Operator) sqlMapClient.queryForList("checkOperator", map).get(0);
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		return null;
	}
	
	public List<Operator> queryAllOperator()
	{
		List<Operator> list = new ArrayList<Operator>();
		try 
		{
			list = sqlMapClient.queryForList("queryAllOperator");
		} 
		catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public List<OperatorCombo> queryOperatorCombo()
	{
		List<OperatorCombo> list = new ArrayList<OperatorCombo>();
		try
		{
			list = sqlMapClient.queryForList("queryOperatorCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<Operator> queryOperatorByConditions(String username, String userType_id, String role_id, 
			String status_id, String starttime, String endtime)
	{
		List<Operator> list = new ArrayList<Operator>();
		Map map = new HashMap();
		map.put("username", username);
		map.put("userType_id", userType_id);
		map.put("role_id", role_id);
		map.put("status", status_id);
		map.put("starttime", starttime);
		map.put("endtime", endtime);
		try
		{
			list = sqlMapClient.queryForList("queryOperatorByConditions", map);
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
	
	public String insertOperator(Map map)
	{
		try
		{
			sqlMapClient.insert("insertOperator", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String deleteOperator(String id)
	{
		Map map = new HashMap();
		map.put("id", id);
		try
		{
			sqlMapClient.delete("deleteOperator", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateOperator(Map map)
	{
		try
		{
			sqlMapClient.update("updateOperator", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public int updateUserType4Operator(String operator_id, String userType_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("userType_id", userType_id);
		try
		{
			sqlMapClient.update("updateUserType2Operator", map);
			return Constants.OPERATOR_USERTYPE_UPDATE_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.OPERATOR_USERTYPE_UPDATE_FAIL;
		}
	}
	
	public int delUserType4Operator(String operator_id, String userType_id)
	{
		Map map = new HashMap();
		map.put("operator_id", operator_id);
		map.put("userType_id", "");
		try
		{
			sqlMapClient.update("delUserType4Operator", map);
			return Constants.OPERATOR_USERTYPE_DEL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return Constants.OPERATOR_USERTYPE_DEL_FAIL;
		}
	}
	
	/**
	 * 激活操作员
	 * @param operator_id
	 * @param active
	 * @return
	 */
	public int activateOperator(String operator_id)
	{
		try 
		{
			sqlMapClient.update("activeOperator", operator_id);
			return Constants.OPERATOR_ACTIVE_SUCC;
		} 
		catch (Exception e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Constants.OPERATOR_ACTIVE_FAIL;
		}
	}
	
	/**
	 * 钝化操作员
	 * @param operator_id
	 * @return
	 */
	public int passivateOperator(String operator_id)
	{
		try 
		{
			sqlMapClient.update("passivateOperator", operator_id);
			return Constants.OPERATOR_PASSIVATE_SUCC;
		} 
		catch (Exception e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
			return Constants.OPERATOR_PASSIVATE_FAIL;
		}
	}
	
	public List<UserType> getUserTypeCombo()
	{
		List<UserType> list = new ArrayList<UserType>();
		try
		{
			list = sqlMapClient.queryForList("getUserTypeCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<Status> getOperatorStatusCombo()
	{
		List<Status> list = new ArrayList<Status>();
		try
		{
			list = sqlMapClient.queryForList("getOperatorStatusCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}

}
