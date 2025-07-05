import { Image, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"


import { styles } from './styles';
import { colors } from '@/styles/colors';

import { Link } from '@/components/link';
import { Caterories } from '@/components/categories';
import { FlatList } from "react-native"


export default function Index() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("@/assets/logo.png")} style={styles.logo} />

                <TouchableOpacity > {/*elementos interativos, como botões, que respondem ao toque do usuário com um efeito de opacidade transparência */}
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>

            <Caterories />

            <FlatList
                data={["1", "2", "3", "4", "5"]}
                keyExtractor={item => item}
                renderItem={() => (
                    <Link
                        name='Rocketseat'
                        url='https://www.rocketseat.com.br/'
                        onDetails={() => console.log("Clicou!")} 
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

