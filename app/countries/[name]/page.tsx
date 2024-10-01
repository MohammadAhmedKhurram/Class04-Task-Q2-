import Link from "next/link";

export default function CountrysInfo({ params }: { params: { name: string } }) {
  let countrysData = [
    {
      Name: "China",
      Population: "1.425 billion",
      Capital: "Beijing",
      Bonus_Fun_Fact:
        "China has the longest continuous civilization, dating back over 4,000 years, and it is home to the Great Wall, the longest man-made structure in the world.",
    },
    {
      Name: "USA",
      Population: "335 million",
      Capital: "Washington, D.C.",
      Bonus_Fun_Fact:
        "The United States has no official language, though English is the most widely spoken. The country is also home to the world’s largest economy.",
    },
    {
      Name: "India",
      Population: "1.428 billion",
      Capital: "New Delhi",
      Bonus_Fun_Fact:
        "India is the largest democracy in the world, and it’s also the birthplace of yoga, which dates back over 5,000 years.",
    },
    {
      Name: "Brazil",
      Population: "216 million",
      Capital: "Brasília",
      Bonus_Fun_Fact:
        "Brazil is the only country in South America that speaks Portuguese, and it’s home to the Amazon Rainforest, the largest tropical rainforest in the world.",
    },
    {
      Name: "Japan",
      Population: "124 million",
      Capital: "Tokyo",
      Bonus_Fun_Fact:
        "Japan has more than 6,800 islands, and its people have the longest life expectancy in the world. The country is also famous for its cherry blossoms, which bloom every spring.",
    },
  ];

  const selectedCountry = countrysData.find(
    (country) => country.Name === params.name
  );

  if (!selectedCountry) {
    return <div>Country not found!</div>;
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <table
        style={{
          borderCollapse: "collapse",
          width: "40%",
          backgroundColor: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid #D73E10",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "20px"
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "12px",
                backgroundColor: "#D73E10",
                color: "white",
                fontSize: "18px",
                borderTopLeftRadius: "20px", 
                borderTopRightRadius: "20px", 
                borderBottom: "1px solid #D73E10",
              }}
            >
              Country Info
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "18px",
                color: "#D73E10",
                borderBottom: "1px solid #D73E10",
              }}
            >
              Name:
            </th>
            <td
              style={{
                color: "black",
                textAlign: "left",
                padding: "12px",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              {selectedCountry.Name}
            </td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "18px",
                color: "#D73E10",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              Population:
            </th>
            <td
              style={{
                color: "black",
                textAlign: "left",
                padding: "12px",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              {selectedCountry.Population}
            </td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "18px",
                color: "#D73E10",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              Capital:
            </th>
            <td
              style={{
                color: "black",
                textAlign: "left",
                padding: "12px",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              {selectedCountry.Capital}
            </td>
          </tr>
          <tr>
            <th
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "18px",
                color: "#D73E10",
                backgroundColor: "white",
                borderBottom: "1px solid #D73E10",
              }}
            >
              Bonus Fun Fact:
            </th>
            <td
              style={{
                color: "black",
                textAlign: "left",
                padding: "12px",
                backgroundColor: "white",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                borderBottom: "none",
              }}
            >
              {selectedCountry.Bonus_Fun_Fact}
            </td>
          </tr>
        </tbody>
      </table>

      <Link href="./../../countries">
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
            Back To Country Page
          </button>
        </Link>
    </div>
  );
}
