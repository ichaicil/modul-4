import React, { Component } from "react";
import { Modal } from "bootstrap";
import Card from "./Card";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      buku: [
        {
          isbn: "12345", 
          judul: "Matahari", 
          penulis: "Tere Liye",
          penerbit: "CV Harapan Kita", 
          harga: 99000,
          cover: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/33455/110012/1.jpg",
        },
        {
          isbn: "123456",
          judul: "Bintang",
          penulis: "Tere Liye",
          penerbit: "CV Nusa Bangsa",
          harga: 99000,
          cover: "https://1.bp.blogspot.com/-wzw7h4wUIvY/XxGl_Ac5jKI/AAAAAAAABCA/nxpaqLAjln41yuposO1nctjwK5ko1jRfACLcBGAsYHQ/s1600/bintang.jpg",
        },
        {
          isbn: "1234567",
          judul: "Bumi ",
          penulis: "Tere Liye",
          penerbit: "CV Nusa Bangsa ",
          harga: 99000,
          cover: "https://1.bp.blogspot.com/-hwQ-Ahp78bs/XxGp4XdS1II/AAAAAAAABCM/7dh0OpyMlq8Gzr34Qi9VB9c1rDpp45s5QCLcBGAsYHQ/s1600/bumii.jpg",
        },
      ],
      action: "",
      isbn: "",
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      harga: 0,
      keyword: "",
      filterBuku: [],
      selectedItem: null,
      modal: null,
    };
    this.state.filterBuku = this.state.buku;
  }

  componentDidMount() {
    this.setState({
      modal: Modal.getOrCreateInstance("#modal_buku"),
    });
    this.setUser()
  }

  Add = () => {
    this.state.modal.show();
    this.setState({
      isbn: Math.random().toString(),
      judul: "",
      penulis: "",
      penerbit: "",
      cover: "",
      harga: 0,
      action: "insert",
    });
  };

  Edit = (item) => {
    this.state.modal.show();
    this.setState({
      isbn: item.isbn,
      judul: item.judul,
      penulis: item.penulis,
      penerbit: item.penerbit,
      cover: item.cover,
      harga: item.harga,
      action: "update",
      selectedItem: item,
    });
  };

  Save = (event) => {
    event.preventDefault();
    let tempBuku = this.state.buku;

    if (this.state.action === "insert") {
      tempBuku.push({
        isbn: this.state.isbn,
        judul: this.state.judul,
        penulis: this.state.penulis,
        penerbit: this.state.penerbit,
        cover: this.state.cover,
        harga: this.state.harga,
      });
    } else if (this.state.action === "update") {
      let index = tempBuku.indexOf(this.state.selectedItem);

      if (index !== -1) {
        tempBuku[index] = {
          isbn: this.state.isbn,
          judul: this.state.judul,
          penulis: this.state.penulis,
          penerbit: this.state.penerbit,
          cover: this.state.cover,
          harga: this.state.harga,
        };
      }
    }
    this.setState({ buku: tempBuku });
    this.state.modal.hide();
  };

  Drop = (item) => {
    if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      let tempBuku = this.state.buku
      let index = tempBuku.indexOf(item)
      tempBuku.splice(index, 1)
      this.setState({ buku: tempBuku })
    }
  }

  searching = (event) => {
    if (event.keyCode === 13) {
      let keyword = this.state.keyword.toLowerCase();
      let tempBuku = this.state.buku;
      let result = tempBuku.filter((item) => {
        return (
          item.judul.toLowerCase().includes(keyword) ||
          item.penulis.toLowerCase().includes(keyword) ||
          item.penerbit.toLowerCase().includes(keyword)
        );
      });
      this.setState({ filterBuku: result });
    }
  };

  setUser = () => {
    // cek eksistensi dari session storage
    if (sessionStorage.getItem("user") === null) {
      // kondisi jika session storage "user" belum dibuat
      let prompt = window.prompt("Masukkan Nama Anda", "")
      if (prompt === null || prompt === "") {
        // jika user tidak mengisikan namanya
        this.setUser()
      } else {
        // jika user telah mengisikan namanya

        // simpan nama user ke session storage
        sessionStorage.setItem("user", prompt)

        // simpan nama user ke state.user
        this.setState({ user: prompt })
      }
    } else {
      // kondisi saat session storage "user" telah dibuat

      // akses nilai dari session storage "user"
      let name = sessionStorage.getItem("user")
      this.setState({ user: name })
    }
  }

  addToCart = (selectedItem) => {
    // membuat sebuah variabel untuk menampung cart sementara
    let tempCart = []

    // cek eksistensi dari data cart pada localStorage
    if(localStorage.getItem("cart") !== null){
        tempCart = JSON.parse(localStorage.getItem("cart"))
        // JSON.parse() digunakan untuk mengonversi dari string -> array object
    }

    // cek data yang dipilih user ke keranjang belanja
    let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

    if(existItem){
        // jika item yang dipilih ada pada keranjang belanja
        window.alert("Anda telah memilih item ini")
    }else{
        // user diminta memasukkan jumlah item yang dibeli
        let promptJumlah = window.prompt("Masukkan jumlah item yang beli","")
        if(promptJumlah !== null && promptJumlah !== ""){
            // jika user memasukkan jumlah item yg dibeli

            // menambahkan properti "jumlahBeli" pada item yang dipilih
            selectedItem.jumlahBeli = promptJumlah
            
            // masukkan item yg dipilih ke dalam cart
            tempCart.push(selectedItem)

            // simpan array tempCart ke localStorage
            localStorage.setItem("cart", JSON.stringify(tempCart))
        }
    }
}

  render() {
    return (
      <div className="container">
        <h4 className="text-info my-2">
          Nama Pengguna: {this.state.user}
        </h4>
        <input
          type="text"
          className="form-control my-2"
          placeholder="Search"
          value={this.state.keyword}
          onChange={(ev) => this.setState({ keyword: ev.target.value })}
          onKeyUp={(ev) => this.searching(ev)}
        />

        <div className="row">
          {this.state.filterBuku.map((item, index) => (
            <Card
              key={index}
              judul={item.judul}
              penulis={item.penulis}
              penerbit={item.penerbit}
              harga={item.harga}
              cover={item.cover}
              onEdit={() => this.Edit(item)}
              onDrop={() => this.Drop(item)}
              onCart={() => this.addToCart(item)}
            />
          ))}
        </div>



        <button className="btn btn-success" onClick={() => this.Add()}>
          Tambah Data
        </button>

        <div className="modal" id="modal_buku">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">Form Buku</div>

              <div className="modal-body">
                <form onSubmit={this.Save}>
                  Judul Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.judul}
                    onChange={(ev) => this.setState({ judul: ev.target.value })}
                    required
                  />
                  Penulis Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.penulis}
                    onChange={(ev) => this.setState({ penulis: ev.target.value })}
                    required
                  />
                  Penerbit Buku
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={this.state.penerbit}
                    onChange={(ev) => this.setState({ penerbit: ev.target.value })}
                    required
                  />
                    harga buku
                  <input type="number"
                  className="form-control mb-2"
                  value={this.state.harga}
                  onChange={ev => this.setState({ harga: ev.target.value })}
                  required
                  />

                  Cover Buku
                  <input
                    type="url"
                    className="form-control mb-2"
                    value={this.state.cover}
                    onChange={(ev) => this.setState({ cover: ev.target.value })}
                    required
                  />
                  <button className="btn btn-info btn-block" type="submit">
                    Simpan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;