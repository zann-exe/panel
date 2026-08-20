#!/bin/sh
cd /mnt/d/Nevnev/Panpan/panel
docker compose exec -T panel php artisan p:user:make <<EOF
yes
adminuser
admin@example.com
admin
user
Admin@123
Admin@123
EOF