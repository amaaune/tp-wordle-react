# Logia — Wordle en React

Un clone du jeu Wordle développé en React + TypeScript, avec récupération du mot du jour via une API externe (`wordle-api`).

## Fonctionnalités

- Grille de 6 essais, 5 lettres par mot
- Clavier virtuel interactif, coloré selon les lettres déjà tentées
- Récupération quotidienne du mot secret via une API (mots en français)
- Modales de victoire / défaite
- Règles du jeu affichées à l'ouverture

## Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- npm
- Le serveur [`wordle-api`](https://github.com/arbxz/wordle-api.git) cloné et lancé en parallèle (voir plus bas)

## Installation

1. Cloner ce dépôt puis installer les dépendances :

```bash
git clone https://github.com/amaaune/tp-wordle-react.git
cd tp-wordle-react/logia
npm install
```

2. Créer un fichier `.env.local` à la racine du projet (`tp-wordle-react/logia`) contenant votre clé API :

```
VITE_API_KEY=votre_cle_api
```

> La clé API doit correspondre à celle configurée côté serveur `wordle-api` (voir son propre README pour la générer/récupérer).

## Lancer l'API (`wordle-api`)

Ce projet dépend d'un serveur API externe qui fournit le mot du jour. Il doit tourner en parallèle, sur `http://localhost:3000`.

```bash
git clone https://github.com/arbxz/wordle-api.git
cd wordle-api
npm install
npm run dev
```

Vérifiez que le fichier `.env.local` de `wordle-api` contient bien :

```
API_KEY=votre_cle_api
CLIENT_URL=http://localhost:4173
```

> `CLIENT_URL` doit correspondre à l'origine exacte utilisée par le front (attention à `localhost` vs `127.0.0.1`, qui sont considérés comme deux origines différentes par le navigateur).

## Lancer le projet en développement

Une fois l'API lancée, dans un second terminal :

```bash
cd tp-wordle-react/logia
npm run dev
```

Le jeu est accessible sur **http://localhost:4173**.

## Lancer un build de production

```bash
npm run build
npm run preview
```

Le jeu est alors accessible sur **http://localhost:4173** (ou le port indiqué dans le terminal).

> Si vous testez le build, veillez à ce que `CLIENT_URL` côté `wordle-api` autorise également ce port, sinon les requêtes seront bloquées par CORS.

## Règles du jeu

- 🟩 lettre bien placée
- 🟧 lettre présente mais mal placée
- ⬜ lettre absente du mot
- 6 essais pour trouver le mot du jour

## Structure du projet

```
src/
├── App.tsx          # Logique principale du jeu (état, fetch API, handleKeyPress)
├── Grid.tsx          # Affichage de la grille (essais + ligne courante)
├── Keyboard.tsx      # Clavier virtuel interactif et coloré
├── Validate.tsx      # Algorithme de comparaison guess / mot secret
├── Results.tsx       # Message de victoire / défaite
├── Rules.tsx         # Modale générique + bouton/modale des règles
```
