import React from 'react';
import { View,Button,Text,ImageBackground } from 'react-native';
import background2 from '../assets/background.jpeg'
export default function Tutorial({navigation}) {
  const textTutorial = "If you like number games and number puzzle games, play Sum Number Cius game for free! This is one of the best mind games and brain games for everyone. Enjoy different games, difficult games and fun games in one mind game! Sum Number Cius game is a fun free game and you can play it offline."
    React.useEffect(()=>{
        navigation.setOptions({
          headerLeft: () => (
            <Button
              onPress={() => {
                navigation.goBack();
              }}
              title="Back"
            />
          ),
          headerRight:null
        });
    },[])
    
    return(
      <ImageBackground 
          source={background2}
          resizeMode="cover" 
          style={{flex:1}}
        >
        <View
            style={{
              flex:1,
              backgroundColor: 'rgba(0,0,0, .7)',
              alignItems:'center',
              paddingHorizontal: 20
            }}
          >
            <Text 
              style={{
                paddingHorizontal:10,
                paddingTop:10,
                fontSize:20,
                color:'white',
                lineHeight:40
              }}
            >
              {textTutorial}
            </Text>
        </View>
        </ImageBackground>
    )
}