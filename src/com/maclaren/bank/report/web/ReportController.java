package com.maclaren.bank.report.web;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.report.service.ReportService;
@Controller
public class ReportController 
{
	@Autowired
	private ReportService reportService;
	
//	@RequestMapping(value="report/reportService")
//	public @ResponseBody String reportService(@RequestParam String start, @RequestParam String end,
//			@RequestParam Integer subbank_id, @RequestParam Integer service_id,	ModelMap modelMap) throws Exception
//	{
//		String temp1 = start;
//		String temp2 = end;
//		int temp3 = subbank_id;
//		int temp4 = service_id;
//		modelMap.put("serviceReport", reportService.queryServiceReport(start, end, subbank_id, service_id));
//		return (String) modelMap.get("serviceReport");
//	}
//	
//	@RequestMapping(value="/report/reportTotalService")
//	public @ResponseBody String reportTotalService(int year, int startMon, int endMon,
//			int subbank_id, ModelMap modelMap)
//	{
//		modelMap.put("serviceTotalReport", reportService.queryServiceTotalReport(year, startMon,
//				endMon, subbank_id));
//		return (String) modelMap.get("serviceTotalReport");
//	}
	
	@RequestMapping(value="/report/assertReport", params="method=query")
	public @ResponseBody String queryAssertReportByCondition(@RequestParam String bank_id,
			@RequestParam String startdate, @RequestParam String enddate, @RequestParam String assertType_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("assertReport", 
				reportService.queryAssertReportByConditions(startdate, enddate, bank_id, assertType_id));
		return (String) modelMap.get("assertReport");
	}
	
	@RequestMapping(value="/report/assertIncReport", params="method=query")
	public @ResponseBody String queryAssertIncReportByCondition(@RequestParam String bank_id,
			@RequestParam String startdate, @RequestParam String enddate, @RequestParam String assertType_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("assertIncReport",
				reportService.queryAssertIncReportByConditions(startdate, enddate, bank_id, assertType_id));
		return (String)modelMap.get("assertIncReport");
	}
	
	@RequestMapping(value="/report/assertTotalReport", params="method=query")
	public @ResponseBody String queryAssertTotalReportByCondition(@RequestParam String bank_id,
			@RequestParam String startdate, @RequestParam String enddate, ModelMap modelMap) throws Exception
	{
		modelMap.put("assertTotalReport", 
				reportService.queryTotalAssertReportByConditions(startdate, enddate, bank_id));
		return (String) modelMap.get("assertTotalReport");
	}
	
	@RequestMapping(value="/report/serviceReport", params="method=query")
	public @ResponseBody String queryServiceReportByCondition(@RequestParam String bank_id,
			@RequestParam String startdate, @RequestParam String enddate, @RequestParam String serviceType_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("serviceReport", 
				reportService.queryServiceReport(startdate, enddate, bank_id, serviceType_id));
		return (String) modelMap.get("serviceReport");
	}
	
	@RequestMapping(value="/report/serviceIncReport", params="method=query")
	public @ResponseBody String queryServiceIncReportByCondition(@RequestParam String bank_id,
			@RequestParam String startdate, @RequestParam String enddate, @RequestParam String serviceType_id,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("serviceIncReport",
				reportService.queryServiceIncReportByConditions(startdate, enddate, bank_id, serviceType_id));
		return (String)modelMap.get("serviceIncReport");
	}
	
	@RequestMapping(value="/report/serviceTotalReport", params="method=query")
	public @ResponseBody String queryTotalServiceReportByCondition(@RequestParam String bank_id, 
		    @RequestParam String startdate, @RequestParam String enddate, ModelMap modelMap) throws Exception
   {
		modelMap.put("totalServiceReport", 
				reportService.queryServiceTotalReport(startdate, enddate, bank_id));
		return (String) modelMap.get("totalServiceReport");
   }
	
}
