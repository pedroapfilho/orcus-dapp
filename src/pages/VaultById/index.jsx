import { ArrowBack } from "@mui/icons-material";
import LogoIconBlack from "../../assets/icons/LogoIconBlack";
import OUSDIcon from "../../assets/icons/OUSDIcon";
import OutLinkIcon from "../../assets/icons/OutLinkIcon";
import { VidTopBar, GraphMenuContainer, GraphMenuItem, LinksRow, VidBlockText, VidBlockHeader, VidBlock, HDivider, VIDLayout, VIDLeftColumn, VidRightColumn, VidWrapper, WhiteBorderItemLarge, Font, WhiteBorderItem, WhiteBorderBar, VDivider } from "./styled";
import React, { useState } from 'react';


const VaultById = () => {

    const [ graphActiveItem, setActiveItem ] = useState('TVL')

    const updateActiveItem = ( event ) => {
        let value = event.currentTarget.dataset.value
        setActiveItem(value);
    }


    return(<VidWrapper>
        <VidTopBar>
            <div style={{display: 'flex', gap: '0.8vw', alignItems: 'center'}}>
                <ArrowBack/>
                <LogoIconBlack/>
                <OUSDIcon/>
                <Font fw='500' fs='0.93vw' color='#333'>ORU/oUSD</Font>
                <Font fw='500' fs='0.93vw' color='#828282'>vault</Font>
                
            </div>
            <div><Font fs='0.72vw' fw='300'>Platform:</Font><Font fs='0.72vw' fw='500' color='#4F4F4F'> SPOOKYSWAP</Font></div>
        </VidTopBar>
        <WhiteBorderBar>
            <WhiteBorderItem bg='#F5EFD7'>
            <div>
                <Font color='#272A30' fs='0.72vw'>TVL</Font>
                <div><Font fw='500' color='#828282' fs='0.83vw'>$</Font><Font fs='0.83vw'>749,681</Font></div>
            </div>
            </WhiteBorderItem>

            <WhiteBorderItem bg='#E4DDEF'>
            <div>
            <Font color='#272A30' fs='0.72vw'>APY</Font>
                <div><Font fw='500' fs='0.83vw'>265.78%</Font></div>
            </div>
            </WhiteBorderItem>

            <WhiteBorderItem bg='#D5ECD8'>
            <div>
            <Font color='#272A30' fs='0.72vw'>Daily</Font>
                <div><Font fw='500' fs='0.83vw'>0.7194%</Font></div>
                </div>
            </WhiteBorderItem>
            
            <WhiteBorderItemLarge>
            <div style={{width: '100%'}}>
                    <Font fs='0.72vw'>Your deposit</Font>
                    <div><Font fw='500' fs='0.83vw'>0.00</Font></div>
                </div>
                <VDivider/>
                <div style={{width: '100%', paddingLeft: '1.71vw'}}>
                    <Font fs='0.72vw'>Last Harvest</Font>
                    <div><Font fw='500' fs='0.83vw'>2h ago</Font></div>
                </div>
            </WhiteBorderItemLarge>
        </WhiteBorderBar>
        <VIDLayout>
            <VIDLeftColumn>
                <VidBlock height={'21.26vw'}>
                    <VidBlockHeader><Font fw='500' fs='0.93vw'>Hector <Font fs='0.93vw'  color='#828282'>(TOR)</Font></Font></VidBlockHeader>
                    <HDivider/>
                    <LinksRow>
                        <a href='#'>Website<OutLinkIcon ratio='0.93vw'/></a>
                        <a href='#'>Telegram<OutLinkIcon ratio='0.93vw'/></a>
                        <a href='#'>Twitter<OutLinkIcon ratio='0.93vw'/></a>
                    </LinksRow>
                    <VidBlockText>HEC and TOR make up the foundations of the HECTOR Ecosystem. Over the coming months and years, TOR will expand to be one of the only truly decentralized and algorithmic stablecoins in the market. This will allow for significant growth of the HECTOR Ecosystem and bring value and utility to users everywhere. Over time, TOR will expand to be usable in a wide range of markets and use cases. To create adoption, partnership must be a focus. We aim to create strong, long-lasting partnerships to aid the adoption of TOR.</VidBlockText>
                </VidBlock>
                <VidBlock height={'24.23vw'}>
                    
                    <VidBlockHeader>
                        <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                            <div><Font fw='500' fs='0.93vw'>Historical <Font fs='0.93vw'  color='#828282'>Rate</Font></Font></div>
                            <GraphMenuContainer>
                                <GraphMenuItem onClick={updateActiveItem} active={graphActiveItem === 'TVL'} data-value={'TVL'}>TVL</GraphMenuItem>
                                <GraphMenuItem onClick={updateActiveItem} active={graphActiveItem === 'Price'} data-value={'Price'}>Price</GraphMenuItem>
                                <GraphMenuItem onClick={updateActiveItem} active={graphActiveItem === 'APY'} data-value={'APY'}>APY</GraphMenuItem>
                            </GraphMenuContainer>
                        </div>
                    </VidBlockHeader>

                    <HDivider/>
                </VidBlock>
                <VidBlock height={'13.86vw'}>
                    <VidBlockHeader>
                        <div> <Font fs='0.72vw'  color='#828282'>ASSET DETAILS</Font></div>
                        <div>
                            <Font fw='500' fs='0.93vw'>TOR</Font>
                        </div> 
                    </VidBlockHeader>
                    <HDivider/>
                    <LinksRow>
                    <a href='#'>Website<OutLinkIcon ratio='0.93vw'/></a>
                        <a href='#'>Token Contract<OutLinkIcon ratio='0.93vw'/></a></LinksRow>
                    <VidBlockText>TOR is a truly algorithmic stablecoin built on the Fantom Opera Chain. It has a dynamic supply which is determined by supply and demand which ensures it is always worth $1.</VidBlockText>
                </VidBlock>
                <VidBlock height={'8.96vw'}>
                    <VidBlockHeader>
                        <div><Font fs='0.72vw'  color='#828282'>ASSET DETAILS</Font></div>
                        <div>
                            <Font fw='500' fs='0.93vw'>FTM</Font>
                        </div>  
                    </VidBlockHeader>
                    <HDivider/>
                    <VidBlockText mt='1.25vw'>No token description available.</VidBlockText>
                </VidBlock>
            </VIDLeftColumn>
            <VidRightColumn>
                <VidBlock height={'47.31vw'}></VidBlock>
            </VidRightColumn>
        </VIDLayout>
    
    </VidWrapper>)
} 

export default VaultById;