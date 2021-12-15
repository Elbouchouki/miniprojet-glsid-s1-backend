# MiniProjet - Vaccination - Backend(Serveur) #


- Clone project : 
  
 ```console
Elbouchouki:~$ git clone https://github.com/glsidVaccination/backend.git
```
- Install dependencies : 
  
 ```console
Elbouchouki:~$ npm install
```

- Migrate : 
  
 ```console
Elbouchouki:~$ sequelize db:migrate
```

- Cancel all migrations : 
  
```console
Elbouchouki:~$ sequelize db:migrate:undo:all
```

- Run developpement server : 
  
 ```console
Elbouchouki:~$ npm run dev
```

- Lunch all seeders : 

 ```console
Elbouchouki:~$ sequelize db:seed:all
```