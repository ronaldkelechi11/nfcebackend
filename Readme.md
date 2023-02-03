# NANA FATIMAH CO-OPERATIVE ENTREPRISE (BACKEND)
### -  Created by Ronald Kelechi Representing We-Hub Freelance Agency CEO

This is the backend for N.F.C.E
created with __Node.js__ and __Express.js__

## __Dependencies Used__
- Express.js
- Nodemailer
- Mysql
- Nodemon
- PM2


## __Routes Used And Methods__
***
| Routes | Methods | Outputs|
|---|---|---|
|signup| _post_|200(__succesful__) <br> 404(__duplicate_entry__)|
|login| post|201(__succesful__) <br> 401(__no user found__) <br> returns ___user___|