#!/bin/bash

echo "🚀 开始部署万年历应用..."

# 检查Node.js版本
echo "📋 检查环境..."
node --version
npm --version

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目（如果需要）
echo "🔨 构建项目..."
# npm run build

# 启动服务
echo "🌟 启动服务..."
if command -v pm2 &> /dev/null; then
    echo "使用PM2启动..."
    pm2 start ecosystem.config.js --env production
    pm2 save
else
    echo "直接启动Node.js..."
    node web/server.js
fi

echo "✅ 部署完成！"
echo "🌐 访问地址: http://localhost:8080"
