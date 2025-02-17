import React from 'react'

const App2 = () => {
  return (
    <div>App2</div>
  )
}

export default App2

//rafce

//Nomeação de Componentes
    //PascalCase

//export default, deixa importar com qualquer nome e sem chaves

//export, tem que importar com chaves e o nome correto do componente

//Self Closing tag
        //<Header><Header/>
        //<Header />

//Nomeação de classes em CSS
    //Metodologia BEM
        //Blocks == Componentes
        //Elements
        //Modifiers
        //bloco__elemento--modificador
    //header__link
    //header__link--small
    //nomes compostos são separados por hifen (-)

//Fragment => Tag vazia (<></>)

//Componentes recebem "props" (argumentos/parametros)


 // items == 5 ? (
        //   <>
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //   </>
        // ) : (
        //   <>
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //     <SingleItem />
        //   </>
        // )


        // Array(items)
        // .fill()
        // .map((currentValue, index) => (
        //   <SingleItem key={`${title}-${index}`}/>
        // ))

//Spread operator (...) -> copia os valores de um objeto ou array para outra variavel

//Quando componentes se rerenderizam
  //Uma das ocasiões é quando uma variavel usada por esse componente é atualizada

//Hook - useState