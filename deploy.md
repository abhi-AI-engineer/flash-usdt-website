# Step-by-step Deployment Guide for Node.js + Nginx on Ubuntu VPS

## 1. Clean Up Previous Setup (Optional)
```bash
sudo rm -rf flash-usdt-website
pm2 delete all
pm2 save --force
```

## 2. Clone Your GitHub Repository
```bash
git clone https://github.com/your-username/flash-usdt-website.git
cd flash-usdt-website/backend
```

## 3. Install Node Modules
```bash
npm install
```
### Make .env Example config:
```
GMAIL_USER=user_email@gmail.com
GMAIL_PASS=app_password
ADMIN_EMAIL=admin_email@gmail.com
PORT=3000

```

## 4. Test Locally
```bash
node server.js
curl http://127.0.0.1:3000
```

## 5. Run with PM2
```bash
pm2 start server.js --name flash-backend
pm2 save
```

## 6. Enable PM2 Startup Script
```bash
pm2 startup
```

## 7. Install and Configure Nginx
```bash
sudo apt update
sudo apt install nginx
```

## 8. Allow Nginx Through Firewall
```bash
sudo ufw allow 'Nginx Full'
```

## 9. Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/flashusd.online
```

### Example config:
```nginx
server {
    listen 80;
    server_name flashusd.online www.flashusd.online;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 10. Enable Nginx Config
```bash
sudo ln -s /etc/nginx/sites-available/flashusd.online /etc/nginx/sites-enabled/
```

### If file exists error:
```bash
sudo rm /etc/nginx/sites-enabled/flashusd.online
sudo ln -s /etc/nginx/sites-available/flashusd.online /etc/nginx/sites-enabled/
```

## 11. Fix Missing Log Directory
```bash
sudo mkdir -p /var/log/nginx
sudo touch /var/log/nginx/error.log
```

## 12. Test and Reload Nginx
```bash
sudo nginx -t
sudo systemctl restart nginx
```

## 13. Check Domain Access
```bash
curl http://flashusd.online
curl https://flashusd.online
```
