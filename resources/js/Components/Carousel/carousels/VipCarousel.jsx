import GamesCarouseCard from "@/Components/Cards/GamesCarouseCard";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import React, { useEffect, useState } from "react";
import CustomCarousel from "../Carousel";
import next from "../../../../../public/images/vip/next.svg";
import prev from "../../../../../public/images/vip/prev.svg";
import level1 from "../../../../../public/images/levels/level1.svg";
import level4 from "../../../../../public/images/levels/level4.svg";
import level3 from "../../../../../public/images/levels/level3.svg";
import level5 from "../../../../../public/images/levels/level5.svg";
import level6 from "../../../../../public/images/levels/level6.svg";
import level7 from "../../../../../public/images/levels/level7.svg";
import level8 from "../../../../../public/images/levels/level8.svg";
import level0 from "../../../../../public/images/levels/level0.svg";
import level10 from "../../../../../public/images/levels/level10.svg";
import levelBg from "../../../../../public/images/levels/levelBg.svg";
import { styled } from "@mui/system";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import TextWithBg from "@/Components/UtilComponents/TextWithBg";
import { Divider } from "@/Components/Divider/Divider";

const CarouselCard = styled("div")(({ color, isMobile }) => ({
    // background: `#2E335A`,
    background: `url(${levelBg})`,
    // background: "#2E335A",
    backgroundSize: isMobile ? "cover" : "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    borderRadius: "10px",
    width: "fit-content",
    padding: "32px",
    margin: isMobile && "0 auto",
    textAlign: "center",

    "&::before": {
        content: '""',
        position: "absolute",
        top: "20%",
        left: "0",
        width: "100%",
        height: "50%",
        background: `${color}`,
        filter: "blur(45px)",
        borderRadius: "10px 0px 50px",
        opacity: "0.3",
        zIndex: 1,
    },
}));

const VipCarouselCard = ({ item }) => {
    const { isMobile } = useScreenResolution();
    return (
        <CarouselCard color={item.color} isMobile={isMobile}>
            <div style={{ position: "absolute", top: "0", left: isMobile ? '44%' : "46%" }}>
                <img src={item.icon} alt="level1" style={{ height: "60px" }} />
            </div>
            <div style={{ zIndex: 200 }}>
                <Text
                    type="p"
                    text={`VIP ${item.level}`}
                    color="#FFD338"
                    fontSize="16px"
                    fontWeight="bold"
                    marginTop="40px"
                />
                <Text
                    type="p"
                    text="Update Conditions"
                    fontSize="16px"
                    fontWeight="bold"
                />
                <Flex
                    alignItems="center"
                    gap="5px"
                    margin="20px 0 20px 0"
                    style={{ zIndex: 20000 }}
                >
                    <TextWithBg
                        bg="#121539"
                        primaryText="Total deposits"
                        secondaryText={item.totalDesposit}
                        primaryTextSize="14px"
                        secondaryTextSize="11px"
                        secondaryColor="#3586FF"
                        padding="10px 25px"
                    />
                    <TextWithBg
                        padding="10px 25px"
                        bg="#121539"
                        primaryText="Total bets"
                        primaryTextSize="14px"
                        secondaryTextSize="11px"
                        secondaryText={item.totalBet}
                        secondaryColor="#3586FF"
                    />
                </Flex>
                <Text
                    type="p"
                    text="LEVEL PROTECTION"
                    color="#FFD338"
                    fontSize="16px"
                    fontWeight="bold"
                    paddingTop="10px"
                />
                <Text
                    type="p"
                    text={`DEPOSIT R$ ${item.levelProtection}/MONTH`}
                    fontSize="14px"
                    fontWeight="bold"
                />
                <Divider margin="20px" bg="#6A72B2" />
                <Text
                    type="p"
                    text="WITHDRAWAL PRIVILEGES"
                    color="#FFD338"
                    fontSize="16px"
                    fontWeight="bold"
                    paddingTop="10px"
                />
                <Text
                    type="p"
                    text={`Number of withdrawals.: ${item.numOfWithdraw} /day`}
                    fontSize="14px"
                />
                <Text
                    type="p"
                    text={`Maximum withdrawals: R$${item.maximumWithdraw}.000`}
                    fontSize="14px"
                />
                <Text
                    type="p"
                    text={`Withdrawal fee: ${item.withFee}%`}
                    fontSize="14px"
                />
                <Text
                    type="p"
                    text={`Free withdrawal amount: R$${item.withAmount}.000`}
                    fontSize="14px"
                />

                <Divider margin="20px" bg="#6A72B2" />
                <Text
                    type="p"
                    text="CashBack"
                    color="#FFD338"
                    fontSize="16px"
                    fontWeight="bold"
                    paddingTop="10px"
                />
                <Flex alignItems="center" justifyContent="space-between">
                    <Text
                        type="p"
                        text={`DICE: ${item.dice}`}
                        fontSize="12px"
                        color="white"
                    />
                    <Text
                        type="p"
                        text={`CRASH: ${item.crash}`}
                        fontSize="12px"
                        color="white"
                    />
                </Flex>
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0 0 0 0"
                >
                    <Text
                        type="p"
                        text={`PLINKO: ${item.plimko}`}
                        fontSize="12px"
                        color="white"
                    />
                    <Text
                        type="p"
                        text={`Limbo: ${item.limbo}`}
                        fontSize="12px"
                        color="white"
                    />
                </Flex>
            </div>
        </CarouselCard>
    );
};

