import { Path, Svg } from "react-native-svg";

export const PianoIcon = ({ color }: { color?: string }) => {
  if (!color) color = "#2c3e50";
  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <Path d="M9 19v-6" />
      <Path d="M8 5v8h2v-8" />
      <Path d="M15 19v-6" />
      <Path d="M14 5v8h2v-8" />
    </Svg>
  );
};
