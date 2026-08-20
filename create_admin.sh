#!/bin/bash
echo "Creating admin user..."
docker compose exec -T panel php artisan p:user:make <<EOF
yes
adminuser
admin@example.com
admin
user
Admin@123
Admin@123
EOF