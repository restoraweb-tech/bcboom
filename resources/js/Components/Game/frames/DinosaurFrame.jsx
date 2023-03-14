import { styled } from "@mui/system";
import { useRef } from "react";
import ReactDOMServer from "react-dom/server";

import { useEffect } from "react";
const Frame = styled("div")(() => ({
    height: "600px",
    width: "100%",
    maxWidth: "770px",

    ".jet_header": {
        display: "none!important",
    },
    ".table_btns": {
        display: "none",
    },
    ".section_history": {
        display: "none",
    },
    ".more_tend_wr .game-recent": {
        display: "none!important",
    },
}));

const DinosaurFrame = ({ gameDetails }) => {
    if (gameDetails?.result === undefined) return null;
    const gameUrl = JSON.parse(gameDetails?.result).url;
    // const iframeRef = useRef(null);
    // useEffect(() => {
    //     const iframe = iframeRef.current;
    //     if (!iframe) return;
    //     iframe.addEventListener("load", () => {
    //         const iframeWindow = iframe.contentWindow;
    //         console.log("nav: ", iframeWindow.document.querySelector("#stars"));
    //         const iframeDocument = iframeWindow.document;
    //         const nav = iframeDocument.querySelector("#navbar");
    //         nav.style.display = "none";
    //     });
    // }, [iframeRef]);

    return (
        <Frame
           
                dangerouslySetInnerHTML={{
                    __html: ReactDOMServer.renderToString(
                        <iframe
                            src={gameUrl}
                            width="100%"
                            height="100%"
                            sandbox="allow-scripts allow-same-origin"
                            name="crashFrame"
                            title="Crash game"
                        />
                    ),
                }}
            />
        // </Frame>
    );
};

export default DinosaurFrame;
