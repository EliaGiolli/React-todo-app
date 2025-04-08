# TaskFlow

## Descrizione
TaskFlow è un'applicazione React progettata per gestire una lista di task. Utilizza la Context API per la gestione dello stato e `useReducer` per la gestione delle modifiche allo stato. Inoltre, sfrutta il `localStorage` per il salvataggio persistente dei dati. Questo progetto è un'ottima opportunità per praticare l'uso di `useReducer`, `useEffect`, e `localStorage` in un contesto reale.

## Tecnologie Usate
- **React**: Libreria JavaScript per la creazione di interfacce utente.
- **React Icons**: Per l'uso di icone nell'interfaccia.
- **Tailwind CSS**: Framework CSS per la progettazione di interfacce reattive.
- **Vite**: Strumento di build per applicazioni moderne.
- **React Hook Form**: Per la gestione dei moduli in modo semplice e performante.
- **useReducer**: Per la gestione dello stato complesso in modo più scalabile rispetto a `useState`.
- **localStorage**: Per la persistenza dei dati anche dopo il refresh della pagina.

## Funzionalità
- **Aggiungi Task**: Gli utenti possono aggiungere nuovi task alla lista.
- **Rimuovi Task**: Gli utenti possono rimuovere i task esistenti dalla lista.
- **Persistenza**: I task vengono salvati nel `localStorage` e recuperati al caricamento dell'applicazione.
- **UI Reattiva**: Utilizzo di TailwindCSS per un'interfaccia utente reattiva e moderna.

## State Management con useReducer
Il progetto utilizza `useReducer` per gestire lo stato dei task in modo più scalabile e pulito. Le azioni sono gestite tramite due principali azioni (`ADD_TASK` e `REMOVE_TASK`), e il reducer esegue il cambiamento di stato in modo immutabile.

### Aggiungere Task
Per aggiungere un task alla lista, viene utilizzato l'action `ADD_TASK`, che viene inviata al reducer tramite `dispatch`. Il reducer aggiorna lo stato aggiungendo il nuovo task.

### Rimuovere Task
Per rimuovere un task, viene utilizzata l'azione `REMOVE_TASK`, che filtra l'array dei task per rimuovere quello con l'ID specificato.

### Codice del Reducer
```javascript
// taskReducer.js

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];  // Aggiungi un nuovo task
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload);  // Rimuovi il task
    case 'INIT_TASKS':
      return action.payload;  // Inizializza lo stato con i task salvati
    default:
      return state;
  }
};
```
Action Creators
Abbiamo anche creato alcune action creators per semplificare la gestione delle azioni:
```
javascript
// taskActions.js

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task,
});

export const removeTask = (taskId) => ({
  type: 'REMOVE_TASK',
  payload: taskId,
});

export const initTasks = (tasks) => ({
  type: 'INIT_TASKS',
  payload: tasks,
});
```
Installazione
Per eseguire l'applicazione in locale, segui questi passaggi:

Clona il repository:
```
bash
git clone https://github.com/tuo-username/taskflow.git
```
Naviga nella cartella del progetto:
```
bash
cd taskflow
```
Installa le dipendenze:
```
bash
npm install
```
Avvia l'applicazione:
```
bash
npm run dev
```
Apri il tuo browser e vai su http://localhost:3000 per vedere l'app in azione.

## Miglioramenti Futuri
- Accessibilità (a11y): Aggiungere aria-label ai bottoni e agli input per migliorare l'accessibilità.
- Gestione degli errori: Implementare messaggi di errore visibili per il recupero o il salvataggio dei dati nel localStorage.
- Funzionalità di modifica del task: Permettere agli utenti di modificare i task esistenti.
- Notifiche/Alert: Implementare notifiche quando un task è aggiunto o rimosso.
- Filtraggio dei task: Aggiungere un filtro per visualizzare solo i task completati o incompleti.

## Contatti
LinkedIn: https://linkedin.com/in/eliagiolli/
Licenza: Questo progetto è sotto licenza MIT. Vedi il file LICENSE per ulteriori dettagli.

