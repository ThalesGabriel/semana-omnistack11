import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity, Text } from 'react-native';
const CardIncident = (props) => (
  <Card style={{marginBottom: 20}}>
    <Card.Title title={props.caso.title} subtitle={props.caso.name} left={(props) => <Avatar.Icon {...props} icon="heart-half-full" />} />
    <Card.Content style={{height: 60, overflow: 'hidden'}}>
      <Paragraph>{props.caso.description}</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button color="black">
        Valor: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.caso.value)}
      </Button>
      <TouchableOpacity style={{marginLeft: 'auto'}} onPress={props.navigation}><Button>Ajudar</Button></TouchableOpacity>
    </Card.Actions>
  </Card>
);

export default CardIncident;