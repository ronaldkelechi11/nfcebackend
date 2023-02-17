# NANA FATIMAH CO-OPERATIVE ENTREPRISE (BACKEND)
### -  Created by Ronald Kelechi Representing We-Hub Freelance Agency CEO

This is the backend for N.F.C.E
created with __Node.js__ and __Express.js__.

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
|users|get|200 (__succesful__) <br>401(__no users found__) <br>return ___List of users___
|dashboard/__:email__| get|200 (__succesful__) <br>401(__no user found__) <br>return ___user___|
|dashboard/forgotPassword| post | 200(__succesful__) <br> 401(__Error in changing password__)|
|dashboard/changePin| post |200(__succesful__) <br> 401(__Error in changing Pin__)|
