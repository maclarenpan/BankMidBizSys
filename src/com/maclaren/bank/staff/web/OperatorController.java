package com.maclaren.bank.staff.web;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.staff.bean.Operator;
import com.maclaren.bank.staff.bean.OperatorWrap;
import com.maclaren.bank.staff.service.OperatorService;
@Controller
public class OperatorController 
{
	@Autowired
	private OperatorService operatorService;
	
	@RequestMapping(value="staff/operator", params="method=getAll")
	public @ResponseBody String getAllOperator(ModelMap modelMap) throws Exception
	{
		modelMap.put("operators", operatorService.getAllOperator("operators"));
		return (String)modelMap.get("operators");
	}
	
	@RequestMapping(value="staff/operatorCombo")
	public @ResponseBody String getOperatorCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("operatorCombos", operatorService.getOperatorCombo("operatorCombos"));
		return (String)modelMap.get("operatorCombos");
	}
	
	@RequestMapping(value="staff/operator", params="method=getByConditions")
	public @ResponseBody String getOperatorByConditions(@RequestParam String username, @RequestParam String userType_id,
			@RequestParam String role_id, @RequestParam String status_id, @RequestParam String starttime, @RequestParam String endtime,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("operators", operatorService.getOperatorByConditions(username, userType_id, role_id, status_id, starttime, endtime));
		return (String)modelMap.get("operators");
	}
	
	@RequestMapping(value="staff/operator", params="method=insert")
	public @ResponseBody String insertOperator(@RequestBody OperatorWrap data, ModelMap modelMap) throws Exception
	{
		List<Operator> list = new ArrayList<Operator>();
		modelMap.put("operators", operatorService.insertOperator(data.getData()));
		return (String) modelMap.get("operators");
	}
	
	@RequestMapping(value="staff/operator", params="method=delete", method=RequestMethod.POST)
	public @ResponseBody void delete(@RequestBody OperatorWrap data, ModelMap modelMap) throws Exception
	{
		List<Operator> list = new ArrayList<Operator>();
		modelMap.put("operators", operatorService.deleteOperator(data.getData()));
	}
	
	@RequestMapping(value="staff/operator", params="method=update", method=RequestMethod.POST)
	public @ResponseBody String update(@RequestBody OperatorWrap data, ModelMap modelMap) throws Exception
	{
		List<Operator> list = new ArrayList<Operator>();
		modelMap.put("operators", operatorService.updateOperator(data.getData()));
		return (String) modelMap.get("opreators");
	}
	
	@RequestMapping(value="staff/userTypeCombo")
	public @ResponseBody String getUserTypeCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("userTypeCombos", operatorService.getUserTypeCombo("userTypeCombos"));
		return (String)modelMap.get("userTypeCombos");
	}
	
	@RequestMapping(value="staff/operatorStatusCombo")
	public @ResponseBody String getOperatorStatusCombo(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		modelMap.put("operatorStatusCombos", operatorService.getOperatorStatusCombo("operatorStatusCombos"));
		return (String) modelMap.get("operatorStatusCombos");
	}
	
}
