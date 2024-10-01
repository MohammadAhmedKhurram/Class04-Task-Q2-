import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F3F6FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          color: "black",
          fontSize: "50px",
        }}
      >
        Dynamic Routing Task by{" "}
        <strong>
          <i
            style={{
              color: "#D73E10",
            }}
          >
            "Muhammad Ahmed"
          </i>
        </strong>
      </p>

      <Link href="./countries">
        <button
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#D73E10",
            paddingTop: "10px ",
            paddingBottom: "10px ",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "10px",
            margin: "20px",
            fontWeight: "bold",
          }}
        >
          Country Page
        </button>
      </Link>
    </div>
  );
}
