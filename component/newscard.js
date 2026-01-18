import {useState} from "react";
import { useFonts } from 'expo-font';
import { ImageBackground,Linking, Stylesheet,Text , TextInput,Image, TouchableOpacity,View, ScrollView,create, TouchableHighlight} from "react-native";


const PLACEHOLDER_IMAGE="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"

export default function newsCard({link,url,title,desc}){

   function openLink(){
    Linking.openURL(link)

   }
    return(
        <TouchableOpacity onPress={openLink}>
       < View style ={{
            height:100,
            backgroundColor:"grey",
            width:"100%",
            flexDirection:"row",
            overflow:"hidden",
            borderRadius:10,
            marginBottom:5

        }}>

            <Image src={url||PLACEHOLDER_IMAGE} style={{
                height:"100%",
               aspectRatio:1/1
            }}/>

            <View style={{
                flex:1,
                padding:5
            }}>
                <Text numberOfLines={1} style={{
                   
                    marginBottom:10,
                    fontWeight:600,

                }}>{title}</Text>

                <Text numberOfLines={3}>{desc}</Text>
            </View>

            </View>
         </TouchableOpacity>
      
            

    )
}