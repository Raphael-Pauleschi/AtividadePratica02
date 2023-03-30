import React from 'react';
import { Text } from 'react-native';

export default () => {
  var numbers = [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),
   Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
   Math.floor(Math.random() * 100) ];
  var max = numbers[0];
  var min = numbers[0]; 

  for(var i =0; i<= 4; i++){
    if(numbers[i] > max){
      max = numbers[i]
    }
    if(numbers[i] < min){
      min = numbers[i]
    }
  }


  return (<Text>
  O valor de {max} é maior que o valor de {min}!
  </Text>);
};
