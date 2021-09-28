# Push Notifications in React with OneSigna

It’s no secret that push notifications can help you engage and retain app users. In this tutorial, we'll show you how to integrate with the React-OneSignal NPM package to leverage push notifications in your React app.

## Install OneSignal NPM package
Inside of your project folder, open your terminal and run the following command to install the React OneSignal NPM package.
```shell
npm i react-onesignal
```
After you have successfully installed the npm package, open your App.js file, you will enter the following line of code at the top of the file:
```javascript
import OneSignal from 'react-onesignal';
```

The code above will make the OneSignal object accessible and will allow you to have access to the OneSignal SDK properties.
In the same file, we will create a `useEffect` hook. This hook will have the initialization code needed to trigger OneSignal. Remember to add the dependency array `[]`  to your `useEffect` hook. The init() method from OneSignal can only be called once and the dependency array will help us to avoid that the `useEffect` gets triggered multiple times firing the `init()` method.

```javascript
useEffect(() => {
   OneSignal.init({
     appId: "YOUR-APP-ID-HERE"
   });
 }, []);
```
