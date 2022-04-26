import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import react, { useState, useEffect } from "react";
import MainPage from "./Screens/MainPage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      PoppinsBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
      PoppinsRegular: require("./assets/Fonts/Poppins-Regular.ttf"),
      PoppinsItalic: require("./assets/Fonts/Poppins-Italic.ttf"),
      PoppinsLight: require("./assets/Fonts/Poppins-Light.ttf"),
      InterBold: require("./assets/Fonts/Inter-Bold.ttf"),
      InterRegular: require("./assets/Fonts/Inter-Regular.ttf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <MainPage />;
}

const styles = StyleSheet.create({});
