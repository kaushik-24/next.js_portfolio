import { forwardRef } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confettii.json";

const LottieWithRef = forwardRef((props: any, ref) => {
  return <Lottie {...props} ref={ref} />;
});

LottieWithRef.displayName = "LottieWithRef";

export default LottieWithRef;
