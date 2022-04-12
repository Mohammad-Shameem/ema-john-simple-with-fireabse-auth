/* 
1. go to firebase.google.com and then click on go to console and create a new project by clicking
   Add Project.

2. give a meaningful name in your project name then create it(if you wish) with or without google
   Analytics.

3. Then you automatic come in home page of you project then click on web sign </> to register your
   app with same menaingful name and check mark the hosting (you will do it any (if you wish) project
   and absoulute serious project)and get config.

4. And then Register App.

5. Then First of All you will see npm install firebase.run it in you project code terminal or project
   cmd line.but you have to assure that you're in the project in cmd liner or terminal whatever.

6. scroll down the same page and copy the config code and come back to the project code and create a
   File in src.I repeat File not a Folder.The file name should be firebase.init.js then paste the 
   Firebase initialize (configaration) code.And Save the code and export the app as default.But this
   is not the great system because this config is so important and so sensitive for your project.

   you will leanr after some days how to save it in a very safe place.
7. But you will use firebase hook in this project so import getAuth like import {getAuth} "fireabase/auth" 
   (if your auto import dosent work) create a const auth=getAuth(app) and export default auth not app.For 
   some advantages. But in general time you will export default app if you arent using Firebase hooks. 

8. Now go to your project home page and click Authentication in you left side bar to Authenticate your
   project and then click get started then choose your provider.Remember every provider has own and 
   different rule to be enabled.Then click enable and  follow all rules and save your provider to enable
   it.(in this project we enabled email and password only not with Email link (passwordless sign-in))
9. For this project we installed the firebase hook from react firebase hooks github command with
   npm install --save react-firebase-hooks
10.   Then scorll down little in react firebase hooks github page and clicked Authentication Hooks.And then
      we again scroll down for our authentication options.
11.   Then we select useCreateUserWithEmailAndPassword for create a new user or sign up a new user.
12.   if user is created we redirect the user to expected page.
13.   Then we implement the const signInWithEmailAndPassword by const
      [signInWithEmailAndPassword] = useSignInWithEmailAndPassword()   (we just followed documentation 
      of react firbase hooks)
14.   For Private route set we search react router and then go to authentication.ande then find out the 
      required auth.




/* 
Your Project Hosing Command.You will Find It when you Register your Project in that page and then they 
redirect you to you (Firebase Initaializeconfig code page.In that Page scroll down and click next and so 
on. Every comman you will see is your project hosting command.
1.npm install -g firebase-tools
2.firebase login
3.firebase init
4.firebase deploy
*/