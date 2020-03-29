import React from 'react';
import { View, Text, ImageBackground, Linking } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import * as MailComposer from 'expo-mail-composer';

import { useNavigation, useRoute } from '@react-navigation/native';

import exampe from '../../assets/example.jpg';
import { Container, Header, Root, StyledText, AvatarStyled } from './styles';

export default function Detail({ route }) {
  const navigation = useNavigation();
  const { incident } = route.params;
  const Message = `Olá ${incident.name}, estou entrando em contato pois gostaria de saber mais sobre o caso: ${incident.title}`;

  function NavigateBack () {
    navigation.goBack()
  }

  function sendZap () {
    Linking.openURL(`whatsapp://send?phone=558184501429&text=${Message}`)
  }

  function sendMail () {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: Message
    })
  }

  return (
    <Root>
      <View style={{width: '100%', height: '40%', borderBottomRightRadius: 50}}>
        <ImageBackground source={exampe} style={{width: '100%', height: '100%'}}   imageStyle={{ borderRadius: 40 }}>
          <Header style={{width: '100%', height: '100%', borderRadius: 40}}>
            <View style={{position: 'relative'}}>
              <StyledText style={{paddingTop: 50}}>My Account</StyledText>
              <IconButton
                icon="arrow-left"
                color='white'
                style={{position: 'absolute', top: 35, left: 20}}
                size={30}
                onPress={NavigateBack}
              />
            </View>
            <Avatar.Icon style={{alignSelf: 'center', marginTop: 40, height: 100, backgroundColor: 'white', width: 100}} color="rgb(224,32,65)" icon="heart-half-full" />
            <StyledText style={{paddingTop: 20}}>{incident.name}</StyledText>
            <StyledText style={{paddingTop: 10}}>(81){incident.wpp}</StyledText>
            <StyledText style={{paddingTop: 5}}>{incident.city} - {incident.uf}</StyledText>
          </Header>
        </ImageBackground>
      </View>
      <Container>
        <View style={{width: '100%', backgroundColor: 'white', marginTop: 20, padding: 20}}>
          <Text style={{fontWeight: 'bold'}}>{incident.title}</Text>
          <Text>{incident.description}</Text>
          <Text style={{fontWeight: 'bold', marginTop: 20}}>Valor: </Text>
          <Text>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
        </View>
        <View style={{width: '100%', backgroundColor: 'white', marginTop: 20, padding: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 17}}>Salve o dia desta ONG!</Text>
          <Text style={{fontWeight: 'bold'}}>Seja o herói deste caso</Text>
          <View style={{display: 'flex', position: 'relative'}}>
            <IconButton
              icon="whatsapp"
              color='green'
              style={{position: 'absolute', left: -10}}
              size={30}
              onPress={sendZap}
            />
            <Text style={{marginTop: 15, marginLeft: 50}}>Entre em contanto diretamente pelo whatsapp</Text>
          </View>
          <View style={{display: 'flex', position: 'relative'}}>
            <IconButton
              icon="email-plus-outline"
              color='blue'
              style={{position: 'absolute', left: -10}}
              size={30}
              onPress={sendMail}
            />
            <Text style={{marginTop: 20, marginLeft: 50}}>Mande um email para esta ONG</Text>
          </View>
        </View>
      </Container>
    </Root>
  )
}