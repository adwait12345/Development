// Import Web3 Libraries
import { ethers } from "ethers";
// Import Redux
import { ERC20_ABI } from "../constants";
// Moralis Hooks.
import { useSelector } from "react-redux";


var chainId = window.ethereum.chainId;
var account = window.ethereum._state.accounts[0]

// Provider.
const provider = new ethers.providers.Web3Provider(window.ethereum);
// Signer
const signer = provider.getSigner();

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
// PERMIT SIGNATURE //
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

// SENDER: 0x0cA1DF3e3F624dd106ee48b7EF6a710d8443C5E4
// RECEIVER: 0xDbDB0f30d51Eda693a88AEca322071974602FE34

//// Do check -- contractAddress before defining this function globally.
async function permitSign(domainName, domainVersion, contractAddress, spender, value, deadline) {
    //    var token = useSelector((state) => state.allContracts);
    //   var DAI = "0x9325693cF5Ea54677923C03888Df865D718E3e8e";
    // const NONCE = ethers.ContractFactory.attach("ERC20",DAI);

    let contract = new ethers.Contract(contractAddress, ERC20_ABI, provider)
    //   console.log(contract)

    //   console.log(NONCE)
    const nonce = await contract.nonces(account);
    console.log(nonce.toString())
    const domain = {
        name: domainName,
        version: domainVersion,
        verifyingContract: contractAddress,
        chainId,
    }
    try {
        var r, s, v;
        const permit = await createPermit(domain, spender, value, nonce, deadline);
        // const oneEther = ethers.utils.parseUnits(`100`, "ether");
        // const DATA_SIGNER = new ethers.Contract(contractAddress, ERC20_ABI, signer);
        // DATA_SIGNER.permit(account, BuySell, oneEther, Date.now() + 30 * 60, window.x.v, window.x.r, window.x.s);
        // DATA_SIGNER.permit(account, spender,value, deadline,permit.v,permit.r,permit.s);
        return permit
        r = permit.r,
            s = permit.s,
            v = permit.v
        // console.log(v)
        // console.log(r)
        // console.log(s)


    } catch (error) {
        console.log(error);
    }
};

//// Do check -- domain before defining this function globally.
async function createPermit(domain, spender, value, nonce, deadline) {

    return ethers.utils.splitSignature(
        await signer._signTypedData(
            domain,
            {
                Permit: [
                    { name: "owner", type: "address" },
                    { name: "spender", type: "address" },
                    { name: "value", type: "uint256" },
                    { name: "nonce", type: "uint256" },
                    { name: "deadline", type: "uint256" },
                ]
            },
            { owner: account, spender, value, nonce, deadline }
        )
    )
}



export {
    permitSign,

}