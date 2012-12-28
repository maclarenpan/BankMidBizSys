package com.maclaren.bank.util.web;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.maclaren.bank.util.bean.Unit;
import com.maclaren.bank.util.bean.Unit2UnitWrap;
import com.maclaren.bank.util.bean.UnitWrap;
import com.maclaren.bank.util.service.UtilService;

@Controller
public class UnitController 
{
	@Autowired
	private UtilService utilService;
	
	@RequestMapping(value="util/unit", params="method=getAll")
	public @ResponseBody String getAllUnit(ModelMap modelMap) throws Exception
	{
		modelMap.put("units", utilService.queryAllUnit("units"));
		return (String) modelMap.get("units");
	}
	
	@RequestMapping(value="util/unitCombo")
	public @ResponseBody String getUnitCombo(ModelMap modelMap) throws Exception
	{
		modelMap.put("unitCombos", utilService.queryAllUnit("unitCombos"));
		return (String) modelMap.get("unitCombos");
	}
	
	@RequestMapping(value="util/unit", params="method=getByConditions")
	public @ResponseBody String getUnitByCondition(@RequestParam String unitName,
			ModelMap modelMap) throws Exception
	{
		modelMap.put("units", utilService.queryUnitByConditions(unitName, "units"));
		return (String)modelMap.get("units");
	}
	
	@RequestMapping(value="util/unit", params="method=insert")
	public @ResponseBody String insertUnit(@RequestBody UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("units", utilService.addUnit(data.getData()));
		return (String)modelMap.get("units");
	}
	
	@RequestMapping(value="util/unit", params="method=delete")
	public @ResponseBody String deleteUnit(@RequestBody UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("units", utilService.delUnit(data.getData()));
		return (String)modelMap.get("units");
	}
	
	@RequestMapping(value="util/unit", params="method=update")
	public @ResponseBody String updateUnit(@RequestBody UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("unit", utilService.updateUnit(data.getData()));
		return (String) modelMap.get("units");
	}
	
	@RequestMapping(value="util/unit2unit", params="method=getAll")
	public @ResponseBody String getAllUnit2unit(ModelMap modelMap) throws Exception
	{
		modelMap.put("unit2units", utilService.queryAllUnit2Unit("unit2units"));
		return (String) modelMap.get("unit2units");
	}
	
	@RequestMapping(value="util/unit2unit", params="method=delete")
	public @ResponseBody String deleteUnit2unit(@RequestBody Unit2UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("unit2units", utilService.delUnit2Unit((data.getData())));
		return (String)modelMap.get("unit2units");
	}
	
	@RequestMapping(value="util/unit2unit", params="method=insert")
	public @ResponseBody String insertUnit2Unit(@RequestBody Unit2UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("unit2units", utilService.addUnit2Unit((data.getData())));
		return (String)modelMap.get("unit2units");
	}
	
	@RequestMapping(value="util/unit2unit", params="method=update")
	public @ResponseBody String updateUnit2Unit(@RequestBody Unit2UnitWrap data,
			ModelMap modelMap) throws Exception
	{
		List<Unit> list = new ArrayList<Unit>();
		modelMap.put("unit2units", utilService.updateUnit2Unit((data.getData())));
		return (String)modelMap.get("unit2units");
	}

}
