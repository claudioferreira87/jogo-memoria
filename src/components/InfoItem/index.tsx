import React from 'react'
import * as C from './styles';

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Value>{value}</C.Value>
    </C.Container>
  )
}

export default InfoItem