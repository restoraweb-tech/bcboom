import { navlinks } from "@/data";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setAuthModalState } from "@/redux/auth/auth-slice";
import { Link } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import UserDropdown from "../UserDropdown/UserDropdown";
const InnerHeaderWrapper = styled("div")(({ isMobile }) => ({
    padding: isMobile ? "20px 20px 0 20px" : "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    overflowX: "auto",
    gap: isMobile && "50px",
    "-ms-overflow-style": "none" /* IE and Edge */,
    "scrollbar-width": "none",
    "&::-webkit-scrollbar": {
        display: "none",
    },
    background: isMobile && "#191D3A",
}));

const InnerHeaderItems = styled("div")(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    gap: isMobile ? "50px" : "20px",
    minWidth: "max-content",
}));
const InnerHeaderItem = styled("div")(({ active }) => ({
    display: "flex",
    cursor: "pointer",
    paddingBottom: "5px",
    borderBottom: active && "2px solid #3586FF",
    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "14px",
        color: active ? "#3586FF" : "#8990AE",
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
        whiteSpace: "nowrap",
    },
}));
const InnerHeader = () => {
    const { isMobile, width } = useScreenResolution();
    const { user } = useSelector((state) => state.auth);
    const location =
        typeof window !== undefined
            ? window.location.pathname.split("/")[1]
            : "";
    // useEffect(() => {
    //     const location =
    //         typeof window !== undefined ? window.location.pathname : "";
    //     setLocation(location);
    // }, []);
    const navItems = [
        "/",
        "slots",
        "games",
        "live-casino",
        "race",
        "promotion",
        "promotions/bonus_everyday",
        "promotions/exclusive",
    ];
    const dispatcher = useDispatch();

    return (
        <InnerHeaderWrapper isMobile={isMobile}>
            <InnerHeaderItems isMobile={isMobile}>
                {navlinks.slice(0, 5).map((item, index) => {
                    return (
                        <Link href={item.link} preserveScroll preserveState key={index}>
                            <InnerHeaderItem
                                key={index}
                                active={location == item.link.replace("/", "")}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    style={{
                                        filter:
                                            location ==
                                                item.link.replace("/", "") &&
                                            "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
                                    }}
                                />
                                <p>{item.name}</p>
                            </InnerHeaderItem>
                        </Link>
                    );
                })}
            </InnerHeaderItems>
            <InnerHeaderItems isMobile={isMobile}>
                {navlinks.slice(5, 8).map((item, index) => (
                    <Link
                        href={user?.user ? item.link : "/"}
                        preserveScroll
                        preserveState
                        key={index}
                    >
                        <InnerHeaderItem
                            active={location == item.link.replace("/", "")}
                            onClick={() => {
                                if (!user?.user) {
                                    dispatcher(
                                        setAuthModalState({
                                            open: true,
                                            tab: 0,
                                        })
                                    );
                                }
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    filter:
                                        location ==
                                            item.link.replace("/", "") &&
                                        "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
                                }}
                            />
                            <p>{item.name}</p>
                        </InnerHeaderItem>{" "}
                    </Link>
                ))}
                {!isMobile && width >= 1010 && (
                    <UserDropdown isLoggedIn={user?.user} />
                )}
            </InnerHeaderItems>
        </InnerHeaderWrapper>
    );
};

export default InnerHeader;
