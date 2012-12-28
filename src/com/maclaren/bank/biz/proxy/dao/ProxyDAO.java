package com.maclaren.bank.biz.proxy.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import webservice.bean.TranObj;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.biz.proxy.bean.ProxyClientAccountAmount;
import com.maclaren.bank.biz.proxy.bean.ProxyClientCombo;
import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountAmount;
import com.maclaren.bank.biz.proxy.bean.ProxyUserAccountService;
import com.maclaren.bank.biz.proxy.bean.ProxyUserCombo;
import com.maclaren.bank.biz.proxy.bean.ProxyUserLimit;
import com.maclaren.bank.biz.proxy.bean.ProxyUserTypeLimit;
import com.maclaren.bank.util.Constants;
public class ProxyDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(ProxyDAO.class);
	
	/**
	 * 调用存储过程结算代理业务费用
	 * @return
	 */
	public int calProxyService()
	{
		try
		{
			sqlMapClient.update("calProxyService");
			return Constants.PROXY_CAL_SUCC;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return -1;
		}
	}
	
	/**
	 * 跨行转账结算
	 * @return
	 */
	public int calFromInterBankTrans()
	{
		try
		{
			sqlMapClient.update("calFromInterBankTrans");
			return 1;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return -1;
		}
	}
	
	public void decuteProxyClient(TranObj tranObj)
	{
		Map map = new HashMap();
		map.put("guest_id", tranObj.getGuest_id());
		map.put("subbank_id", tranObj.getSubbank_id());
		map.put("service_id", tranObj.getService_id());
		map.put("shouldPay", tranObj.getShouldPay());
		map.put("operator_id", tranObj.getOperator_id());
		try
		{
			sqlMapClient.update("decuteProxyClient", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void generateProxyServiceOrder(TranObj tranObj)
	{
		Map map = new HashMap();
		map.put("service_id", tranObj.getService_id());
		map.put("guest_id", tranObj.getGuest_id());
		map.put("proxyUser_id", tranObj.getProxyUser_id());
		map.put("subbank_id", tranObj.getSubbank_id());
		map.put("amount", tranObj.getShouldPay());
		map.put("operator_id", tranObj.getOperator_id());
		map.put("currencyType_id", tranObj.getCurrencyType_id());
		try
		{
			sqlMapClient.update("generateProxyServiceOrder", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	//查询所有代理用户限制
	public List queryAllProxyUserLimit()
	{
		List list = new ArrayList();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyUserLimit");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	//查询所有代理用户类型限制
	public List queryAllProxyUserTypeLimit()
	{
		List list = new ArrayList();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyUserTypeLimit");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	//按条件查询代理用户限制
	public List<ProxyUserLimit> queryProxyUserLimitByConditions(Map map)
	{
		List<ProxyUserLimit> list = new ArrayList<ProxyUserLimit>();
		try
		{
			list = sqlMapClient.queryForList("queryProxyUserLimitByConditions", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	//添加代理用户限制
	public String insertProxyUserLimit(Map map)
	{
		try
		{
			sqlMapClient.insert("insertProxyUserLimit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	//更新代理用户限制
	public String updateProxyUserLimit(Map map)
	{
		try
		{
			sqlMapClient.update("updateProxyUserLimit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	//删除代理用户限制
	public String deleteProxyUserLimit(String id)
	{
		try
		{
			sqlMapClient.delete("deleteProxyUserLimit", id);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	
	//按条件查询代理用户类型限制
	public List<ProxyUserTypeLimit> queryProxyUserTypeLimitByConditions(Map map)
	{
		List<ProxyUserTypeLimit> list = new ArrayList<ProxyUserTypeLimit>();
		try
		{
			list = sqlMapClient.queryForList("queryProxyUserTypeLimitByConditions", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	//更新代理用户类型限制
	public String updateProxyUserTypeLimit(Map map)
	{
		try
		{
			sqlMapClient.update("updateProxyUserTypeLimit", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	//查询所有代理用户业务
	public List<ProxyUserAccountService> getAllProxyUserAccountService()
	{
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
		try
		{
			list = sqlMapClient.queryForList("queryAllProxyUserAccountService");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<ProxyUserCombo> getProxyUserCombo()
	{
		List<ProxyUserCombo> list = new ArrayList<ProxyUserCombo>();
		try
		{
			list = sqlMapClient.queryForList("queryProxyUserCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<ProxyClientCombo> getProxyClientCombo()
	{
		List<ProxyClientCombo> list = new ArrayList<ProxyClientCombo>();
		try
		{
			list = sqlMapClient.queryForList("queryProxyClientCombo");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	public List<ProxyUserAccountService> queryProxyUserAccountServiceByConditions(Map map)
	{
		List<ProxyUserAccountService> list = new ArrayList<ProxyUserAccountService>();
		try
		{
			list = sqlMapClient.queryForList("queryProxyUserAccountServiceByConditions", map);
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
	
	public String insertProxyUserService(Map map)
	{
		try
		{
			sqlMapClient.insert("insertProxyUserService", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return "fail";
	}
	
	public String deleteProxyUserService(String id)
	{
		Map map = new HashMap();
		map.put("id", id);
		try
		{
			sqlMapClient.delete("deleteProxyUserService", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	public String updateProxyUserService(Map map)
	{
		try
		{
			sqlMapClient.update("updateProxyUserService", map);
			return "success";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "fail";
		}
	}
	
	
	public List<ProxyUserAccountAmount> getAllProxyUserAccountAmount()
	{
		List<ProxyUserAccountAmount> list = new ArrayList<ProxyUserAccountAmount>();
		try
		{
			list = sqlMapClient.queryForList("getAllProxyUserAccountAmount");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	
	public List<ProxyUserAccountAmount> getProxyUserAccountAmountByConditions(String proxyUser_id)
	{
		List<ProxyUserAccountAmount> list = new ArrayList<ProxyUserAccountAmount>();
		Map map = new HashMap();
		map.put("proxyUser_id", proxyUser_id);
		try
		{
			list = sqlMapClient.queryForList("queryProxyUserAccountAmountByConditions", map);
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
	
	public List<ProxyClientAccountAmount> getAllProxyClientAccountAmount()
	{
		List<ProxyClientAccountAmount> list = new ArrayList<ProxyClientAccountAmount>();
		try
		{
			list = sqlMapClient.queryForList("getAllProxyClientAccountAmount");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return list;
	}
	
	
	public List<ProxyClientAccountAmount> getProxyClientAccountAmountByConditions(String proxyClient_id)
	{
		List<ProxyClientAccountAmount> list = new ArrayList<ProxyClientAccountAmount>();
		Map map = new HashMap();
		map.put("proxyClient_id", proxyClient_id);
		try
		{
			list = sqlMapClient.queryForList("queryProxyClientAccountAmountByConditions", map);
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
	
}
