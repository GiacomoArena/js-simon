Simon Says
===
## **Descrizione:**
Visualizzare in pagina 5 numeri casuali (tutti differenti). Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente(tramite il prompt() o traminte input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

## **Procedimenti**
- creo un ciclo for con all'interno la funzione per la generazione di numeri casuali sempre differenti per poi riempire un array vuoto che li conterrá

- Creo anche la timing function che allo scadere dei 5 secondi fará scomparire i numeri precedentemente generati e stampati

- creo un'altra timing function che 1 secondo dopo la scomparsa dei numeri random fará apparire un prompt dove l'utente potrá inserire i numeri che ricorda suddivisi da uno spazio.

- Attraverso il metodo  .split faró si che i numeri divisi da uno spazio verranno salvati come un array 

- creo un counter che ad ogni numero scritto dall'utente incluso nella lista randomica aumenterá il suo valore di 1 e stampo i vari messagi 

- creo un pulsante PLAY che al click generá i vari numeri randomici e resetta  lo score precedente 