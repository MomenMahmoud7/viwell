# VIwell

## Structure

```src``` folder will be the core application source code.

### assets

- Static assets ```icons-fonts-...```.

### components

- Business related components will be direct under components folder.

- UI only related components will be under UI folder.

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

- Every screen imoprted in navigations.

### styles

- Styles configs an constants.

### types

- Global shared types.

### utils

- Functions and constsnts.

<br />

---

## Run App

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of VIwell app:

```bash
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of VIwell app. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
yarn android
```

#### For iOS

```bash
yarn ios
```

If everything is set up _correctly_, you should see VIwell app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

<br />

---

## E2E Testing

>**Note**: Make sure you have completed reading ```.detoxrc.js``` file first and make sure that ios simulator already exists in you environment or you can replace it with another device

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

To start Metro, run the following command from the _root_ of VIwell app:

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

If everything is set up _correctly_, you should see VIwell app running in your _Android Emulator_ or _iOS Simulator_ shortly.

### Results

## Unit Testing

### Run tests

```bash
yarn test
```

### Results
