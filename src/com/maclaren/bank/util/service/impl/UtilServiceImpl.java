package com.maclaren.bank.util.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.util.Util;
import com.maclaren.bank.util.bean.Unit;
import com.maclaren.bank.util.bean.Unit2Unit;
import com.maclaren.bank.util.dao.UtilDAO;
import com.maclaren.bank.util.service.UtilService;

@Service
public class UtilServiceImpl implements UtilService
{
	
	private UtilDAO utilDao;
	
	@Autowired
	public void setUtilDao(UtilDAO utilDao)
	{
		this.utilDao = utilDao;
	}

	public String addUnit(Unit unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.addUnit(wrap(unit)));
	}

	public String delUnit(Unit unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.delUnit(wrap(unit)));
	}

	public String queryAllUnit(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(utilDao.queryAllUnit()), root);
	}
	
	public String queryUnitByConditions(String unitName, String root)
	{
		Unit unit = new Unit();
		unit.setUnitName(unitName);
		return Util.buildExtJsonData(Util.list2Json(utilDao.queryUnitByConditions(wrap(unit))), root);
	}

	public String updateUnit(Unit unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.updateUnit(wrap(unit)));
	}
	
	public String queryAllUnit2Unit() 
	{
		return Util.buildExtJsonData(Util.list2Json(utilDao.queryAllUnit2Unit()), "unit2units");
	}
	
	public String queryUnit2UnitByConditions(String unit1_id, String unit2_id, String root)
	{
		Unit2Unit unit2unit = new Unit2Unit();
		unit2unit.setUnit1_id(unit1_id);
		unit2unit.setUnit2_id(unit2_id);
		return Util.buildExtJsonData(Util.list2Json(utilDao.queryUnit2UnitByConditions(wrap2(unit2unit))),
				"unit2units");
	}
	

	public String delUnit2Unit(Unit2Unit unit2unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.delUnit2Unit(wrap2(unit2unit)));
	}

	public String queryAllUnit2Unit(String root) {
		// TODO Auto-generated method stub
		return Util.buildExtJsonData(Util.list2Json(utilDao.queryAllUnit2Unit()), root);
	}
	
	public String addUnit2Unit(Unit2Unit unit2unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.addUnit2Unit(wrap2(unit2unit)));
	}
	
	public String updateUnit2Unit(Unit2Unit unit2unit) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(utilDao.updateUnit2Unit(wrap2(unit2unit)));
	}
	
	private Map wrap(Unit unit)
	{
		Map map = new HashMap();
		map.put("unit_id", unit.getUnit_id());
		map.put("unitName", unit.getUnitName());
		return map;
	}
	
	private Map wrap2(Unit2Unit unit2unit)
	{
		Map map = new HashMap();
		map.put("id", unit2unit.getId());
		map.put("unit1_id", unit2unit.getUnit1_id());
		map.put("unit2_id", unit2unit.getUnit2_id());
		map.put("rate", unit2unit.getRate());
		return map;
	}
}
