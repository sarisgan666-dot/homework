import React from 'react'
import './Servise.css'
import img1 from '../../assets/photo1.png'
import img2 from '../../assets/photo2.png'
import img3 from '../../assets/photo3.png'
import img4 from '../../assets/photo4.png'
const Servise = () => {
  return (
    <div id="servise">
      <div className="servise-text">
        <h1 className="servise_logo">
          Живые фотографии наших работ от реальных клиентов 
        </h1>

        <div className="servise_cards">

          /* 1 */
          <div className="servise_card">
            <div className="servise_card_content">
              <img id='img_logorasim' src={img1} alt="" />
              <h3 className="text_servis_h3">Кухня Teramo</h3>
              <div className='servise_cart_text'>
                <p className="servis_text_plar">Массив дуба</p>
                <p className="servis_text_plar">Фрезеровка</p>
                <p className="servis_text_plar">7,2 м.п.</p>
              </div>
          <div className='text_btin_servis'>  
           <div className='sertata_lok'>
           <p className="servis_text_p2lar">125 000 ₽</p>
           <p className='p_text_servis'>147 000 ₽</p>
           </div>
           <button className='bten_text_lok'>Рассчитать эту кухню</button>
         </div>

            </div>

            <div className="servise_card_content">
              <img id='img_logorasim' src={img3} alt="" />
              <h3 className="text_servis_h3">Кухня Integrato</h3>
              <div className="servise_cart_text">
                <p className="servis_text_plar">Cleaf + Эмаль</p>
                <p className="servis_text_plar">Система без ручек</p>
                <p className="servis_text_plar">4,2 м.п.</p>
              </div>
  <div className='text_btin_servis'>    
          <div className='sertata_lok'>
            <p className="servis_text_p2lar">180 000 ₽</p>
            <p className='p_text_servis'>220 000 ₽</p>
          </div>
          <button className='bten_text_lok'>Рассчитать эту кухню</button>
  </div>

            </div>
          </div>

          /* 2 */
          <div className="servise_card2">
            <div className="servise_card_content">
              <img id='img_logorasim' src={img2} alt="" />
              <h3 className="text_servis_h3">Кухня Integrato</h3>
              <div className='servise_cart_text'>
                <p className="servis_text_plar">Пластик</p>
                <p className="servis_text_plar">Система без ручек</p>
                <p className="servis_text_plar">7,2 м.п.</p>
              </div>
         <div className='text_btin_servis'>
           <div className='sertata_lok'>
           <p className="servis_text_p2lar">270 000 ₽</p>
           <p className='p_text_servis'>357 000 ₽</p>
           </div>
           <button className='bten_text_lok'>Рассчитать эту кухню</button>
       </div>

            </div>

            <div className="servise_card_content">
              <img id='img_logorasim' src={img4} alt="" />
              <h3 className="text_servis_h3">Кухня Integrato</h3>
              <div className='servise_cart_text'>
                <p className="servis_text_plar">Массив дуба</p>
                <p className="servis_text_plar">Система без ручек</p>
                <p className="servis_text_plar">7,2 м.п.</p>
              </div>
<div className='text_btin_servis'>

              <div className='sertata_lok'>
              <p className="servis_text_p2lar">230 000 ₽</p>
              <p className='p_text_servis'>280 000 ₽</p>
              </div>
              <button className='bten_text_lok'>Рассчитать эту кухню</button>
</div>

            </div>
          </div>


        </div>
        <div className="servis_btn2">
          <button className="servis_btn">Рассчитать эту кухню</button>
        </div>
      </div>
    </div>
  )
}

export default Servise
