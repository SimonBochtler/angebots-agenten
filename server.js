# Angebots-Agenten

Multi-Agenten-System zur Angebotserstellung – Node.js auf Azure App Service.

## Projektstruktur

```
angebots-agenten/
├── server.js                       ← Node.js Server
├── package.json                    ← Abhängigkeiten
├── .gitignore
├── static/
│   └── index.html                  ← Dashboard
└── .github/
    └── workflows/
        └── deploy.yml              ← Auto-Deployment
```

## Azure App Service Einrichtung

### 1. Web-App erstellen
- portal.azure.com → Ressource erstellen → Web-App
- Laufzeitstapel: Node 20 LTS
- Betriebssystem: Linux

### 2. API-Key hinterlegen
- App Service → Konfiguration → Neue Anwendungseinstellung
- Name:  ANTHROPIC_API_KEY
- Wert:  sk-ant-...

### 3. GitHub verbinden
- App Service → Deployment Center → GitHub
- Repository: angebots-agenten
- Branch: main

### 4. Entra ID Login aktivieren
- App Service → Authentifizierung → Anbieter hinzufügen
- Microsoft auswählen → Speichern
