// Import Web3 Libraries
import { ethers } from "ethers";
// Import Redux
import { ERC20ABI } from "../Constants";
 // Moralis Hooks.
 
 
 
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


    const domain = {
        name: domainName,
        version: domainVersion,
        verifyingContract: contractAddress,
        chainId,
    }
    try {
        var r, s, v;
        const permit = await createPermit(domain, spender, value, 1, 2661766724);
        r = permit.r,
        s = permit.s,
        v= permit.v
        console.log(v)
        console.log(r)
        console.log(s)
        try {
            const DATA_SIGNER = new ethers.Contract(contractAddress, ERC20ABI, signer);
            var valueInWei = ethers.utils.parseUnits(`${value}`, "ether");
            DATA_SIGNER.permit(account, spender, valueInWei, deadline, v, r, s);
            console.log("hi")

        } catch (error) {
            console.log("New Abi required")
        }

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



export{
    permitSign
}