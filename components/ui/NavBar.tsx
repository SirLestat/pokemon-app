import { Image, Spacer } from "@nextui-org/react";

const NavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: "grey",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png"
        alt="icono"
        width={80}
        height={80}
      />

      <div>
        <span style={{ fontSize: "40px" }}>P</span>
        <span style={{ fontSize: "20px" }}>okémon</span>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <span style={{ fontSize: "20px" }}>Favoritos</span>
      </div>
    </div>
  );
};

export default NavBar;
