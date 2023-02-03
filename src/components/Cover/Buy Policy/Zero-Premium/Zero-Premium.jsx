// Import Libraries
import React, { useState } from "react";
import "./Zero-Premium.css";

// Import Components
import Sidebar from "../../SideBar/Sidebar";
import Topbar from "../../Topbar/Topbar";
import Modal from "react-modal";
import LoginModal from "../../../MetamaskLoginModal/LoginModal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ZeroModal from "./Zero-PremiumModal/ZeroModal";

// Import React Icons & Assets
import check from "../../../../assets/svg/check.svg";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { ChevronDownIcon } from "@chakra-ui/icons";

// Import Web3 Libraries
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { COMPOUND_ZERO_PREMIUM_ABI, ERC20_ABI, AAVE_ZERO_PREMIUM_ABI } from "../../../../constants/index";

// Import Redux
import { useSelector } from "react-redux";

// Main function
export default function Zero_Premium() {
  // Moralis Hook
  var { account } = useMoralis();

  //LocalStates
  const [open, setOpen] = useState(false);
  const [zeroOpen, setZeroOpen] = useState(false);
  const [SupplyAmount, setSupplyAmount] = useState("");

  // Provider.
  const PROVIDER = new ethers.providers.Web3Provider(window.ethereum);
  // Signer
  const SIGNER = PROVIDER.getSigner();

  // Redux States Import and use

  const Platforms = useSelector((state) => state.allPlatforms);
  let platform = Platforms.platforms;

  // Global Coin Variable

  var GlobalCoin = useSelector((state) => state.allTokens);
  var GlobalToken = GlobalCoin.tokens;

  var GlobalcCoin = useSelector((state) => state.allcTokens);
  var GlobalcToken = GlobalcCoin.ctokens;
  // For Compound Pool

  var token = useSelector((state) => state.allContracts);
  var ConstantFlowAgreement = token.contracts.ConstantFlowAgreement;

  var CompoundPool = token.contracts.CompoundPool;
  var AAVE_Contract = token.contracts.AAVE_Contract;

  // Approve Bat Function

  const ApproveBat = async () => {
    const BATGET = new ethers.Contract(GlobalToken, COMPOUND_ZERO_PREMIUM_ABI, PROVIDER);
    var BATPOST = new ethers.Contract(GlobalToken, ERC20_ABI, SIGNER);
    var trans = await BATPOST.transfer(CompoundPool, `${SupplyAmount * 1e18}`);
  };

  // Mint Bat
  const MintBat = async () => {
    const BATGET = new ethers.Contract(GlobalToken, COMPOUND_ZERO_PREMIUM_ABI, PROVIDER);
    var BATPOST = new ethers.Contract(CompoundPool, COMPOUND_ZERO_PREMIUM_ABI, SIGNER);
    const gen = await BATPOST.mintERC20Tokens(
      account,
      GlobalToken,
      `${SupplyAmount * 1e18}`
    );
  };

  // Supply
  const SupplyBat = async () => {
    // var ERC20GET = new ethers.Contract(BAT_Token,ERC20_ABI,PROVIDER);
    // const Erc= await ERC20GET.balanceOf(CompoundPool);
    // var Erc1 = BigInt(Erc/1e18).toString()
    // console.log(Erc1)

    const BATGET = new ethers.Contract(GlobalToken, ERC20_ABI, PROVIDER);

    var BATdecimal = await BATGET.decimals();

    var BATPOST = new ethers.Contract(CompoundPool, COMPOUND_ZERO_PREMIUM_ABI, SIGNER);
    const gen1 = await BATPOST.supplyToken(
      GlobalToken,
      GlobalcToken,
      `${SupplyAmount * 10 ** BATdecimal}`
    );

    // console.log(Erc1)
  };
  //

  // For Aave

  const ApproveAave = async () => {
    const AaveGET = new ethers.Contract(GlobalToken, AAVE_ZERO_PREMIUM_ABI, PROVIDER);
    var AavePOST = new ethers.Contract(GlobalToken, ERC20_ABI, SIGNER);
    var trans = await AavePOST.approve(AAVE_Contract, `${SupplyAmount * 1e18}`);
  };

  // Mint AAve
  const MintAave = async () => {
    const AaveGET = new ethers.Contract(GlobalToken, AAVE_ZERO_PREMIUM_ABI, PROVIDER);
    var AavePOST = new ethers.Contract(AAVE_Contract, AAVE_ZERO_PREMIUM_ABI, SIGNER);
    const gen = await AavePOST.mintERC20Tokens(
      GlobalToken,
      `${SupplyAmount * 1e18}`
    );
  };

  // Supply
  const SupplyAave = async () => {
    var ERC20GET = new ethers.Contract(GlobalToken, ERC20_ABI, PROVIDER);
    const Erc = await ERC20GET.balanceOf(AAVE_Contract);
    var Erc1 = BigInt(Erc / 1e18).toString();
    console.log(Erc1);

    const AaveGET = new ethers.Contract(GlobalToken, AAVE_ZERO_PREMIUM_ABI, PROVIDER);
    var AavePOST = new ethers.Contract(AAVE_Contract, AAVE_ZERO_PREMIUM_ABI, SIGNER);
    const gen1 = await AavePOST.supplyToken(
      GlobalToken,
      GlobalcToken,
      `${SupplyAmount * 1e18}`
    );

    console.log(Erc1);
  };
  const ApproveCompoundx = async () => {
    const CompoundGET = new ethers.Contract(
      GlobalcToken,
      COMPOUND_ZERO_PREMIUM_ABI,
      PROVIDER
    );
    var CompoundPOST = new ethers.Contract(GlobalcToken, ERC20_ABI, SIGNER);
    var trans = await CompoundPOST.approve(
      CompoundPool,
      `${SupplyAmount * 1e8}`
    );
  };
  const WithDrawCompound = async () => {
    var CompoundPOST = new ethers.Contract(CompoundPool, COMPOUND_ZERO_PREMIUM_ABI, SIGNER);
    var trans = await CompoundPOST.withdrawToken(
      GlobalToken,
      GlobalcToken,
      `${SupplyAmount * 1e8}`
    );
  };

  // For aAave

  // Approve aAave
  const ApproveaAave = async () => {
    const aAaveGET = new ethers.Contract(GlobalcToken, AAVE_ZERO_PREMIUM_ABI, PROVIDER);
    var aAavePOST = new ethers.Contract(GlobalcToken, ERC20_ABI, SIGNER);
    var trans = await aAavePOST.approve(
      AAVE_Contract,
      `${SupplyAmount * 1e18}`
    );
  };

  // Withdraw aAave

  const WithDrawaAave = async () => {
    const aAaveGET = new ethers.Contract(GlobalcToken, AAVE_ZERO_PREMIUM_ABI, PROVIDER);
    var aAavePOST = new ethers.Contract(AAVE_Contract, AAVE_ZERO_PREMIUM_ABI, SIGNER);
    const gen1 = await aAavePOST.withdrawToken(
      GlobalToken,
      GlobalcToken,
      `${SupplyAmount * 1e18}`
    );
  };

  // Global Functions

  const ApprovetoSupply = () => {
    if (platform === "Compound") {
      ApproveBat();
    }
    if (platform === "Aave") {
      ApproveAave();
    }
    if (platform === "Uniswap") {
      alert("Platform Not Present");
    }
  };

  const ApprovetoWithdraw = () => {
    if (platform === "Compound") {
      ApproveCompoundx();
    }
    if (platform === "Aave") {
      ApproveaAave();
    }
    if (platform === "Uniswap") {
      alert("Platform Not Present");
    }
  };

  const Supply = () => {
    if (platform === "Compound") {
      SupplyBat();
    }
    if (platform === "Aave") {
      SupplyAave();
    }
    if (platform === "Uniswap") {
      alert("Platform Not Present");
    }
  };

  const Withdraw = () => {
    if (platform === "Compound") {
      WithDrawCompound();
    }
    if (platform === "Aave") {
      WithDrawaAave();
    }
    if (platform === "Uniswap") {
      alert("Platform Not Present");
    }
  };

  const Mint = () => {
    if (platform === "Compound") {
      MintBat();
    }
    if (platform === "Aave") {
      MintAave();
    }
    if (platform === "Uniswap") {
      alert("Platform Not Present");
    }
  };

  //
  const OpenModal = () => {
    setZeroOpen(true);
  };

  return (
    <>
      <div className="Navbar_Cover">
        <Sidebar setOpen={setOpen} />
        <div className="spacer"></div>

        <div className="ri_content">
          <Topbar name="Zero Premium" setOpen={setOpen} />

          <div className="Bottom-Content">
            <div className="buypolicy">
              <div className="outerzero">
                <div className="zero_premium">
                  <div className="actual-zeropremium">
                    <div className="zeropremiun-box">
                      <Tabs focusTabOnClick={false}>
                        <TabList className="top_Dashboard_after">
                          <Tab className="tab">Supply</Tab>
                          <Tab className="tab">Withdraw</Tab>
                        </TabList>

                        <TabPanel>
                          <div className="supply">
                            <div className="supply1">
                              <input
                                type="text"
                                placeholder="0.0"
                                onChange={(event) => {
                                  setSupplyAmount(event.target.value);
                                }}
                              />
                              <div onClick={OpenModal} className="conversion">
                                {platform}
                                <ChevronDownIcon />
                              </div>
                            </div>
                            <button className="dir-button">
                              <ArrowDownIcon />
                            </button>
                            <div className="supply2">
                              <input
                                type="text"
                                placeholder="0.0"
                                value={SupplyAmount}
                              />
                              <div className="conversion">{platform}x</div>
                            </div>
                            <div
                              className="approve-szt"
                              onClick={ApprovetoSupply}
                            >
                              <span>
                                {platform === "Compound"
                                  ? "Transfer"
                                  : "Approve"}
                              </span>
                            </div>
                            <div className="timeline">
                              <div className="timeline-line">
                                <div className="blob">
                                  <img src={check} alt="" />
                                </div>
                              </div>
                            </div>
                            <div onClick={Supply} className="transfer-szt">
                              <span>Supply Token</span>
                            </div>
                          </div>
                        </TabPanel>

                        <TabPanel>
                          <div className="supply">
                            <div className="supply1">
                              <input
                                type="text"
                                placeholder="0.0"
                                onChange={(event) => {
                                  setSupplyAmount(event.target.value);
                                }}
                              />
                              <div onClick={OpenModal} className="conversion">
                                {platform}x
                                <ChevronDownIcon />
                              </div>
                            </div>
                            <button className="dir-button">
                              <ArrowDownIcon />
                            </button>
                            <div className="supply2">
                              <input
                                type="text"
                                placeholder="0.0"
                                value={SupplyAmount}
                              />
                              <div className="conversion">{platform}</div>
                            </div>
                            <div
                              className="approve-szt"
                              onClick={ApprovetoWithdraw}
                            >
                              <span>Approve</span>
                            </div>
                            <div className="timeline">
                              <div className="timeline-line">
                                <div className="blob">
                                  <img src={check} alt="" />
                                </div>
                              </div>
                            </div>
                            <div className="transfer-szt" onClick={Withdraw}>
                              <span>WithDraw</span>
                            </div>
                          </div>
                        </TabPanel>
                      </Tabs>
                    </div>
                    <div className="mint">
                      <button onClick={Mint}>Mint Tokens</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={zeroOpen} className="Modal">
        <ZeroModal zeroOpen={zeroOpen} setZeroOpen={setZeroOpen} />
      </Modal>
      <Modal isOpen={open} className="Modal">
        <LoginModal open={open} setOpen={setOpen} />
      </Modal>
    </>
  );
}
