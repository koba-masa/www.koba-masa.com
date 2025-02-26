---
title: pnpmを使用できるようにするまで
public-date: 2024/12/02
tags: ["technical"]
---

## 手順

1. `nodenv`のインストール
   `brew install nodenv`
2. `node`のインストール
   `nodenv install {version}`
   `nodenv global {version}`
3. PATHの設定
   `vi ~/.zprofile`
   ```
   export PATH="$HOME/.nodenv/bin:$PATH"
   eval "$(nodenv init -)"
   ```
4. `pnpm`のインストール
   `npm install -g pnpm`
