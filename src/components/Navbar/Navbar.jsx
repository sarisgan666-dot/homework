import './Navbar.css'
import img4 from '../../assets/image 1 (5).png'
import img5 from '../../assets/image 3 (1).png'
import img6 from '../../assets/image 4 (1).png'
import img7 from '../../assets/image 5.png'

const Navbar = () => {
  return (
    <>

<header class="navbar">
        <div class="top-nav">
            <div class="logo"><strong>A</strong> Anata – Kuhni</div>
            <div class="contact-info">
                <span>Moskva, Dmitrovskoye shosse</span>
                <span><strong>+7 499 321-20-63</strong></span>
                <span>9:00 - 20:00</span>
            </div>
        </div>
        <nav class="main-menu">
            <ul>
                <li><a href="#">Katalog</a></li>
                <li><a href="#">Ishlarimiz</a></li>
                <li><a href="#">Sharhlar</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Telegram</a></li>
            </ul>
            <div class="nav-buttons">
                <button class="btn-outline">Loyiha + Hisoblash</button>
                <button class="btn-outline">O'lchovchini chaqirish</button>
            </div>
        </nav>
    </header>

    <section class="hero">
        <div class="hero-image">
            <img src={img4} alt="" />
            <div class="arrow left-arrow">&lt;</div>
        </div>
        <div class="hero-promo">
            <div class="promo-text">
                <h2>Oshxonalar ishlab chiqaruvchidan</h2>
                <div class="discount">-40%</div>
                <p>Oshxona kolleksiyalari uchun</p>
                <button class="btn-main">Tanlash</button>
            </div>
            <div class="arrow right-arrow">&gt;</div>
        </div>
    </section>

    <section class="video-section">
        <h3>Maxsus siz uchun oshxonalarimiz videosi</h3>
        <div class="video-grid">
            <div class="video-card">
                <div class="video-thumb">
                    <img src={img5}alt="Video"/>
                </div>
                <p>Trenddagi oq oshxona sharhi</p>
            </div>
            <div class="video-card">
                <div class="video-thumb">
                    <img src={img6} alt="Video"/>
                </div>
                <p>Moda oshxona 2021 trendi</p>
            </div>
            <div class="video-card">
                <div class="video-thumb">
                    <img src={img7} alt="Video"/>
                </div>
                <p>Zamonaviy yorug' oshxona</p>
            </div>
        </div>
        <button class="btn-more">Ko'proq video ko'rish</button>
    </section>
    </>
  )
}

export default Navbar