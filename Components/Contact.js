import React from 'react';

const link = document.createElement('link');
// link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const styles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      maxWidth: '500px', 
      margin: 'auto', 
      marginTop: '50px', 
      fontFamily: "Poppins, sans-serif"
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      marginBottom: '10px',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
      marginBottom: '10px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: "#CAA6A6",
      color: '#black',
      cursor: 'pointer',
    },
  };

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <h2>Hubungi Kami</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Nama:</label>
            <input type="text" id="name" name="name" placeholder="Masukkan nama Anda" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input type="email" id="email" name="email" placeholder="Masukkan email Anda" style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Pesan:</label>
            <textarea id="message" name="message" placeholder="message" style={styles.textarea} required></textarea>
          </div>
          <button type="submit" style={styles.button}>Kirim</button>
        </form>
      </div>
    );
  }
}

export default Contact; 