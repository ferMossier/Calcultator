/* eslint no-eval: 0 */
import React, { useState } from 'react'; // { useState } --> Uso de destructuring en librerías para importación.
import words from 'lodash.words';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers'
import Result from './components/Result';
import './App.css'

const App = () => {
    // const arrayTextoFuncionModificaTexto = useState(""); // arrayTextoFuncionModificaTexto --> ["", funcion] --> [0] = valor incial. [1] = funcion que modifica el valor inicial
    // const texto = arrayTextoFuncionModificaTexto[0];
    // const funcionModificaTexto = arrayTextoFuncionModificaTexto[1];

    const [stack, setStack] = useState(""); // --> Array destructuring. Hace lo mismo que el código comentado de arriba pero en menos lineas.

    //Uso de la librería lodash con una expresión regular para dividir los strings que se muestran en la pantalla de acuerdo a las operaciones introducidas (Ver consola)
    const items = words(stack, /[^-^+^*^/]+/g); 
    const value = items.length > 0 ? items[items.length-1] : "0";
    console.log("render de App", value)

    return (
        <main className='react-calculator'>
            <Result value = {value} />
            <Numbers onClickNumber = {number => {
                console.log(`Presionado:  ${number}`)
                setStack(`${stack}${number}`) // `${blablabla}` --> Template Literals: Forma de concatenar literales o Strings en ES6.
            }} />
            <Functions
                onContentClear = {clear => {
                    console.log(`Presionado:  ${clear}`)
                    setStack("");
                }}
                onDelete = {(borrar) => {
                    if(stack.length > 0){
                        const newStack = stack.substring(0, stack.length-1);
                        console.log(`Presionado:  ${borrar} ${newStack}`)
                        setStack(newStack);
                    }
                }}
            />
            <MathOperations 
                onClickOperation = {operation => {
                    console.log(`Presionado:  ${operation}`)
                    setStack(`${stack}${operation}`)
                }} 
                onClickEqual = {equal => {
                    console.log(`Presionado:  ${equal}`)
                    if(stack !== ""){
                        setStack(eval(stack).toString()) 
                    }
                        
                    //La funcion eval() no es recomandada ya que no hace validaciones de seguridad de lo que se está ejecutando. En este caso es útil, pero no se recomienda su uso
                }} 
            />
        </main>
    )
}

export default App;