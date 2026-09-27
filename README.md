# Panduan Pterodactyl Panel (Localhost)

Pterodactyl Panel sudah berhasil dipasang dan sedang **berjalan aktif di Localhost**.

---

## 🌐 Akses Panel
- **URL Komputer (Localhost)**: [http://localhost:8085](http://localhost:8085)
- **URL HP / Tablet (Wi-Fi)**: [http://192.168.1.10:8085](http://192.168.1.10:8085)
- **Catatan Akun**: Gunakan akun dan password admin yang dibuat saat inisialisasi lokal.

---

## 🛠️ Status Container
Container yang berjalan:
1. **`panpan-panel-1`** (Pterodactyl Web Panel) -> Port `8080` (HTTP) dan `8443` (HTTPS)
2. **`panpan-database-1`** (MariaDB 10.5) -> Port `3306`
3. **`panpan-cache-1`** (Redis Alpine) -> Port `6379`

---

## ⚙️ Perintah Berguna

### Menjalankan Panel (Cukup jalankan start.bat):
```cmd
start.bat
```

### Mematikan Container:
```powershell
docker compose down
# atau jika via WSL:
wsl -u root docker compose down
```

### Menjalankan Kembali Container:
```powershell
docker compose up -d
# atau jika via WSL:
wsl -u root docker compose up -d
```

### Membuat Akun Pengguna / Admin Baru Tambahan:
```powershell
docker compose exec panel php artisan p:user:make
# atau jika via WSL:
wsl -u root docker compose exec panel php artisan p:user:make
```
