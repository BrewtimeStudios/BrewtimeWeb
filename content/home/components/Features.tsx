import FeatureCard from "./FeatureCard";

const BrewFeature = () => (
  <div>
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "3rem",
      }}
    >
      <FeatureCard
        {...{
          title: "Log & list brews",
          subtitle: "Keep brews collected neatly in a list",
          image: "/images/home-screen.png",
        }}
      />
      <FeatureCard
        {...{
          title: "Brew like yourself.",
          subtitle: "Only log the information important to you.",
          image: "/images/add-brew-screen.png",
        }}
      />
    </div>
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <FeatureCard
        {...{
          title: "Beans Inventory.",
          subtitle:
            "Keep your beans organized. Active Beans can be linked with your brews.",
          image: "/images/beans-screen.png",
        }}
      />
      <FeatureCard
        {...{
          title: "Beans logging, your way.",
          subtitle: "Keep track of the parameters that matter to your beans.",
          image: "/images/add-beans-screen.png",
        }}
      />
    </div>
  </div>
);

export default BrewFeature;
