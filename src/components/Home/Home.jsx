import React from 'react'
import './Home.scss'

const Card = ({img})=>{
    return (
        <img className='card' src={img} alt="cover"/>
    )
}


const Row = ({title})=>{
    return (
        <div className='row' >
            <h2>{title}</h2>
            <Card img={'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg'} />
            <Card img={'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg'} />
            <Card img={'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg'} />
            <Card img={'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg'} />
            <Card img={'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/1800/BlackPanther59f24429d2605.jpg'} />

        </div>
    )
}


const Home = () => {
  return (
    <>
        <section className='home' >
            <div className='banner' ></div>

            <Row title={'popular on netflix'} />

        </section>
    </>
  )
}

export default Home