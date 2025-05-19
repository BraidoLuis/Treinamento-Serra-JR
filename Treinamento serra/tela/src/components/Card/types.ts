import { ArrayProps } from "../Form/types"

export interface TextProps{
    type?: string
}
export interface CardProps extends ArrayProps{
    data: Array<ArrayProps>
    setData: Function
    index: number
}