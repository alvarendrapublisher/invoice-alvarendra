(function(){

    /* =========================
       FORMAT RUPIAH
    ========================= */

    function rupiah(angka){

        return "Rp " +
            Number(angka).toLocaleString("id-ID");

    }


    /* =========================
       AMBIL DATA DARI URL
    ========================= */

    const params =
        new URLSearchParams(
            window.location.search
        );

    const nama =
        params.get("nama") || "-";

    const hp =
        params.get("hp") || "-";

    const alamat =
        params.get("alamat") || "-";

    const rtrw =
        params.get("rtrw") || "-";

    const kodepos =
        params.get("kodepos") || "-";

    const desa =
        params.get("desa") || "-";

    const kecamatan =
        params.get("kecamatan") || "-";

    const kota =
        params.get("kota") || "-";

    const provinsi =
        params.get("provinsi") || "-";


    /* =========================
       DATA BUKU
    ========================= */

    let books = [];

    try{

        books = JSON.parse(
            params.get("books") || "[]"
        );

    }
    catch(e){

        books = [];

    }


    /* =========================
       NOMOR INVOICE
    ========================= */

    const now = new Date();

    const invoiceNumber =
        "ALV-" +
        now.getFullYear() +
        String(now.getMonth()+1)
            .padStart(2,"0") +
        String(now.getDate())
            .padStart(2,"0") +
        "-" +
        Math.floor(
            Math.random()*9000 + 1000
        );


    document.getElementById(
        "invoiceNumber"
    ).textContent =
        invoiceNumber;


    /* =========================
       TANGGAL
    ========================= */

    document.getElementById(
        "invoiceDate"
    ).textContent =
        now.toLocaleDateString(
            "id-ID",
            {
                day:"numeric",
                month:"long",
                year:"numeric"
            }
        );


    /* =========================
       DATA PEMBELI
    ========================= */

    document.getElementById(
        "buyerNama"
    ).textContent =
        nama;


    document.getElementById(
        "buyerHp"
    ).textContent =
        hp;


    document.getElementById(
        "buyerAlamat"
    ).innerHTML =

        alamat + "<br>" +

        "RT/RW : " + rtrw + "<br>" +

        desa + "<br>" +

        kecamatan + "<br>" +

        kota + "<br>" +

        provinsi + " " +

        kodepos;


    /* =========================
       TABEL PESANAN
    ========================= */

    const tbody =
        document.getElementById(
            "orderItems"
        );

    let subtotalBuku = 0;

    let totalQty = 0;


    books.forEach(function(book,index){

        const harga =
            Number(book.harga);

        const qty =
            Number(book.jumlah);

        const subtotal =
            harga * qty;

        subtotalBuku += subtotal;

        totalQty += qty;


        tbody.innerHTML += `

            <tr>

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${book.judul}
                </td>

                <td>
                    ${rupiah(harga)}
                </td>

                <td>
                    ${qty}
                </td>

                <td>
                    ${rupiah(subtotal)}
                </td>

            </tr>

        `;

    });


    /* =========================
       TOTAL BUKU
    ========================= */

    document.getElementById(
        "totalBooks"
    ).textContent =

        totalQty + " buku";


    /* =========================
       BERAT
       1 KG = 3 BUKU
    ========================= */

    const berat =

        Math.ceil(
            totalQty / 3
        );


    document.getElementById(
        "shippingWeight"
    ).textContent =

        berat + " kg";


    /* =========================
       ONGKIR
    ========================= */

    const kotaLower =
        kota.toLowerCase();

    const provinsiLower =
        provinsi.toLowerCase();


    const jabodetabek = [

        "jakarta",

        "bogor",

        "depok",

        "bekasi",

        "tangerang"

    ];


    let ongkir = 0;

    let metode = "";


    if(

        jabodetabek.some(

            item =>

            kotaLower.includes(item)

        )

    ){

        ongkir =
            berat * 5000;

        metode =
            "Jabodetabek";

    }

    else if(

        provinsiLower.includes(
            "jawa"
        )

    ){

        ongkir =
            berat * 10000;

        metode =
            "Pulau Jawa";

    }

    else{

        ongkir = 0;

        metode =
            "Luar Pulau Jawa (Link pengiriman khusus)";

    }


    document.getElementById(
        "shippingMethod"
    ).textContent =

        metode;


    document.getElementById(
        "shippingCost"
    ).textContent =

        rupiah(ongkir);


    /* =========================
       RINGKASAN
    ========================= */

    document.getElementById(
        "subtotalBooks"
    ).textContent =

        rupiah(subtotalBuku);


    document.getElementById(
        "summaryShipping"
    ).textContent =

        rupiah(ongkir);


    const grandTotal =

        subtotalBuku +
        ongkir;


    document.getElementById(
        "grandTotal"
    ).textContent =

        rupiah(grandTotal);


})();

