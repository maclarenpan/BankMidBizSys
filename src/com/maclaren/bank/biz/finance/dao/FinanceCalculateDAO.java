package com.maclaren.bank.biz.finance.dao;
import java.util.Map;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.List;
import java.sql.SQLException;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.util.Util;
import com.maclaren.bank.biz.finance.bean.ExchangeRate;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;
public class FinanceCalculateDAO 
{
	private SqlMapClient sqlMapClient;

	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private static final Log log = LogFactory.getLog(FinanceCalculateDAO.class);
	
	public Double queryRateByConditions(String currencyType1_id, String currencyType2_id)
	{
		Map map = new HashMap();
		map.put("currencyType1_id", currencyType1_id);
		map.put("currencyType2_id", currencyType2_id);
		try
		{
			return (Double)sqlMapClient.queryForObject("queryRateByConditions", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return -1.0;
		}
	}
	
	public Double getProxyClientPayService(String guest_id, String service_id, String subbank_id)
	{
		Map map = new HashMap();
		map.put("guest_id", guest_id);
		map.put("service_id", service_id);
		map.put("subbank_id", subbank_id);
		try
		{
			return (Double)sqlMapClient.queryForObject("getProxyClientServicePay", map);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return -1.0;
		}
	}

}
