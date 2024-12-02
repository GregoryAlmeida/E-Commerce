import { ComponentProps } from "react"
import '@/components/input/input.css'

type InputProps = ComponentProps<'input'> & {
  label: string;
}

export default function Input({label, id, type, ...opt}: InputProps) {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} {...opt}/>
    </div>
  )
}