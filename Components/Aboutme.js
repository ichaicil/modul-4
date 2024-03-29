import React from "react";

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    backgroundColor: "#FFE7E7",
    borderRadius: "50px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "436850",
  },
  content: {
    lineHeight: "1.6",
  },
};

class AboutMe extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Tentang Saya</h1>
        <div style={styles.content}>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p> 
        </div>
      </div>
    );
  }
}

export default AboutMe;