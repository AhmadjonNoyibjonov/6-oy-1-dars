import "./App.css";

function App() {
  return (
    <>
      <header className="header container">
        <nav className="nav1">
          <span className="logo_span">
            <img
              width={28}
              height={28}
              src="src/assets/images/Logo_icon.svg"
              alt="logo_icon"
            />
            <p>Destinize</p>
          </span>
          <span className="search_span">
            <img
              width={16}
              height={16}
              src="src/assets/images/search_icon.svg"
              alt="logo _icon"
            />
            <input
              type="text"
              id="search"
              placeholder="Cari apapun disini..."
            />
          </span>
          <span className="brauzer_span">
            <img
              width={20}
              height={20}
              src="src/assets/images/brauzer_icon.svg"
              alt="brauzer_icon"
            />
            <select id="">
              <option value=" Bahasa Indonesia"> Bahasa Indonesia</option>
            </select>
          </span>

          <span className="location_span">
            <a href="https://www.google.com/maps/place/%D0%94%D0%B6%D0%BE%D0%BA%D1%8C%D1%8F%D0%BA%D0%B0%D1%80%D1%82%D0%B0,+Yogyakarta+City,+%D0%94%D0%B6%D0%BE%D0%BA%D1%8C%D1%8F%D0%BA%D0%B0%D1%80%D1%82%D0%B0,+%D0%98%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5%D0%B7%D0%B8%D1%8F/@-7.8032504,110.3748449,13z/data=!3m1!4b1!4m6!3m5!1s0x2e7a5787bd5b6bc5:0x21723fd4d3684f71!8m2!3d-7.8013672!4d110.3647568!16zL20vMGRnNnl4?entry=ttu">
              <img
                src="src/assets/images/location_icon.svg"
                alt="location_icon"
              />
            </a>
            <span>
              <p>Lokasi</p>
              <select id="">
                <option value="Indonesia, Yogyakarta">
                  Indonesia, Yogyakarta
                </option>
              </select>
            </span>
          </span>
        </nav>

        <nav className="nav2">
          <ul>
            <li>
              <select id="">
                <option value="Gunung">Gunung</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Pantai">Pantai</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Kuliner">Kuliner</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Outbond">Outbond</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Sejarah">Sejarah</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Edukasi">Edukasi</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Romantis">Romantis</option>
              </select>
            </li>
            <li>
              <select id="">
                <option value="Alam">Alam</option>
              </select>
            </li>
          </ul>

          <div className="delete_div">
            <span>
              <img src="src/assets/images/delete_icon.svg" alt="delete icon" />
            </span>
            <span>
              <img src="src/assets/images/user_icon.svg" alt="user icon" />
            </span>
          </div>
        </nav>
      </header>

      <div className="hero-part">
        <div className="hero-info-part">
          <a href="">✈️ • Explore the wonderful indonesia!</a>
          <h1>
            Liburan & nikmati
            <span> tempatbaru</span> di <br />
            indonesia 🏝️
          </h1>
          <p>
            Destinize membuat kamu selalu update terkait tempat liburan baru di
            Indonesia dengan mengikuti perkembangan para influencer di sosial
            media ✨
          </p>
          <div className="buttons">
            <button>Mulai sekarang →</button>
            <button>
              <img
                src="src/assets/images/triangle_icon.svg"
                alt="triangle icon"
              />
              <span>Putar Demo</span>
            </button>
          </div>
        </div>

        <div className="hero-img-part">
          <img src="src/assets/images/background.png" alt="image" />
        </div>
      </div>

      <div className="logotips container">
        <img src="src/assets/images/axon_icon.svg" alt="axon logo" />
        <img src="src/assets/images/jetstar_icon.svg" alt="jetstar icon" />
        <img src="src/assets/images/expedia_icon.svg" alt="expedia icon" />
        <img src="src/assets/images/Qantas_icon.svg" alt="qantas icon" />
        <img src="src/assets/images/alitali_icon.svg" alt="alitali icon" />
      </div>
    </>
  );
}

export default App;
