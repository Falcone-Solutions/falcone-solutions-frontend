import { useEffect, useState } from "react";
import NextImage, { ImageProps } from "next/image";

type Props = {
  src: string;
  height: number;
  width: number;
} & ImageProps;

export default function Image(props: Props) {
  const { src, height, width, ...otherProps } = props;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 500);
  }, []);

  return (
    <div
      style={{
        opacity: ready ? 1 : 0,
        transition: "opacity .5s ease-in-out",
      }}
    >
      <NextImage src={src} height={height} width={width} {...otherProps} />
    </div>
  );
}
