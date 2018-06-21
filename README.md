# Pourquoi ?

Le but est d'utiliser une lib perso sans avoir à la publish et quelle soit sur le même fileSystem que les applications qui vont l'importer. 

# Quoi faire ?


``` 
cd local-npm-lib-import-angular/sample-lib-container
npm install --save 
cd local-npm-lib-import-angular/sample-lib-container/projects/sample-lib
npm install --save &&  npm run build:lib
cd local-npm-lib-import-angular/sample-lib-container/projects/sample-lib/dist
npm pack

cd /local-npm-lib-import-angular/sample-app-using-lib
npm install --save && ng serve
```

# Que se passe t il ? 

### On installe les dépendance nécessaire au build de la lib.
### On build la lib.
### On pack le résultat ce qui donne un tgz de la lib.
### On link ce tgz dans le package.json de l'application qui l'utilise.
### On build et lance l'application.
