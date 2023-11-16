# Il gioco

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

# Logica 

1. Creiamo un array con i numeri generati dalla funzione. i numeri devono essere 16 casuali, diversi tra loro, bisogna rispettare il range della difficoltà 
ES( difficoltà 1--- i numeri potranno essere da 1a100).

2. Quando clicchiamo su una cella, se il valore è presente nell array quindi è una bomba, la cella si dovrà colorare di rosso.

3. La partita finisce quando viene cliccata una bomba,  oppure raggiunto il numero massimo di interazioni. quindi il totale delle interazioni è : Range - 16.
ES( difficoltà 1--- numero totale delle interazioni è 100- 16).

4. a fine partita viene visualizzato il punteggio. Il punteggio è quante volte ho cliccato la cella.

eventuali problemi.

- non ci devono essere valori uguali nell array.
- se clicchiamo una cella già cliccata, non dobbiamo sommarlo al numero di interazioni.


Funzione fine partita, la partita finisce se
- il numero cliccato è presente nell array, 
- interazioni finite range-16.
