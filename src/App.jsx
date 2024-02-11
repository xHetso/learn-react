import Header from "./components/Header";
import { WayToTeach } from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from 'react'
import { ways } from "./data"

export default function App() {
  const [content, setContent] = useState('Нажми на кнопку')
  
  //let content = 'Нажми на кнопку';

  console.log('App Component Render')

  function handleClick( type ){
    setContent(type)
    //content = type;
  }
  return (
      <div>
        <Header/>
        <main>
          <section>
            <h3>Наш подход к обучению</h3>

            <ul>
              <WayToTeach {...ways[1]}/>
              <WayToTeach 
              title={ways[0].title} 
              description={ways[0].description}/>
              <WayToTeach 
              title={ways[1].title} 
              description={ways[1].description}/>
              <WayToTeach 
              title={ways[2].title} 
              description={ways[2].description}/>
            </ul>
          </section>
          <section>
            <h3>Чем мы отличаемся от других</h3>
            {/* <Button><span><h3>111</h3><h4>222</h4></span></Button> */}
            <Button onClick={()=>handleClick('way')}>Подход</Button>
            <Button onClick={()=>handleClick('easy')}>Доступность</Button>
            <Button onClick={()=>handleClick('program')}>Концентрация</Button>

            <p>{content}</p>
          </section>
        </main>
      </div>
  )
}
