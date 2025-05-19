export interface FormProps{
    data: Array<ArrayProps>
    setData: Function
}
export interface ArrayProps{
    name: string,
    time: string,
    category: string
}