import React, { MouseEventHandler } from 'react'
import * as C from './styles';

interface ButtonProps {
  label: string;
  icon: any;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Button = ({ icon, onClick, label }: ButtonProps) => {
  return (
    <C.Container onClick={onClick}>
      <C.IconArea>
        <C.Icon src={icon}></C.Icon>
      </C.IconArea>
      <C.Label>{label}</C.Label>
    </C.Container>
  )
}

export default Button;