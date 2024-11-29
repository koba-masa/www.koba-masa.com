---
title: 電子メールにおける送信ドメイン認証〜DKIM〜
public-date: 2024/11/29
tags: ["technical", "dns", "mail"]
---

## DKIMとは

- `DomainKeys Identified Mail`の略
- 送信元にてメールに電子署名を行い、受信側にてDNSを逆引きし、

## DNSレコード

### キー

- `{セレクター}._domainkey.example.com`

### 種別

- `TXT`

### 値

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzJh6hXxqxY4tRWpu4nvr6bLQQ7G5OQLtA/qEikByDgjfzBRMfo/tNQ7c7U/64B5N67MPXUzWcfYcl/4gQlZqF9x5bQpCUpGtD13y88Wx9y6DjTYbh+MCi/Y67sRkl5EvJbTjTO5xBB6z8wIUgh95mnYNfQwToY94
```