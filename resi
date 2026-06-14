<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Resi Pengiriman Alvarendra Bookstore</title>

<style>
body{
    font-family:Arial,sans-serif;
    background:#f2f2f2;
    margin:0;
    padding:20px;
}

.form-box,
.resi{
    max-width:600px;
    margin:auto;
    background:#fff;
    padding:20px;
    border-radius:10px;
    box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

h2{
    margin-top:0;
}

.form-group{
    margin-bottom:15px;
}

label{
    display:block;
    font-weight:bold;
    margin-bottom:5px;
}

input,
textarea{
    width:100%;
    padding:10px;
    border:1px solid #ccc;
    border-radius:5px;
    box-sizing:border-box;
}

textarea{
    resize:vertical;
    min-height:80px;
}

button{
    background:#000;
    color:#fff;
    border:none;
    padding:12px 20px;
    border-radius:5px;
    cursor:pointer;
    font-size:15px;
}

button:hover{
    background:#333;
}

.resi{
    display:none;
}

.header{
    display:flex;
    align-items:flex-start;
    gap:10px;
    border-bottom:2px solid #000;
    padding-bottom:10px;
    margin-bottom:15px;
}

.logo{
    width:60px;
    height:60px;
    object-fit:contain;
}

.toko{
    flex:1;
}

.toko h3{
    margin:0;
}

.toko p{
    margin:3px 0;
    font-size:12px;
    line-height:1.4;
}

.info{
    margin-top:20px;
}

.info p{
    margin:8px 0;
    font-size:14px;
}

.value{
    font-weight:bold;
}

@media print{

    body{
        background:white;
        padding:0;
    }

    .form-box,
    .no-print{
        display:none;
    }

    .resi{
        display:block !important;
        width:105mm;
        height:148mm;
        max-width:none;
        margin:0;
        box-shadow:none;
        border:1px solid #000;
        border-radius:0;
        padding:10mm;
        box-sizing:border-box;
        page-break-after:avoid;
    }

    @page{
        size:A6 portrait;
        margin:0;
    }
}
</style>

</head>
<body>

<div class="form-box no-print">

    <h2>Formulir Resi Pengiriman</h2>

    <div class="form-group">
        <label>Nama Penerima</label>
        <input type="text" id="nama">
    </div>

    <div class="form-group">
        <label>No Handphone</label>
        <input type="text" id="hp">
    </div>

    <div class="form-group">
        <label>Alamat Lengkap</label>
        <textarea id="alamat"></textarea>
    </div>

    <button onclick="buatResi()">Buat Resi</button>

</div>

<div class="resi" id="resi">

    <div class="header">

        <!-- Ganti logo.png dengan URL logo Anda -->
        <img src="logo.png" class="logo" alt="Logo">

        <div class="toko">
            <h3>Alvarendra Bookstore</h3>

            <p>
                Jl. Gurame, RT.001/RW.004, Tajurhalang,
                Kec. Tajur Halang, Kabupaten Bogor,
                Jawa Barat 16320
            </p>

            <p>
                Telepon: 0817-5000-105
            </p>
        </div>

    </div>

    <div class="info">
        <p>Nama Penerima:</p>
        <p class="value" id="rNama"></p>

        <p>No Handphone:</p>
        <p class="value" id="rHp"></p>

        <p>Alamat Lengkap:</p>
        <p class="value" id="rAlamat"></p>
    </div>

</div>

<script>
function buatResi(){

    document.getElementById("rNama").innerText =
        document.getElementById("nama").value;

    document.getElementById("rHp").innerText =
        document.getElementById("hp").value;

    document.getElementById("rAlamat").innerText =
        document.getElementById("alamat").value;

    document.getElementById("resi").style.display = "block";

    window.print();
}
</script>

</body>
</html>
