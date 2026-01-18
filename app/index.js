import {useState} from "react";
import { useFonts } from 'expo-font';
import { ImageBackground, StyleSheet,Text , TextInput,Image, TouchableOpacity,View, ScrollView, TouchableHighlight, Button} from "react-native";
// import s from "../assets/images/Maharashtra.png";



import S from "../component/newscard.js";

// export default function Homepage(){
//    return(
// <ScrollView >

// <S/>
// <S/>
// <S/>
// <S/>
// <S/>
// <S/>
// <S/>
// </ScrollView>


//    )

// }





let latestNewsUrl="https://newsdata.io/api/1/latest?apikey=pub_85262903876075174c7e5c30e2218798bf9eb&language=en"

export default function Homepage(){

  const[input,setInput]=useState(" ");
  const[newsData,setData]=useState(null);
  function handleInput(value){
   setInput(value)
   
  }
  
  function getData(){

 
         latestNewsUrl=latestNewsUrl + "&q=" + input;
  

   fetch(latestNewsUrl).then(function(response)
      {
         response.json().then(function(data){
      setData(data?.results)
   })
})
  }



 
  
//   to filter input  from  news title after fetching
//   const filteredArray=newsData?.filter(function(elem){

//    return(elem.title.toLowerCase().includes(input.toLowerCase()))
//   })
  

  return(
   <ScrollView>
    <View style={{
     
      backgroundColor:"white",
      flexDirection:"row",
      marginTop:10,
      padding:10,
      gap:6
    }}>
      <TextInput style={{
         marginTop:6,
         borderRadius:10,
         height:"auto",
         flex:1,
         borderWidth:1


      }}onChangeText={handleInput}/>
      <TouchableHighlight  onPress={getData}  style={{
         borderRadius:10,
         
      }}>
         <Text style={{
            color:"white",
            fontSize:32,

         }}>🔍</Text>
      </TouchableHighlight>


    </View>

    <View style={{
      flexDirection:"row",

    }}>
     {/* <Button title="India" onPress={handleIndiaButtonPress}></Button> */}
    </View>

    <View>
      <View style={{
         padding:10,
         marginTop:30,

      }}>

         {
            input?.length==0 && <Text> no data</Text>
         }
         {
            newsData?.map(function(item,i){
               return <S key={i} link={item.link} url={item.image_url} title={item.title} desc={item.description}/>
            })
              
         }

         
      </View>


    </View>



   </ScrollView>
  )





   
}