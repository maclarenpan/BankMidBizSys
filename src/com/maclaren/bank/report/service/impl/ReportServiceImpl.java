package com.maclaren.bank.report.service.impl;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.report.bean.Report;
import com.maclaren.bank.report.bean.ServiceReport;
import com.maclaren.bank.report.dao.ReportDAO;
import com.maclaren.bank.report.service.ReportService;
import com.maclaren.bank.util.Util;

@Service
public class ReportServiceImpl implements ReportService
{
	
	private ReportDAO reportDao;
	
	@Autowired
	public void setReportDao(ReportDAO reportDao)
	{
		this.reportDao = reportDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	/**
	 * 条件查询业务量表报
	 */
	public String queryServiceReport(String starttime, String endtime,  
			String subbank_id, String serviceType_id) 
	{
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, serviceType_id, "");
		List<ServiceReport> list = reportDao.getSerivceReportByConditions(map);
		return util.buildExtJsonData(util.list2Json(list), "serviceReport");
	}

	public String queryServiceTotalReport(String starttime, String endtime, String subbank_id) 
	{
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, "", "");
		List<Report> list = reportDao.getServiceTotalReportByConditions(map);
		return util.buildExtJsonData(util.list2Json(list), "serviceTotalReport");
	}
	
	/**
	 * 条件查询增量业务报表
	 */
	public String queryServiceIncReportByConditions(String starttime,
			String endtime, String subbank_id, String service_id) 
	{
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, service_id, "");
		List<Report> list = reportDao.getServiceIncReportByConditions(map);
		return util.buildExtJsonData(util.list2Json(list), "serviceIncReport");
	}
	
	/**
	 * 条件查询资产增量报表
	 */
	public String queryAssertIncReportByConditions(String starttime,
			String endtime, String subbank_id, String assertType_id) 
	{
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, "", assertType_id);
		List<Report> list = reportDao.queryAssertIncReportByConditions(map);
		return Util.buildExtJsonData(Util.list2Json(list), "assertIncReport");
	}

	/**
	 * 条件查询资产量报表
	 */
	public String queryAssertReportByConditions(String starttime,
			String endtime, String subbank_id, String assertType_id) 
	{
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, "", assertType_id);
		List<Report> list = reportDao.queryAssertReportByConditions(map);
		return Util.buildExtJsonData(Util.list2Json(list), "assertReport");
	}

	/**
	 * 资产总量报表
	 */
	public String queryTotalAssertReportByConditions(String starttime,
			String endtime, String subbank_id) 
	{
		// TODO Auto-generated method stub
		Map map = new HashMap();
		map = convert2(starttime, endtime, subbank_id, "", "");
		List<Report> list = reportDao.queryTotalAssertReportByConditions(map);
		return Util.buildExtJsonData(Util.list2Json(list), "assertTotalReport");
	}
	
	public Map convert(String starttime, String endtime, String subbank_id)
	{
		Map<String, String> map = new HashMap<String, String>();
		Map date = Util.splitYYYYMMDD(starttime);
		map.put("startYear", (String) date.get("year"));
		map.put("startMon", (String) date.get("month"));
		date = Util.splitYYYYMMDD(endtime);
		map.put("endYear", (String) date.get("year"));
		map.put("endMonth", (String) date.get("month"));
		map.put("subbank_id", subbank_id);
		return map;
	}
	
	public Map convert2(String starttime, String endtime, String subbank_id, String service_id,
			String assertType_id)
	{
		int startYear;
		int endYear;
		int startMonth;
		int endMonth;
		Calendar cal = Calendar.getInstance();
		if ("" != starttime && null != starttime)
		{
			startYear = Integer.valueOf(starttime.split("-")[0]);
			startMonth = Integer.valueOf(starttime.split("-")[1]);
		}
		else
		{
			startYear = Integer.valueOf(cal.get(Calendar.YEAR));
			startMonth = Integer.valueOf(1);
		}
		if ("" != endtime && null != endtime)
		{
			endYear = Integer.valueOf(endtime.split("-")[0]);
			endMonth = Integer.valueOf(endtime.split("-")[1]);
		}
		else
		{
			endYear = Integer.valueOf(cal.get(Calendar.YEAR));
			endMonth = Integer.valueOf(12);
		}
		Map map = new HashMap();
		map.put("startYear", startYear);
		map.put("endYear", endYear);
		map.put("startMonth", startMonth);
		map.put("endMonth", endMonth);
		map.put("subbank_id", subbank_id);
		map.put("service_id", service_id);
		map.put("assertType_id", assertType_id);
		return map;
	}
}
