export interface ICheckApproveAmountOptions{
    stakedAddress:string; //They can send validator Id rather than address
    spenderAddess:string;
    tokenContractAddress:string;
}
export interface ICheckApproveAmountRetValues{
    approvalAmount:string;
    //myBalance2:string;
    //validatorContract:string;
    //validatorName:string;
    
}