package com.maclaren.bank.report.service;

public interface ReportService 
{	
	public String queryServiceReport(String start, String end, 
			String subbank_id, String service_id);
	
	public String queryServiceTotalReport(String start, String end,
			String subbank_id);
	
	public String queryServiceIncReportByConditions(String starttime, String endtime,
			String subbank_id, String service_id);
	
	public String queryAssertReportByConditions(String starttime, String endtime,
			String subbank_id, String assertType_id);
	
	public String queryAssertIncReportByConditions(String starttime, String endtime,
			String subbank_id, String assertType_id);
	
	public String queryTotalAssertReportByConditions(String starttime, String endtime,
			String subbank_id);
	
}
