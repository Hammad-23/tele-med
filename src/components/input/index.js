import React from 'react';
import { Container, Header, Content, Item, Input, Icon,Label } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function InputBox(props) {
  
    return (
      
         
          <Item   floatingLabel>
             {/* <Icon active name='home' /> */}
             <AntDesign size={15} name={"user"} color="black" />
            
            <Label>{props.floatLabel}</Label>
            
            <Input {...props} />
          </Item>
         
          
     
    );
    }