"use client";
import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import omniaLogo from "@/assets/espacio_omnia.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instagram from "@/assets/instagram.webp";
import tiktok from "@/assets/tiktok.webp";
import whatsapp from "@/assets/whatsapp.webp";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const [currentYear, setCurrentYear] = useState(2024); // Static fallback
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      // Get the navbar element to calculate its actual height
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 80; // Fallback height

      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect + window.pageYOffset - navbarHeight;

      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      });
    }
  };
// ... (rest of the code is unchanged until lines with <a href="/privacy-policy">)

// ... (I need to replace the content correctly)
// I will just replace the top import part and handleNavClick function first.

  useGSAP(
    () => {
      // Refresh ScrollTrigger after a short delay to account for dynamic content like the calendar
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);

      // Animation for the main container
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%", // More sensitive start point
          toggleActions: "play none none reverse",
        },
      });

      // Staggered section animations
      gsap.from(".footer-section", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      id="contacto"
      ref={footerRef}
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "#ffffff",
        padding: "4rem 0 2rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        // Initial visibility for fallback and SEO, GSAP will take over
        visibility: "visible",
      }}
    >

      <div className="footer-container">
        {/* Company Information */}
        <div className="footer-section">
          <div className="footer-logo">
            <img src={omniaLogo} alt="Omnia" width={150} />
          </div>
          <p className="footer-text">
            Descubre el poder de la transformación personal a través de nuestros
            servicios especializados en bienestar, masajes y terapias
            holísticas.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              marginTop: "1rem",
          }}
          >
            <a
              style={{ cursor: "pointer" }}
              href="https://wa.me/+523333906945"
              target="_blank"
            >
              <img
                src={whatsapp}
                alt="Whatsapp"
                width={24}
                height={24}
                style={{ height: "24px" }}
              />
            </a>
            <a
              style={{ cursor: "pointer" }}
              href="https://www.instagram.com/omniaespacio_"
              target="_blank"
            >
              <img
                src={instagram}
                alt="Instagram"
                width={24}
                height={24}
                style={{ height: "24px" }}
              />
            </a>
            <a
              style={{ cursor: "pointer" }}
              href="https://www.tiktok.com/@omniaespacio"
              target="_blank"
            >
              <img
                src={tiktok}
                alt="Tiktok"
                width={24}
                height={24}
                style={{ height: "24px" }}
              />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <div className="footer-title">Nuestros Servicios</div>
          <div className="footer-list">
            <div className="footer-list-item">
              <a 
                className="footer-link" 
                href="#masajes"
                onClick={(e) => handleNavClick(e, "masajes")}
              >
                Masajes Terapéuticos
              </a>
            </div>
            <div className="footer-list-item">
              <a 
                className="footer-link" 
                href="#terapias"
                onClick={(e) => handleNavClick(e, "terapias")}
              >
                Terapias Holísticas
              </a>
            </div>
            <div className="footer-list-item">
              <a 
                className="footer-link" 
                href="#bienestar"
                onClick={(e) => handleNavClick(e, "bienestar")}
              >
                Bienestar Integral
              </a>
            </div>
            <div className="footer-list-item">
              <a 
                className="footer-link" 
                href="#spa"
                onClick={(e) => handleNavClick(e, "spa")}
              >
                Spa & Relajación
              </a>
            </div>
            <div className="footer-list-item">
              <a 
                className="footer-link" 
                href="#renta"
                onClick={(e) => handleNavClick(e, "renta")}
              >
                Renta de espacios
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <div className="footer-title">Enlaces Rápidos</div>
          <div className="footer-list">
            <div className="footer-list-item">
              <a
                className="footer-link"
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Inicio
              </a>
            </div>
            <div className="footer-list-item">
              <a
                className="footer-link"
                href="#conocenos"
                onClick={(e) => handleNavClick(e, "conocenos")}
              >
                Conocenos
              </a>
            </div>
            <div className="footer-list-item">
              <a
                className="footer-link"
                href="#servicios"
                onClick={(e) => handleNavClick(e, "servicios")}
              >
                Servicios
              </a>
            </div>
            <div className="footer-list-item">
              <a
                className="footer-link"
                href="#espacios"
                onClick={(e) => handleNavClick(e, "espacios")}
              >
                Espacios
              </a>
            </div>
            <div className="footer-list-item">
              <a
                className="footer-link"
                href="#reservas"
                onClick={(e) => handleNavClick(e, "reservas")}
              >
                Reservas
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <div className="footer-title">Información de Contacto</div>
          <div className="footer-list">
            <div className="footer-list-item">
              <p className="footer-text">
                Calle Prisciliano Sanchez #762
                <br />
                Col. Americana, 44160
              </p>
            </div>
            <div className="footer-list-item">
              <a className="footer-link" href="https://wa.me/+523333906945">
                +52 (33) 33906945
              </a>
            </div>
            <div className="footer-list-item">
              <p className="footer-text">
                Lun - Sáb: 9:00 AM - 8:00 PM
                <br />
                Domingo: Cerrado
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom footer-section">
        <div className="footer-copyright">
          © {currentYear} Omnia. Todos los derechos reservados.
        </div>
        <div
          className="footer-list"
          style={{ display: "flex", flexDirection: "row", gap: "2rem" }}
        >
          <div className="footer-list-item">
            <Link to="/privacy-policy" className="footer-link">
              Política de Privacidad
            </Link>
          </div>
          <div className="footer-list-item">
            <Link to="/terms-of-service" className="footer-link">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
