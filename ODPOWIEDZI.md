# Odpowiedzi

**Imię i nazwisko:** Andrzej Janulewicz

**Ile czasu zajęło:** 45 minut

## Część 1: znalezione błędy

Dla każdego błędu: plik, mniej więcej linia (lub nazwa zmiennej albo funkcji), na czym polega błąd, na czym polega poprawka.

### Błąd 1

- **Plik i linia:** ApartmentCard.vue, zmienna showPrice.
- **Na czym polega:** U klienta B brakuje pola showPrice. Jego wartość była undefined, przez co ceny nie były wyświetlane.
- **Poprawka:** Dodałem domyślną wartość true, gdy tego pola nie ma w starszej konfiguracji.

### Błąd 2

- **Plik i linia:** ApartmentsList.vue, pobieranie visibleApartments i activeStatus ze store.
- **Na czym polega:** Zwykła destrukturyzacja store Pinia usunęła reaktywność. Status zmieniał się w store, ale lista mieszkań nie była odświeżana.
- **Poprawka:** Użyłem storeToRefs, żeby obie wartości pozostały reaktywne.

### Błąd 3

- **Plik i linia:** ApartmentsList.vue, zmienna sortedApartments.
- **Na czym polega:** Metoda sort zmieniała bezpośrednio tablicę mieszkań.
- **Poprawka:** Przed sortowaniem tworzę kopię tablicy.

### Błąd 4

- **Plik i linia:** ApartmentCard.vue, zmienna planUrl.
- **Na czym polega:** Kod zakładał, że każdy klient ma konfigurację apartmentGallery. U klienta B tego pola nie ma, więc odczyt plans mógł zakończyć się błędem.
- **Poprawka:** Sprawdzam, czy galeria jest włączona i czy istnieje plan danego mieszkania. Obraz jest wyświetlany tylko wtedy, gdy udało się utworzyć jego adres.

### Błąd 5

- **Plik i linia:** ApartmentCard.vue i ApartmentsList.vue, funkcja formatArea.
- **Na czym polega:** Jednostka powierzchni była zawsze wyświetlana jako m², mimo że konfiguracja pozwala też używać ft².
- **Poprawka:** Jednostka jest teraz wybierana na podstawie pola defaultAreaUnit z konfiguracji.

### Założenia i pytania

Miejsca, w których nie wiadomo, jakie zachowanie jest poprawne. Jakie założenie przyjmujesz albo o co dopytasz Project Managera:

- Przyjąłem, że brak pola showPrice w starszej konfiguracji oznacza, że ceny mają być widoczne. Potwierdziłbym to z Project Managerem.
- Przyjąłem, że gdy klient nie ma galerii albo planu mieszkania, obraz nie powinien być wyświetlany. Dopytałbym, czy zamiast niego ma być pokazany obraz zastępczy.
- Pole investmentId nie jest używane przy pobieraniu mieszkań. Dopytałbym, czy powinno być częścią adresu zapytania do API.

### Jak wyglądało szukanie błędów

Najpierw porównałem konfiguracje klientów A i B. Brak pola showPrice u klienta B naprowadził mnie na problem z ceną oraz inne opcjonalne pola w konfiguracji. Następnie sprawdziłem komponent listy i store, gdzie znalazłem utratę reaktywności po destrukturyzacji. Na końcu przejrzałem modele i sposób formatowania danych, dzięki czemu znalazłem problemy z galerią i jednostką powierzchni.

### Poprawka, przy której masz najwięcej wątpliwości

Najwięcej wątpliwości mam przy domyślnej wartości showPrice. Przyjąłem, że brak tego pola w starszej konfiguracji oznacza, że ceny mają być widoczne, ale potwierdziłbym to z Project Managerem.

## Część 2: rata kredytu u klienta C

Dodałbym do konfiguracji klienta ustawienie z informacją, czy rata ma być widoczna, oraz współczynnik do jej obliczenia. Dla klienta C ta opcja byłaby włączona, a u pozostałych klientów nie. Obliczenie raty zrobiłbym po stronie frontendu w osobnej funkcji, ponieważ potrzebuje ono tylko ceny mieszkania i współczynnika. ApartmentCard wyświetlałby wynik obok ceny tylko wtedy, gdy opcja jest włączona. Nie dodawałbym w kodzie warunku sprawdzającego nazwę konkretnego klienta. Jeżeli klient D będzie potrzebował innego wzoru, dodam w konfiguracji rodzaj obliczenia i osobną funkcję dla tego wzoru.

## Czego nie udało się zrobić

- Nic.
