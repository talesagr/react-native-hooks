import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { carregaProdutores } from '../../../servicos/carregaDados';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './Produtor';

export default function Produtores({topo: Topo}) {

    const [titulo,lista] = useProdutores();

    // eslint-disable-next-line react/no-unstable-nested-components
    const TopoLista = () => {
        return (
          <>
            <Topo />
            {titulo && <Text style={estilos.titulo}>{titulo}</Text>}
        </>
        );
    };

    return (
        <FlatList
            data={lista}
            renderItem={({ item }) => <Produtor {...item} />}
            //dentro do keyExtractor recomenda-se passar o ID, no caso passamos o nome, mas somente para fins didaticos
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={TopoLista}
        />
    );
}

const estilos = StyleSheet.create({
    titulo : {
        fontSize : 20,
        lineHeight : 32,
        marginHorizontal : 16,
        marginTop : 16,
        fontWeight : 'bold',
        color : '#464646',
    },
});
