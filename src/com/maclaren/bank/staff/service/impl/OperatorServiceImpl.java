package com.maclaren.bank.staff.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.staff.bean.Operator;
import com.maclaren.bank.staff.dao.OperatorDAO;
import com.maclaren.bank.staff.service.OperatorService;
import com.maclaren.bank.util.Util;

@Service
public class OperatorServiceImpl implements OperatorService {

	private OperatorDAO operatorDao;

	private Util util;

	@Autowired
	public void setOperatorDao(OperatorDAO operatorDao) {
		this.operatorDao = operatorDao;
	}

	@Autowired
	public void setUtil(Util util) {
		this.util = util;
	}

	public String getAllOperator(String root) {
		// TODO Auto-generated method stub
//		return util.buildExtJsonData(util.list2Json(operatorDao
//				.queryAllOperator()), root);
		List list = new ArrayList();
		list = operatorDao.queryAllOperator();
		String pagingstr = util.buildExtJsonDataPaging(util.list2Json(list), "operators", "success", "totalCount", list.size());
		return pagingstr;
	}
	
	public String getOperatorCombo(String root)
	{
		return Util.buildExtJsonData(Util.list2Json(operatorDao.queryOperatorCombo()), root);
	}

	public String getOperatorByConditions(String username, String userType_id, String role_id, 
			String status_id, String starttime, String endtime) {
		// TODO Auto-generated method stub
		List list = new ArrayList();
		list = operatorDao.queryOperatorByConditions(username, userType_id, role_id, status_id, starttime, endtime);
		return  util.buildExtJsonDataPaging(util.list2Json(list), "operators", "success", "totalCount", list.size());
	}

	public int activeOperator(String operator_id, boolean active) {
		// TODO Auto-generated method stub
		if (active) {
			return operatorDao.activateOperator(operator_id);
		} else {
			return operatorDao.passivateOperator(operator_id);
		}
	}

	public String deleteOperator(Operator operator) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(operatorDao.deleteOperator(operator.getId()));
	}

	public String updateOperator(Operator operator) 
	{
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(operatorDao.updateOperator(wrap(operator)));
	}

	public String insertOperator(Operator operator) {
		// TODO Auto-generated method stub
		return Util.wrapRetMessage(operatorDao.insertOperator(wrap(operator)));
	}

	public String getUserTypeCombo(String root) 
	{
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(operatorDao.getUserTypeCombo()), root);
	}

	public String getOperatorStatusCombo(String root) {
		// TODO Auto-generated method stub
		return util.buildExtJsonData(util.list2Json(operatorDao.getOperatorStatusCombo()), root);
	}
	
	public Map wrap(Operator operator)
	{
		Map map = new HashMap();
		map.put("id", operator.getId());
		map.put("username", operator.getUsername());
		map.put("password", operator.getPassword());
		map.put("userType_id", operator.getUserType_id());
		map.put("address", operator.getAddress());
		map.put("linker", operator.getLinker());
		map.put("linkerPhone", operator.getLinkerPhone());
		map.put("role_id", operator.getRole_id());
		map.put("status_id", operator.getStatus_id());
		return map;
	}

}
