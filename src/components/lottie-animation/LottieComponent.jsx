import Lottie from "lottie-react";
import { birdAnimation, monkeyAnimation } from "../../assets";

export const BirdAnimation = () => (
    <Lottie animationData={birdAnimation} loop={true} style={{width: "100%"}} />
);

export const MonkeyAnimation = () => (
    <Lottie animationData={monkeyAnimation} loop={true} style={{width: "100%"}} />
);