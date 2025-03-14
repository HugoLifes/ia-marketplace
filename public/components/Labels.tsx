import React from 'react'

const Labels: React.FC = () => {
  return (
    <div className='pages'>
      <div className='pages_wrapper'>
        <div
          id='page-1'
          className='page page--welcome page--intro'>
          <h1 className='message'>Bienvenido</h1>
        </div>
        <div
          id='page-2'
          className='page page--headband page--hidden'>
          <h1 className='message'>ALPHA</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
          <button className="primary-button" onClick={() => console.log('ALPHA!')}> 
          <span>Empezemos!</span>
        </button>
        </div>
        <div
          id='page-3'
          className='page page--subscribe page--hidden'>
          <h1 className='message'>MarketPlace</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-4'
          className='page page--sounds page--hidden'>
          <h1 className='message'>Modelos Especializados</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
        </div>
        <div
          id='page-5'
          className='page page--subscribe page--hidden'>
          <h1 className='message'>Subscribete</h1>
          <p className='message--sub'>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Aspernatur quae architecto
            molestiae laudantium consequuntur.
          </p>
          <button className="primary-button" onClick={() => console.log('Subscribete!')} > 
          <span>Subscribete!</span>
        </button>
        </div>
        
      
      </div>
    </div>
  )
}

export default Labels;