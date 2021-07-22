const nilai = [
    {
        nama_lengkap: 'abdul latif',
        nis: '897124124442',
        idsiswa: 74,
        tahun_ajaran: '2021 - 2022',
        namamapel: 'Bahasa Indonesia',
        nilai_akhir: null,
        id_penilaian: 56,
        idujian: 138,
        title: 'UTS 1 SEMESTER 2',
        type: 'UTS'
    },
    {
        nama_lengkap: 'abdul latif',
        nis: '897124124442',
        idsiswa: 74,
        tahun_ajaran: '2021 - 2022',
        namamapel: 'Matematika',
        nilai_akhir: '75.00',
        id_penilaian: 73,
        idujian: 140,
        title: 'UTS 1 SEMESTER 2',
        type: 'UTS'
    },
    {
        nama_lengkap: 'abdul latif',
        nis: '897124124442',
        idsiswa: 74,
        tahun_ajaran: '2021 - 2022',
        namamapel: 'Bahasa Indonesia',
        nilai_akhir: '100.00',
        id_penilaian: 74,
        idujian: 143,
        title: 'UKK 1 SEMESTER 2',
        type: 'UAS'
    }
]
const mapel = [
    { namamapel: 'Bahasa Indonesia', kode_mapel: 'BI-K4' },
    { namamapel: 'Bhs Inggris', kode_mapel: 'INGGRIS - K4' },
    { namamapel: 'Ilmu Pengetahuan Alam', kode_mapel: 'IPA - K4' },
    { namamapel: 'Ilmu Pengetahuan Sosial', kode_mapel: 'IPS - K4' },
    { namamapel: 'Matematika', kode_mapel: 'MTK-K4' },
    { namamapel: 'Pendidikan Agama Islam', kode_mapel: 'PAI-K4' },
    { namamapel: 'Pendidikan Jasmani', kode_mapel: 'PENJAS - K4' },
    { namamapel: 'Seni Budaya Dan Ketampilan', kode_mapel: 'SBK - K4' }
]
function mapNilaiToMapel(nilai, mapel) {
    const arr = []
    const obj = {}
    let i = 0
    for (const { namamapel } of nilai) {
        obj[namamapel] = i
        arr.push(obj)
        i++
    }
    const indicator = arr[0]
    const result = mapel.map((item, i) => {
        const detail = { UAS: "Belum Ujian!", UTS: "Belum Ujian!", UH: "Belum Ujian!" }
        if (nilai.length > 0 && item.namamapel in indicator) {
            const type = nilai[indicator[item.namamapel]].type
            const nilai_akhir = nilai[indicator[item.namamapel]].nilai_akhir
            detail[type] = nilai_akhir
        }
        return Object.assign({
            detail
        }, item)
    })
    return result
}
mapNilaiToMapel(nilai, mapel)