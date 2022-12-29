import React from "react";
import coins from "../../../../assets/games/coin2.svg";
import bomb from "../../../../assets/games/Bomb.svg";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { minesBettingData } from "@/data/games";
import BettingBox from "../carousel/BettingBox";

let carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const Frame = styled("div")(() => ({
    height: "23.25rem",
    width: "100%",
    display: "flex",
}));

const Item = styled("div")(() => ({
    height: "3.125rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#296CD3",
    borderRadius: ".3125rem",
    fontWeight: 900,
    fontSize: "1.5rem",
    color: "#90A3C7",
    cursor: "pointer",
    transition: "all .1s ease-out",
    "&:hover": {
        transform: "scale(1.3) ",
        background: "transparent",
    },
}));

const gridArray = new Array(25).fill(0);

const MinesFrame = () => {
    return (
        <Frame>
            <Box
                sx={{
                    width: "20%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "3.2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "6rem",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        COINS
                    </Typography>
                    <img src={coins} />
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        22
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "60%",
                    height: "calc(100% + 2.5rem)",
                    position: "relative",
                    top: "-2.5rem",
                    backgroundColor: "#333965",
                    py: "1rem",
                    display: "flex",
                    //justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "16rem",
                    }}
                >
                    <Grid container spacing={1}>
                        {gridArray.map((item, idx) => {
                            return (
                                <Grid item xs={2.4}>
                                    <Item key={idx}>?</Item>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
                <Box sx={{ mt: "2.8125rem", width: "80%" }}>
                    <Slider {...carouselSettings}>
                        {minesBettingData?.map((data, index) => (
                            <BettingBox
                                key={index}
                                multiplier={data.multiplier}
                                hits={data.hits}
                            />
                        ))}
                    </Slider>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "20%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "3.2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "6.5rem",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        COINS
                    </Typography>
                    <img src={bomb} />
                    <Typography
                        sx={{
                            color: "white",
                            fontWeight: 800,
                            fontSize: ".875rem",
                            textAlign: "center",
                        }}
                    >
                        3
                    </Typography>
                </Box>
            </Box>
        </Frame>
    );
};

export default MinesFrame;