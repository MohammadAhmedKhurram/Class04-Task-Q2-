import Link from "next/link";

const countries = ["China", "USA", "India", "Brazil", "Japan"];

const CountryList = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#F3F6FF",
      }}
    >
      <h1
        style={{
          color: "#11F0DF",
          fontSize: "35px",
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#00004F",
          fontWeight: "bolder"
        }}
      >
        Country List:
      </h1>

      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <ol
          style={{
            listStyleType: "decimal",
            listStylePosition: "inside",
            textAlign: "center",
            color: "#000000",
          }}
        >
          {countries.map((country, index) => (
            <li
              key={index}
              style={{
                paddingTop: "8px",
                fontSize: "24px",
              }}
            >
              <Link
                href={`/countries/${country}`}
                style={{ color: "#000000", textDecoration: "underline" }}
              >
                {country}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="/">
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
              fontWeight: "bold",
            }}
          >
            Back To Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CountryList;
