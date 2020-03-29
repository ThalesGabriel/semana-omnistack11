import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import { Container, Header, HeaderText, Title, Description } from './styles';
import CardIncident from '../../components/CardIncident';
import api from '../../services/api';

export default function Incidents(props) {
  const [ incidents, setIncidents ] = React.useState([]);
  const [ total, setTotal ] = React.useState(0);
  const [ page, setPage ] = React.useState(1)
  const [ loading, setLoading ] = React.useState(false)

  async function loadIncidents() {
    if(loading) return;
    if(total > 0 && incidents.length === total ) return;

    setLoading(true)

    api.get('/some-incidents', { params: { page } }).then(res => {
      setIncidents([...incidents, ...res.data.data])
      setTotal(res.data.amount)
      setLoading(false)
      setPage(page+1)
    }) 
  }

  React.useEffect(() => {
    loadIncidents()
  }, [])


  const navigation = useNavigation()

  function NavigateToDetail (incident) {
    navigation.navigate('Detail', { incident: incident })
  }

  return (
    <Container style={{paddingTop: Constants.statusBarHeight + 20}}>
      <Header>
        <Image source={logoImg} />
        <HeaderText>Total de <Text style={{fontWeight: 'bold'}}> {total > 0? `${total} casos` : "0 casos" }</Text>.</HeaderText>
      </Header>

      <Title>Bem Vindo!</Title>
      <Description>Estes casos precisam de heróis</Description>

      <FlatList 
        data={incidents}
        style={{marginTop: 32}}
        keyExtractor={(incident, index) => incident.id+incident.ong_id+index}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item: incident }) => (
          <CardIncident navigation={() => NavigateToDetail(incident)} caso={incident}/>
        )}
      />

    </Container>
  )
}