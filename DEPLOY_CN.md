# 公网部署（iPhone 可访问）

下面用 **Vercel** 部署，完成后你会得到一个 `https://...` 公网链接。

## 1. 把项目上传到 GitHub

在项目目录执行：

```bash
cd "/Users/mama/Documents/New project"
git add .
git commit -m "prepare public deploy"
git branch -M main
git remote add origin <你的GitHub仓库地址>
git push -u origin main
```

如果你之前已经有 `origin`，把 `git remote add origin ...` 换成：

```bash
git remote set-url origin <你的GitHub仓库地址>
```

## 2. 在 Vercel 一键导入

1. 打开 [Vercel](https://vercel.com/)
2. 用 GitHub 账号登录
3. 点击 `Add New...` -> `Project`
4. 选择这个仓库并导入
5. Framework 选 `Other`（默认也可以）
6. Build Command 留空
7. Output Directory 留空
8. 点击 `Deploy`

## 3. 打开页面

部署成功后，打开你的域名并追加：

`/housing.html`

例如：

`https://your-project-name.vercel.app/housing.html`

把这个链接发给你女朋友，iPhone Safari 可以直接打开。

## 4. 后续更新

以后你只要本地改完再推送：

```bash
git add .
git commit -m "update"
git push
```

Vercel 会自动重新部署。

## 5. 常见问题

- 页面打不开：
  - 确认你访问的是 `https://.../housing.html`，不是根路径。
- 数据不见了：
  - “已保存数据”存在浏览器本地 `localStorage`，每台设备独立。
  - 你手机和电脑不会共享“已保存数据”，需要在手机端再保存一次。