const VipCarousel = () => {
    const { isMobile, width } = useScreenResolution();
    console.log("widthsdf: ", width);
    const [slidesToShow, setSlidesToShow] = useState(4);
    useEffect(() => {
        if (width < 768) {
            setSlidesToShow(1);
        } else if (width < 1024) {
            setSlidesToShow(2);
        } else if (width < 1480) {
            setSlidesToShow(3);
        } else {
            setSlidesToShow(4);
        }
    }, [width]);

    const vipLevels = [
        {
            icon: level10,
            level: "10",
            totalDesposit: "R$ 10000000",
            totalBet: "R$ 40000000",
            levelProtection: "1000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3586FF",
        },
        {
            icon: level0,
            level: "0",
            totalDesposit: "R$ 0",
            totalBet: "R$ 0",
            levelProtection: "0",
            numOfWithdraw: "5",
            maximumWithdraw: "0",
            withFee: "2.5%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#F93C56",
        },
        {
            icon: level1,
            level: "1",
            totalDesposit: "R$ 100",
            totalBet: "R$ 800",
            levelProtection: "100",
            numOfWithdraw: "2",
            maximumWithdraw: "2500",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3DF689",
        },
        {
            icon: level3,
            level: "2",
            totalDesposit: "R$ 500",
            totalBet: "R$ 4000",
            levelProtection: "200",
            numOfWithdraw: "3",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#6E3DFA",
        },
        {
            icon: level4,
            level: "3",
            totalDesposit: "R$ 2000",
            totalBet: "R$ 16000",
            levelProtection: "500",
            numOfWithdraw: "3",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3DFAFA",
        },
        {
            icon: level5,
            level: "4",
            totalDesposit: "R$ 10000",
            totalBet: "R$ 800000",
            levelProtection: "2000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "400",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#F93C56",
        },
        {
            icon: level6,
            level: "5",
            totalDesposit: "R$ 50000",
            totalBet: "R$ 400000",
            levelProtection: "1000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3DF689",
        },
        {
            icon: level7,
            level: "6",
            totalDesposit: "R$ 2000000",
            totalBet: "R$ 12000000",
            levelProtection: "20000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#6E3DFA",
        },
        {
            icon: level8,
            level: "7",
            totalDesposit: "R$ 500000",
            totalBet: "R$ 30000000",
            levelProtection: "50000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3DFAFA",
        },
        {
            icon: level10,
            level: "10",
            totalDesposit: "R$ 10000000",
            totalBet: "R$ 40000000",
            levelProtection: "150000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3586FF",
        },
        {
            icon: level0,
            level: "0",
            totalDesposit: "R$ 0",
            totalBet: "R$ 0",
            levelProtection: "0",
            numOfWithdraw: "5",
            maximumWithdraw: "0",
            withFee: "2.5%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#F93C56",
        },
        {
            icon: level1,
            level: "1",
            totalDesposit: "R$ 50000000",
            totalBet: "R$ 200000000",
            levelProtection: "50000",
            numOfWithdraw: "5",
            maximumWithdraw: "20",
            withFee: "1%",
            withAmount: "50",
            dice: "0.5%",
            crash: "0.5%",
            limbo: "0.5%",
            plimko: "0.5%",
            color: "#3DF689",
        },
    ];
    return (
        <div>
            <CustomCarousel
                autoplay={false}
                rowPerCount={slidesToShow}
                paging={false}
                prevArrow={<img src={prev} alt="prev" />}
                nextArrow={<img src={next} alt="next" />}
            >
                {vipLevels.map((item, index) => (
                    <div style={{ margin: "20px!important" }}>
                        <div className="testimoni--wrapper" key={index}>
                            <VipCarouselCard item={item} />
                        </div>
                    </div>
                ))}
            </CustomCarousel>
        </div>
    );
};

export default VipCarousel;
