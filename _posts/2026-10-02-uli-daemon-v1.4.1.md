---
layout: post
title: uLI-daemon v1.4.1
tags: upgrade
lang: cz
---

Byla vydána nová verze aplikace uLI-daemon přinášející menší změny. Novinky:

* Zobrazit verzi SW a HW uLI-master jako hint stavového obdélníku komunikace
  s uLI-master.
* Odeslat jméno aplikace (uLIdaemon) v `HELLO` příkazu hJOPserveru.
* Bridge server: poslouchat pouze na 127.0.0.1 (localhost). Není nutné schvalovat
  výjimku ve Windows firewallu.

<a class="btn" href="https://github.com/kmzbrnoI/uLI-daemon/releases/tag/v1.4.1">uLI-daemon v1.4.1</a>
