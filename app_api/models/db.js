// model db js
// mengimpor modul mongoose untuk mengelola koneksi dengan mongodb
const mongoose = require("mongoose");

// fungsi asinkron untuk menghubungkan ke database mongodb
const connectDB = async () => {
    try {
        //menghubungkan ke mongodb menggunakan url koneksi
        await mongoose.connect(
            // "mongodb+srv://ericcandra:eric123@cluster0.hadmb.mongodb.net/mdpdb?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb://localhost:27017/mdpdb"
            // "mongodb+srv://perpustakaan:12345@cluster0.hadmb.mongodb.net/belajarexpress?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb+srv://latihan:latihan12345@cluster0.0ng44.mongodb.net/latihan?retryWrites=true&w=majority&appName=Cluster0"
            // "mongodb+srv://perpustakaan:12345@cluster0.hadmb.mongodb.net/perpustakaan?retryWrites=true&w=majority&appName=Cluster0"
            "mongodb+srv://latihan:latihan654321@cluster0.hadmb.mongodb.net/latihan?retryWrites=true&w=majority&appName=Cluster0"
        );
        // jika koneksi berhasil log pesan ke konsol
        console.log("MongoDb Connected");
    } catch (error) {
        // jika terjadi kesalahan saat menghubungkan, log pesan kesalahan ke konsol
        console.error("MongoDB connection error:", error);
        // keluar dari proses dengan kode status 1 untuk menandakan ada kesalahan
        process.exit(1);
    }
};

module.exports = connectDB;