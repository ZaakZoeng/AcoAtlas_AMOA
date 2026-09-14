# AcoAtlas_AMOA
Aurelia coerulea Multi-Omics Atlas

```bash
# 查看100M+的文件
find . -type f -size +100M
# 手动添加/检查到.gitignore中
# find . -type f -size +100M >> .gitignore

git add .
git commit -m "updated"
git push

git clone https://github.com/ZaakZoeng/AcoAtlas_AMOA.git

cd project-web/
npm install
npm run build

cd project-api/
npm start

# 复制dist/到对应路径/AMOA/project-web/中
```