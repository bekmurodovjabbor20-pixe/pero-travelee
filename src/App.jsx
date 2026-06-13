import "./App.css";
import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
 
const heroMedia = [
  { type: "video", url: "https://vjs.zencdn.net/v/oceans.mp4", label: "Beautiful Ocean & Deep Blue Waves", thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
  { type: "video", url: "https://www.w3schools.com/howto/rain.mp4", label: "Calm Rain In The Deep Green Forest", thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop" },
  { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-forest-2213-large.mp4", label: "Amazing Waterfall Hidden In Wild Nature", thumb: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600&auto=format&fit=crop" },
  { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-river-surrounded-by-forests-and-mountains-41712-large.mp4", label: "Majestic Mountains & Fast River Stream", thumb: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop" },
  { type: "video", url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-winding-road-in-the-mountains-41617-large.mp4", label: "Winding Road Across The Green Valley", thumb: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop" }
];
 
const excursionCards = [
  { category: "Bus tour", title: "Sightseeing tour of Sochi (from Adler)", duration: "6 hours", rating: "4.9", reviews: "124", price: "1 200 000 UZS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoaPXDIFZxw-7pzn_0S3wZLkofdPLxkZUmvQ&s" },
  { category: "Horseback riding tour", title: "Horseback riding in the green valley", duration: "3 hours", rating: "4.8", reviews: "86", price: "850 000 UZS", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop" },
  { category: "Excursion tour", title: "Ancient temples and deep canyons tour", duration: "8 hours", rating: "5.0", reviews: "210", price: "1 500 000 UZS", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop" },
  { category: "Mountain trekking", title: "Climbing the snow peak mountains", duration: "12 hours", rating: "4.7", reviews: "45", price: "2 100 000 UZS", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop" },
  { category: "Helicopter tour", title: "Extreme flight over huge natural waterfalls", duration: "45 mins", rating: "4.9", reviews: "92", price: "5 500 000 UZS", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop" },
  { category: "Sea cruise", title: "Sunset VIP yacht cruise with dolphins view", duration: "4 hours", rating: "5.0", reviews: "315", price: "3 200 000 UZS", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
  { category: "Jeep Safari", title: "Wild forest canyon off-road expedition", duration: "5 hours", rating: "4.6", reviews: "67", price: "1 800 000 UZS", img: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600&auto=format&fit=crop" }
];
 
const reviewsData = [
  { name: "Ivan Ivanov", age: "25 years old", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" },
  { name: "Anna Petrova", age: "23 years old", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop" },
  { name: "Maxim Smirnov", age: "28 years old", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=400&w=400&auto=format&fit=crop" },
  { name: "Elena Sidorova", age: "26 years old", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" }
];
 
const fullExcursionsList = [
  { id: 1, type: "Bus tour", title: "The Golden Ring of Abkhazia (from Adler)", adultPrice: "1,618 ₽", childPrice: "1,412 ₽", duration: "2.5 hours", text: "A journey through the \"Golden Ring of Abkhazia\" awaits you in a Mercedes Sprinter (20 seats). A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border crossings are direct...", img: "https://bh-s.ru/upload/resize_cache/iblock/4d9/767_435_1619711fa078991f0a23d032687646b21/wt1yt4k4qn60ue1y2z1rwnlvrycgub05.jpg" },
  { id: 2, type: "Jeep Safari", title: "The Golden Ring of Abkhazia (from Adler)", adultPrice: "1,618 ₽", childPrice: "1,412 ₽", duration: "2.5 hours", text: "A journey through the \"Golden Ring of Abkhazia\" awaits you in a Mercedes Sprinter (20 seats). A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border crossings are direct...", img: "https://bh-s.ru/upload/resize_cache/iblock/4d9/767_435_1619711fa078991f0a23d032687646b21/wt1yt4k4qn60ue1y2z1rwnlvrycgub05.jpg" },
  { id: 3, type: "Yachting", title: "The Golden Ring of Abkhazia (from Adler)", adultPrice: "1,618 ₽", childPrice: "1,412 ₽", duration: "2.5 hours", text: "A journey through the \"Golden Ring of Abkhazia\" awaits you in a Mercedes Sprinter (20 seats). A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border crossings are direct...", img: "https://bh-s.ru/upload/resize_cache/iblock/4d9/767_435_1619711fa078991f0a23d032687646b21/wt1yt4k4qn60ue1y2z1rwnlvrycgub05.jpg" },
  { id: 4, type: "Bus tour", title: "The Golden Ring of Abkhazia (from Adler)", adultPrice: "1,618 ₽", childPrice: "1,412 ₽", duration: "2.5 hours", text: "A journey through the \"Golden Ring of Abkhazia\" awaits you in a Mercedes Sprinter (20 seats). A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border crossings are direct...", img: "https://bh-s.ru/upload/resize_cache/iblock/4d9/767_435_1619711fa078991f0a23d032687646b21/wt1yt4k4qn60ue1y2z1rwnlvrycgub05.jpg" }
];
 
const galleryImages = [
  { id: 1, className: "item-lake", src: "https://picsum.photos/600/400?random=11", alt: "Ko'l va tog'lar" },
  { id: 2, className: "item-waterfall", src: "https://picsum.photos/400/800?random=12", alt: "Uzun sharshara" },
  { id: 3, className: "item-quad", src: "https://picsum.photos/400/400?random=13", alt: "Kvadrotsikl" },
  { id: 4, className: "item-sunset", src: "https://picsum.photos/400/400?random=14", alt: "Quyosh botishi" },
  { id: 5, className: "item-horse", src: "https://picsum.photos/400/400?random=15", alt: "Ot minish" },
  { id: 6, className: "item-arch", src: "https://picsum.photos/400/200?random=16", alt: "Toshli arka" },
  { id: 7, className: "item-town", src: "https://picsum.photos/400/200?random=17", alt: "Tog' shahri" },
  { id: 8, className: "item-sea", src: "https://picsum.photos/600/400?random=18", alt: "Dengiz manzarasi" }
];
 
const juneDays = Array.from({ length: 30 }, (_, i) => i + 1);
 
const routePoints = [
  "The city of Gagra, Colonnade, restaurant 'Gagripsh', Prince Oldenburg Park;",
  "Observation deck 'Farewell Homeland', 'Chabgar' cornice, Suspension bridge over the Bzyb River;",
  "Tasting of cheese, honey, wine, chacha (included in the price of the excursion), Blue Lake, Yupsharsky Canyon ('Stone Bag'), Lake 'Ritsa', Waterfalls 'Maiden and Men's Tears'."
];
 
const choicePoints = [
  "New Athos Monastery, New Athos Cave, Man-Made Waterfall, Simon the Canaanite Church, Swan Lake.",
  "Thermal spring in the village of Primorskoye."
];
 
const routeImages = [
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=600&auto=format&fit=crop"
];
 
const additionalExpenses = [
  { name: "Stalin's dacha", price: "500 ₽" },
  { name: "Milk Waterfall", price: "500 ₽" },
  { name: "New Athenian Cave", price: "500 ₽" },
  { name: "Thermal spring", price: "500 ₽" },
  { name: "Dinner", price: "200 ₽" }
];
 
const reviewItemsAccount = [
  { id: 1, name: "Ivan Ivanov", age: "25 years old", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400&auto=format&fit=crop" },
  { id: 2, name: "Anna Petrova", age: "23 years old", img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=400&auto=format&fit=crop" },
  { id: 3, name: "Sergey Sidorov", age: "30 years old", img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=400&auto=format&fit=crop" },
  { id: 4, name: "Elena Smirnova", age: "27 years old", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop" }
];
 
const EMAILJS_SERVICE_ID  = 'service_h0c3vhr';
const EMAILJS_TEMPLATE_ID = 'template_h1qwi4b';
const EMAILJS_PUBLIC_KEY  = 'kYAvaBLZsc3DPIGt-';
 
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [active, setActive] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const cardsPerPage = 3;
  const [reviewStartIndex, setReviewStartIndex] = useState(0);
  const reviewsPerPage = 2;
  const [formData, setFormData] = useState({ name: "", telephone: "", mail: "" });
  const [selectedImg, setSelectedImg] = useState(null);
  const [activePeople, setActivePeople] = useState('1 person');
  const [selectedPlace, setSelectedPlace] = useState('Abkhazia');
  const [openGroups, setOpenGroups] = useState({ price: true, people: true, place: true, duration: false, date: false });
  const [menuOpen, setMenuOpen] = useState(false);
 
  const peopleOptions = ['1 person','2 people','3 people','4 people','5 people','6 people','7 people','8 people','9 people','10 people','More than 10 people'];
  const placesOptions = ['Abkhazia','Krasnaya Polyana','Sochi','Adler'];
 
  const [selectedDayAccount, setSelectedDayAccount] = useState(2);
  const [currentReviewIdxAccount, setCurrentReviewIdxAccount] = useState(0);
  const [bookingDestination, setBookingDestination] = useState("Abkhazia");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingPeopleCount, setBookingPeopleCount] = useState(5);
 
  // Close menu on page change
  useEffect(() => { setMenuOpen(false); }, [currentPage]);
 
  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
 
  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  const toggleGroup = (group) => setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  const handleSelect = (index) => { if (index !== active) setActive(index); };
 
  const handleNextExcursions = () => {
    setVisibleStartIndex(v => (v + cardsPerPage < excursionCards.length) ? v + 1 : 0);
  };
  const handlePrevExcursions = () => {
    setVisibleStartIndex(v => v > 0 ? v - 1 : excursionCards.length - cardsPerPage);
  };
  const handleNextReviews = () => {
    setReviewStartIndex(v => (v + reviewsPerPage < reviewsData.length) ? v + 1 : 0);
  };
  const handlePrevReviews = () => {
    setReviewStartIndex(v => v > 0 ? v - 1 : reviewsData.length - reviewsPerPage);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const templateParams = { from_name: formData.name, telephone: formData.telephone, reply_to: formData.mail };
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then((response) => {
        alert('Request submitted successfully!');
        setFormData({ name: "", telephone: "", mail: "" });
      })
      .catch((err) => {
        alert("Xabar yuborishda xatolik yuz berdi.");
      });
  };
  const handlePrevReviewAccount = () => setCurrentReviewIdxAccount(prev => (prev === 0 ? reviewItemsAccount.length - 1 : prev - 1));
  const handleNextReviewAccount = () => setCurrentReviewIdxAccount(prev => (prev === reviewItemsAccount.length - 1 ? 0 : prev + 1));
 
  const current = heroMedia[active];
  const progressPercent = ((visibleStartIndex + cardsPerPage) / excursionCards.length) * 100;
  const reviewProgressPercent = ((reviewStartIndex + reviewsPerPage) / reviewsData.length) * 100;
 
  const SharedFooter = () => (
    <>
      <div className="footer-divider-line"></div>
      <footer className="footer-brand-row">
        <div className="footer-logo-side">
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <i className="fa-solid fa-parachute-box" style={{fontSize:'2.2rem',color:'#ff5a5f'}}></i>
            <span style={{fontSize:'1.6rem',fontWeight:900,color:'#111'}}>PERO TRAVEL</span>
          </div>
        </div>
        <div className="footer-nav-side">
          <span onClick={() => navigate('home')}>Home</span>
          <span onClick={() => navigate('excursions')}>Excursions</span>
          <span onClick={() => navigate('personal-account')}>Pero account</span>
        </div>
        <div className="footer-contacts-side">
          <div><i className="fa-brands fa-whatsapp"></i> +7 964 944 18 74</div>
          <div><i className="fa-solid fa-phone"></i> +7 918 919 98 28</div>
          <div><i className="fa-solid fa-paper-plane"></i> Telegram bot PeroTravel</div>
        </div>
        <div className="footer-social-side">
          <span style={{fontSize:'0.85rem',fontWeight:600,color:'#a0aec0'}}>office@perotravel.ru</span>
          <div className="social-icons-wrapper">
            <i className="fa-brands fa-vk"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
        </div>
      </footer>
    </>
  );
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Dancing+Script:wght@700&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
 
        html, body, #root { margin:0; padding:0; width:100%; min-height:100vh; box-sizing:border-box; }
        * { margin:0; padding:0; box-sizing:border-box; outline:none; }
        body { font-family:'Montserrat',sans-serif; background:#f8f9fa; overflow-x:hidden; width:100vw; }
 
        /* ===== NAVBAR ===== */
        .navbar {
          position:sticky; top:0; background:#ffffff; z-index:1000; padding:20px 60px;
          display:flex; justify-content:space-between; align-items:center;
          border-bottom:1px solid #f0f0f2; box-shadow:0 2px 10px rgba(0,0,0,0.02);
        }
        .navbar.transparent-home {
          position:absolute; width:100%; background:transparent; border-bottom:none; box-shadow:none;
        }
        .parachute-gif-box { display:flex; align-items:center; gap:12px; cursor:pointer; }
        .parachute-icon { font-size:32px; color:#00a8b5; animation:floatParachute 3s ease-in-out infinite; }
        .transparent-home .parachute-icon { color:#ffffff; }
        @keyframes floatParachute {
          0% { transform:translateY(0) rotate(0deg); }
          50% { transform:translateY(-6px) rotate(4deg); }
          100% { transform:translateY(0) rotate(0deg); }
        }
        .travel-logo-text { color:#222; font-family:'Bebas Neue',sans-serif; font-size:2.4rem; letter-spacing:3px; }
        .transparent-home .travel-logo-text { color:#fff; }
 
        /* Desktop nav links */
        .nav-links { display:flex; gap:45px; }
        .nav-links span {
          color:#444; text-decoration:none; font-weight:600; font-size:0.95rem;
          letter-spacing:0.7px; position:relative; cursor:pointer; padding-bottom:4px;
        }
        .transparent-home .nav-links span { color:#ffffff; }
        .nav-links span.active-nav-link { color:#00a8b5 !important; border-bottom:2px solid #00a8b5; }
        .transparent-home .nav-links span.active-nav-link { color:#f7c948 !important; border-bottom:2px solid #f7c948; }
 
        /* Burger button */
        .burger-btn {
          display:none; flex-direction:column; gap:5px; cursor:pointer;
          padding:6px; background:none; border:none; z-index:1100;
        }
        .burger-line { width:24px; height:2px; background:#222; border-radius:2px; transition:all 0.3s; }
        .transparent-home .burger-line { background:#fff; }
        .burger-btn.open .burger-line:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .burger-btn.open .burger-line:nth-child(2) { opacity:0; }
        .burger-btn.open .burger-line:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }
 
        /* Mobile Drawer */
        .drawer-backdrop {
          position:fixed; inset:0; background:rgba(0,0,0,0.5);
          z-index:1050; opacity:0; pointer-events:none; transition:opacity 0.3s;
        }
        .drawer-backdrop.open { opacity:1; pointer-events:all; }
        .drawer {
          position:fixed; top:0; right:0; width:280px; height:100%;
          background:#ffffff; z-index:1100; transform:translateX(100%);
          transition:transform 0.35s cubic-bezier(0.4,0,0.2,1);
          padding:0; display:flex; flex-direction:column;
          box-shadow:-8px 0 32px rgba(0,0,0,0.15);
        }
        .drawer.open { transform:translateX(0); }
        .drawer-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:22px 24px; border-bottom:1px solid #f0f0f2;
        }
        .drawer-logo { display:flex; align-items:center; gap:10px; }
        .drawer-logo-icon {
          width:36px; height:36px; background:#ff5a5f; border-radius:8px;
          display:flex; align-items:center; justify-content:center;
        }
        .drawer-logo-text { font-family:'Bebas Neue',sans-serif; font-size:1.4rem; letter-spacing:2px; color:#111; }
        .drawer-close-btn {
          width:36px; height:36px; border-radius:50%; border:1px solid #eee;
          display:flex; align-items:center; justify-content:center; cursor:pointer;
          background:#f8f9fa; color:#555; font-size:1rem;
        }
        .drawer-nav { padding:20px 16px; flex:1; display:flex; flex-direction:column; gap:4px; }
        .drawer-nav-item {
          display:flex; align-items:center; gap:14px; padding:14px 16px;
          border-radius:12px; cursor:pointer; color:#444; font-size:0.95rem; font-weight:600;
          transition:background 0.2s, color 0.2s; text-decoration:none;
        }
        .drawer-nav-item:hover { background:#f0f2f5; color:#00a8b5; }
        .drawer-nav-item.active { background:#e6f7f9; color:#00a8b5; }
        .drawer-nav-item i { font-size:1.2rem; width:22px; text-align:center; }
        .drawer-contacts {
          padding:20px 24px 32px; border-top:1px solid #f0f0f2;
          display:flex; flex-direction:column; gap:12px;
        }
        .drawer-contact-item { display:flex; align-items:center; gap:10px; color:#555; font-size:0.85rem; font-weight:500; }
        .drawer-contact-item i { color:#00a8b5; width:18px; text-align:center; }
 
        /* ===== HERO ===== */
        .hero { width:100%; height:100vh; position:relative; background:#000; overflow:hidden; }
        .video-layer { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1); z-index:1; }
        .video-layer.active { opacity:1; z-index:2; }
        .overlay { position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.2),rgba(0,0,0,0.6)); z-index:3; }
        .hero-content { position:relative; z-index:10; padding-left:80px; padding-top:200px; }
        .main-title-box { position:relative; display:inline-block; line-height:1; }
        .travel-small { color:#fff; font-family:'Bebas Neue',sans-serif; font-size:clamp(2.8rem,5vw,4.8rem); letter-spacing:4px; line-height:1; margin-bottom:0; font-weight:900; display:block; }
        .pero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(4.5rem,10vw,9.5rem); color:transparent; -webkit-text-stroke:2.5px rgba(255,255,255,0.95); line-height:0.95; letter-spacing:6px; text-transform:uppercase; display:block; margin-top:-6px; }
        .together-text { position:absolute; top:-8px; left:310px; font-family:'Dancing Script',cursive; color:#f7c948; font-size:3rem; transform:rotate(-5deg); white-space:nowrap; font-weight:700; }
        .with-text { position:absolute; top:42px; left:350px; font-family:'Dancing Script',cursive; color:#f7c948; font-size:2.6rem; transform:rotate(-5deg); font-weight:700; }
        .excursions-btn {
          margin-top:25px; padding:15px 42px; border:none; border-radius:50px;
          background:linear-gradient(90deg,#00b4db,#0083b0); color:#fff; font-weight:700;
          cursor:pointer; display:inline-flex; align-items:center; gap:10px; text-decoration:none;
          box-shadow:0 4px 15px rgba(0,180,219,0.4); transition:transform 0.3s;
        }
        .excursions-btn:hover { transform:translateY(-2px); }
        .social-sidebar { position:absolute; right:40px; top:35%; display:flex; flex-direction:column; gap:25px; z-index:10; }
        .social-sidebar a { color:#ffffff; font-size:20px; transition:transform 0.3s,color 0.3s; text-decoration:none; }
        .social-sidebar a:hover { transform:scale(1.2); color:#f7c948; }
        .thumb-wrapper { position:absolute; bottom:0; left:0; width:100%; z-index:10; }
        .thumb-container { display:flex; gap:22px; padding:0 80px 40px 80px; overflow-x:auto; scrollbar-width:none; }
        .thumb-container::-webkit-scrollbar { display:none; }
        .thumb-card { min-width:280px; height:160px; border-radius:16px; cursor:pointer; overflow:hidden; position:relative; transition:transform 0.3s,border-color 0.3s; border:2px solid transparent; box-shadow:0 12px 30px rgba(0,0,0,0.3); }
        .thumb-card.active { border-color:#f7c948; transform:translateY(-6px); }
        .thumb-card img { width:100%; height:100%; object-fit:cover; }
        .video-badge { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); background:#f7c948; width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#000; font-size:1.1rem; }
 
        /* ===== POPULAR SECTION ===== */
        .popular-section { padding:80px 60px 40px 60px; background:#fff; }
        .pop-title-wrap { display:flex; justify-content:space-between; align-items:center; margin-bottom:45px; }
        .pop-title { font-size:2.5rem; color:#00a8b5; font-weight:800; }
        .see-all { color:#222; text-decoration:none; font-weight:700; font-size:0.95rem; border-bottom:2px solid #222; cursor:pointer; }
        .grid-layout { display:grid; grid-template-columns:repeat(3,1fr); gap:35px; }
        .exc-card { background:#fff; border-radius:24px; overflow:hidden; box-shadow:0 15px 40px rgba(0,0,0,0.06); transition:transform 0.3s; }
        .exc-card:hover { transform:translateY(-10px); }
        .exc-card-img { width:100%; height:240px; object-fit:cover; }
        .exc-card-body { padding:28px; }
        .exc-card-cat { font-size:0.85rem; color:#00a8b5; text-transform:uppercase; font-weight:700; margin-bottom:10px; }
        .exc-card-name { font-size:1.3rem; font-weight:700; color:#111; margin-bottom:15px; min-height:60px; }
        .exc-meta { display:flex; gap:15px; color:#777; font-size:0.88rem; margin-bottom:20px; }
        .exc-star { color:#f7c948; font-weight:bold; }
        .exc-card-footer { display:flex; justify-content:space-between; align-items:center; padding-top:15px; border-top:1px solid #f0f0f0; }
        .exc-price { font-weight:800; color:#222; font-size:1.2rem; }
        .read-more { background:#00a8b5; color:#fff; border:none; padding:12px 26px; border-radius:50px; font-weight:700; cursor:pointer; }
        .bottom-controls-container { display:flex; align-items:center; justify-content:flex-start; gap:35px; margin-top:50px; width:100%; }
        .arrow-buttons { display:flex; gap:20px; }
        .arrow-btn { background:#f4f4f6; border:none; width:50px; height:50px; border-radius:50%; font-size:1.2rem; color:#333; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background 0.3s,color 0.3s; }
        .arrow-btn:hover { background:#00a8b5; color:#fff; }
        .progress-timeline { flex:1; max-width:500px; height:4px; background:#e5e5e5; position:relative; border-radius:4px; }
        .progress-fill { position:absolute; top:0; left:0; height:100%; background:#00a8b5; transition:width 0.4s ease; border-radius:4px; }
 
        /* ===== TYPES ===== */
        .types-section { padding:60px 60px 80px 60px; background:#fff; border-top:1px solid #f5f5f7; }
        .types-title { font-size:2.5rem; color:#00a8b5; font-weight:800; margin-bottom:45px; }
        .types-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:40px; margin-bottom:50px; }
        .type-item-card { display:flex; align-items:flex-start; gap:24px; }
        .type-icon-circle { min-width:65px; height:65px; background:#ffcc00; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.8rem; box-shadow:0 8px 20px rgba(255,204,0,0.2); }
        .type-name-info { flex:1; }
        .type-name-info h4 { font-size:1.4rem; color:#00a8b5; font-weight:700; margin-bottom:12px; }
        .type-name-info p { font-size:0.95rem; color:#555; line-height:1.6; }
        .types-footer-action { text-align:center; max-width:650px; margin:0 auto; margin-top:20px; }
        .types-footer-text { font-size:1.05rem; color:#333; font-weight:600; line-height:1.6; margin-bottom:25px; }
        .action-teal-btn { background:linear-gradient(90deg,#00b4db,#0083b0); color:#fff; border:none; padding:16px 45px; font-size:1rem; font-weight:700; border-radius:50px; cursor:pointer; box-shadow:0 6px 22px rgba(0,180,219,0.3); transition:transform 0.2s; }
        .action-teal-btn:hover { transform:scale(1.03); }
 
        /* ===== ABOUT ===== */
        .about-section { padding:60px 60px 40px 60px; background:#fff; }
        .about-container { position:relative; width:100%; max-width:1200px; height:480px; margin:0 auto; }
        .about-main-img { width:72%; height:100%; object-fit:cover; border-radius:24px; box-shadow:0 20px 45px rgba(0,0,0,0.1); }
        .about-text-box { position:absolute; top:50%; right:0; transform:translateY(-50%); width:45%; background:#f8f9fa; padding:50px; border-radius:24px; box-shadow:0 15px 40px rgba(0,0,0,0.05); z-index:5; }
        .about-title { font-size:2.2rem; color:#00a8b5; font-weight:800; margin-bottom:20px; }
        .about-desc { font-size:0.95rem; color:#444; line-height:1.7; }
 
        /* ===== GALLERY ===== */
        .gallery-section { padding:40px 60px 80px 60px; background:#fff; }
        .gallery-section-title { font-size:2.5rem; color:#00a8b5; font-weight:800; margin-bottom:40px; text-align:left; }
        .gallery-container { display:grid; grid-template-columns:repeat(4,1fr); grid-auto-rows:minmax(135px,auto); gap:14px; max-width:1200px; margin:0 auto; }
        .gallery-grid-item { border-radius:8px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.08); background-color:#f1f1f1; }
        .gallery-grid-item img { width:100%; height:100%; object-fit:cover; display:block; cursor:pointer; transition:transform 0.3s ease,filter 0.3s ease; }
        .gallery-grid-item img:hover { transform:scale(1.02); filter:brightness(0.9); }
        .item-lake { grid-column:1/2; grid-row:1/3; }
        .item-waterfall { grid-column:2/3; grid-row:1/5; }
        .item-quad { grid-column:3/4; grid-row:1/3; }
        .item-sunset { grid-column:4/5; grid-row:1/3; }
        .item-horse { grid-column:1/2; grid-row:3/5; }
        .item-arch { grid-column:3/4; grid-row:3/4; }
        .item-town { grid-column:3/4; grid-row:4/5; }
        .item-sea { grid-column:4/5; grid-row:3/5; }
        .lightbox-modal { position:fixed; inset:0; background:rgba(0,0,0,0.9); z-index:2000; display:flex; justify-content:center; align-items:center; animation:fadeIn 0.25s ease; }
        .lightbox-content { max-width:85%; max-height:85vh; object-fit:contain; border-radius:6px; animation:zoomIn 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .lightbox-close { position:absolute; top:25px; right:40px; color:#fff; font-size:45px; font-weight:bold; cursor:pointer; user-select:none; }
        .lightbox-close:hover { color:#f7c948; }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes zoomIn { from{transform:scale(0.9);opacity:0} to{transform:scale(1);opacity:1} }
 
        /* ===== REVIEWS ===== */
        .reviews-section { padding:60px; background:#fff; border-top:1px solid #f5f5f7; }
        .reviews-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:40px; }
        .reviews-title { font-size:2.5rem; color:#00a8b5; font-weight:800; }
        .reviews-slider-container { display:grid; grid-template-columns:repeat(2,1fr); gap:30px; }
        .review-card { background:#f0f2f5; border-radius:20px; padding:35px; position:relative; display:flex; gap:24px; align-items:flex-start; }
        .review-avatar { width:120px; height:120px; border-radius:16px; object-fit:cover; flex-shrink:0; }
        .review-content { flex:1; }
        .review-user-name { font-size:1.15rem; font-weight:700; color:#111; margin-bottom:4px; }
        .review-user-age { font-size:0.85rem; color:#666; margin-bottom:14px; }
        .review-text { font-size:0.9rem; color:#333; line-height:1.6; }
 
        /* ===== QUESTIONS ===== */
        .questions-section { width:100%; min-height:540px; background-image:url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1800&auto=format&fit=crop'); background-size:cover; background-position:center; display:flex; justify-content:flex-end; position:relative; }
        .questions-blur-overlay { width:45%; height:100%; background:rgba(14,31,19,0.82); backdrop-filter:blur(15px); -webkit-backdrop-filter:blur(15px); padding:60px 80px; display:flex; flex-direction:column; justify-content:center; color:#fff; border-left:1px solid rgba(255,255,255,0.1); }
        .questions-title { font-size:2.4rem; font-weight:700; color:#ffffff; margin-bottom:6px; }
        .questions-subtitle { font-size:0.95rem; color:#ffcc00; font-weight:600; margin-bottom:45px; }
        .input-group { position:relative; margin-bottom:35px; width:100%; }
        .input-group input { width:100%; background:transparent; border:none; border-bottom:1px solid rgba(255,255,255,0.6); padding:8px 0; color:#fff; font-size:1rem; font-family:'Montserrat',sans-serif; transition:border-color 0.3s; }
        .input-group input:focus { border-bottom-color:#ffcc00; }
        .input-group label { position:absolute; left:0; top:-12px; font-size:0.85rem; color:rgba(255,255,255,0.8); pointer-events:none; }
        .submit-form-btn { background:linear-gradient(135deg,#00b4db,#0083b0); color:#fff; border:none; padding:16px 45px; font-size:1rem; font-weight:700; border-radius:50px; cursor:pointer; align-self:flex-start; box-shadow:0 4px 15px rgba(0,168,181,0.4); transition:transform 0.2s,box-shadow 0.2s; margin-top:10px; }
        .submit-form-btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,168,181,0.6); }
 
        /* ===== EXCURSIONS PAGE ===== */
        .exc-banner { background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1500&q=80") no-repeat center center/cover; height:220px; display:flex; align-items:center; padding:0 60px; }
        .exc-banner h1 { color:#ffffff; font-size:36px; font-weight:700; letter-spacing:1px; }
        .search-section { margin-top:-30px; margin-bottom:30px; padding:0 60px; }
        .search-bar { background:#ffffff; padding:15px 25px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.06); display:flex; justify-content:space-between; align-items:center; gap:15px; flex-wrap:wrap; }
        .search-input-group { flex:1; min-width:200px; display:flex; align-items:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:12px 15px; gap:10px; }
        .search-input-group i { color:#00a8b5; }
        .search-input-group input, .search-input-group select { border:none; background:transparent; width:100%; font-family:'Montserrat',sans-serif; font-size:14px; color:#555; }
        .search-btn { background:#00a8b5; color:white; border:none; padding:12px 40px; border-radius:8px; cursor:pointer; font-weight:600; font-size:14px; }
        .main-filter-content { display:flex; gap:30px; padding:0 60px 60px 60px; align-items:flex-start; }
        .sidebar-filters { width:25%; background:#ffffff; padding:25px; border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,0.02); }
        .filter-main-title { font-size:15px; color:#00a8b5; margin-bottom:20px; text-transform:uppercase; letter-spacing:0.5px; font-weight:700; }
        .filter-group { border-bottom:1px solid #edf2f7; padding:15px 0; }
        .filter-group-header { font-size:14px; cursor:pointer; display:flex; justify-content:space-between; align-items:center; color:#2d3748; font-weight:600; }
        .price-inputs { display:flex; gap:10px; margin-top:12px; }
        .price-field { width:100%; padding:8px 15px; border:1px solid #e2e8f0; border-radius:20px; font-size:13px; background:#f7fafc; }
        .people-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:12px; }
        .filter-tag { background:#f1f5f9; padding:6px 12px; border-radius:20px; font-size:11px; cursor:pointer; color:#64748b; border:1px solid #e2e8f0; }
        .filter-tag.active { background:#00a8b5; color:white; border-color:#00a8b5; }
        .radio-list { margin-top:12px; }
        .radio-label { display:flex; align-items:center; margin-bottom:10px; font-size:13px; cursor:pointer; color:#4a5568; }
        .radio-label input { margin-right:8px; accent-color:#00a8b5; }
        .excursions-list-pane { width:75%; }
        .list-section-title { font-size:14px; margin-bottom:20px; color:#00a8b5; text-transform:uppercase; font-weight:700; }
        .big-exc-card { background:#ffffff; border-radius:16px; overflow:hidden; display:flex; margin-bottom:25px; box-shadow:0 4px 20px rgba(0,0,0,0.02); }
        .big-card-img-box { width:40%; position:relative; }
        .big-card-img-box img { width:100%; height:100%; object-fit:cover; }
        .big-card-body { width:60%; padding:30px; position:relative; display:flex; flex-direction:column; justify-content:space-between; }
        .big-card-cat { font-size:12px; color:#00a8b5; text-transform:uppercase; font-weight:700; margin-bottom:6px; }
        .big-card-title { font-size:20px; font-weight:700; color:#1a202c; line-height:1.3; margin-bottom:15px; }
        .big-card-row { display:flex; gap:15px; font-size:13px; color:#4a5568; margin-bottom:15px; font-weight:500; }
        .big-card-desc { font-size:13px; color:#718096; line-height:1.6; margin-bottom:20px; }
        .big-card-bottom { display:flex; justify-content:space-between; align-items:center; border-top:1px solid #edf2f7; padding-top:15px; }
        .price-stack { display:flex; flex-direction:column; gap:4px; }
        .price-stack span { font-size:13px; color:#4a5568; font-weight:600; }
        .price-stack strong { color:#1a202c; font-size:16px; font-weight:800; }
 
        /* ===== PERSONAL ACCOUNT PAGE ===== */
        .detail-hero { width:100%; height:70vh; position:relative; background:#000; }
        .detail-hero-img { width:100%; height:100%; object-fit:cover; position:absolute; }
        .detail-hero-content { position:relative; z-index:10; padding-left:80px; padding-top:25vh; color:#ffffff; }
        .detail-tag { color:#ffcc00; font-weight:800; font-size:0.95rem; text-transform:uppercase; margin-bottom:10px; }
        .detail-main-title { font-weight:800; font-size:3.2rem; line-height:1.2; text-transform:uppercase; margin-bottom:30px; }
        .info-cards-section { padding:60px 80px 20px 80px; background:#ffffff; }
        .info-cards-wrapper { display:flex; gap:70px; margin-top:-110px; position:relative; z-index:50; }
        .desc-block { flex:1.2; }
        .desc-block h2 { color:#00a8b5; font-size:1.8rem; margin-bottom:20px; font-weight:700; }
        .desc-block p { color:#4a5568; font-size:0.95rem; line-height:1.7; font-weight:500; }
        .price-cards-box { flex:1; display:flex; gap:20px; }
        .white-price-card { background:#ffffff; border-radius:14px; padding:25px 20px; flex:1; box-shadow:0 10px 30px rgba(0,0,0,0.07); position:relative; overflow:hidden; min-height:120px; display:flex; flex-direction:column; justify-content:center; }
        .white-price-card::before { content:''; position:absolute; width:50px; height:50px; background:#ffcc00; border-radius:50%; left:-15px; top:-15px; opacity:0.85; }
        .card-amount-row { display:flex; align-items:center; gap:6px; color:#00a8b5; font-weight:800; font-size:1.5rem; position:relative; }
        .card-label-text { color:#718096; font-size:0.8rem; font-weight:600; position:relative; }
        .time-card-text { color:#00a8b5; font-weight:800; font-size:1.35rem; display:flex; align-items:center; gap:8px; }
        .calendar-section { display:flex; width:100%; background:#ffffff; min-height:440px; overflow:hidden; border-top:1px solid #f0f4f8; }
        .calendar-left-banner { width:45%; position:relative; }
        .calendar-left-banner img { width:100%; height:100%; object-fit:cover; display:block; }
        .calendar-right-content { width:55%; background:#ffffff; display:flex; align-items:center; justify-content:center; padding:40px; }
        .calendar-card { background:#eaeaea; border-radius:12px; width:100%; max-width:460px; padding:25px; box-shadow:0 10px 25px rgba(0,0,0,0.05); }
        .calendar-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; }
        .calendar-header h3 { color:#0099e5; font-size:1.1rem; font-weight:700; text-transform:uppercase; }
        .cal-arrow { color:#0099e5; font-size:1.2rem; cursor:pointer; background:none; border:none; }
        .weekdays-grid { display:grid; grid-template-columns:repeat(7,1fr); text-align:center; margin-bottom:15px; }
        .weekday-label { font-size:0.8rem; font-weight:700; color:#111; }
        .days-grid { display:grid; grid-template-columns:repeat(7,1fr); row-gap:12px; text-align:center; }
        .day-cell { font-size:0.85rem; font-weight:600; color:#333; padding:8px 0; cursor:pointer; display:flex; align-items:center; justify-content:center; border-radius:6px; }
        .day-cell.selected { background:#ffffff; color:#000000; font-weight:800; box-shadow:0 4px 10px rgba(0,0,0,0.1); }
        .route-section { padding:60px 80px; background:#ffffff; display:flex; gap:50px; border-top:1px solid #f0f4f8; }
        .route-left-info { flex:1.1; display:flex; flex-direction:column; justify-content:center; }
        .route-left-info h2 { color:#00a8b5; font-size:1.8rem; font-weight:700; margin-bottom:30px; }
        .route-list { list-style:none; display:flex; flex-direction:column; gap:18px; margin-bottom:20px; }
        .route-item { position:relative; padding-left:25px; color:#333333; font-size:0.9rem; line-height:1.6; font-weight:500; }
        .route-item::before { content:''; position:absolute; left:0; top:6px; width:10px; height:10px; background:#ffcc00; border-radius:50%; }
        .route-choice-title { font-weight:700; font-size:0.95rem; color:#000000; margin-bottom:15px; margin-top:10px; }
        .route-right-gallery { flex:1.3; display:flex; gap:20px; align-items:center; justify-content:flex-end; }
        .route-gallery-card { width:180px; height:350px; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.1); }
        .route-gallery-card img { width:100%; height:100%; object-fit:cover; }
        .fade-card { opacity:0.4; }
        .expenses-section-account { padding:40px 80px; background:#ffffff; border-top:1px solid #f0f4f8; }
        .expenses-section-account h2 { color:#00a8b5; font-size:1.8rem; font-weight:700; margin-bottom:35px; }
        .expenses-grid-account { display:flex; gap:25px; flex-wrap:wrap; }
        .expense-card-account { background:#ffffff; border-radius:14px; padding:20px; width:calc(20% - 20px); min-width:170px; box-shadow:0 8px 25px rgba(0,0,0,0.06); position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:center; min-height:110px; }
        .expense-card-account::before { content:''; position:absolute; width:45px; height:45px; background:#ffcc00; border-radius:50%; left:-15px; top:-15px; opacity:0.85; }
        .expense-price-account { color:#00a8b5; font-weight:800; font-size:1.4rem; display:flex; align-items:center; gap:5px; position:relative; z-index:2; margin-bottom:6px; }
        .expense-name-account { color:#4a5568; font-size:0.85rem; font-weight:600; position:relative; z-index:2; }
        .important-info-section { padding:60px 80px; background:#ffffff; display:flex; gap:60px; border-top:1px solid #f0f4f8; }
        .info-left-rules { flex:1.4; }
        .info-left-rules h2 { color:#00a8b5; font-size:1.8rem; font-weight:700; margin-bottom:30px; }
        .rules-sub { font-size:1rem; color:#111111; font-weight:600; margin-bottom:35px; }
        .rule-row { display:flex; align-items:flex-start; gap:20px; margin-bottom:35px; }
        .rule-icon-box { position:relative; width:45px; height:45px; flex-shrink:0; }
        .rule-icon-box::before { content:''; position:absolute; width:35px; height:35px; background:#ffcc00; border-radius:50%; left:-5px; top:-5px; }
        .rule-icon-box i { position:relative; z-index:2; font-size:1.5rem; color:#111; margin-top:5px; margin-left:2px; }
        .rule-text-content h4 { color:#0099e5; font-size:1.05rem; font-weight:700; margin-bottom:8px; }
        .rule-text-content p { color:#718096; font-size:0.85rem; line-height:1.5; font-weight:500; }
        .info-right-alerts { flex:1; display:flex; flex-direction:column; gap:25px; }
        .alert-block { background:#eef2f5; border-radius:12px; padding:25px; position:relative; box-shadow:0 4px 15px rgba(0,0,0,0.02); }
        .alert-block p { color:#2d3748; font-size:0.85rem; line-height:1.6; font-weight:600; padding-right:20px; }
        .alert-block::after { content:'!'; position:absolute; right:20px; top:50%; transform:translateY(-50%); font-size:3.5rem; font-weight:900; color:#ffcc00; opacity:0.7; }
        .account-gallery-section { padding:60px 80px; background:#ffffff; border-top:1px solid #f0f4f8; }
        .gallery-header-row-account { display:flex; justify-content:space-between; align-items:center; margin-bottom:30px; }
        .gallery-header-row-account h2 { color:#00a8b5; font-size:1.8rem; font-weight:700; }
        .see-all-link-account { color:#718096; font-size:0.85rem; font-weight:600; text-decoration:underline; cursor:pointer; }
        .gallery-masonry-grid-account { display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(2,220px); gap:20px; grid-template-areas:"g1 g2 g2 g3" "g4 g5 g6 g7"; }
        .gallery-tile-account { border-radius:12px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.05); }
        .gallery-tile-account img { width:100%; height:100%; object-fit:cover; }
        .tile-g1{grid-area:g1} .tile-g2{grid-area:g2} .tile-g3{grid-area:g3} .tile-g4{grid-area:g4} .tile-g5{grid-area:g5} .tile-g6{grid-area:g6} .tile-g7{grid-area:g7}
        .reviews-section-account { padding:60px 80px; background:#ffffff; border-top:1px solid #f0f4f8; }
        .reviews-slider-container-account { display:flex; gap:30px; overflow:hidden; margin-bottom:35px; }
        .review-card-account { background:#f0f2f5; border-radius:14px; padding:35px; display:flex; gap:25px; min-width:calc(33.333% - 20px); max-width:calc(33.333% - 20px); position:relative; overflow:hidden; }
        .review-avatar-account { width:90px; height:90px; border-radius:12px; object-fit:cover; flex-shrink:0; }
        .review-info-box-account { display:flex; flex-direction:column; }
        .review-author-name-account { font-size:0.9rem; font-weight:700; color:#111; margin-bottom:12px; }
        .review-text-p-account { font-size:0.8rem; color:#4a5568; line-height:1.6; font-weight:500; }
        .review-card-account::after { content:'"'; position:absolute; right:15px; bottom:-40px; font-size:11rem; font-weight:900; color:#ffcc00; opacity:0.4; line-height:1; }
        .reviews-nav-row-account { display:flex; align-items:center; gap:25px; width:100%; margin-top:10px; }
        .reviews-arrows-account { display:flex; gap:15px; color:#cbd5e0; font-size:1.5rem; cursor:pointer; flex-shrink:0; }
        .reviews-arrows-account i:hover { color:#00a8b5; }
        .reviews-progress-track-account { flex:1; height:3px; background:#e2e8f0; border-radius:2px; position:relative; }
        .reviews-progress-bar-account { height:100%; background:#00a8b5; position:absolute; top:0; transition:all 0.4s ease; }
        .booking-footer-container { padding:80px 80px 40px 80px; background:#ffffff; border-top:1px solid #f0f4f8; display:flex; gap:60px; align-items:flex-start; }
        .booking-left-banner { flex:1.1; height:420px; border-radius:16px; overflow:hidden; }
        .booking-left-banner img { width:100%; height:100%; object-fit:cover; }
        .booking-right-form-box { flex:0.9; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px 40px; }
        .booking-right-form-box h2 { color:#00a8b5; font-size:1.8rem; font-weight:700; margin-bottom:30px; text-align:center; }
        .form-fields-stack { width:100%; display:flex; flex-direction:column; gap:15px; max-width:360px; }
        .form-input-wrapper { position:relative; width:100%; display:flex; align-items:center; background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:12px 15px; }
        .form-input-wrapper input, .form-input-wrapper select { width:100%; border:none; outline:none; background:transparent; font-size:0.85rem; font-weight:600; color:#4a5568; padding-right:25px; }
        .form-input-wrapper i { position:absolute; right:15px; color:#00a8b5; font-size:1.1rem; }
        .form-action-row { display:flex; align-items:center; gap:15px; margin-top:10px; width:100%; max-width:360px; }
        .btn-book-now { flex:1; padding:14px; border:none; border-radius:50px; background:#00ccbc; color:#fff; font-weight:700; font-size:0.9rem; cursor:pointer; text-align:center; box-shadow:0 4px 12px rgba(0,204,188,0.2); }
        .btn-heart-fav { width:48px; height:48px; border-radius:50%; background:#f0f2f5; display:flex; align-items:center; justify-content:center; color:#a0aec0; cursor:pointer; font-size:1.1rem; }
 
        /* ===== FOOTER ===== */
        .footer-divider-line { margin:0 80px; height:1px; background:#edf2f7; }
        .footer-brand-row { padding:40px 80px; background:#ffffff; display:flex; justify-content:space-between; align-items:flex-start; }
        .footer-logo-side { display:flex; flex-direction:column; gap:5px; }
        .footer-nav-side { display:flex; flex-direction:column; gap:12px; }
        .footer-nav-side span { font-size:0.85rem; font-weight:600; color:#4a5568; cursor:pointer; }
        .footer-nav-side span:hover { color:#00a8b5; }
        .footer-contacts-side { display:flex; flex-direction:column; gap:10px; font-size:0.85rem; font-weight:600; color:#2d3748; }
        .footer-contacts-side div { display:flex; align-items:center; gap:8px; }
        .footer-contacts-side i { color:#111; font-size:1rem; }
        .footer-social-side { display:flex; flex-direction:column; gap:15px; align-items:flex-end; }
        .social-icons-wrapper { display:flex; gap:12px; font-size:1.2rem; color:#ff5a5f; }
        .social-icons-wrapper i { cursor:pointer; }
        .social-icons-wrapper i:hover { opacity:0.75; }
 
        /* ===== MOBILE RESPONSIVE ===== */
        @media (max-width: 768px) {
          .navbar { padding:14px 20px; }
          .travel-logo-text { font-size:1.6rem; }
          .parachute-icon { font-size:22px; }
          .nav-links { display:none; }
          .burger-btn { display:flex; }
 
          .hero-content { padding-left:24px; padding-top:140px; }
          .travel-small { font-size:2rem; }
          .pero-title { font-size:4rem; -webkit-text-stroke:1.5px rgba(255,255,255,0.95); }
          .together-text { font-size:1.6rem; left:170px; top:-4px; }
          .with-text { font-size:1.4rem; left:190px; top:28px; }
          .excursions-btn { padding:12px 28px; font-size:0.85rem; }
          .social-sidebar { display:none; }
          .thumb-container { padding:0 20px 24px 20px; gap:12px; }
          .thumb-card { min-width:140px; height:90px; border-radius:10px; }
 
          .popular-section { padding:40px 20px 20px 20px; }
          .pop-title { font-size:1.6rem; }
          .grid-layout { grid-template-columns:1fr; gap:20px; }
 
          .types-section { padding:40px 20px 50px 20px; }
          .types-title { font-size:1.6rem; }
          .types-grid { grid-template-columns:1fr; gap:24px; }
 
          .about-section { padding:40px 20px; }
          .about-container { height:auto; }
          .about-main-img { width:100%; height:220px; border-radius:16px; }
          .about-text-box { position:static; transform:none; width:100%; padding:24px; margin-top:20px; border-radius:16px; }
          .about-title { font-size:1.4rem; }
 
          .gallery-section { padding:30px 20px 50px 20px; }
          .gallery-section-title { font-size:1.6rem; }
          .gallery-container { grid-template-columns:repeat(2,1fr); grid-auto-rows:minmax(100px,auto); }
          .item-lake,.item-waterfall,.item-quad,.item-sunset,.item-horse,.item-arch,.item-town,.item-sea { grid-column:auto; grid-row:auto; }
 
          .reviews-section { padding:40px 20px; }
          .reviews-title { font-size:1.6rem; }
          .reviews-slider-container { grid-template-columns:1fr; }
          .review-avatar { width:70px; height:70px; }
 
          .questions-section { flex-direction:column; }
          .questions-blur-overlay { width:100%; padding:40px 24px; }
          .questions-title { font-size:1.6rem; }
 
          .footer-brand-row { padding:30px 20px; flex-direction:column; gap:24px; }
          .footer-divider-line { margin:0 20px; }
          .footer-social-side { align-items:flex-start; }
 
          /* Excursions page mobile */
          .exc-banner { padding:0 20px; height:160px; }
          .exc-banner h1 { font-size:24px; }
          .search-section { padding:0 20px; margin-top:-20px; }
          .search-bar { flex-direction:column; }
          .search-input-group { width:100%; }
          .search-btn { width:100%; }
          .main-filter-content { flex-direction:column; padding:0 20px 40px 20px; }
          .sidebar-filters { width:100%; }
          .excursions-list-pane { width:100%; }
          .big-exc-card { flex-direction:column; }
          .big-card-img-box { width:100%; height:200px; }
          .big-card-body { width:100%; padding:20px; }
 
          /* Personal account mobile */
          .detail-hero { height:50vh; }
          .detail-hero-content { padding-left:24px; padding-top:15vh; }
          .detail-main-title { font-size:1.8rem; }
          .info-cards-section { padding:20px 20px 16px 20px; }
          .info-cards-wrapper { flex-direction:column; gap:24px; margin-top:-60px; }
          .price-cards-box { flex-direction:column; }
          .calendar-section { flex-direction:column; }
          .calendar-left-banner { width:100%; height:200px; }
          .calendar-right-content { width:100%; padding:20px; }
          .route-section { flex-direction:column; padding:40px 20px; }
          .route-right-gallery { justify-content:flex-start; overflow-x:auto; }
          .route-gallery-card { min-width:130px; height:220px; }
          .expenses-section-account { padding:30px 20px; }
          .expenses-grid-account { gap:14px; }
          .expense-card-account { width:calc(50% - 7px); min-width:0; }
          .important-info-section { flex-direction:column; padding:40px 20px; }
          .account-gallery-section { padding:40px 20px; }
          .gallery-masonry-grid-account { grid-template-columns:repeat(2,1fr); grid-template-rows:auto; grid-template-areas:none; }
          .tile-g1,.tile-g2,.tile-g3,.tile-g4,.tile-g5,.tile-g6,.tile-g7 { grid-area:auto; height:140px; }
          .reviews-section-account { padding:40px 20px; }
          .reviews-slider-container-account { flex-direction:column; }
          .review-card-account { min-width:100%; max-width:100%; }
          .booking-footer-container { flex-direction:column; padding:40px 20px; }
          .booking-left-banner { height:220px; }
          .booking-right-form-box { padding:20px 0; width:100%; }
        }
      `}</style>
 
      {/* BURGER DRAWER */}
      <div className={`drawer-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            <div className="drawer-logo-icon">
              <i className="fa-solid fa-parachute-box" style={{fontSize:'1.1rem',color:'#fff'}}></i>
            </div>
            <span className="drawer-logo-text">PERO TRAVEL</span>
          </div>
          <div className="drawer-close-btn" onClick={() => setMenuOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <nav className="drawer-nav">
          <div className={`drawer-nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => navigate('home')}>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
          <div className={`drawer-nav-item ${currentPage === 'excursions' ? 'active' : ''}`} onClick={() => navigate('excursions')}>
            <i className="fa-solid fa-map-pin"></i>
            <span>Excursions</span>
          </div>
          <div className={`drawer-nav-item ${currentPage === 'personal-account' ? 'active' : ''}`} onClick={() => navigate('personal-account')}>
            <i className="fa-solid fa-user-circle"></i>
            <span>Pero account</span>
          </div>
        </nav>
        <div className="drawer-contacts">
          <div className="drawer-contact-item"><i className="fa-brands fa-whatsapp"></i><span>+7 964 944 18 74</span></div>
          <div className="drawer-contact-item"><i className="fa-solid fa-phone"></i><span>+7 918 919 98 28</span></div>
          <div className="drawer-contact-item"><i className="fa-solid fa-paper-plane"></i><span>Telegram bot PeroTravel</span></div>
          <div className="drawer-contact-item" style={{marginTop:'8px'}}>
            <i className="fa-brands fa-vk" style={{color:'#ff5a5f'}}></i>
            <i className="fa-brands fa-instagram" style={{color:'#ff5a5f',marginLeft:'12px'}}></i>
            <i className="fa-brands fa-facebook" style={{color:'#ff5a5f',marginLeft:'12px'}}></i>
          </div>
        </div>
      </div>
 
      {/* NAVBAR */}
      <nav className={`navbar ${currentPage === 'home' ? 'transparent-home' : ''}`}>
        <div className="parachute-gif-box" onClick={() => navigate('home')}>
          <i className="fa-solid fa-parachute-box parachute-icon"></i>
          <span className="travel-logo-text">PERO Travel</span>
        </div>
        <div className="nav-links">
          <span className={currentPage === 'home' ? 'active-nav-link' : ''} onClick={() => navigate('home')}>Home</span>
          <span className={currentPage === 'excursions' ? 'active-nav-link' : ''} onClick={() => navigate('excursions')}>Excursions</span>
          <span className={currentPage === 'personal-account' ? 'active-nav-link' : ''} onClick={() => navigate('personal-account')}>Pero account</span>
        </div>
        <button className={`burger-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </nav>
 
      {/* HOME */}
      {currentPage === 'home' && (
        <>
          <section className="hero">
            {heroMedia.map((media, idx) => (
              media.type === "video" ? (
                <video key={idx} className={`video-layer ${active === idx ? 'active' : ''}`} src={media.url} autoPlay muted loop playsInline />
              ) : (
                <img key={idx} className={`video-layer ${active === idx ? 'active' : ''}`} src={media.url} alt={media.label} />
              )
            ))}
            <div className="overlay"></div>
            <div className="hero-content">
              <div className="main-title-box">
                <p className="travel-small">TRAVEL</p>
                <span className="together-text">together</span>
                <span className="with-text">with</span>
                <h1 className="pero-title">PERO TRAVEL</h1>
              </div>
              <button className="excursions-btn" onClick={() => navigate('excursions')}>
                For excursions <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="social-sidebar">
              <a href="#"><i className="fa-brands fa-vk"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
            <div className="thumb-wrapper">
              <div className="thumb-container">
                {heroMedia.map((media, idx) => (
                  <div key={idx} className={`thumb-card ${active === idx ? 'active' : ''}`} onClick={() => handleSelect(idx)}>
                    <img src={media.thumb} alt={media.label} />
                    <div className="video-badge">
                      <i className={media.type === "video" ? "fa-solid fa-play" : "fa-solid fa-camera"}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
 
          <section className="popular-section">
            <div className="pop-title-wrap">
              <h2 className="pop-title">Popular excursions</h2>
              <span className="see-all" onClick={() => navigate('excursions')}>See all</span>
            </div>
            <div className="grid-layout">
              {excursionCards.slice(visibleStartIndex, visibleStartIndex + cardsPerPage).map((card, i) => (
                <div key={i} className="exc-card">
                  <img src={card.img} className="exc-card-img" alt={card.title} />
                  <div className="exc-card-body">
                    <p className="exc-card-cat">{card.category}</p>
                    <h3 className="exc-card-name">{card.title}</h3>
                    <div className="exc-meta">
                      <span><i className="fa-regular fa-clock"></i> {card.duration}</span>
                      <span className="exc-star"><i className="fa-solid fa-star"></i> {card.rating}</span>
                      <span>({card.reviews} reviews)</span>
                    </div>
                    <div className="exc-card-footer">
                      <span className="exc-price">{card.price}</span>
                      <button className="read-more" onClick={() => navigate('personal-account')}>Read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-controls-container">
              <div className="arrow-buttons">
                <button className="arrow-btn" onClick={handlePrevExcursions}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="arrow-btn" onClick={handleNextExcursions}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="progress-timeline">
                <div className="progress-fill" style={{width:`${progressPercent}%`}}></div>
              </div>
            </div>
          </section>
 
          <section className="types-section">
            <h2 className="types-title">Types of excursions</h2>
            <div className="types-grid">
              <div className="type-item-card">
                <div className="type-icon-circle"><i className="fa-solid fa-bus"></i></div>
                <div className="type-name-info">
                  <h4>Bus tour</h4>
                  <p>A classic fully-guided sightseeing route option across majestic regional architectures, natural parks and beautiful local historic spots inside comfort urban mini-buses.</p>
                </div>
              </div>
              <div className="type-item-card">
                <div className="type-icon-circle"><i className="fa-solid fa-mountain-sun"></i></div>
                <div className="type-name-info">
                  <h4>Jeep Safari</h4>
                  <p>Extreme and saturated cross-country off-road journeys on massive 4x4 open SUVs through dynamic hidden mountain tracks, deep river canyons and wild dense forest arrays.</p>
                </div>
              </div>
              <div className="type-item-card">
                <div className="type-icon-circle"><i className="fa-solid fa-ship"></i></div>
                <div className="type-name-info">
                  <h4>Yachting cruise</h4>
                  <p>Incredible regular and private open-sea luxury boat navigation trips including open-water deep swimming, active wild dolphin watching and unforgettable romantic sunset views.</p>
                </div>
              </div>
              <div className="type-item-card">
                <div className="type-icon-circle"><i className="fa-solid fa-person-hiking"></i></div>
                <div className="type-name-info">
                  <h4>Canyon trekking</h4>
                  <p>Calm walking pedestrian recreation trails down beautiful ecologically clean preservation territories, narrow stone bags, healing clean air forests and active roaring waterfalls.</p>
                </div>
              </div>
            </div>
            <div className="types-footer-action">
              <p className="types-footer-text">Choose your dream adventure direction or explore all available regional paths together with professional native instructors right now!</p>
              <button className="action-teal-btn" onClick={() => navigate('excursions')}>Choose an excursion</button>
            </div>
          </section>
 
          <section className="about-section">
            <div className="about-container">
              <img className="about-main-img" src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1000&auto=format&fit=crop" alt="Abkhazia lake" />
              <div className="about-text-box">
                <h2 className="about-title">About us</h2>
                <p className="about-desc">We are standard specialized dynamic structural incoming operator center providing highest professional category level travel experience since 2012. Our main prioritizing focus keys are absolute security warranty, comfort, individual authentic adaptation style and native local emotional exploration discovery.</p>
              </div>
            </div>
          </section>
 
          <section className="gallery-section">
            <h2 className="gallery-section-title">Photo gallery</h2>
            <div className="gallery-container">
              {galleryImages.map((img) => (
                <div key={img.id} className={`gallery-grid-item ${img.className}`}>
                  <img src={img.src} alt={img.alt} onClick={() => setSelectedImg(img.src)} />
                </div>
              ))}
            </div>
          </section>
 
          <section className="reviews-section">
            <div className="reviews-header">
              <h2 className="reviews-title">Reviews</h2>
              <span className="see-all">See all</span>
            </div>
            <div className="reviews-slider-container">
              {reviewsData.slice(reviewStartIndex, reviewStartIndex + reviewsPerPage).map((rev, i) => (
                <div key={i} className="review-card">
                  <img src={rev.avatar} className="review-avatar" alt={rev.name} />
                  <div className="review-content">
                    <h4 className="review-user-name">{rev.name}</h4>
                    <p className="review-user-age">{rev.age}</p>
                    <p className="review-text">"{rev.text}"</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-controls-container">
              <div className="arrow-buttons">
                <button className="arrow-btn" onClick={handlePrevReviews}><i className="fa-solid fa-arrow-left"></i></button>
                <button className="arrow-btn" onClick={handleNextReviews}><i className="fa-solid fa-arrow-right"></i></button>
              </div>
              <div className="progress-timeline">
                <div className="progress-fill" style={{width:`${reviewProgressPercent}%`}}></div>
              </div>
            </div>
          </section>
 
          <section className="questions-section">
            <div className="questions-blur-overlay">
              <h2 className="questions-title">Any questions?</h2>
              <p className="questions-subtitle">Leave a request and we will call you back</p>
              <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} />
                  <label>Name</label>
                </div>
                <div className="input-group">
                  <input type="tel" name="telephone" required value={formData.telephone} onChange={handleInputChange} />
                  <label>Telephone</label>
                </div>
                <div className="input-group">
                  <input type="email" name="mail" required value={formData.mail} onChange={handleInputChange} />
                  <label>Mail</label>
                </div>
                <button type="submit" className="submit-form-btn">Send</button>
              </form>
            </div>
          </section>
 
          <SharedFooter />
        </>
      )}
 
      {/* EXCURSIONS */}
      {currentPage === 'excursions' && (
        <>
          <div className="exc-banner">
            <h1>Excursions</h1>
          </div>
          <div className="search-section">
            <div className="search-bar">
              <div className="search-input-group">
                <i className="fa-solid fa-location-dot"></i>
                <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
                  {placesOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div className="search-input-group">
                <i className="fa-regular fa-calendar"></i>
                <input type="text" placeholder="Choosing a date" />
              </div>
              <div className="search-input-group">
                <i className="fa-solid fa-user-group"></i>
                <select value={activePeople} onChange={(e) => setActivePeople(e.target.value)}>
                  {peopleOptions.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
                </select>
              </div>
              <button className="search-btn">Find</button>
            </div>
          </div>
          <div className="main-filter-content">
            <div className="sidebar-filters">
              <h3 className="filter-main-title">Filters</h3>
              <div className="filter-group">
                <div className="filter-group-header" onClick={() => toggleGroup('price')}>
                  Price <span><i className={`fa-solid ${openGroups.price ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                </div>
                {openGroups.price && (
                  <div className="price-inputs">
                    <input type="text" placeholder="From 500" className="price-field" />
                    <input type="text" placeholder="Up to 3000" className="price-field" />
                  </div>
                )}
              </div>
              <div className="filter-group">
                <div className="filter-group-header" onClick={() => toggleGroup('people')}>
                  Number of people <span><i className={`fa-solid ${openGroups.people ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                </div>
                {openGroups.people && (
                  <div className="people-tags">
                    {peopleOptions.map((opt, i) => (
                      <span key={i} className={`filter-tag ${activePeople === opt ? 'active' : ''}`} onClick={() => setActivePeople(opt)}>{opt}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="filter-group">
                <div className="filter-group-header" onClick={() => toggleGroup('place')}>
                  Place <span><i className={`fa-solid ${openGroups.place ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i></span>
                </div>
                {openGroups.place && (
                  <div className="radio-list">
                    {placesOptions.map((opt, i) => (
                      <label key={i} className="radio-label">
                        <input type="radio" name="place-rad" checked={selectedPlace === opt} onChange={() => setSelectedPlace(opt)} />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="excursions-list-pane">
              <h3 className="list-section-title">Our excursions</h3>
              {fullExcursionsList.map((item) => (
                <div key={item.id} className="big-exc-card">
                  <div className="big-card-img-box">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="big-card-body">
                    <div>
                      <p className="big-card-cat">{item.type}</p>
                      <h2 className="big-card-title">{item.title}</h2>
                      <div className="big-card-row">
                        <span><i className="fa-regular fa-clock"></i> {item.duration}</span>
                        <span style={{color:'#f7c948'}}><i className="fa-solid fa-star"></i> 5.0</span>
                      </div>
                      <p className="big-card-desc">{item.text}</p>
                    </div>
                    <div className="big-card-bottom">
                      <div style={{display:'flex',gap:'30px'}}>
                        <div className="price-stack"><span>Adult:</span><strong>{item.adultPrice}</strong></div>
                        <div className="price-stack"><span>Children's:</span><strong>{item.childPrice}</strong></div>
                      </div>
                      <button className="read-more" onClick={() => navigate('personal-account')}>More details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SharedFooter />
        </>
      )}
 
      {/* PERSONAL ACCOUNT */}
      {currentPage === 'personal-account' && (
        <>
          <div className="detail-hero">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1500&q=80" className="detail-hero-img" alt="Abkhazia" />
            <div className="overlay"></div>
            <div className="detail-hero-content">
              <p className="detail-tag">Bus tour</p>
              <h1 className="detail-main-title">The Golden Ring of Abkhazia<br />(From Adler)</h1>
              <button className="excursions-btn" style={{background:'linear-gradient(90deg,#0099e5,#00ccbc)'}} onClick={() => navigate('excursions')}>To other excursions →</button>
            </div>
          </div>
 
          <section className="info-cards-section">
            <div className="info-cards-wrapper">
              <div className="desc-block">
                <h2>Tour description</h2>
                <p>A journey through the "Golden Ring of Abkhazia" awaits you in a Mercedes Sprinter (20 seats). A professional guide will accompany you along the route. Pick-up is from your hotel or the nearest bus stop. Border crossing is direct.</p>
              </div>
              <div className="price-cards-box">
                <div className="white-price-card">
                  <div className="card-amount-row"><i className="fa-solid fa-coins"></i> 1,618 ₽</div>
                  <span className="card-label-text">Adult ticket</span>
                </div>
                <div className="white-price-card">
                  <div className="card-amount-row"><i className="fa-solid fa-coins"></i> 1,412 ₽</div>
                  <span className="card-label-text">Child ticket</span>
                </div>
                <div className="white-price-card">
                  <div className="time-card-text"><i className="fa-regular fa-clock"></i> 12 o'clock</div>
                </div>
              </div>
            </div>
          </section>
 
          <section className="calendar-section">
            <div className="calendar-left-banner">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000&auto=format&fit=crop" alt="Lake" />
            </div>
            <div className="calendar-right-content">
              <div className="calendar-card">
                <div className="calendar-header">
                  <button className="cal-arrow"><i className="fa-solid fa-angles-left"></i></button>
                  <h3>June 2026</h3>
                  <button className="cal-arrow"><i className="fa-solid fa-angles-right"></i></button>
                </div>
                <div className="weekdays-grid">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <span key={d} className="weekday-label">{d}</span>)}
                </div>
                <div className="days-grid">
                  {juneDays.map((day) => (
                    <span key={day} className={`day-cell ${selectedDayAccount === day ? 'selected' : ''}`} onClick={() => setSelectedDayAccount(day)}>{day}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
 
          <section className="route-section">
            <div className="route-left-info">
              <h2>Route description</h2>
              <ul className="route-list">
                {routePoints.map((text, idx) => <li key={idx} className="route-item">{text}</li>)}
              </ul>
              <p className="route-choice-title">Next, your choice:</p>
              <ul className="route-list">
                {choicePoints.map((text, idx) => <li key={idx} className="route-item">{text}</li>)}
              </ul>
            </div>
            <div className="route-right-gallery">
              <div className="route-gallery-card fade-card"><img src={routeImages[0]} alt="Gagra" /></div>
              <div className="route-gallery-card"><img src={routeImages[1]} alt="Ritsa" /></div>
              <div className="route-gallery-card"><img src={routeImages[2]} alt="Waterfall" /></div>
            </div>
          </section>
 
          <section className="expenses-section-account">
            <h2>Additional expenses (optional)</h2>
            <div className="expenses-grid-account">
              {additionalExpenses.map((item, idx) => (
                <div key={idx} className="expense-card-account">
                  <div className="expense-price-account"><i className="fa-solid fa-coins" style={{fontSize:'1.1rem'}}></i> {item.price}</div>
                  <div className="expense-name-account">{item.name}</div>
                </div>
              ))}
            </div>
          </section>
 
          <section className="important-info-section">
            <div className="info-left-rules">
              <h2>Important information</h2>
              <p className="rules-sub">When crossing the border (Russia-Abkhazia) you must have:</p>
              <div className="rule-row">
                <div className="rule-icon-box"><i className="fa-regular fa-id-card"></i></div>
                <div className="rule-text-content"><h4>Passport of a citizen of the Russian Federation</h4></div>
              </div>
              <div className="rule-row">
                <div className="rule-icon-box"><i className="fa-regular fa-id-card"></i></div>
                <div className="rule-text-content">
                  <h4>Citizens under 14 years of age require a birth certificate.</h4>
                  <p>Minor children cross the border accompanied by their parents...</p>
                </div>
              </div>
            </div>
            <div className="info-right-alerts">
              <div className="alert-block"><p>Entry into Abkhazia is restricted for foreign citizens...</p></div>
              <div className="alert-block"><p>When returning from Abkhazia to Russia, you do not need to take a PCR test...</p></div>
            </div>
          </section>
 
          <section className="account-gallery-section">
            <div className="gallery-header-row-account">
              <h2>Gallery</h2>
              <span className="see-all-link-account">See all</span>
            </div>
            <div className="gallery-masonry-grid-account">
              <div className="gallery-tile-account tile-g1"><img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop" alt="Nature 1" /></div>
              <div className="gallery-tile-account tile-g2"><img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=600&auto=format&fit=crop" alt="Waterfall" /></div>
              <div className="gallery-tile-account tile-g3"><img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600&auto=format&fit=crop" alt="Quad bike" /></div>
              <div className="gallery-tile-account tile-g4"><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" alt="Sunset" /></div>
              <div className="gallery-tile-account tile-g5"><img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop" alt="Horse" /></div>
              <div className="gallery-tile-account tile-g6"><img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop" alt="Cave" /></div>
              <div className="gallery-tile-account tile-g7"><img src="https://images.unsplash.com/photo-1472214222541-d510753a4707?q=80&w=600&auto=format&fit=crop" alt="Town" /></div>
            </div>
          </section>
 
          <section className="reviews-section-account">
            <div className="gallery-header-row-account" style={{marginBottom:'30px'}}>
              <h2>Reviews</h2>
              <span className="see-all-link-account">See all</span>
            </div>
            <div className="reviews-slider-container-account">
              {[0,1,2].map((offset) => {
                const itemIdx = (currentReviewIdxAccount + offset) % reviewItemsAccount.length;
                const review = reviewItemsAccount[itemIdx];
                return (
                  <div key={review.id} className="review-card-account">
                    <img src={review.img} className="review-avatar-account" alt={review.name} />
                    <div className="review-info-box-account">
                      <span className="review-author-name-account">{review.name}, {review.age}</span>
                      <p className="review-text-p-account">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="reviews-nav-row-account">
              <div className="reviews-arrows-account">
                <i className="fa-solid fa-chevron-left" onClick={handlePrevReviewAccount}></i>
                <i className="fa-solid fa-chevron-right" onClick={handleNextReviewAccount}></i>
              </div>
              <div className="reviews-progress-track-account">
                <div className="reviews-progress-bar-account" style={{width:`${(100/reviewItemsAccount.length)}%`,left:`${(100/reviewItemsAccount.length)*currentReviewIdxAccount}%`}}></div>
              </div>
            </div>
          </section>
 
          <section className="booking-footer-container">
            <div className="booking-left-banner">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop" alt="Mountain Lake View" />
            </div>
            <div className="booking-right-form-box">
              <h2>Book a tour</h2>
              <div className="form-fields-stack">
                <div className="form-input-wrapper">
                  <select value={bookingDestination} onChange={(e) => setBookingDestination(e.target.value)}>
                    <option value="Abkhazia">Абхазия</option>
                    <option value="Sochi">Сочи</option>
                  </select>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="form-input-wrapper">
                  <input type="text" placeholder="ДД.ММ.ГГГГ" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
                  <i className="fa-regular fa-calendar"></i>
                </div>
                <div className="form-input-wrapper">
                  <input type="number" value={bookingPeopleCount} onChange={(e) => setBookingPeopleCount(e.target.value)} />
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="form-action-row">
                  <button className="btn-book-now">Book now</button>
                  <div className="btn-heart-fav"><i className="fa-regular fa-heart"></i></div>
                </div>
              </div>
            </div>
          </section>
 
          <div className="footer-divider-line"></div>
          <footer className="footer-brand-row">
            <div className="footer-logo-side">
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <i className="fa-solid fa-parachute-box" style={{fontSize:'2.2rem',color:'#ff5a5f'}}></i>
                <span style={{fontSize:'1.6rem',fontWeight:900,color:'#111'}}>PERO TRAVEL</span>
              </div>
            </div>
            <div className="footer-nav-side">
              <span onClick={() => navigate('home')}>Home</span>
              <span onClick={() => navigate('excursions')}>Excursions</span>
              <span onClick={() => navigate('personal-account')}>Pero account</span>
            </div>
            <div className="footer-contacts-side">
              <div><i className="fa-brands fa-whatsapp"></i> +7 964 944 18 74</div>
              <div><i className="fa-solid fa-phone"></i> +7 918 919 58 28</div>
              <div><i className="fa-solid fa-paper-plane"></i> Telegram bot PeroTravel</div>
            </div>
            <div className="footer-social-side">
              <span style={{fontSize:'0.85rem',fontWeight:600,color:'#a0aec0'}}>office@perotravel.ru</span>
              <div className="social-icons-wrapper">
                <i className="fa-brands fa-vk"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
          </footer>
        </>
      )}
 
      {selectedImg && (
        <div className="lightbox-modal" onClick={() => setSelectedImg(null)}>
          <span className="lightbox-close" onClick={() => setSelectedImg(null)}>&times;</span>
          <img className="lightbox-content" src={selectedImg} alt="Enlarged view" />
        </div>
      )}
    </>
  );
}