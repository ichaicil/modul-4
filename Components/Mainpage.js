import React from 'react';
import { Link } from 'react-router-dom';

const link = document.createElement('link');
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Poppins, sans-serif'
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '32px',
      marginBottom: '10px',
      color: '#643843',
    },
    subtitle: {
      fontSize: '18px',
      color: '#666',
    },
    content: {
      marginBottom: '40px',
      backgroundColor: "#FFE7E7",
      borderRadius: "60px",
      padding: "30px",
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '10px',
      color: '#333',
    },
    }

class MainPage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Selamat Datang di Portofolio Saya</h1>
          <p style={styles.subtitle}>Ini adalah halaman beranda yang berisi tentang saya</p>
        </header>
        <section style={styles.content}>
          <h2 style={styles.sectionTitle}>Tentang Saya</h2>
          <p style={styles.sectionContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, diam sit amet fermentum ultricies, felis metus placerat ligula, nec tempor justo felis in dui. Vestibulum scelerisque, nulla et ullamcorper efficitur, nisl nisi molestie lacus, ac lacinia elit ipsum id ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada, diam sit amet fermentum ultricies, felis metus placerat ligula, nec tempor justo felis in dui. Vestibulum scelerisque, nulla et ullamcorper efficitur, nisl nisi molestie lacus, ac lacinia elit ipsum id ipsum. 
          </p>
        </section>
      </div>
    );
  }
}

export default MainPage;