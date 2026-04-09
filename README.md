# webarvr-try

sebelumnya saya ingin menginformasikan bahwa webAR yang saya kerjakan memang tidak lagi menggunakan unity stack namun a-frame karena saya consider lebih ringan dan cepat untuk membuatan fitur showcase / demo model, 

unity memang lebih powerful dan detil, namun akan berlebihan jika tidak memanfaatkan seluruh kelebihan nya yang memang lebih ke aplikasi ke platform yang lebih powerful untuk display higer quality content seperti mobile / pc 

izin camera didapat setelah user memilih untuk memberi izin penggunaan dalam browser umum seperti chrome(android / safari(iOS) dengan penggunaan https:// secara default

sensor akan lebih lancar bila marker detil seperti QR code dan harus di scan melalui media cetak / printed atau layer mobile / handphone, tidak efisien bila dengan monitor computer karena perbedaan frame rate akan membuat model jitter / bergerak kasar

untuk pengaplikasian dalam flutter mobile dapat dengan berikut :

WebView(
  initialUrl: 'https://dzkdani.github.io/webarvr-try/',
)
