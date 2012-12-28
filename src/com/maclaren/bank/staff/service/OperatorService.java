package com.maclaren.bank.staff.service;

import com.maclaren.bank.staff.bean.Operator;
public interface OperatorService 
{
	public String getAllOperator(String root);
	
	public String getOperatorCombo(String root);
	
	public String getOperatorByConditions(String username, String userType_id, String role_id, String status_id, String starttime, String endtime);
	
	public int activeOperator(String operator_id, boolean active);
	
	public String insertOperator(Operator operator);
	
	public String updateOperator(Operator operator);
	
	public String deleteOperator(Operator operator);
	
	public String getUserTypeCombo(String root);
	
	public String getOperatorStatusCombo(String root);

}
