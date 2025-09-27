@echo off
echo 🚀 开始部署万年历应用...

echo 📋 检查环境...
node --version
npm --version

echo 📦 安装依赖...
npm install

echo 🔨 构建项目...
REM npm run build

echo 🌟 启动服务...
node web/server.js

echo ✅ 部署完成！
echo 🌐 访问地址: http://localhost:8080
pause
