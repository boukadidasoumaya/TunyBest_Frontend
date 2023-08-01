import React from "react";


const Home = () => {
  return (
    <>
      <div
        className="Frame1"
        style={{
          width: 1500,
          height: 753.6,
          position: "relative",
          background: "white",
        }}
      >
      
        <img
          className="1"
          style={{
            width: 1500,
            height: 753.6,
            left: -8,
            top: 65,
            position: "absolute",
            borderLeft: "0.50px black solid",
            borderTop: "0.50px black solid",
            borderRight: "0.50px black solid",
            borderBottom: "0.50px black solid",
          }}
          src={require("../assets/peaky blinders.png")}
        />
        <div
          className="PeakyBlinders"
          style={{
            width: 361,
            height: 70,
            left: 56,
            top: 304,
            position: "absolute",
            color: "white",
            fontSize: 55,
            fontFamily: "Jaldi",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Peaky Blinders
        </div>
        <div
          className="Ellipse1"
          style={{
            width: 40,
            height: 40,
            right: 50,
            top: 396,
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: 9999,
          }}
        />
        <div
          className="Rectangle4"
          style={{
            width: 132,
            height: 38,
            left: 59,
            top: 541,
            position: "absolute",
            background: "#D79D88",
            boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
            borderRadius: 20,
          }}
        ></div>
        <div
          className="Rectangle3"
          style={{
            width: 132,
            height: 38,
            left: 239,
            top: 541,
            position: "absolute",
            background: "#0F131E",
            boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.25)",
            borderRadius: 20,
          }}
        ></div>
        <div
          className="PlusSolid1"
          style={{
            width: 18,
            height: 18,
            paddingLeft: 0.64,
            paddingRight: 0.64,
            paddingTop: 1.69,
            paddingBottom: 1.69,
            left: 249,
            top: 551,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <i
            class="fa-solid fa-plus"
            style={{ width: 16.71, height: 14.62, color: "#ffffff" }}
          ></i>
        </div>
        <div
          className="AddList"
          style={{
            left: 274,
            top: 540,
            position: "absolute",
            color: "white",
            fontSize: 25,
            fontFamily: "Jaldi",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Add List
        </div>
        <div
          className="Discover"
          style={{
            left: 80,
            top: 540,
            position: "absolute",
            color: "white",
            fontSize: 25,
            fontFamily: "Jaldi",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Discover
        </div>
      </div>
    </>
  );
};

export default Home;
