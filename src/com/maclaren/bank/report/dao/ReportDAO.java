package com.maclaren.bank.report.dao;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.maclaren.bank.report.bean.Report;
import com.maclaren.bank.util.Util;
public class ReportDAO 
{
	
	private static SqlMapClient sqlMapClient;
	
	public void setSqlMapClient(SqlMapClient sqlMapClient)
	{
		this.sqlMapClient = sqlMapClient;
	}
	
	private Util util;
	
	private static final Log log = LogFactory.getLog(ReportDAO.class);
	
	/**
	 * 业务量报表查询
	 * @param startyear
	 * @param endyear
	 * @param startMon
	 * @param endMon
	 * @param service_id
	 * @param subbank_id
	 * @return
	 */
	public List getSerivceReportByConditions(Map map)
	{
		List list = new ArrayList();
		try
		{
			list = sqlMapClient.queryForList("queryServiceReportByConditions", map);
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
			log.error(">>>>>ReportDAO.getSerivceReportByConditions  Error Info:" + sqle);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.error(">>>>>ReportDAO.getSerivceReportByConditions  Error Info:" + e);
		}
		return list;
	}
	
	/**
	 * 查询业务总量表报
	 * @param startyear
	 * @param endyear
	 * @param startMon
	 * @param endMon
	 * @param subbank_id
	 * @return
	 */
	public List<Report> getServiceTotalReportByConditions(Map map)
	{
		List<Report> list = new ArrayList<Report>();
		try
		{
			list = sqlMapClient.queryForList("queryServiceTotalReportByConditions", map);
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
			log.error(">>>>>>ReportDAO.getServiceTotalReportByConditions Error Info:" + sqle);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.error(">>>>>>ReportDAO.getServiceTotalReportByConditions Error Info:" + e);
		}
		return list;
	}
	
	/**
	 * 查询业务量递增表报
	 * @param startyear
	 * @param endyear
	 * @param startmon
	 * @param endmon
	 * @param service_id
	 * @return
	 */
	public List<Report> getServiceIncReportByConditions(Map map)
	{
		List<Report> list = new ArrayList<Report>();
		try
		{
			list = sqlMapClient.queryForList("queryServiceIncReportByConditions", map);
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
	
	/**
	 * 查询资产表报
	 * @param map
	 * @return
	 */
	public List<Report> queryAssertReportByConditions(Map map)
	{
		List<Report> list = new ArrayList<Report>();
		try
		{
			list = sqlMapClient.queryForList("queryAssertReportByConditions", map);
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
	
	/**
	 * 资产增量报表查询
	 * @param map
	 * @return
	 */
	public List<Report> queryAssertIncReportByConditions(Map map)
	{
		List<Report> list = new ArrayList<Report>();
		try
		{
			list = sqlMapClient.queryForList("queryAssertIncReportByConditions", map);
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
	
	/**
	 * 资产总量报表查询
	 * @param map
	 * @return
	 */
	public List<Report> queryTotalAssertReportByConditions(Map map)
	{
		List<Report> list = new ArrayList<Report>();
		try
		{
			list = sqlMapClient.queryForList("queryTotalAssertReportByConditions", map);
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
