import Lottie from "lottie-react";
import { birdAnimation } from "../../assets";

export const BirdAnimation = ({width,height}) => (
    <Lottie animationData={birdAnimation} loop={true} style={{width: width,height: height}} />
);