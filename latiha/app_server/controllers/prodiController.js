// const axios = require("axios");

// const index = async (req, res) => {
//     try {
//         // mendapatkan data prodi dari API eksternal
//         const response = await axios.get(
//             "http://localhost:3000/api/prodi"
//         );

//         const prodi = response.data;

//         res.render("prodi", {
//             title: "Halaman Prodi",
//             prodi,
//             layout: "main",
//         });
//     }catch (error)  {
//         console.error(error.mesage);
//         res.status(500).send("Gagal mendapatkan data prodi dari api");
//     }
// };

// const store = async (req, res) => {
//     const { nama, singkatan, fakultas_id } = req.body;
//     try {
//       const response = await fetch(
//             "http://localhost:3000/api/prodi",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ nama, singkatan, fakultas_id}),
//         }
//       );
  
//       if (response.ok) {
//         res.redirect("/prodi"); // Redirect ke halaman fakultas setelah berhasil menambah
//       } else {
//         res.status(500).send("Gagal menambahkan data prodi.");
//       }
//     } catch (error) {
//       res.status(500).send("Error menambahkan data prodi");
//     }
//   };

// module.exports = {index, store};
// // const prodi = (req, res) => {
// //     const programstudi =[
// //         {NamaProdi: "Sistem Informasi", Fakultas: "FIKR", Singkatan: "SI"},
// //         {NamaProdi: "Informatika", Fakultas: "FIKR", Singkatan: "IF"},
// //         {NamaProdi: "Teknik Elektro", Fakultas: "FIKR", Singkatan: "TE"},
// //         {NamaProdi: "Manajemen Informatika", Fakultas: "FIKR",Singkatan: "MI"},
// //         {NamaProdi: "Manajemen", Fakultas: "FEB", Singkatan: "MJ"},
// //         {NamaProdi: "Akuntasi", Fakultas: "FEB", Singkatan: "AK"}
// //     ];
// //     res.render('prodi',{title: 'halaman prodi',programstudi,layout:'main'});
// // };

// // module.exports = {prodi}