package com.maclaren.bank.biz.common.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maclaren.bank.biz.common.bean.ServiceCombo;
import com.maclaren.bank.biz.common.dao.BizDAO;
import com.maclaren.bank.biz.common.service.BizService;
import com.maclaren.bank.util.Util;
@Service
public class BizServiceImpl implements BizService
{
	@Autowired 
	private BizDAO bizDao;
	
	public String getServiceCombo(String root) {
		// TODO Auto-generated method stub
		List<ServiceCombo> list = new ArrayList<ServiceCombo>();
		list = bizDao.getServiceCombo();
		return Util.buildExtJsonData(Util.list2Json(list), root);
	}
}
