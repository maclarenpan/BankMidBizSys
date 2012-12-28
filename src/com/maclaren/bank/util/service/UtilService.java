package com.maclaren.bank.util.service;

import com.maclaren.bank.util.bean.Unit;
import com.maclaren.bank.util.bean.Unit2Unit;
public interface UtilService 
{	
	public String queryAllUnit(String root);
	
	public String queryUnitByConditions(String unitName, String root);
	
	public String updateUnit(Unit unit);
	
	public String delUnit(Unit unit);
	
	public String addUnit(Unit unit);
	
	public String queryAllUnit2Unit(String root);
	
	public String queryUnit2UnitByConditions(String unit1, String unit2, String root);
	
	public String delUnit2Unit(Unit2Unit unit2unit);
	
	public String addUnit2Unit(Unit2Unit unit2unit);
	
	public String updateUnit2Unit(Unit2Unit unit2unit);
	
}
