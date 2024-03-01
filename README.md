# VIwell

## Structure

```src``` folder will be the core application source code.

### assets

- Static assets ```icons-fonts-...```.

### components

- Business-related components will be directly under the components folder.

- UI-related components will be under the UI folder.

### hooks

- Custom hooks.

### i18n

- i18n config.

- Translations.

### navigations

- Navigations Stacks.

### redux

- Redux related files ```store-queries-slices```.

### screens

- Every screen imported in navigations.

### styles

- Styles configs and constants.

### types

- Global shared types.

### utils

- Functions and constants.

<br />

---

## Run App

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

### Step 1: Install node modules and pods

First, you will need to install node modules used by the VIwell app and install pods for ios as follows:

```bash

// First install node modules
yarn install

// Second install pods
npx pod-install

// OR
cd ios
pod install
```

### Step 2: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the VIwell app:

```bash
yarn start
```

### Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of the VIwell app. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
yarn android
```

#### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see the VIwell app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

<br />

---

## E2E Testing

>**Note**: Make sure you have completed reading ```.detoxrc.js``` file first and make sure that the ios simulator already exists in your environment or you can replace it with another device

```bash
module.exports = {
   ...
   devices: {
      simulator: {
         type: 'ios.simulator',
         device: {
            type: 'iPhone 15', // <= here
         },
      },
      ...
   },
   ...
};
```

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of the VIwell app:

```bash
yarn start
```

### Step 2: Run tests

#### For Android

```bash
yarn e2e:test-android
```

#### For iOS

```bash
yarn e2e:test-ios
```

If everything is set up _correctly_, you should see the VIwell app running in your _Android Emulator_ or _iOS Simulator_ shortly.

### Results

#### Android

<img width="983" alt="Screenshot 2024-03-01 at 6 47 04 PM" src="https://github.com/MomenMahmoud7/viwell/assets/42410999/79457b74-905d-46ca-ba03-230de42d76ed">

<br />

https://github.com/MomenMahmoud7/viwell/assets/42410999/13414f47-1516-47d5-8455-e6c1d40cb206

---

#### iOS

<img width="983" alt="Screenshot 2024-03-01 at 6 39 05 PM" src="https://github.com/MomenMahmoud7/viwell/assets/42410999/8b14521e-73a4-4f9a-9a9a-4e9a6b5a691d">

<br />

https://github.com/MomenMahmoud7/viwell/assets/42410999/86948e24-da22-42c1-b520-ee08e269c9fd

---

## Unit Testing

### Run tests

```bash
yarn test
```

### Results

<img width="819" alt="Screenshot 2024-03-01 at 6 06 13 PM" src="https://github.com/MomenMahmoud7/viwell/assets/42410999/3c21938b-1655-43db-897c-afc7ae1ea668">
