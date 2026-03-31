import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "1472006";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "Noha",
      heroSub: "حبيبتي وروحي وأجمل نعمة في حياتي ❤️",
      heroText:
        "Noha، انتي أجمل حد دخل حياتي، ومن يوم ما عرفتك وأنا قلبي بقى أهدى وأحلى. وجودك جنبي مخلي لكل حاجة طعم تاني، وكل يوم بيعدي بيأكدلي إني بحبك أكتر من اليوم اللي قبله، وإنك أنتي الأمان والونس والفرحة اللي كنت بدور عليهم طول عمري ❤️",
      meetTitle: "أول مرة شفتك فيها ❤️",
      meetDate: "2026-01-04",
      timerTitle: "من أول مرة شفتك فيها ❤️",
      timerText:
        "من يوم 4/1/2026 وأنا حاسس إن حياتي اتغيرت للأجمل، وكأن اليوم ده كان بداية النور في قلبي. كل لحظة بعده خلتني أتأكد إنك أجمل هدية من ربنا، وإن وجودك في حياتي هو الحاجة اللي نفسي تفضل معايا العمر كله ❤️",
      longMessage:
        "Noha، انتي مش مجرد حد بحبه… انتي الحكاية الحلوة اللي اتكتبت لقلبي، وانتي الحضن المعنوي اللي بيريحني حتى من غير كلام، وانتي الضحكة اللي بترجعلي روحي، والنظرة اللي بتطمني، والوجود اللي بيهون الدنيا كلها. بحبك حب كبير أوي، حب صادق من قلبي، حب بيزيد كل يوم، وبيخليني أتمنى أفضل طول عمري جنبك، أشوفك مبسوطة، وأفضل السبب في ضحكتك وفرحتك وراحة بالك. انتي عندي أجمل من الكلام، وأغلى من أي حاجة، وأقرب لقلبي من نفسي. ولو الدنيا كلها وقفت ضدي، يكفيني إنك معايا، لأنك بالنسبالي وطن، وحب، وسكينة، وكل حاجة حلوة اتجمعت في شخص واحد اسمه Noha ❤️",
      cuteText:
        "يا Noha يا أجمل وأحن وأرق قلب في الدنيا… الموقع ده معمول ليكي إنتي وبس، بكل الحب اللي جوايا 💖",
      footerText: "بحبك يا Noha ❤️🌷",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أول نظرة",
        image: "/1.jpg",
        date: "2026-01-04",
        text: "من أول مرة شفتك فيها يا Noha… قلبي حس إنك الشخص اللي كان مستنيه من زمان 💖",
      },
      {
        id: 2,
        title: "يا روح قلبي",
        image: "/2.jpg",
        date: "ذكرى مميزة",
        text: "Noha، انتي مش بس حبيبتي، انتي راحتي وونس أيامي وأجمل حد قريب مني 💞",
      },
      {
        id: 3,
        title: "حب بيكبر",
        image: "/3.jpg",
        date: "أجمل لحظة",
        text: "كل يوم معاكي يا Noha بيخليني أحبك أكتر، وأتأكد إن قلبي اختارك صح ❤️",
      },
      {
        id: 4,
        title: "أجمل نصيب",
        image: "/4.jpg",
        date: "أحلى يوم",
        text: "وجودك في حياتي يا Noha هو أجمل نصيب وأحن أمان وأكبر فرحة في قلبي ❤️",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول مرة شفتك فيها",
        date: "2026-01-04",
        text: "اليوم اللي عيني شافت فيه أجمل حد، وقلبي بدأ يحكي حكاية جديدة كلها حب.",
      },
      {
        title: "أول ذكرى حلوة",
        date: "بعدها بفترة",
        text: "من أول لحظة حلوة بينا وأنا متأكد إنك مختلفة ومميزة جدًا.",
      },
      {
        title: "بداية حب كبير",
        date: "ومكملين",
        text: "كل موقف بينا كان بيقربني منك أكتر ويخليني أحبك أكتر.",
      },
      {
        title: "Noha = الأمان",
        date: "كل يوم",
        text: "كل يوم بيفوت بيأكدلي إن وجودك هو راحتي وأماني وفرحتي.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "أجمل اسم", value: "Noha" },
      { title: "مستوى الحب", value: "∞" },
      { title: "الفرحة", value: "معاها" },
      { title: "الأمان", value: "في قربها" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["ضحكتك", "طيبتك", "حنانك", "صوتك", "اهتمامك", "قلبك", "وجودك", "نظرتك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2026-01-04T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا قلبي، جربي تاني 💖");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أجمل مفاجأة لـ Noha 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="Noha" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💖 خاص بـ Noha</div>

          <h1>اكتبي كلمة السر يا Noha يا أجمل البنات</h1>

          <p className="password-subtext">
            الموقع ده معمول مخصوص ليكي يا Noha، ومش هيفتح غير لما تكتبي كلمة السر ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للموقع ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ معمول مخصوص لـ Noha</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزلي تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="Noha" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم من أول ما شفتك</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة حب</span>
          </div>
          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>ذكريات</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب لـ Noha</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="Noha" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحب</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة كبيرة لـ Noha</span>
          <h2>كل الكلام ده ليكي يا Noha</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها في Noha</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بكون معاكي</h3>
            <ul>
              <li>مرتاح</li>
              <li>مبسوط</li>
              <li>مطمّن</li>
              <li>بحب الدنيا</li>
              <li>بضحك من قلبي</li>
              <li>حاسس بالأمان</li>
              <li>حياتي أهدى</li>
              <li>قلبي مبسوط</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>ترتيب بسيط ولطيف للحظات المهمة بيني وبين Noha</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>الكروت المتحركة</h3>
              <p>كل صورة فيها ذكرى وكلام مخصوص لـ Noha</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “من أول مرة شفتك يا Noha… قلبي حس إنه لقى مكانه 💖”
          </div>
          <div className="quote-box">
            “Noha، انتي مش بس حبيبتي… انتي راحة قلبي وأجمل حاجة في حياتي 💞”
          </div>
          <div className="quote-box">
            “كل يوم معاكي بيعدي، بيخليني أحبك أكتر وأتعلق بيكي أكتر ❤️”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري أكبر</h3>
            <p>صور أكتر بشكل أنضف وأوسع لـ Noha الجميلة</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>Noha غيرت حياتي</h3>
            <p>وجودها خلّى كل حاجة في حياتي أخف وأجمل وأهدى ❤️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>قلبي مطمّن</h3>
            <p>لأن Noha موجودة فيه، ومفيش مكان فيه لحد غيرها 💖</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أجمل نصيب</h3>
            <p>Noha هي أحلى صدفة وأجمل قدر وأغلى هدية من ربنا 🌷</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>
            يا Noha، انتي أجمل حاجة حصلتلي، وأحن قلب عرفته، وأطيب روح قابلتها،
            وأنا بحبك حب كبير أوي ومش عايز من الدنيا غير إنك تفضلي دايمًا مبسوطة
            وجنبي ❤️
          </p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
