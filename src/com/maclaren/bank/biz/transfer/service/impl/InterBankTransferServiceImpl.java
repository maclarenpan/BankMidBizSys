package com.maclaren.bank.biz.transfer.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maclaren.bank.report.bean.ServiceReport;
import com.maclaren.bank.biz.transfer.dao.InterBankTransferDAO;
import com.maclaren.bank.biz.finance.bean.ExchangeRate;
import com.maclaren.bank.biz.transfer.bean.InterBankTransfer;
import com.maclaren.bank.biz.transfer.service.InterBankTransferService;
import com.maclaren.bank.util.Constants;
import com.maclaren.bank.util.Util;

@Service
public class InterBankTransferServiceImpl implements InterBankTransferService
{
	
	private InterBankTransferDAO interBankTransferDao;
	
	@Autowired
	public void setInterBankTransferDao(InterBankTransferDAO interBankTransferDao)
	{
		this.interBankTransferDao = interBankTransferDao;
	}
	
	private  Util util;
	
	@Autowired
	public void setUtil(Util util)
	{
		this.util = util;
	}

	public int addInterBankTransfer(InterBankTransfer interBankTransfer) {
		// TODO Auto-generated method stub
		return interBankTransferDao.addInterBankTransfer(interBankTransfer);
	}

	public int delInterBankTransfer(InterBankTransfer interBankTransfer) {
		// TODO Auto-generated method stub
		return interBankTransferDao.delInterBankTransfer(interBankTransfer);
	}

	public String queryAllInterBankTransfer() {
		// TODO Auto-generated method stub
		return util.buildExtJsonData(
				util.list2Json(interBankTransferDao.getAllInterBankTransfer()), "interBankTransfer");
	}

}
