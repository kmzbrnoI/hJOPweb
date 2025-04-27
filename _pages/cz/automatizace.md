---
layout: page
title: Automatizace v hJOP
permalink: /automatizace
order: 42
lang: cz
---

hJOP poskytuje síťové aplikační rozhraní (API), ke kterému se lze připojit
z externí aplikace a spouštět programově různé úkony, například stavění jízdních
cest.

Pro přístup k hJOPserveru se využívá především rozhraní
[PT serveru](https://github.com/kmzbrnoI/hJOPserver/wiki/ptServer). PT server
nabízí REST API, pomocí kterého lze zjišťovat kompletní stav kolejiště a měnit
vybrané parametry. PT server umožňuje zjistit a měnit stav všech bloků, hnacích
vozidel, souprav, uživatelů atd. Automatizace se realizuje tak, že si
naprogramujete aplikaci, která se připojuje k PT serveru.

**Pozor: nezapomeňte v hJOPserveru zapnout PT server!**

Doporučujeme podrobně projít dokumentaci PT serveru.

<a class="btn" href="https://github.com/kmzbrnoI/hJOPserver/wiki/ptServer">Dokumentace PT serveru</a>

PT server umožňuje všem klientům číst stav hJOPserveru (HTTP GET). Pro
nastavování stavu (HTTP PUT) je nutné:

1. buď asociovat vašeho automatizačního klienta s *AC blokem* hJOPserveru,
2. nebo uvést login v sekci `[PTServerStaticTokens]` pro trvalý přístup pro
  zápis skrze PT server.

## Test PT serveru

Po zapnutí PT serveru v hJOPserveru můžete například ve vašem lokálním webovém
prohlížeči otevřít stránku `http://localhost:5823/status`. Měli byste vidět
JSON popisující základní stav hJOPserveru.

```json
{
  "rcs": {"opened": true, "started": true},
  "trakce": {"connected": true, "status": "on", "emergency": false},
  "panelserver": {"running": true}
}
```

## Python klient

Byla vytvořena [knihovna pro jazyk Python](https://github.com/kmzbrnoI/ac-python) (ac-python),
která umožňuje snadno implementovat automatizačního klienta asociovaného s AC
blokem.

<a class="btn" href="https://github.com/kmzbrnoI/ac-python">Python AC klient</a>

Knihovna se připojuje k PT serveru, ale také k Panel serveru, skrze který je
prováděna napříkld asociace s AC blokem. V souboru
[`dance/autojc.py`](https://github.com/kmzbrnoI/ac-python/blob/master/examples/autojc.py)
je uveden příklad automatizačního klienta, který postupně staví jízdní cesty
předané v argumentu.

Konkrétní AC klient se realizuje vytvořením vlastní třídy odděděné od
předpřipravené třídy `AC`. AC může:

* libovolně reagovat na metody `on_*` uvedené
  v [`ac/ac.py`](https://github.com/kmzbrnoI/ac-python/blob/master/ac/ac.py).
  Např `on_start` se zavolá, jakmile výpravčí v menu AC bloku v panelu AC zapne.
* reagovat na změny stavu bloků (tzv. *change event*). Skrze rozhraní nabízené v souboru
  [`ac/blocks.py`](https://github.com/kmzbrnoI/ac-python/blob/master/ac/blocks.py)
  lze registrovat vyvolání vlastní metody/funkce při změně stavu konkrétního bloku.

Doporučujeme projít si všechny zdrojové kódy AC knihovny, knihovna není rozsáhlá.

## Automatizační klient neasociovaný s AC blokem

Pokud chcete implementovat automatizačního klienta, který není asociovaný
s žádným AC blokem, můžete využít část ac-python knihovny, nepoužívejte však
třídu `AC`.

Užitečné části ac-python knihovny:
* `ac/pt.py` (pro přístup k PT serveru)
* `ac/blocks.py` (pro příjem notifikace při změně stavu bloku – vyžaduje spojení
  s PanelServerem – `ac/panel_client.py`)

## Předpřipravené sériově spouštěné kroky

Pokud chcete spouštět předpřipravené sériově spouštěné kroky, jako například
stavění konkrétních jízdních cest, čekání na uvolnění úseku apod., můžete se
inspirovat v souboru
[`examples/dance.py`](https://github.com/kmzbrnoI/ac-python/blob/master/examples/dance.py)
a upravit si slovník `STEPS`.
