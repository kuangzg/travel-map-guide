# 旅游地图导览

纯静态旅游路线地图，包含三套可切换行程：

- 新疆 9 天自驾
- 云南 8 天自驾
- 甘肃 / 青甘大环线 9 天自驾

## 在线入口

部署完成后：

- 默认（新疆）：`https://kuangzg.github.io/travel-map-guide/`
- 云南：`https://kuangzg.github.io/travel-map-guide/?guide=yunnan`
- 甘肃：`https://kuangzg.github.io/travel-map-guide/?guide=gansu`

## GitHub Pages

仓库包含 `.github/workflows/pages.yml`。推送到 `main` 后会自动部署。
首次使用时，在仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000/`。

## 高德地图说明

页面使用高德地图 Web JS API。若地图提示加载失败，请在高德开放平台为当前 Key 配置 Web 端域名白名单：

- `kuangzg.github.io`
- 本地调试时可按需加入 `localhost`
