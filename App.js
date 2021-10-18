import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TextInput, StatusBar,ScrollView  } from 'react-native';

const CatApp = () => {
  const [text, onChangeText] = React.useState("Kotak Ini bisa kamu tulis Sesuatu!!");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
              <Text style={styles.title}>Ini Adalah Tugas Apmob Minggu Ke -4</Text>
     </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
           value={text}
         />
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Isi Aku dong, Apa aja boleh Yang penting Di isi!!!"
            keyboardType="numeric"
          />
      
      
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Image
          source={{uri: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/capsule_616x353.jpg?t=1631638993"}}
          style={{width: 200, height: 200, marginTop:20, marginBottom:20}}
        />
        <Text >Come Play With me now</Text>
      </View>
      
     </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  scrollView: {
    backgroundColor: '#dddddd',
    marginHorizontal: 5,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  text: {
    fontSize: 42,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CatApp;
