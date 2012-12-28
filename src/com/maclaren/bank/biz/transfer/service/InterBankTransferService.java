package com.maclaren.bank.biz.transfer.service;

import com.maclaren.bank.biz.transfer.bean.InterBankTransfer;
public interface InterBankTransferService 
{	
	public String queryAllInterBankTransfer();
	
	public int delInterBankTransfer(InterBankTransfer interBankTransfer);
	
	public int addInterBankTransfer(InterBankTransfer interBankTransfer);
	
}
