---
layout: page
title: uLI-master
permalink: /uLI-master
order: 30
lang: cz
---

uLI-master je krabička rozměru 7×5 cm, která umožňuje připojení ovladačů
(testováno na Roco Multimaus) přímo k obslužnému pracovišti dispečera.

{% include figure.html url="/assets/img/uLI-master-out.jpg" caption="Ukázka připojení Roco Multimaus k uLI-master"
   img-style="max-width: 480px;" %}

Na úvod: v našem klubu řídíme hnací vozidla v režimu výpravčích: vlak, který
mi přijede do stanice, vyřídím a pošlu dál. V režimu strojvedoucích -- jako
například na setkáních -- jezdíme jen velmi zřídka.

Ačkoliv hJOP plně podporuje ovladače připojené přímo k centrále a XpressNETu,
v našem klubu jsme zjistili, že nám toto řešení nevyhovuje. Zejména z toho
důvodu, že strojvedoucímu nikdo nezabrání řízení hnacích vozidel v cizí stanici.
Co hůř -- on si toho ani nemusí všimnou. Prostě listuje v knihovně, omylem drbne
to kolečka řídícího jízdní stupeň a lokomotiva se rozjede.

Proto jsme se rozhodli ke každému dispečerskému počítači, na kterém běží hJOPpanel,
připojit emulátor DCC centrály, který poskytuje rozhraní XpressNET a ke kterému
se budou připojovat ovladače pouze v této stanici. Přesně toto dělá krabička
*uLI-master*. Obsahuje USB konektor pro připojení k počítači, napájecí konektor
pro vstup 12 V pro napájení ovladačů a 2 XpressNET konektory pro připojení
ovladačů. Ovladačů však lze připojit až 6 (limitace uLI-daemon).

Každá stanice má tedy svůj vlastní XpressNET.

Krabička komunikuje s programem zvaným [uLI-daemon](/uLI-daemon), který běží
na dispečerském počítači. Ten se připojuje ke krabičce, k hJOPserveru, přes
který poveluje jízdu, a k lokálním panelům, které předávají lokomotivy do
ručního řízení. Propojení přes hJOPserver umožňuje kontrolovat, zda má
strojvedoucí oprávnění na řízení hnacího vozidla.

{% include figure.html url="/assets/img/uLI-master-board.jpg" caption="Deska plošných spojů uLI." %}

Krabička v sobě obsahuje DPS vlastního návrhu, za návrh schématu bych rád
poděkoval Michalu Petrilakovi. Středobodem krabičky je procesor PIC18F14K50.
USB část a XpressNETí část jsou galvanicky oddělené.

Celé zařízení je vyvíjeno jako opensource, resp. openhardware, takže si jej
může kdokoliv vyrobit, či nahlásit připomínky. K FW je také vyčerpávající
dokumentace na githubu, která by měla popisovat úplně všechno včetně
komunikačního protokolu.

 * [Výkres DPS](https://github.com/kmzbrnoI/uLI-pcb).
 * [Firmware včetně zdrojových kódů](https://github.com/kmzbrnoI/uLI-master-fw).

{% include figure.html url="/assets/img/uLI-board-eagle.png" caption="Výkres desky plošných spojů uLI." %}
