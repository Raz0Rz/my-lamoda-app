import { useState } from 'react'
import logoLamoda from './assets/La_logo-01 1.svg'
import logoAiro from './assets/Airo.svg'
import search from './assets/search.svg'
import cloth from './assets/image-Photoroom 1.png'
import pointer from './assets/navigation.svg'
import truck from './assets/truck.svg'
import card from './assets/credit-card.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <span className='help_info'>
          <div className='region_info'>
            <img src={pointer} alt="" />
            <a href="#">Укажите регион доставки</a>
          </div>
          <div className='right_info'>
            <div className='delivery'>
              <img src={truck} alt="" />
              <a href="#">Другие способы доставки</a>
            </div>
            <div className='pay'>
              <img src={card} alt="" />
              <a href="#">Платите как удобно</a>
            </div>
          </div>
        </span>
        <span className='navigation'>
          <div className='type_info'>
            <a href="#">Женщинам</a>
            <a href="#">Мужчинам</a>
            <a href="#">Детям</a>
          </div>
          <button className='button_ent'>
            Войти
          </button>
        </span>
      </header>
      <main>
        <section className='glavtxt'>
          <a href="#" className="logo">
            <img src={logoLamoda} alt="Lamoda" />
            <img src={logoAiro} alt="Airo" />
          </a>
        </section>
        <section className='offers'>
          <div className='offers_navigate'>
            <ul className='txt_navigate'>
              <li><a href="#">Идеи</a></li>
              <li><a href="#">Новинки</a></li>
              <li><a href="#">Одежда</a></li>
              <li><a href="#">Обувь</a></li>
              <li><a href="#">Аксессуары</a></li>
              <li><a href="#">Бренды</a></li>
              <li><a href="#">Premium</a></li>
              <li><a href="#">Спорт</a></li>
              <li><a href="#">Resale</a></li>
              <li><a href="#">Красота</a></li>
              <li><a href="#">Дом</a></li>
              <li><a href="#">Sale%</a></li>
            </ul>
            <div className='search_offers'>
              <div className='search_box'>
                <input type="text" placeholder="Поиск" />
              </div>
              <button className='search_button'>
                <img src={search} alt="Найти" />
              </button>
            </div>
          </div>
          <div className='offers_block'>
            <div className='offers_left'>
              <div className='infooffers_block'>
                <p className='txt_blockhead'>Скидка 15% на первую 
                  химчистку с доставкой</p>
                <p className='txt_block'>
                  Мы предоставляем скидку на услугу компании 
                  Airo. Услуга доступна для жителей Москвы и 
                  МО (можно уточнить при оформлении заказа)
                </p>
              </div>
              <button className='order_call'>
                <p>Заказать звонок!</p>
              </button>
            </div>
            <div className='offer_img'>
              <img src={cloth} alt="" />
            </div>
          </div>
        </section>
        <section className='adv'>
          <h2>Преимущества Airo</h2>
          <div className='cards_adv'>
            <div className='delivery_adv'>

            </div>
            <div className='care'>

            </div>
            <div className='quality'>
              
            </div>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
