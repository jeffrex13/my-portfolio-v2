declare module "react-wavify" {
  import { ComponentType, CSSProperties } from "react";
  interface WavifyOptions {
    height?: number;
    amplitude?: number;
    speed?: number;
    points?: number;
  }
  interface WavifyProps {
    fill?: string;
    paused?: boolean;
    options?: WavifyOptions;
    style?: CSSProperties;
  }
  const Wavify: ComponentType<WavifyProps>;
  export default Wavify;
}