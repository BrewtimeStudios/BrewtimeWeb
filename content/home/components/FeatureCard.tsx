import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  image: any;
};
const FeatureCard: React.FC<Props> = ({ title, subtitle, image }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column-reverse",
      width: "400px",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          padding: "8px",
          borderRadius: "30px",
        }}
      >
        <Image alt="brews screen" src={image} width={195} height={422} />
      </div>
    </div>
    <div style={{}}>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <h3 style={{ textAlign: "center" }}>{subtitle}</h3>
    </div>
  </div>
);

export default FeatureCard;
