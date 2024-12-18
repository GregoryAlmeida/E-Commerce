import { ComponentProps } from "react"
import '@/components/input/input.css'

type InputProps = ComponentProps<'input'> & {
  label: string;
  border?: string;
}

export default function Input({label, border, id, type, ...opt}: InputProps) {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input type={type} style={{borderColor: border}} id={id} name={id} {...opt}/>
    </div>
  )
}