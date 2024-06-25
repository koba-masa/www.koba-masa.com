---
title: 送信ドメイン認証未対応のメールサーバーからGmailにメールを送信してみた
publishDate: 2024/06/25
tags: [mail]
---

## 概要

送信ドメイン認証の対応を一切行っていないメールサーバーからGmailにメールを送信したところ、MAILER-DAEMONから応答があった

### メール情報

- 送信元: `sender@example.com`
- 送信先: `receiver@gmail.com`

#### DNS

```sh
% nslookup spf.example.com
Server:         2001:db8::
Address:        2001:db8::#53

** server can't find spf.example.com: NXDOMAIN

% nslookup dkim.example.com
Server:         2001:db8::
Address:        2001:db8::#53

** server can't find dkim.example.com: NXDOMAIN

% nslookup dmarc.example.com
Server:         2001:db8::
Address:        2001:db8::#53

** server can't find dmarc.example.com: NXDOMAIN

```

## デーモンからの応答

### 送信元

`MAILER-DAEMON@mail.example.com`

### 件名

`Undelivered Mail Returned to Sender`

### ボディ

```
This is the mail system at host mail.example.com.

I'm sorry to have to inform you that your message could not
be delivered to one or more recipients. It's attached below.

For further assistance, please send mail to postmaster.

If you do so, please include this problem report. You can
delete your own text from the attached returned message.

                   The mail system

<receiver@gmail.com>: host gmail-smtp-in.l.google.com[173.194.174.27] said:
    550-5.7.26 Your email has been blocked because the sender is
    unauthenticated. 550-5.7.26 Gmail requires all senders to authenticate with
    either SPF or DKIM. 550-5.7.26  550-5.7.26  Authentication results:
    550-5.7.26  DKIM = did not pass 550-5.7.26  SPF [example.com] with ip:
    [160.16.81.253] = did not pass 550-5.7.26  550-5.7.26  For instructions on
    setting up authentication, go to 550 5.7.26
    https://support.google.com/mail/answer/81126#authentication
    41be03b00d2f7-716b5f94529si1680677a12.364 - gsmtp (in reply to end of DATA
    command)


Reporting-MTA: dns; mail.example.com
X-Postfix-Queue-ID: F1C544096C91
X-Postfix-Sender: rfc822; sender@example.com
Arrival-Date: Sun, 23 Jun 2024 12:14:27 +0900 (JST)

Final-Recipient: rfc822; receiver@gmail.com
Original-Recipient: rfc822;receiver@gmail.com
Action: failed
Status: 5.7.26
Remote-MTA: dns; gmail-smtp-in.l.google.com
Diagnostic-Code: smtp; 550-5.7.26 Your email has been blocked because the
    sender is unauthenticated. 550-5.7.26 Gmail requires all senders to
    authenticate with either SPF or DKIM. 550-5.7.26  550-5.7.26
    Authentication results: 550-5.7.26  DKIM = did not pass 550-5.7.26  SPF
    [example.com] with ip: [160.16.81.253] = did not pass 550-5.7.26
    550-5.7.26  For instructions on setting up authentication, go to 550 5.7.26
    https://support.google.com/mail/answer/81126#authentication
    41be03b00d2f7-716b5f94529si1680677a12.364 - gsmtp

```
