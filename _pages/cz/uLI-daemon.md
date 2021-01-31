---
layout: page
title: uLI-daemon
permalink: /uLI-daemon
order: 31
lang: cz
---

uLI-daemon je démon umožňující funkci [uLI-master](/uLI-master).

{% include figure.html url="/assets/img/uLI-daemon.png" caption="uLI-daemon" %}

uLI-daemon se spouští se startem prvního panelu na dispečerském počítači
a připojuje se ke třem rozhraním:

 1. K [uLI-master](/uLI-master).
 2. K lokálním [hJOPpanelům](/hJOPpanel).
 3. K [hJOPserveru](/hJOPserver).

Démon je okenní aplikace, která zobrazuje aktuální stav tzv. *slotů*. Pro provoz
skrze uLI-daemon a uLI-master se předpokládá, že ovladače ve stanici budou mít
nastavené adresy 1-n podle počtu ovladačů. Např. 3 ovladače tedy budou mít
postupně adresy: 1, 2 a 3. Toto jsou ony *sloty*.

uLI-daemon následně umožňuje každému slotu přiřadit konkrétní lokomotivu
z reliéfu. Umožňuje také řízení více lokomotiv skrze jeden slot -- tzv.
multitrakci.

Do slotu lze lokomotivu předat pár kliky přímo z panelu. Uvolnit lokomotivu ze
slotu lze buď přímo z ovladače nebo z okna programu.

Viz [projekt na githubu](https://github.com/kmzbrnoI/uLI-daemon), kde jsou
k dispozici zdrojové kódy, binární soubory a dokumentace.

<a class="btn" href="https://github.com/kmzbrnoI/uLI-daemon/releases">Stáhnout</a>
<a class="btn" href="https://github.com/kmzbrnoI/uLI-daemon">Zdrojové kódy</a>
