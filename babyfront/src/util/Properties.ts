// Create a type widthout functions
type Propriedades<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
  
// Usa o Pick para criar um tipo sem os métodos da classe
type DataType<T> = Pick<T, Propriedades<T>>;

export type {
    DataType
}