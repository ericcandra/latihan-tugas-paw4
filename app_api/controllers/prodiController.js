const Prodi = require("../models/prodi");


const getAllProdi = async (req, res) =>{
    try {
        // mengambil semua fakultas dari database
        const prodi = await Prodi.find().populate("fakultas_id", "nama singkatan");
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    }catch (err) {
        // mengirim respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

const getProdiById = async (req, res) => {
    try {
        // mencari fakultas berdasarkan id yang diberikan di parameter
        const prodi = await Prodi.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respon 404
        if (!prodi)
            return res.status(404).json({ message: "Prodi not found" });
        // mengirim respon dengan status 200 dan data fakultas
        res.status(200).json(prodi);
    }catch (err) {
        // mengirim respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

const createProdi = async (req, res) => {
    // membuat instance fakultas baru dari data yang diterima
    const prodi = new Prodi({
        nama: req.body.nama,
        singkatan: req.body.singkatan,
        fakultas_id: req.body.fakultas_id,
    });

    try {
        // menyimpan fakultas baru ke database
        const newProdi = await prodi.save();
        // mengirim respon dengan status 201 dan data fakultas baru
        res.status(201).json(newProdi);
    }catch (err) {
        // mengirim respon dengan status 400 jika ada kesalahan saat menyimpan
        res.status(400).json({ message: err.message })
    }
};

const updateProdi = async (req, res) => {
    const { nama, singkatan, fakultas_id,  } = req.body;
    try {
        const prodi = await Prodi.findById(req.params.id); // Mencari mahasiswa berdasarkan ID
        if (!prodi)
          return res.status(404).json({ message: "prodi not found" }); // Jika mahasiswa tidak ditemukan
    
        // if (req.file) {
        //   // Jika ada file foto baru
        //   if (mahasiswa.foto) {
        //     // Hapus foto lama jika ada
        //     fs.unlinkSync(path.join(__dirname, "../", mahasiswa.foto));
        //   }
        //   mahasiswa.foto = req.file.path; // Simpan path file baru
        // }
    
        // Perbarui field mahasiswa
        prodi.nama = nama ?? prodi.nama;
        prodi.singkatan = singkatan ?? prodi.singkatan;
        prodi.fakultas_id = fakultas_id ?? prodi.fakultas_id;
        // mahasiswa.npm = npm ?? mahasiswa.npm;
        // mahasiswa.nama = nama ?? mahasiswa.nama;
        // mahasiswa.prodi_id = prodi_id ?? mahasiswa.prodi_id;
        // mahasiswa.jenis_kelamin = jenis_kelamin ?? mahasiswa.jenis_kelamin;
        // mahasiswa.asal_sekolah = asal_sekolah ?? mahasiswa.asal_sekolah;
    
        await prodi.save(); // Menyimpan data mahasiswa yang diperbarui ke database
        res.json(prodi); // Mengembalikan data mahasiswa yang diperbarui
      } catch (error) {
        res.status(500).json({ message: error.message }); // Menangani error
      }
    };
    

const deleteProdi = async (req, res) => {
    try {
        const prodi = await Prodi.findById(req.params.id);
        // jika fakultas tidak ditemukan, kirimkan respon 404
        if (!prodi)
            return res.status(404).json({ message: "Prodi not found" });

        // menghapus fakultas dari database
        await prodi.deleteOne();
        // mengirimkan respon dengan status 200 dan pesan penghapusan
        res.status(200).json({ message: "Prodi deleted"});
    }catch (err) {
        // mengirimkan respon dengan status 500 jika terjadi kesalahan
        res.status(500).json({ message: err.message });
    }
};

module.exports = {getAllProdi,createProdi,getProdiById,updateProdi,deleteProdi};