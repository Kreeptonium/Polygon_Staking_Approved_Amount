import Web3 from 'web3';
import dotenv from 'dotenv';
import {config} from "../../../settings";
//import { funcGetValidatorContractAddress } from './getValidators';
import BN from 'bignumber.js'
import { ICheckApproveAmountOptions, ICheckApproveAmountRetValues } from '../Model/ApproveAmountResults';
dotenv.config();

export const checkApproveAmount = async (params:ICheckApproveAmountOptions): Promise<Array<ICheckApproveAmountRetValues>> => 
{
    const web3 = new Web3(new Web3.providers.HttpProvider(config.MumbaiTestnet.providerURL));
    const DelegateABI = require('../abi/tokenContract.json');   

    try {
        
        let balanceInfo:Array<ICheckApproveAmountRetValues>=new Array<ICheckApproveAmountRetValues>();
        
        const validatorShareContract = new web3.eth.Contract(DelegateABI, params.tokenContractAddress);
        //Capturing the receipt for "Encoded ABI"
        try {
        
        let approved :number= await validatorShareContract.methods.allowance(params.stakedAddress,params.spenderAddess).call();
        balanceInfo.push({
            approvalAmount:new BN(approved).toFixed(),
        })
        } catch (error) {
        }
    
        //}

        return balanceInfo;
    }
    catch (error) {
        throw (error);
    }
};
checkApproveAmount({
    stakedAddress:'0x3Fd294009eEff2636e05f1A6c956d9df7e340287',
    spenderAddess:'0x00200eA4Ee292E253E6Ca07dBA5EdC07c8Aa37A3',
    tokenContractAddress:'0x499d11E0b6eAC7c0593d8Fb292DCBbF815Fb29Ae'
})
.then((result)=>(console.log("Result: ",JSON.stringify(result))))