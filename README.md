# Panduan Pterodactyl Panel (Localhost)

Pterodactyl Panel sudah berhasil dipasang dan sedang **berjalan aktif di Localhost**.

---

## 🌐 Akses Panel
- **URL**: [http://localhost:8080](http://localhost:8080)
- **Email / Username**: `admin@example.com` atau `admin`
- **Password**: `AdminPassword123!`

---

## 🛠️ Status Container
Container yang berjalan:
1. **`panpan-panel-1`** (Pterodactyl Web Panel) -> Port `8080` (HTTP) dan `8443` (HTTPS)
2. **`panpan-database-1`** (MariaDB 10.5) -> Port `3306`
3. **`panpan-cache-1`** (Redis Alpine) -> Port `6379`

---

## ⚙️ Perintah Berguna

### Mematikan Container:
```powershell
wsl -d Ubuntu-22.04 -- /bin/bash -c "cd /mnt/d/Nev/panpan && docker compose down"
```

### Menjalankan Kembali Container:
```powershell
wsl -d Ubuntu-22.04 -- /bin/bash -c "cd /mnt/d/Nev/panpan && docker compose up -d"
```

### Membuat Akun Pengguna / Admin Baru Tambahan:
```powershell
wsl -d Ubuntu-22.04 -- /bin/bash -c "cd /mnt/d/Nev/panpan && docker compose exec panel php artisan p:user:make"
```
