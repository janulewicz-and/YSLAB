# Zadanie rekrutacyjne (Frontend)

Cześć, dzięki za zainteresowanie.

Zadanie jest przewidziane na maksymalnie godzinę. Jeśli zajmuje Ci więcej niż godzinę, przerwij i odeślij to, co masz. Wolimy niedokończone rozwiązanie z sensownym uzasadnieniem niż takie dopieszczane przez trzy wieczory.

Nie trzeba nic instalować ani uruchamiać. To zadanie na czytanie kodu i rozwiązywanie zleconych zadań.

## Kontekst

Robimy aplikacje do prezentacji inwestycji deweloperskich: wizualizacje 3D, rzuty, listy mieszkań. Mamy jeden szablon i wiele aplikacji klienckich z niego zbudowanych. Każda aplikacja konfiguruje się obiektem `window.__APP_CONFIG__`.

W praktyce oznacza to tyle, że ten sam komponent musi działać u klienta, który ma w configu wszystko, i u klienta, który ma połowę, bo jego inwestycja ruszyła w 2021 roku i nikt tam od tamtej pory nie zaglądał.

W paczce znajdziesz wycinek takiej aplikacji:

```
src/
  ApartmentsList.vue      lista mieszkań
  ApartmentCard.vue       pojedyncza pozycja listy
  store/apartments.ts     store Pinia
  store/meta.ts           store trzymający __APP_CONFIG__
  models/                 typy
config/
  klient-a.js             config inwestycji klienta A
  klient-b.js             config inwestycji klienta B
```

## Część 1: zgłoszenie od klienta (ok. 30 min)

> **Od:** Project Manager
> **Temat:** [klient B] lista mieszkań, pilne
>
> Klient B zgłasza dwie rzeczy:
>
> 1. na liście mieszkań w ogóle nie widać cen,
> 2. zmiana statusu w filtrze nic nie robi, lista się nie przeładowuje.
>
> U klienta A to samo działa bez zarzutu. Rzućcie okiem.

Co jest do zrobienia:

1. Znajdź przyczyny. Jest ich więcej niż dwie, bo zgłoszenie od klienta rzadko bywa pełną listą błędów.
2. Popraw kod bezpośrednio w plikach w `src/`.
3. W `ODPOWIEDZI.md` wypisz każdy znaleziony błąd: plik, mniej więcej linia, na czym polega błąd, na czym polega poprawka.

Jeżeli trafisz na miejsce, w którym nie wiadomo, jakie zachowanie jest poprawne, nie zgaduj po cichu. Zapisz, jakie założenie przyjmujesz albo o co dopytasz Project Managera. Punktujemy to tak samo jak samą poprawkę.

Na koniec dopisz jeszcze dwie rzeczy o samym szukaniu:

- **jak wyglądało szukanie błędów**: od czego się zaczęło, co naprowadziło na kolejne, gdzie trafiły się ślepe uliczki (3 do 5 zdań),
- **przy której poprawce masz najwięcej wątpliwości** i dlaczego akurat przy niej.

Ten drugi punkt jest dla nas ważny. Nikt tutaj nie ma pewności co do wszystkiego i nie oczekujemy jej od Ciebie.

## Część 2: decyzja (ok. 10 min, bez kodu)

Klient C chce, żeby na karcie mieszkania obok ceny pokazywała się szacowana rata kredytu: cena pomnożona przez współczynnik, który klient chce sobie ustalać sam. Pozostałych 115 klientów tego nie chce i nie powinno tego zobaczyć.

Opisz w `ODPOWIEDZI.md`, w 5 do 8 zdań:

- gdzie umieszczasz tę funkcję i dlaczego akurat tam,
- co się stanie za pół roku, kiedy klient D poprosi o to samo, ale liczone innym wzorem.

## Co odsyłasz

ZIP albo link do repozytorium, a w nim:

- poprawione pliki z `src/`,
- wypełniony `ODPOWIEDZI.md`.

Jeśli czegoś nie zdążysz, po prostu napisz czego. Nie odejmujemy za to punktów.
