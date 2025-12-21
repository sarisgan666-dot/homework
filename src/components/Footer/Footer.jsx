import React from "react";
import "./Footer.css";
import { FaVk, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="footer_col">
          <h4>Стиль</h4>
          <p>Классика</p>
          <p>Неоклассика</p>
          <p>Прованс</p>
          <p>Современный</p>
          <p>Скандинавский</p>
          <p>Лофт</p>
          <p>Барокко</p>
          <p>Минимализм</p>
        </div>

        <div className="footer_col">
          <h4>Фасад</h4>
          <p>МДФ</p>
          <p>Эмаль</p>
          <p>Пластик</p>
          <p>Массив дерева</p>
          <p>Акрил</p>
          <p>ЛДСП</p>
          <p>Дуб</p>
          <p>Шпон</p>
        </div>

        <div className="footer_col">
          <h4>Форма кухни</h4>
          <p>Прямые</p>
          <p>Г-образные</p>
          <p>П-образные</p>
          <p>Угловые</p>
          <p>С барной стойкой</p>
          <p>С островом</p>
          <p>С пеналом</p>
          <p>Нестандартные</p>
        </div>

        <div className="footer_col">
          <h4>Цвет</h4>
          <p>⚪ Белые</p>
          <p>⚪ Серые</p>
          <p>🟤 Капучино</p>
          <p>🟡 Бежевые</p>
          <p>🟢 Оливковые</p>
          <p>🔵 Мятные</p>
          <p>⚫ Черные</p>
          <p>🟠 Коричневые</p>
        </div>

        <div className="footer_col">
          <h4>Размер</h4>
          <p>Небольшие кухни</p>
          <p>Кухни 4 метра</p>
          <p>Кухни 5 метра</p>
          <p>Кухни 6 метра</p>
          <p>Кухни 8 метра</p>
          <p>Кухни 10 метра</p>
          <p>Кухни 12 метра</p>
          <p>Кухни 14 метра</p>
        </div>
      </div>

        <div className="footre_logo_text">
          <div className="footer_logo">
           <div  className="logo_ayykin ">
             <span className="logo_circle">A</span>
            <h3>Аната – Кухни</h3>
           </div>
          <div className="footer_social">
            <FaVk />
            <FaTelegramPlane />
          </div>
           <div className="ollp">
             <div className="footer_p_text">
              <p className="text1">Москва</p>
              <p className="text2">Дмитровское шоссе, д 62 стр 5</p>
            </div>

            <div className="footer_p_text">
              <p className="text1">+7 499 321-20-63</p>
              <p className="text2">Заказать звонок</p>
            </div>

            <div className="footer_p_text">
              <p className="text1">9:00 - 20:00</p>
              <p className="text2">ежедневно</p>
            </div>
           </div>
          </div>


          <div className="list_footer">
          <div className="footer_links">
            <a href="#">Каталог</a>
            <a href="#">Наши работы</a>
            <a href="#">Отзывы</a>
            <a href="#">Видео</a>
          </div>
          <div className="footer_buttons">
            <button className="btn_primary">Проект + Расчет</button>
            <button className="btn_outline">
              Вызвать замерщика с образцами
            </button>
          </div>
          </div>
          <p className="pp_logo">© 2022 Аната-Кухни. Все ресурсы сайта www.anata-kitchen.ru,
             включая (но не ограничиваясь) текстовую, графическую, фотографическую
              и видео информацию, структуру, дизайн и оформление страниц, товарные 
              знаки, доменное имя, фирменное наименование являются объектами авторского
               права и прав на интеллектуальную собственность, защищены российским 
               законодательством и международными соглашениями об 
             охране авторских прав и интеллектуальной собственности.</p>

        </div>
        <div>

        </div>
    </footer>
  );
};

export default Footer;
