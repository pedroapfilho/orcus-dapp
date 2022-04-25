import React, {useEffect, useState} from 'react';

import FarmsTableItm from './farms-table-item';
import {CONTRACT_ADDRESSES, MASTER_CHEF_POOLS} from '../../constants'
import {
  Balance,
  FarmsTableWrapper,
  FarmsWrapper,
  HDiv,
  HeadingText,
  RewardBtn,
  Text,
  BlackBtn,
  OverlayGreyText,
  OverlayText,
  OverlayValue,
  HDivider,
  TotalHarvestedInfo,
  RewardsHead,
  RewardsContainer,
  PurpleRewards,
  RewardsBlock,
  RewardsBlockContent,
  FarmsOverlay,
  FarmsOverlayContent,
  RewardsPercentage,
  RewardsValues,
  ManageButton,
  RewardsCoinname,
  RewardsContent,
  ClaimsContainer,
  OverlayClaim,
  OverlayOutline,
  ClaimsRow,
  ClaimsHead,
  PagesRow,
  VDiv,
} from './styled';
import {ethers} from "ethers";
import UNISWAP_PAIR_ABI from "../../abis/UniswapPair.json";
import {useBlockChainContext} from "../../context/blockchain-context";
import LogoIconBlack from "../../assets/icons/LogoIconBlack";
import USDCIcon from "../../assets/icons/USDCIcon";
import OUSDIcon from "../../assets/icons/OUSDIcon";
import BriefcaseIcon from '../../assets/icons/BriefcaseIcon';
import CrosshairsIcon from '../../assets/icons/CrosshairsIcon';
import CalendarIcon from "../../assets/icons/CalendarIcon";
import {formattedNum, getDateDiff} from "../../utils";
import RewardsIcon from '../../assets/icons/RewardsIcon';
import PlusIcon from '../../assets/icons/PlusIcon';
import { OutlineBtn } from './farms-table-item/styled';
import ORUIcon from '../../assets/icons/ORUIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import PageRightIcon from '../../assets/icons/PageRightIcon';
import PageLeftIcon from '../../assets/icons/PageLeftIcon';
import {useWeb3React} from "@web3-react/core";

const Array = [1, 2, 3];

