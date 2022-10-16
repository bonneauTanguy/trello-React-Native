import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Image ,Alert, Keyboard, SafeAreaView } from 'react-native'
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { ProtectedInput } from '../components/protectedInput'
import { IsTab } from '../context';
import { styles } from '../styles/index';
import { connectUser } from '../api/auth';
import { HideInput } from '../components/hideInput';


export function LoginScreen() {
  const [login, setlogin] = useState("");
  const [mdp, setmdp] = useState("");
  const { setuser } = useContext(IsTab);

  const handleClick = () => {
      Keyboard.dismiss()
      connectUser(login, mdp).then(data => {
          setuser(data);
      }).catch(err => Alert.alert(err))
  }
  return (
    <>
      <SafeAreaView style={styles.safe}>
        <View>
        </View>
          <View style={styles.contConnect}>
          
              <MyInput label={"Identifiant"} valeur={login} etat={setlogin} />

              <ProtectedInput label={"Mot de passe"} valeur={mdp} etat={setmdp} />

              <MyBout label="connexion" click={handleClick} />

          </View>
          <StatusBar ></StatusBar>
      </SafeAreaView>

        <View>

        </View>
    </>

  )
}