const Farms = () => {

  const {account} = useWeb3React();
  const {contracts, liquidity, signer} = useBlockChainContext();
  const [masterChefPools, setMasterChefPools] = useState(null);
  const [farmsTVL, setFarmsTVL] = useState(null);
  const [userRewards, setUserRewards] = useState(null);
  const [ isRewardsOverlay, setRewardsOverlay ] = useState(false);

  const [poolId, setPoolId] = useState(0);

  useEffect(() => {

    if (contracts && liquidity) {
        init();
    }
  }, [contracts, liquidity]);

  useEffect(() => {

    if (contracts && signer) {
      getUserRewardInfo();
    }

  }, [signer, contracts])

  const init = async () => {

    const {ORU_USDC, OUSD_USDC, OUSD_ORU} = contracts;

    const oruUSDCTVL =
        (+(await ORU_USDC.balanceOf(CONTRACT_ADDRESSES.MASTER_CHEF)) / 1e18) *
        (liquidity.oruUsdcLiq / (+(await ORU_USDC.totalSupply()) / 1e18 ));

    const ousdUSDCTVL =
        (+(await OUSD_USDC.balanceOf(CONTRACT_ADDRESSES.MASTER_CHEF)) / 1e18) *
        (liquidity.ousdUsdcLiq / (+(await OUSD_USDC.totalSupply()) / 1e18 ));

    const ousdOruTVL =
        (+(await OUSD_ORU.balanceOf(CONTRACT_ADDRESSES.MASTER_CHEF)) / 1e18) *
        (liquidity.oruOusdLiq / (+(await OUSD_ORU.totalSupply()) / 1e18 ));

    setFarmsTVL(oruUSDCTVL + ousdUSDCTVL + ousdOruTVL);

    setMasterChefPools([
        {name: "ORU/USDC", lpToken: ORU_USDC, liquidity:  liquidity.oruUsdcLiq, token0Icon: <LogoIconBlack/>, token1Icon: <USDCIcon/>},
        {name: "oUSD/USDC", lpToken: OUSD_USDC, liquidity: liquidity.ousdUsdcLiq,token0Icon: <OUSDIcon/>, token1Icon: <USDCIcon/>},
        {name: "oUSD/ORU", lpToken: OUSD_ORU, liquidity:  liquidity.oruOusdLiq,token0Icon: <OUSDIcon/>, token1Icon: <LogoIconBlack/>},
    ])

  }

  const getUserRewardInfo = async () => {

    const {MASTER_CHEF} = contracts;
    const info = await MASTER_CHEF.getUserInfo(account);

    setUserRewards(info);

  }

  const openOverlay = ( id) => {
    setPoolId(id);
    setRewardsOverlay(true)
  }

  const closeOverlay = ( ) => {

    setRewardsOverlay(false)
  }

  return (
    <>
    {isRewardsOverlay ? <>
      <FarmsOverlay>
        <FarmsOverlayContent>
            <RewardsHead>
              <PurpleRewards>
                <RewardsIcon></RewardsIcon>
              </PurpleRewards>
              <div style={{display: 'block', paddingLeft: '0.8vw'}}>
                <Text>Vested Rewards</Text><br/>
                <OverlayValue>356.69 ORU</OverlayValue>
                </div>
                <div style={{display: 'flex', alignItems: 'top', height: '100%', cursor: 'pointer', justifyContent: 'flex-end'}}>
                  <div  onClick={closeOverlay}>
                  <CloseIcon></CloseIcon>
                    </div>
                </div>
            </RewardsHead>
            <div style={{display: 'flex', marginTop: '2vw', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.8vw'}}>
                <ORUIcon></ORUIcon>
                <div style={{flexDirection:'column'}}>
                <OverlayText>ORU</OverlayText>
                
                <OverlayGreyText fs='12px'>50%</OverlayGreyText>
                </div>
              </div>
              <PlusIcon color='#C4C4C4'></PlusIcon>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.8vw'}}>
                <USDCIcon></USDCIcon>
                <div style={{flexDirection:'column'}}>
                <OverlayText>USDC</OverlayText>
                
                <OverlayGreyText fs='12px'>50%</OverlayGreyText>
                </div>
              </div>
            </div>
            <HDivider style={{marginTop: '0.8vw'}}></HDivider>
            <div style={{display: 'flex',marginTop: '0.8vw', alignItems: 'center', justifyContent: 'space-between'}}>
              <OverlayGreyText style={{display: 'flex', gap: '0.4vw', alignItems: 'center'}}>Until the full claim <CalendarIcon></CalendarIcon></OverlayGreyText>
              <OverlayGreyText><b>28</b> days left</OverlayGreyText>
            </div>
            <ClaimsHead>
              <div>#</div>
              <div>Date</div>
              <div>Vesting</div>
              <div>Amount</div>
            </ClaimsHead>
            <ClaimsContainer>
              {userRewards && userRewards[poolId].vestings.length > 0 ?
                  <>
                    {

                      userRewards[poolId]?.vestings.filter(item => +item.amount > 0).map((item, _ind) => {

                        const currentTime = new Date()
                        const endTime = new Date((+item.startTime - 345600) * 1000);
                        const diff = getDateDiff(endTime, currentTime);

                        return (
                            <ClaimsRow>
                              <div>{_ind + 1}</div>
                              <div> {endTime.getTime() - currentTime.getTime() <= 0 ? "Vesting complete!" : diff.day + " days " + diff.hour +  " hours " + diff.minute + " minutes"}  </div>
                              <div>Vesting {_ind + 1}</div>
                              <div>{formattedNum(+item.amount / 1e18)} ORU</div>
                              <div style={{display: 'flex', justifyContent: 'space-around', gap: '0.4vw'}}>
                                <OverlayClaim disabled={currentTime.getTime() > endTime.getTime()}  onClick={() => console.log("Working!")}><BriefcaseIcon></BriefcaseIcon>Claim</OverlayClaim>
                                <OverlayOutline><CrosshairsIcon></CrosshairsIcon>Claim with Penalty</OverlayOutline>
                              </div>
                            </ClaimsRow>
                        )
                      })
                    }
                  </>
                  :
                  <h3 style={{marginLeft: "1vw"}}> You have no vestings on this pool! </h3>
              }
            </ClaimsContainer>
            <PagesRow>
              <PageLeftIcon></PageLeftIcon>
              <div>1</div>
              <div>2</div>
              <div>...</div>
              <div>15</div>
              <PageRightIcon></PageRightIcon>
            </PagesRow>
            
        </FarmsOverlayContent>
      </FarmsOverlay>
    
    </> : <></>}
    <FarmsWrapper>
      <HDiv justifyContent='space-between' alignItems='flex-start'>
        <VDiv>
          <HeadingText>Farms TVL</HeadingText>
          <Balance>$ {farmsTVL ? formattedNum(farmsTVL) : 0}</Balance>
        </VDiv>
        <RewardsContainer>
          <PurpleRewards>
            <RewardsIcon></RewardsIcon>
          </PurpleRewards>
          {/* <RewardsContent></RewardsContent> */}
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <b>Rewards</b>
            Management
          </div>

          {userRewards ?
            userRewards.map((item, _ind) => {

              return (
                  <RewardsBlock>
                    <RewardsBlockContent>
                      <RewardsValues>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.4vw'}}>
                          <ORUIcon ratio={'1.192vw'}></ORUIcon>
                          <div style={{flexDirection: 'column'}}>
                            <RewardsCoinname>ORU</RewardsCoinname>
                            <RewardsPercentage>50%</RewardsPercentage>
                          </div>
                        </div>
                        <PlusIcon color="#C4C4C4"></PlusIcon>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.4vw'}}>
                          <USDCIcon ratio={'1.192vw'}></USDCIcon>
                          <div style={{flexDirection: 'column'}}>
                            <RewardsCoinname>USDC</RewardsCoinname>

                            <RewardsPercentage>50%</RewardsPercentage>
                          </div>
                        </div>

                      </RewardsValues>

                      <ManageButton onClick={() => openOverlay(_ind)}>Manage</ManageButton>
                    </RewardsBlockContent>
                  </RewardsBlock>
              )

            })
              :
              null
          }
        </RewardsContainer>
{/*
        <VDiv>
         <TotalHarvestedInfo>
           <span>Total harvested rewards </span>
           <div />
           <b>0.0 ORU</b>
         </TotalHarvestedInfo>
         <RewardBtn>Rewards vesting</RewardBtn>
        </VDiv> */}
      </HDiv>
      <HDiv mt='2.083vw'>
        <Text ml='3.802vw'>Asset</Text>
        <Text ml='18.177vw'>Rewards</Text>
        <Text ml='9.427vw'>Deposited</Text>
        <Text ml='7.813vw'>TVL</Text>
        <Text ml='10.469vw'>Rates</Text>
      </HDiv>
      <FarmsTableWrapper>
        {masterChefPools && masterChefPools.map((item, idx) => (
          <FarmsTableItm key={idx} index={idx} item={item} />
        ))}
      </FarmsTableWrapper>
    </FarmsWrapper>
    </>
  );
};

export default Farms;
